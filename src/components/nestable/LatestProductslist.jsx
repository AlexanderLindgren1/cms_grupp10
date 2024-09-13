import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";

export default async function LatestProductsList({ blok }) {
  console.log("latest test pro", blok.latestpro); // Log to check the value of blok.latestpro

  // Check if blok.latestpro is properly defined and is an array
  const selectedUIDs = Array.isArray(blok.latestpro) ? blok.latestpro : [];
  if (selectedUIDs.length === 0) {
    console.warn("No product UIDs provided in blok.latestpro.");
    return null;
  }

  // Fetch all products
  const products = await StoryblokCMS.getProducts();
  if (!products) {
    console.error("No products fetched from Storyblok.");
    return null; // Return null if no products are found
  }
  console.log("Fetched products: ", products); // Log fetched products

  // Filter products by _uid within content
  const filteredProducts = products.filter((product) =>
    selectedUIDs.includes(product?.content?._uid)
  );

  if (filteredProducts.length === 0) {
    console.warn("No matching products found for the provided UIDs.");
  }

  return (
    <div className="hero">
      <p>Latest Products</p>
      {filteredProducts.map((product) => {
        console.log("kaka",product);

        return (
          <div key={product?.content?._uid} className="product">
            {/* Render the product image if available */}
            {product?.content?.image?.filename && (
              <img
                src={product?.content?.image?.filename}
                className="product-image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
