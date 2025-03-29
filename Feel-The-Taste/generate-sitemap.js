const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
];

const sitemap = new SitemapStream({ hostname: 'https://feelthetaste.be' });

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync('./public/sitemap.xml', data);
});

links.forEach((link) => sitemap.write(link));
sitemap.end();
