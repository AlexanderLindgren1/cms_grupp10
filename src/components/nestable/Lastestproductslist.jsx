
export default async function LastestProductsList({ blok }) {
    const products = await StoryblokCMS.getProducts();
    if (!products) return null;
    console.log("you are in products list ", products);


    return <div className="products">

        {products?.map((product, index) => {
    
        })}


    </div>
}
