import { generateSitemap } from './generate-sitemap';

export default async function handler(req, res) {
  const sitemap = await generateSitemap();

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();
}

export const config = {
  api: {
    bodyParser: false,
  },
};