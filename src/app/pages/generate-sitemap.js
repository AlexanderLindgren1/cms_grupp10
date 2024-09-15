import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import StoryblokCMS from './path-to-your-storyblok-class'; // Adjust the path to your StoryblokCMS class

export async function generateSitemap() {
  const cms = new StoryblokCMS();
  const products = await cms.getProducts(); // Fetch your products or any other pages you want to include
  
  const links = products.map(product => ({
    url: `/products/${product.full_slug}`,  // Adjust based on your routing
    changefreq: 'weekly',
    priority: 0.8,
  }));

  const stream = new SitemapStream({ hostname: 'https://cms-grupp10.vercel.app/' });

  // Create a stream with URLs to include in the sitemap
  return streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());
}