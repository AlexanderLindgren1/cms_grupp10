import { useState, useEffect } from 'react';

export default function LatestProductsList({ blok }) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const storySlug = 'products/product1';
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api.storyblok.com/v2/cdn/stories/${storySlug}?version=published&token=${process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN}`
        );
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Fel vid hämtning från Storyblok:', error);
      }
    };

    fetchProducts();
  }, []); 

  // fungerar
  return <p>hej</p>;
}
