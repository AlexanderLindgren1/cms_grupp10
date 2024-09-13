import { StoryblokCMS } from "@/utils/cms";
import Link from "next/link";
import Imagewithtext from "./Imagewithtext";


export default async function Productlist({ blok }) {
    const products = await StoryblokCMS.getProducts();
    if (!products) return null;
    console.log("you are in products list ", products);


    return <div className="products">

        {products?.map((product, index) => {
            return <Imagewithtext  blok={product} key={index}/>

        })}


    </div>
}
