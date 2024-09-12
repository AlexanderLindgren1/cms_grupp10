import Link from "next/link";

 export default function Image({ blok }) {


return <>

<img src={blok.image.filename} alt="" />
</>
}