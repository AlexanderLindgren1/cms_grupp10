import Link from "next/link";

export default function Imagewithtext({ blok }) {


    
    const product = blok

    console.log("PRODUCT", product)

    return null;

    const productContent = product?.content;
    const productUrl = blok?.full_slug;
    // console.log("Product contet", productContent)
  
    return <>


        <Link href={productUrl}>
            <p>{productContent?.title}</p>
            <img src={productContent?.image?.filename} alt="" />
        </Link>

    </>



}