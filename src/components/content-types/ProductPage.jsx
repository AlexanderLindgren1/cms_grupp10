export default function ProductPage({ blok }) {
  console.log("PRODUCT", blok);
console.log("desc",blok.sizes[0].text);

  return (
    <>
      return <div>productpage</div>
      <p>{blok?.title?.content[0].content[0].text ?? "The text are missing"}</p>
      <p>{blok.price}</p>

      <p>{blok.text}</p>

      <img src={blok?.image?.filename} alt="" />
      
      <div>
            {blok?.button?.map((oneButton,index)=>{

                 return <button key={index} style={{ backgroundColor: oneButton.text, borderRadius:500, width: 40, height: 40, border: "1px solid black"}}></button>;

                
            })}
            {blok?.sizes?.map((size,index)=>{

                 return <button key={index} >{size?.text}</button>;

                
            })}

      </div>
    </>
  );
}
