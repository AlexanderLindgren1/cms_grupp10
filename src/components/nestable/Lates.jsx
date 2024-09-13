import Image from "next/image";

export default function Lates({ blok }) {
  return (
    <Image
      src={blok.latest.filename}
      alt="in lates"
      width={100} // specify the width
      height={100} // specify the height
    />
  );
}
