import Image from "next/image";
import Link from "next/link";

function xx(data){
console.log("in xx", data);

}
export default function LatestProductsList({ blok }) {
  console.log("hardcoder", blok.latestpro[0]);

  return (
    <div>
      {blok?.latestpro?.map((lp, index) => (
        <Link
          key={index}
          href={`${lp.text}`}>
          <img
            src={lp?.image?.filename || "/default-image.jpg"}
            width={400}
            height={400}
            alt="latest Image"
          />
        </Link>
      ))}
    </div>
  );
}
