
import Image from "next/image"; 

export default function Imagebanner({ blok }) {
  console.log(blok.image.filename);

  return (
    <>
      <Image
        src={blok.image.filename}
        alt="Image description"
        width={800}
        height={600} 
      />
    </>
  );
}