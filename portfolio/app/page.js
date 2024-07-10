import Image from "next/image";

export default function Home() {
  return (
    <main className="p-0">
      <header className="w-full flex flex-row justify-end">
        <button className="bg-black text-white hover:underline">
          기술스택
        </button>
        <button className="bg-black text-white hover:underline">
          프로젝트
        </button>
        <button className="bg-black text-white hover:underline">
          교육
        </button>
        <button className="bg-black text-white hover:underline">
          CONTACT
        </button>
      </header>
      <section id="main" className="bg-gradient-to-b from-black to-white">
        <h1>안녕하세요, 프론트엔드 개발자 조용운입니다.</h1>
      </section>
      <section>
        <h1>기술스택</h1>
      </section>
      <section><h1>프로젝트</h1></section>
      <section><h1>교육</h1></section>
      <section>CONTACT</section>
      {/* 고양이? */}
    </main>
  );
}
