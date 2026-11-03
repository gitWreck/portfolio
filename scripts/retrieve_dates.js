const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', 'mds', 'graphics_manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

console.log(`Retrieving exact publication dates for all ${manifest.length} Facebook posts...\n`);

for (let item of manifest) {
  const indexStr = String(item.index).padStart(2, '0');
  
  // Extract numeric post ID from canonical URL
  const idMatch = item.canonicalUrl.match(/(\d{14,18}|\d{12,18})/);
  if (!idMatch) {
    console.warn(`[${indexStr}] Could not parse post ID from: ${item.canonicalUrl}`);
    continue;
  }

  const postId = idMatch[1];
  const cleanPostUrl = `https://www.facebook.com/uplbcfnrocs/posts/${postId}`;
  const pluginUrl = `https://www.facebook.com/plugins/post.php?href=${encodeURIComponent(cleanPostUrl)}`;

  console.log(`[${indexStr}/${manifest.length}] Querying post ID: ${postId}`);

  try {
    const html = execFileSync('curl.exe', [
      '-s',
      '-L',
      '-H', 'Accept-Language: en-US,en;q=0.9',
      '-A', 'Mozilla/5.0',
      pluginUrl
    ], { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 });

    const match = html.match(/<abbr[^>]*data-utime=['"](\d+)['"][^>]*>/i);

    if (match) {
      const utime = parseInt(match[1], 10);
      const postDate = new Date(utime * 1000);

      // Philippine Standard Time (Asia/Manila)
      const formattedDate = postDate.toLocaleDateString('en-US', {
        timeZone: 'Asia/Manila',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const fullDateTime = postDate.toLocaleString('en-US', {
        timeZone: 'Asia/Manila',
        dateStyle: 'full',
        timeStyle: 'short'
      });

      const year = postDate.toLocaleDateString('en-US', { timeZone: 'Asia/Manila', year: 'numeric' });
      const month = postDate.toLocaleDateString('en-US', { timeZone: 'Asia/Manila', month: 'short' });

      item.postId = postId;
      item.timestamp = utime;
      item.date = formattedDate;
      item.fullDateTime = fullDateTime;
      item.year = year;
      item.month = month;

      console.log(`  ✓ Date: ${formattedDate} (${fullDateTime})`);
    } else {
      console.warn(`  ⚠️ Could not find date abbr for post ${postId}`);
    }
  } catch (err) {
    console.error(`  ❌ Error fetching date for post ${postId}: ${err.message}`);
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`\n========================================`);
console.log(`Successfully updated dates in: ${manifestPath}`);
