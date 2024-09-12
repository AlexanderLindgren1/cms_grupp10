import Link from "next/link";

 export default function Imagewithtext({ blok }) {

// console.log("in image",blok.length());
const product = blok.product
const id = blok.index
return <>


<Link href={`/products/product${id+1}`}>
<p>{product.text}</p>
<p>{product.title.content[0].content[0].text}</p>
<img src={product.image.filename} alt="" />
</Link>

</>



}