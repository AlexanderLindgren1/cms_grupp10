
 export default function Hero({ blok }) {
    // console.log("hero", blok );
    
    return(
        <>
        <p> {blok.title.content[0].content[0].text}</p>
        <p>{blok.text}</p>
        <button >{blok.button[0].text}</button>

        <p>---------------------------</p>
        </>


    )

}