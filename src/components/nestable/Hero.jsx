import { useTransition } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ blok }) {
  console.log("heroblok", blok?.image?.filename);

  return (
    <>
      <div className="hero">
        <p className="hero-title"> {blok.title.content[0].content[0].text}</p>
        <p className="hero-text">{blok.text}</p>
        {
            blok?.image?.filename ? 
          <Image
            src={blok?.image?.filename}
            alt="Description of the image"
            width={1000}
            height={600}
          />
          :
          ""
        }

        {blok.button.map((button, index) => {
          return (
            <Link href={button.link.cached_url }  key={index}>
              <button className="hero-button">
                {button.text}
              </button>
            </Link>
          );
        })}
      </div>
    </>
  );
}
