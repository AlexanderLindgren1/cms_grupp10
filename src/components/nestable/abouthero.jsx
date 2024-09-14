

export default function Abouthero({ blok }) {
    
    return (
        <>




        <div className="about-container">


  <h1> {blok?.title?.content[0]?.content[0]?.text}</h1>
        
     
        <p className="about-text">{blok?.text}</p>

          

            </div>

        </>

    )

}