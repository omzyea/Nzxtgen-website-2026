const fs = require('fs');
const path = require('path');

// Base URL - update this to your production domain
// For local development, this can be http://localhost:3000
// For production, use your actual domain (e.g., https://nzxtgen.com.au)
const BASE_URL = process.env.REACT_APP_SITE_URL || 'https://nzxtgen.com.au';

// Public pages to include in sitemap (exclude admin, 404, etc.)
const publicRoutes = [
  {
    url: '/',
    changefreq: 'weekly',
    priority: 1.0,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/about-us',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/contact-us',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/our-signature-services',
    changefreq: 'weekly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/smart-home',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/electrical-services',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/security-systems',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/entertainment-technology',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/data-networking',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/switchboard-upgrade',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/builders-contracting',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/builders-contracting/residential-electrical',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/builders-contracting/commercial-industrial-electrical',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/builders-contracting/new-builds-renovations',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/builders-contracting/compliance-licence',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/free-quote',
    changefreq: 'monthly',
    priority: 0.9,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/privacy-policy',
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/terms-and-conditions',
    changefreq: 'yearly',
    priority: 0.3,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/emergency-electrician',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/electrical-fault-finding-repairs',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/services/ev-charger-installation',
    changefreq: 'monthly',
    priority: 0.8,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/suburbs',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-canterbury',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-bankstown',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-earlwood',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-panania',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-revesby',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-strathfield',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-condell-park',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    url: '/areas-we-service/electrician-padstow',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate XML sitemap
function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${publicRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Generate and write sitemap
const sitemapContent = generateSitemap();
fs.writeFileSync(SITEMAP_PATH, sitemapContent, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📍 Location: ${SITEMAP_PATH}`);
console.log(`📄 Total URLs: ${publicRoutes.length}`);
console.log(`🌐 Base URL: ${BASE_URL}`);
console.log('\n📋 URLs included:');
publicRoutes.forEach(route => {
  console.log(`   - ${BASE_URL}${route.url} (priority: ${route.priority})`);
});

console.log('\n💡 Next steps:');
console.log('   1. Update BASE_URL in this script to your production domain');
console.log('   2. Submit sitemap to Google Search Console');
console.log('   3. Submit sitemap to Bing Webmaster Tools');
console.log('   4. Verify sitemap is accessible at: ' + BASE_URL + '/sitemap.xml');
