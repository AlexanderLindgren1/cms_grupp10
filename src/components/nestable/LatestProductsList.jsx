import Image from "next/image";
import Link from "next/link";

export default function LatestProductsList({ blok }) {
    console.log("hardcoder", blok.latestpro[0].image.filename);
    
  <div>
    {blok?.latestpro?.map((lp,index)=>{

    <Link key={index}  ><Image src={lp?.image?.filename} width={400} height={400} alt="latest Image "/></Link>
    })}
  


  </div>;

  return <p>hej</p>;
}
