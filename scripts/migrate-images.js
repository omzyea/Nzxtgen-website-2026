const fs = require('fs');
const path = require('path');

const SRC_ASSETS = path.join(__dirname, '..', 'src', 'assets');
const PUBLIC_IMAGES = path.join(__dirname, '..', 'public', 'images');
const SRC_DIR = path.join(__dirname, '..', 'src');

// Image extensions to process
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico'];

// Step 1: Copy all images from src/assets to public/images
function copyImages() {
  console.log('\n📁 Step 1: Copying images to public/images...\n');

  // Create public/images directory
  if (!fs.existsSync(PUBLIC_IMAGES)) {
    fs.mkdirSync(PUBLIC_IMAGES, { recursive: true });
  }

  let copiedCount = 0;

  function copyRecursive(srcDir, destDir, relativePath = '') {
    const items = fs.readdirSync(srcDir);

    for (const item of items) {
      const srcPath = path.join(srcDir, item);
      const destPath = path.join(destDir, item);
      const stat = fs.statSync(srcPath);

      if (stat.isDirectory()) {
        // Skip 'old' folders - they contain deprecated images
        if (item.toLowerCase() === 'old') {
          console.log(`   ⏭️  Skipping old folder: ${relativePath}/${item}`);
          continue;
        }
        if (!fs.existsSync(destPath)) {
          fs.mkdirSync(destPath, { recursive: true });
        }
        copyRecursive(srcPath, destPath, `${relativePath}/${item}`);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          fs.copyFileSync(srcPath, destPath);
          copiedCount++;
          console.log(`   ✅ ${relativePath}/${item}`);
        }
      }
    }
  }

  copyRecursive(SRC_ASSETS, PUBLIC_IMAGES);
  console.log(`\n   📊 Copied ${copiedCount} images`);
  return copiedCount;
}

// Step 2: Build a mapping of image imports to public paths
function buildImageMapping() {
  console.log('\n🗺️  Step 2: Building image path mapping...\n');

  const mapping = {};

  function scanDirectory(dir, publicPath = '/images') {
    if (!fs.existsSync(dir)) return;

    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scanDirectory(fullPath, `${publicPath}/${item}`);
      } else {
        const ext = path.extname(item).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          // Map various possible import paths to the public path
          const relativeSrcPath = path.relative(SRC_ASSETS, fullPath.replace(PUBLIC_IMAGES, SRC_ASSETS));
          mapping[item] = `${publicPath}/${item}`;
          mapping[relativeSrcPath] = `${publicPath}/${item}`;
        }
      }
    }
  }

  scanDirectory(PUBLIC_IMAGES);
  console.log(`   📊 Mapped ${Object.keys(mapping).length} image paths`);
  return mapping;
}

