import "../styles/style.css";

// export default function ProductPage({ blok }) {
//   console.log("PRODUCT", blok);
// console.log("desc",blok.sizes[0].text);

//   return (
//     <>
//       <div className="product-page">productpage</div>
//       <p className="product-title">{blok?.title?.content[0].content[0].text ?? "The text are missing"}</p>
//       <p className="product-price" >{blok.price}</p>

//       <p className="product-description">{blok.text}</p>

//       <img src={blok?.image?.filename} alt="" className="product-image"/>
      
//       <div className="product-buttons" >
//             {blok?.button?.map((oneButton,index)=>{

//                  return <button key={index} style={{ backgroundColor: oneButton.text, borderRadius:500, width: 40, height: 40, border: "1px solid black"}}></button>;

                
//             })}


// <div className="product-sizes">
//             {blok?.sizes?.map((size,index)=>{

//                  return <button key={index} >{size?.text}</button>;

                
//             })}
//             </div>

//       </div>
//     </>
//   );
// }


export default function ProductPage({ blok }) {
  return (
    <>
      <div className="product-page">
        <div className="product-info">
          <img className="product-image" src={blok?.image?.filename} alt="" />
          <div className="product-text">
            <h1 className="product-title">{blok?.title?.content[0].content[0].text ?? "The text is missing"}</h1>
            <p className="product-price">{blok.price}</p>
            <p className="product-description">{blok.description}</p>
          </div>
        </div>
        <div className="product-buttons">
          {blok?.button?.map((oneButton, index) => (
            <button
              key={index}
              className="color-button"
              style={{ backgroundColor: oneButton.text }}
            ></button>
          ))}
        </div>
        <div className="product-sizes">
          {blok?.sizes?.map((size, index) => (
            <button key={index} className="size-button">
              {size?.text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
