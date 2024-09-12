import Link from "next/link";

export default function Footer({ blok }) {


    const text = blok.title.content[0].content[0].text
    return (
        <section className="w-full bg-red">
            <p>{text}</p>

            {blok.searchbox && blok.searchbox.map((item, index) => {


        return <p key={index}>{item.minitext}</p>

            })}
        </section>
    )
}

// // github
// export default function Footer({ links }) {
//     if (!Array.isArray(links)) {
//       console.error('Expected links to be an array, but got:', links);
//       return null; // or handle the error gracefully
//     }
  
//     return (
//       <footer>
//         <ul>
//           {blok.searchbox && blok.searchbox.map((link, index) => (
//             <li key={link.id || index}>
//               <Link href={link.url}>{link.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </footer>
//     );
//   }
  