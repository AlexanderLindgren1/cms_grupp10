import Link from "next/link";
export default async function LatestProductsList({ blok }) {
  console.log("latest test pro", blok.latestpro);
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  console.log("latest button");
  console.log();
  console.log();
  console.log();
  console.log();
  console.log();
  return (
    <div className="hero">
      <p>latest</p>
      <p className="hero-title"> {blok?.title?.content[0]?.content[0]?.text}</p>
      <button >{blok?.button[0].text ?? "click here"}</button>// dont work
      <h1>{blok?.text}</h1>

    
    </div>
  );
}
