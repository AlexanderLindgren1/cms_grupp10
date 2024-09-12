

import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";
import Imagewithtext from "./Imagewithtext";


export default async function Productlist({ blok }) {
    const products = await StoryblokCMS.getProducts();
    console.log("products", products )
    console.log("blok",blok.products[0]);
    
    return <div className="products">
 {blok.products && blok.products.map((product)=>{

return <Imagewithtext blok = {product}/>

})}


    </div>
}