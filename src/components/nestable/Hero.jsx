
 export default function Hero({ blok }) {

    

    return(
        <>
        <div className="hero">
        <p className="hero-title"> {blok.title.content[0].content[0].text}</p>
        <p className="hero-text">{blok.text}</p>


    

{
     blok.button.map((button)=>{
       return(
           <button className="hero-button">{button.text}</button> 
       )
   
    })
}
       </div>
        </>


    )

}