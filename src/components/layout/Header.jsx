import Link from "next/link";

 export default function Header({ blok }) {
    console.log("YOu are in header");



    console.log("YOu are in the link", blok);
    
    
    return (
        <section className="w-full bg-red">
            <p>header</p>
            {blok.links.map(async(linkstory)=>{

       
                const story = await linkstory.link.story

            return (
                

                    <Link key={story.uuid} href={story.slug}>
                    <p> {story.name}</p>
                    </Link>
                

            )
            })
            
            
            }
        </section>
    )
}