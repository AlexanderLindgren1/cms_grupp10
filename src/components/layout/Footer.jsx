import Link from "next/link";
import Image from "next/image";
import "../styles/style.css";

export default function Footer({ blok }) {
  const text = blok.title.content[0].content[0].text;

  return (
    <section className="footer-container">
      <div className="footer-content">
        <h2>{text}</h2>
        {blok.searchbox &&
          blok.searchbox.map((item, index) => {
            console.log("sot",item);
            if (item.searchbox == "Email Address") return null
            const linkHref = item?.link?.cached_url; 
            const miniText = item?.minitext || "No Text Available"; 
            console.log("minitextx", item);
            
            return linkHref ? ( 
              <Link href={linkHref} key={index}>
                <p className="footer-section links">{miniText}</p>
              </Link>
            ) : (
              <p key={index} className="footer-section links">
                {miniText}
              </p> // Fallback if no link
            );
          })}

       
      </div>
    </section>
  );
}
