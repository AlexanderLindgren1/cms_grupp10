import Link from "next/link";

 export default function Imagebanner({ blok }) {


return <>

<img src={blok.image.filename} alt="" />
</>
}