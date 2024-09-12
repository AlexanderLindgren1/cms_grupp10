import Link from "next/link";

 export default function Imagewithtext({ blok }) {


return <>

<p>{blok.text}</p>
<p>{blok.title.content[0].content[0].text}</p>
<img src={blok.image.filename} alt="" />
</>



}