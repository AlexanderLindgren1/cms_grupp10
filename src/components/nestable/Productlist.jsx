import { StoryblokCMS } from "@/utils/cms";
import Imagewithtext from "./Imagewithtext";


export default async function LPL({ blok }) {
    const products = await StoryblokCMS.getProducts();
    if (!products) return null;
    console.log("you are in products list ", products);


    return <div className="products">

        {products?.map((product, index) => {
            console.log();
            if(index === 1 ) return null
            
            return <Imagewithtext  blok={product} key={index}/>

        })}


    </div>
}
