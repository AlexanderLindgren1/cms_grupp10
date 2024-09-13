import { useState } from "react";

const [product, setProduct] = useState([])

export default function LatestProductsList({ blok }) {
  
  
    const storySlug = "products/product1"
  
  
  const GEN =fetch(
    `https://api.storyblok.com/v2/cdn/stories/${storySlug}?version=published&token=${process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN}`
  )
    .then((response) => response.json())
    .then((data) => {
        setProduct(data)
    })
    .catch((error) => {
      console.error("Fel vid hämtning från Storyblok:", error);

      
    });

// fungerar
    return <p>hej</p>
}
