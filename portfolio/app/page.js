import Image from "next/image";
import TypeWriter from "./_components/typeWriter";

export default function Home() {
  const titleTextTypewriter = () => {};
  return (
    <main className="p-0">
      <header className="w-full flex flex-row justify-end gap-4 p-10 duration-200 delay-200 fixed bg-none ">
        <button className="hover:underline hover:text-blue-600">
          About me
        </button>
        <button className=" hover:underline">Stacks</button>
        <button className="hover:underline">Projects</button>
        <button className="hover:underline">Contact</button>
      </header>
      <section
        id="main"
        className="w-full h-screen flex flex-col justify-center items-center text-center text-4xl"
      >
        <TypeWriter
          text="안녕하세요! 조용운입니다."
          speed={60}
        />
        <button className="border border-slate-500 hover:rounded-3xl duration-300 px-10 p-5">Start</button>
      </section>
      <section className="bg-red-500 p-10">
        <div className="w-4/5 mx-auto bg-white">
          <h1>About me</h1>
          <p>SoGaeGeul</p>
          <div>Certificate</div>
          <div>education</div>
        </div>
      </section>
      <section className="bg-blue-500 p-10">
        <div className="w-4/5 mx-auto bg-white">
          <h1>Stacks</h1>
          <div className="flex flex-row justify-center gap-4 borderr">
            <div>Tecks</div>
            <div className="flex flex-col">
              <div>Styling</div>
              <div>Communication</div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-purple-500 p-10">
        <div className="w-4/5 mx-auto bg-white">
          <h1>프로젝트</h1>
        </div>
      </section>
      <section className="bg-yellow-500 p-10">
        <div className="w-4/5 mx-auto bg-white">
          <h1>CONTACT</h1>
        </div>{" "}
        {/* 고양이? */}
      </section>
    </main>
  );
}
