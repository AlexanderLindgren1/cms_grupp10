import  from "next/image";
import Link from "next/link";

export default function LatestProductsList({ blok }) {
  <div>
    <Link href={"/products/product1"}>
      <p>product1</p>
      <Image/>
    </Link>

    <Link href={"/products/product2"}>
      <p>product1</p>
    </Link>

    <Link href={"/products/product3"}>
      <p>product3</p>

    </Link>
  </div>;

  return <p>hej</p>;
}
