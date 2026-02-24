const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');

// Routes to pre-render (excluding admin and dynamic routes)
const routes = [
  // Core pages
  '/',
  '/about-us',
  '/contact-us',
  '/our-signature-services',
  '/free-quote',
  '/privacy-policy',
  '/terms-and-conditions',
  '/areas-we-service',
  '/switchboard-upgrade',
  
  // Service directories
  '/services',
  '/suburbs',
  
  // Main service pages
  '/smart-home',
  '/smart-home/more-info',
  '/services/electrical-services',
  '/services/power-points-electrical-upgrades',
  '/services/security-systems',
  '/services/data-networking',
  '/services/entertainment-technology',
  '/lighting-installation',

  // Builders & Contracting pages
  '/builders-contracting',
  '/builders-contracting/residential-electrical',
  '/builders-contracting/commercial-industrial-electrical',
  '/builders-contracting/new-builds-renovations',
  '/builders-contracting/compliance-licence',
  
  // Quick Links / Emergency services
  '/services/emergency-electrician',
  '/services/electrical-fault-finding-repairs',
  '/services/ev-charger-installation',
  '/smoke-alarms-electrical-safety-checks',
  
  // Suburb/City pages (electrician in specific areas)
  '/areas-we-service/electrician-canterbury',
  '/areas-we-service/electrician-bankstown',
  '/areas-we-service/electrician-earlwood',
  '/areas-we-service/electrician-panania',
  '/areas-we-service/electrician-revesby',
  '/areas-we-service/electrician-strathfield',
  '/areas-we-service/electrician-condell-park',
  '/areas-we-service/electrician-padstow'
];

const BUILD_DIR = path.join(__dirname, '..', 'build');
const PORT = 5555;
const PRODUCTION_URL = 'https://nzxtgen.com.au';

let server;

async function startServer() {
  return new Promise((resolve, reject) => {
    console.log('Starting local server...');
    
    server = http.createServer((request, response) => {
      const parsedUrl = url.parse(request.url);
      let filePath = path.join(BUILD_DIR, parsedUrl.pathname === '/' ? 'index.html' : parsedUrl.pathname);
      
      // Security: prevent directory traversal
      if (!filePath.startsWith(BUILD_DIR)) {
        response.writeHead(403);
        response.end('Forbidden');
        return;
      }
      
      // If file doesn't exist and it's a route, serve index.html (SPA routing)
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(BUILD_DIR, 'index.html');
      }
      
      fs.readFile(filePath, (err, data) => {
        if (err) {
          response.writeHead(404);
          response.end('Not found');
          return;
        }
        
        const ext = path.extname(filePath).toLowerCase();
        const contentTypes = {
          '.html': 'text/html',
          '.js': 'application/javascript',
          '.css': 'text/css',
          '.json': 'application/json',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.gif': 'image/gif',
          '.svg': 'image/svg+xml',
          '.ico': 'image/x-icon'
        };
        
        response.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
        response.end(data);
      });
    });

    server.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
      // Wait a bit for server to be fully ready
      setTimeout(resolve, 2000);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is in use, trying alternative approach...`);
        resolve(); // Continue anyway
      } else {
        reject(error);
      }
    });
  });
}

// Helper function to delay (replacement for deprecated waitForTimeout)
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function stopServer() {
  if (server) {
    return new Promise((resolve) => {
      server.close(() => {
        console.log('Server stopped');
        resolve();
      });
    });
  }
}

// Test if server is ready
async function waitForServerReady(maxAttempts = 10) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await new Promise((resolve, reject) => {
        const req = http.get(`http://localhost:${PORT}`, (res) => {
          resolve(true);
        });
        req.on('error', () => reject());
        req.setTimeout(1000, () => {
          req.destroy();
          reject();
        });
      });
      return true;
    } catch (e) {
      // Server not ready yet
    }
    await delay(500);
  }
  return false;
}

