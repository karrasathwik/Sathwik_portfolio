const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const files = fs.readdirSync(root);
const blogFiles = files.filter(name => /^blog\d+\.html$/i.test(name));

const posts = blogFiles.map(file => {
  const filePath = path.join(root, file);
  const content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
  const descMetaMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']\s*\/?>/i);
  const firstParagraphMatch = content.match(/<p>([^<]+)<\/p>/i);
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);

  const title = titleMatch ? titleMatch[1].trim() : file.replace(/\.html$/i, '');
  const description = descMetaMatch ? descMetaMatch[1].trim() : (firstParagraphMatch ? firstParagraphMatch[1].trim() : 'Read the latest blog post.');
  let image;
  if (imgMatch) {
    image = imgMatch[1];
  } else {
    const numberMatch = file.match(/blog(\d+)\.html$/i);
    image = numberMatch ? `images/blog_${numberMatch[1]}.jpg` : 'images/blog_1.jpg';
  }

  return {
    title,
    description,
    image,
    url: file
  };
});

const output = JSON.stringify(posts, null, 2);
fs.writeFileSync(path.join(root, 'blogs.json'), output, 'utf8');
console.log(`Generated blogs.json with ${posts.length} blog entries.`);
