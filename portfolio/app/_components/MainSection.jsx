import Image from "next/image";
import TypeWriter from "./TypeWriter";

export default function MainSection() {
  return (
    <section
      id="main"
      className="flex flex-col justify-center bg-black bg-opacity-80 text-4xl"
    >
      {" "}
      <Image 
        src="/bg1.jpg" 
        fill 
        className="-z-10 opacity-80" 
        priority
        quality={85}
        alt="Background"
        sizes="100vw"
      />
      <TypeWriter />
    </section>
  );
}
