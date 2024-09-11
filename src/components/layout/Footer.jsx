export default function Footer({ blok }) {

    const text = blok.title.content[0].content[0].text
    return (
        <section className="w-full bg-red">
            <p>{text}</p>

            {blok.searchbox && blok.searchbox.map((item) => {


        return <p>{item.minitext}</p>

            })}
        </section>
    )
}

