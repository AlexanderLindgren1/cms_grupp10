import Link from "next/link";

export default function Imagewithtext({ blok }) {


    
    const product = blok

    console.log("PRODUCT", product)



    const productContent = product?.content;
    const productUrl = blok?.full_slug;
    // console.log("Product contet", productContent)
  console.log("productContentww",productContent?.title?.content[0].content[0].text ?? "The text are missing");
  
    return <>


        <Link href={productUrl}>
        {/* <p>{productContent.title.content[0].content[0].text}</p> */}
        <img src={productContent?.image?.filename } alt="No image from this product" />
        <p>{productContent?.title?.content[0].content[0].text ?? "The text are missing"}</p>
        <p>price: {productContent?.price ? productContent?.price : "not added price"}</p>

        </Link>

    </>






return (
    
<>
<p> </p>
<p>{blok[0].text}</p>






</>
    
)





}