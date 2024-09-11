// import Link from "next/link";

//  export default function Header({ blok }) {
 
    
//     console.log("in header",blok.searchbox[0].searchbox);
    
//     return (
//         <section className="w-full bg-red">
//             <p>header</p>
            
//             {blok.links.map(async(linkstory)=>{

       
//                 const story = await linkstory.link.story

//             return (
                

//                     <Link key={story.uuid} href={story.slug}>
//                     <p> {story.name}</p>
//                     </Link>
                

//             )
//             })
            
            
//             }

//             <input type="text" placeholder={blok.searchbox[0].searchbox} />
//         </section>
//     )
// }


// chatgpts
import Link from "next/link";

export default function Header({ blok }) {
  console.log("in header", blok.searchbox[0].searchbox);

  return (
    <section className="w-full bg-red">
      <p>header</p>

      {blok.links.map((linkstory) => {
        const story = linkstory.link.story; // Remove the async/await usage

        return (
          <Link key={story.uuid} href={`/${story.slug}`}>
            <p>{story.name}</p>
          </Link>
        );
      })}

      <input type="text" placeholder={blok.searchbox[0].searchbox} />
    </section>
  );
}