async function prerender() {
  console.log('Starting pre-rendering process...');

  // Check if build directory exists
  if (!fs.existsSync(BUILD_DIR)) {
    console.error('Build directory not found. Please run "npm run build" first.');
    process.exit(1);
  }

  // IMPORTANT: Save the original template BEFORE any modifications
  const originalTemplatePath = path.join(BUILD_DIR, 'index.html');
  const originalTemplate = fs.readFileSync(originalTemplatePath, 'utf8');
  console.log('Saved original template for use across all pages');

  let browser;
  try {
    // Start local server
    await startServer();
    
    // Wait for server to be ready
    console.log('Waiting for server to be ready...');
    const serverReady = await waitForServerReady();
    if (!serverReady) {
      console.warn('Server may not be fully ready, continuing anyway...');
    }

    // Launch browser
    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Set longer timeout for navigation
    page.setDefaultNavigationTimeout(60000);
    page.setDefaultTimeout(60000);

    // Pre-render each route
    for (const route of routes) {
      try {
        console.log(`Pre-rendering: ${route}`);
        const url = `http://localhost:${PORT}${route}`;
        
        // Navigate to page
        await page.goto(url, {
          waitUntil: 'domcontentloaded',
          timeout: 60000
        });
        
        // Wait a bit for JavaScript to execute and content to render
        await delay(3000);

        // Wait for React to hydrate and content to be visible
        try {
          await page.waitForSelector('h1, h2, p', { timeout: 10000 });
        } catch (e) {
          console.warn(`Warning: No content selectors found for ${route}, continuing anyway...`);
        }

        // Wait for any lazy-loaded images or content
        await page.evaluate(() => {
          return new Promise((resolve) => {
            // Wait for images to load
            const images = Array.from(document.images);
            if (images.length === 0) {
              resolve();
              return;
            }
            
            let loadedCount = 0;
            images.forEach((img) => {
              if (img.complete) {
                loadedCount++;
              } else {
                img.onload = () => {
                  loadedCount++;
                  if (loadedCount === images.length) resolve();
                };
                img.onerror = () => {
                  loadedCount++;
                  if (loadedCount === images.length) resolve();
                };
              }
            });
            
            if (loadedCount === images.length) resolve();
            
            // Timeout after 3 seconds
            setTimeout(resolve, 3000);
          });
        });

        // Wait a bit more for any animations or transitions
        await delay(2000);

        // Determine file path
        let filePath;
        if (route === '/') {
          filePath = path.join(BUILD_DIR, 'index.html');
        } else {
          // Create directory for route
          const routeDir = path.join(BUILD_DIR, route);
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          filePath = path.join(routeDir, 'index.html');
        }
        
        // Extract ONLY the root div content (not entire body)
        const rootContent = await page.evaluate(() => {
          const rootElement = document.getElementById('root');
          return rootElement ? rootElement.innerHTML : '';
        });

        // Extract head content (for meta tags from react-helmet)
        const headContent = await page.evaluate(() => {
          const head = document.head;
          const metaTags = Array.from(head.querySelectorAll('meta[data-rh="true"], title, link[rel="canonical"]'));
          return metaTags.map(tag => tag.outerHTML).join('\n    ');
        });

        // ALWAYS use the original template (not the potentially modified index.html)
        let templateHtml = originalTemplate;

        // Replace the empty root div with pre-rendered content
        templateHtml = templateHtml.replace(
          /<div id="root"><\/div>/,
          `<div id="root">${rootContent}</div>`
        );

        // Update head with meta tags from react-helmet (if any)
        if (headContent) {
          // Remove old title and add new head content before closing head tag
          templateHtml = templateHtml.replace(/<title>.*?<\/title>/i, '');
          templateHtml = templateHtml.replace('</head>', `    ${headContent}\n  </head>`);
        }

        // Replace localhost URLs with production domain
        templateHtml = templateHtml.replace(new RegExp(`http://localhost:${PORT}`, 'g'), PRODUCTION_URL);

        // Write the pre-rendered HTML
        fs.writeFileSync(filePath, templateHtml, 'utf8');
        console.log(`✓ Pre-rendered: ${route} -> ${filePath}`);

      } catch (error) {
        console.error(`Error pre-rendering ${route}:`, error.message);
      }
    }

    console.log('\n✅ Pre-rendering complete!');
    console.log('All pages now have crawlable HTML with H1, paragraphs, and lists in the DOM.');

  } catch (error) {
    console.error('Pre-rendering failed:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    await stopServer();
  }
}

// Run pre-rendering
prerender().catch(console.error);
