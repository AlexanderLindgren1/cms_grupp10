import Link from "next/link";
import "../styles/style.css";
export default function Imagewithtext({ blok }) {


    
    const product = blok

    console.log("PRODUCT", product)



    const productContent = product?.content;
    const productUrl = blok?.full_slug;

  console.log("productContentww",productContent?.title?.content[0].content[0].text ?? "The text are missing");
  
    return <>
<div className="
image-with-text">



        <Link href={productUrl}>
        {/* <p>{productContent.title.content[0].content[0].text}</p> */}
        <img src={productContent?.image?.filename } alt="No image from this product" />
        <p>{productContent?.title?.content[0].content[0].text ?? "The text are missing"}</p>
        <p>price: {productContent?.price ? productContent?.price : "not added price"}</p>

        </Link>
</div>
    </>









}