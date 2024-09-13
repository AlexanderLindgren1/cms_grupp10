import Link from "next/link";
import "../styles/style.css";
import Image from "next/image";
export default function Imagewithtext({ blok }) {
  const product = blok;

  if (product.name == "Products landing") return null;

  const productContent = product?.content;
  const productUrl = blok?.full_slug;

  return (
    <>
      <div
        className="
image-with-text">
        <Link href={productUrl}>
          {/* <p>{productContent.title.content[0].content[0].text}</p> */}

          <Image
            img
            src={productContent?.image?.filename}
            alt="No image from this product"
            width={768}
            height={768}
            layout="responsive"
          />

          <p>
            {productContent?.title?.content[0].content[0].text ??
              "The text are missing"}
          </p>
          <p>
            price:{" "}
            {productContent?.price ? productContent?.price : "not added price"}
          </p>
        </Link>
      </div>
    </>
  );
}
