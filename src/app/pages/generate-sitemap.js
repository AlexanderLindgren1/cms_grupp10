import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import StoryblokCMS from './path-to-your-storyblok-class'; 

export async function generateSitemap() {
  const cms = new StoryblokCMS();
  const products = await cms.getProducts(); 
  
  const links = products.map(product => ({
    url: `/products/${product.full_slug}`,  
    changefreq: 'weekly',
    priority: 0.8,
  }));

  const stream = new SitemapStream({ hostname: 'https://cms-grupp10.vercel.app/' });

  return streamToPromise(Readable.from(links).pipe(stream)).then(data => data.toString());
}