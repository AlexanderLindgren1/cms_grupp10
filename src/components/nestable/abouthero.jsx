

export default function Abouthero({ blok }) {
    console.log("about hero", blok.text);

    return (
        <>
        <p>--------</p>
        <p>{blok.text}</p>

            <p> {blok.title.content[0].content[0].text}</p>

            <p>-----------</p>
        </>

    )

}