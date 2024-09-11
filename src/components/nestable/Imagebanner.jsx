import Link from "next/link";

 export default function Imagebanner({ blok }) {
console.log(blok.image.filename);

return <>

<img src={blok.image.filename} alt="" />
</>
}