// Step 3: Update JavaScript/JSX files
function updateJSFiles() {
  console.log('\n📝 Step 3: Updating JavaScript/JSX files...\n');

  let updatedFiles = 0;
  let updatedImports = 0;

  function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileUpdated = false;

    // Find all image imports
    // Pattern: import varName from "path/to/image.ext"
    const importRegex = /import\s+(\w+)\s+from\s+["']([^"']*\/assets\/[^"']*\.(png|jpg|jpeg|webp|gif|svg|PNG|JPG|JPEG|WEBP|GIF|SVG))["'];?\n?/g;

    const imports = [];
    let match;

    while ((match = importRegex.exec(content)) !== null) {
      imports.push({
        fullMatch: match[0],
        varName: match[1],
        importPath: match[2],
        extension: match[3]
      });
    }

    if (imports.length === 0) return false;

    // Process each import
    for (const imp of imports) {
      // Extract the relative path from assets
      const assetsIndex = imp.importPath.indexOf('assets/');
      if (assetsIndex === -1) continue;

      let relativePath = imp.importPath.substring(assetsIndex + 7); // after 'assets/'

      // Skip old folder images
      if (relativePath.toLowerCase().includes('/old/')) {
        console.log(`   ⏭️  Skipping old folder image: ${imp.varName} in ${path.basename(filePath)}`);
        continue;
      }

      // Build the public path
      const publicPath = `/images/${relativePath}`;

      // Remove the import statement
      content = content.replace(imp.fullMatch, '');

      // Replace all usages of the variable with the string path
      // Handle various usage patterns:
      // src={varName} -> src="/images/path"
      // url(${varName}) -> url("/images/path")
      // backgroundImage: `url(${varName})` -> backgroundImage: `url("/images/path")`
      // style={{ backgroundImage: `url(${varName})` }}

      // Pattern 1: src={varName}
      const srcRegex = new RegExp(`src=\\{${imp.varName}\\}`, 'g');
      content = content.replace(srcRegex, `src="${publicPath}"`);

      // Pattern 2: url(${varName})
      const urlRegex = new RegExp(`url\\(\\$\\{${imp.varName}\\}\\)`, 'g');
      content = content.replace(urlRegex, `url("${publicPath}")`);

      // Pattern 3: backgroundImage: `url(${varName})`
      const bgImageRegex = new RegExp(`\`url\\(\\$\\{${imp.varName}\\}\\)\``, 'g');
      content = content.replace(bgImageRegex, `"url('${publicPath}')"`);

      // Pattern 4: Just the variable used in objects/arrays (like { image: varName })
      const objectValueRegex = new RegExp(`:\\s*${imp.varName}([,\\s\\}\\]])`, 'g');
      content = content.replace(objectValueRegex, `: "${publicPath}"$1`);

      // Pattern 5: Array element [varName, ...]
      const arrayElementRegex = new RegExp(`\\[${imp.varName}([,\\]])`, 'g');
      content = content.replace(arrayElementRegex, `["${publicPath}"$1`);

      // Pattern 6: , varName] or , varName,
      const arrayMiddleRegex = new RegExp(`,\\s*${imp.varName}([,\\]])`, 'g');
      content = content.replace(arrayMiddleRegex, `, "${publicPath}"$1`);

      updatedImports++;
      fileUpdated = true;
      console.log(`   ✅ ${imp.varName} -> ${publicPath} (${path.basename(filePath)})`);
    }

    // Clean up any double blank lines created by removing imports
    content = content.replace(/\n{3,}/g, '\n\n');

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      updatedFiles++;
      return true;
    }

    return false;
  }

  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (item !== 'node_modules' && item !== 'build' && item !== 'assets') {
          scanDirectory(fullPath);
        }
      } else {
        const ext = path.extname(item).toLowerCase();
        if (ext === '.js' || ext === '.jsx' || ext === '.tsx' || ext === '.ts') {
          processFile(fullPath);
        }
      }
    }
  }

  scanDirectory(SRC_DIR);
  console.log(`\n   📊 Updated ${updatedFiles} files with ${updatedImports} import changes`);
  return { updatedFiles, updatedImports };
}

// Step 4: Update CSS files
function updateCSSFiles() {
  console.log('\n🎨 Step 4: Updating CSS files...\n');

  let updatedFiles = 0;
  let updatedUrls = 0;

  function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Pattern: url("../assets/path/to/image.ext") or url('../assets/path/to/image.ext')
    const urlRegex = /url\(["']?\.\.\/assets\/([^"')]+)["']?\)/g;

    content = content.replace(urlRegex, (match, relativePath) => {
      // Skip old folder images
      if (relativePath.toLowerCase().includes('/old/')) {
        console.log(`   ⏭️  Skipping old folder: ${relativePath} in ${path.basename(filePath)}`);
        return match;
      }

      const publicPath = `/images/${relativePath}`;
      updatedUrls++;
      console.log(`   ✅ ${relativePath} -> ${publicPath} (${path.basename(filePath)})`);
      return `url("${publicPath}")`;
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      updatedFiles++;
      return true;
    }

    return false;
  }

  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        if (item !== 'node_modules' && item !== 'build' && item !== 'assets') {
          scanDirectory(fullPath);
        }
      } else {
        const ext = path.extname(item).toLowerCase();
        if (ext === '.css') {
          processFile(fullPath);
        }
      }
    }
  }

  scanDirectory(SRC_DIR);
  console.log(`\n   📊 Updated ${updatedFiles} CSS files with ${updatedUrls} URL changes`);
  return { updatedFiles, updatedUrls };
}

// Main execution
console.log('🚀 Starting Image Migration Script\n');
console.log('=' .repeat(50));

try {
  const copiedImages = copyImages();
  buildImageMapping();
  const jsResults = updateJSFiles();
  const cssResults = updateCSSFiles();

  console.log('\n' + '='.repeat(50));
  console.log('\n✅ Migration Complete!\n');
  console.log('Summary:');
  console.log(`   📁 Images copied: ${copiedImages}`);
  console.log(`   📝 JS/JSX files updated: ${jsResults.updatedFiles}`);
  console.log(`   🔗 Import statements converted: ${jsResults.updatedImports}`);
  console.log(`   🎨 CSS files updated: ${cssResults.updatedFiles}`);
  console.log(`   🔗 CSS URLs converted: ${cssResults.updatedUrls}`);
  console.log('\n⚠️  Note: The src/assets folder still exists. You can delete it after testing.');
  console.log('⚠️  Note: Images in "old" subfolders were skipped - delete them manually if unused.');

} catch (error) {
  console.error('\n❌ Migration failed:', error.message);
  console.error(error.stack);
  process.exit(1);
}
