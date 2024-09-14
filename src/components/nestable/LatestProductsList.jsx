import Image from "next/image";
import Link from "next/link";
import "../styles/latestProStyle.css"

export default function LatestProductsList({ blok }) {

  return (
    <div className="latestHolder">
      {blok?.latestpro?.map((lp, index) => (
        <Link
          key={index}
          href={`${lp.text}`}>
          <Image
          className="latestitem"
            src={lp?.image?.filename }
            width={400}
            height={400}
            alt="latest Image"
          />
        </Link>
      ))}
    </div>
  );
}
