import Link from "next/link";

 export default function Image({ blok }) {


return <>
 <div className="hero-image-container">
<img src={blok.image.filename} alt=""  className=".hero-image"/>
</div>
</>
}