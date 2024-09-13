
import "../styles/style.css";

export default function Footer({ blok }) {



    const text = blok.title.content[0].content[0].text
    return (
        <section className="footer-container">
            <div className="footer-content">
            <h2 >{text}</h2>

            {blok.searchbox && blok.searchbox.map((item, index) => {


        return <p key={index} className="footer-section links">{item.minitext}</p>

            })}</div>
        </section>
    )
}
