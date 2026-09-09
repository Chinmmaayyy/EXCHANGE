import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const HOST = 'www.exchangechessacademy.in';
const API_KEY = '4f7e2d9a1c8b3e5f60718293a4b5c6d7';
const KEY_LOCATION = `https://${HOST}/${API_KEY}.txt`;
const ENDPOINTS = [
  'https://api.indexnow.org/indexnow',
  'https://www.bing.com/indexnow'
];

// Extract URLs from sitemap.xml
function getUrlsFromSitemap() {
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const matches = content.match(/<loc>(.*?)<\/loc>/g) || [];
  return matches.map(m => m.replace(/<\/?loc>/g, '').trim());
}

async function submitIndexNow() {
  const urls = getUrlsFromSitemap();
  console.log(`[IndexNow] Found ${urls.length} URLs in sitemap to submit for host: ${HOST}`);

  const payload = {
    host: HOST,
    key: API_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls
  };

  let successCount = 0;

  for (const endpoint of ENDPOINTS) {
    console.log(`[IndexNow] Submitting to ${endpoint}...`);
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      if (res.status === 200 || res.status === 202) {
        console.log(`[IndexNow] ✅ ${endpoint} responded with HTTP ${res.status} (${res.statusText || 'Accepted'})`);
        successCount++;
      } else {
        const responseText = await res.text().catch(() => '');
        console.warn(`[IndexNow] ⚠️ ${endpoint} responded with HTTP ${res.status}: ${responseText}`);
      }
    } catch (err) {
      console.error(`[IndexNow] ❌ Error submitting to ${endpoint}:`, err.message);
    }
  }

  if (successCount > 0) {
    console.log(`[IndexNow] 🎉 Successfully submitted ${urls.length} URLs to IndexNow!`);
  } else {
    console.error(`[IndexNow] 🚨 Failed to submit to IndexNow endpoints.`);
    process.exit(1);
  }
}

submitIndexNow();
