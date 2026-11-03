const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const links = [
  "https://www.facebook.com/share/p/1F9747ttGm/", // 01 - Sir John Lloyd Birthday
  "https://www.facebook.com/share/p/19fyy61na8/", // 02
  "https://www.facebook.com/share/p/19ZeDMkjjE/", // 03
  "https://www.facebook.com/share/p/1JvUqa7PEJ/", // 04
  "https://www.facebook.com/share/p/1EucfB9Jxm/", // 05
  "https://www.facebook.com/share/p/1KAzZKLJQ7/", // 06
  "https://www.facebook.com/share/p/1CUWxxZ2y6/", // 07
  "https://www.facebook.com/share/p/1CxxSSx3KP/", // 08
  "https://www.facebook.com/share/p/19iVug6qDL/", // 09
  "https://www.facebook.com/share/p/18MrymJwuh/", // 10
  "https://www.facebook.com/share/p/1e1EoCFr62/", // 11
  "https://www.facebook.com/share/p/1DomsZFtiq/"  // 12
];

const outDir = path.join(__dirname, '..', 'assets', 'graphics');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function decodeHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#039;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
      try {
        return String.fromCodePoint(parseInt(hex, 16));
      } catch (e) {
        return match;
      }
    })
    .replace(/&#([0-9]+);/g, (match, dec) => {
      try {
        return String.fromCodePoint(parseInt(dec, 10));
      } catch (e) {
        return match;
      }
    });
}

function sanitizeText(str) {
  if (!str) return '';
  return str.replace(/[\r\n\t]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
}

function makeSlug(str) {
  if (!str) return '';
  const clean = str
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2)
    .slice(0, 4)
    .join('_');
  return clean;
}

const results = [];
console.log(`Starting automated retrieval of ${links.length} Facebook posts...\n`);

for (let i = 0; i < links.length; i++) {
  const rawLink = links[i];
  const indexStr = String(i + 1).padStart(2, '0');
  console.log(`[${indexStr}/${links.length}] Fetching: ${rawLink}`);

  try {
    const html = execFileSync('curl.exe', [
      '-s',
      '-L',
      '-A', 'Mozilla/5.0',
      rawLink
    ], { encoding: 'utf8', maxBuffer: 15 * 1024 * 1024 });

    // OpenGraph extraction
    const ogImageMatch = html.match(/<meta property=["']og:image["'] content=["']([^"']+)["']/i) ||
                         html.match(/<meta content=["']([^"']+)["'] property=["']og:image["']/i);

    const ogDescMatch = html.match(/<meta property=["']og:description["'] content=["']([^"']+)["']/i) ||
                        html.match(/<meta content=["']([^"']+)["'] property=["']og:description["']/i);

    const ogTitleMatch = html.match(/<meta property=["']og:title["'] content=["']([^"']+)["']/i) ||
                         html.match(/<meta content=["']([^"']+)["'] property=["']og:title["']/i);

    const ogUrlMatch = html.match(/<meta property=["']og:url["'] content=["']([^"']+)["']/i) ||
                       html.match(/<meta content=["']([^"']+)["'] property=["']og:url["']/i);

    if (!ogImageMatch) {
      console.warn(`  ⚠️ Could not find og:image in response for ${rawLink}`);
      results.push({
        index: i + 1,
        shareUrl: rawLink,
        error: 'No og:image found'
      });
      continue;
    }

    const rawImgUrl = decodeHtmlEntities(ogImageMatch[1]);
    const caption = decodeHtmlEntities(ogDescMatch ? ogDescMatch[1] : '');
    const title = decodeHtmlEntities(ogTitleMatch ? ogTitleMatch[1] : 'UPLB CFNR OCS Graphic');
    const canonicalUrl = ogUrlMatch ? decodeHtmlEntities(ogUrlMatch[1]) : rawLink;

    const slug = makeSlug(caption);
    const fileName = `pubmat_${indexStr}${slug ? '_' + slug : ''}.jpg`;
    const filePath = path.join(outDir, fileName);

    console.log(`  Downloading image -> ${fileName}`);
    execFileSync('curl.exe', [
      '-s',
      '-L',
      '-A', 'Mozilla/5.0',
      '-o', filePath,
      rawImgUrl
    ]);

    const stats = fs.statSync(filePath);
    const sizeKb = Math.round(stats.size / 1024);
    const cleanCaption = sanitizeText(caption);
    console.log(`  ✓ Saved ${sizeKb} KB`);
    console.log(`  Caption: "${cleanCaption.substring(0, 95)}..."\n`);

    results.push({
      index: i + 1,
      fileName: fileName,
      filePath: `assets/graphics/${fileName}`,
      shareUrl: rawLink,
      canonicalUrl: canonicalUrl,
      title: sanitizeText(title),
      caption: cleanCaption,
      fileSizeKb: sizeKb
    });
  } catch (err) {
    console.error(`  ❌ Error processing ${rawLink}: ${err.message}\n`);
    results.push({
      index: i + 1,
      shareUrl: rawLink,
      error: err.message
    });
  }
}

const manifestPath = path.join(__dirname, '..', 'mds', 'graphics_manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(results, null, 2), 'utf8');

console.log(`========================================`);
console.log(`Finished! Successfully retrieved ${results.filter(r => !r.error).length}/${links.length} graphics.`);
console.log(`Manifest saved to: ${manifestPath}`);
