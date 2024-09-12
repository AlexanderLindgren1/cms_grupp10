
 export default function Hero({ blok }) {

    

    return(
        <>
        <p> {blok.title.content[0].content[0].text}</p>
        <p>{blok.text}</p>


    

{
     blok.button.map((button)=>{
       return(
           <button>{button.text}</button> 
       )
   
    })
}
        <p>---------------------------</p>
        </>


    )

}