

import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";
import Imagewithtext from "./Imagewithtext";


export default async function Productlist({ blok }) {
    const products = await StoryblokCMS.getProducts();
    console.log("products", products )
    console.log("blok pl",blok.products.length);
    
    return <div className="products">

 {blok.products && blok.products.map((product, index)=>{
console.log("in product list",product);

const ProductwithID = {product, index}
return <Imagewithtext blok = {ProductwithID}/>

})}


    </div>
}