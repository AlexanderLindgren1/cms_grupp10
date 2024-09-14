import "../styles/style.css";
import Image from "next/image";
export default function ProductPage({ blok }) {

  
  return (
    <>
      <div className="product-page">
        <div className="product-info">
          <Image
            className="product-image"
            src={blok?.image?.filename}
            alt="Product image"
            width={768}
            height={768}
            layout="responsive"
          />
          <div className="product-text">
            <h1 className="product-title">
              {blok?.title?.content[0].content[0].text ?? "The text is missing"}
            </h1>
            <p className="product-price">{blok.price}</p>
            <p className="product-description">{blok.description}</p>
          </div>
        </div>
        <div className="product-buttons">
          {blok?.button?.map((oneButton, index) => (
            <button
              key={index}
              className="color-button"
              style={{ backgroundColor: oneButton.text }}></button>
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
