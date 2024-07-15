import Image from "next/image";
import TypeWriter from "./_components/typeWriter";
import Header from "./_components/header";

export default function Home() {
  return (
    <main className="p-0">
      <Header />
      <section
        id="main"
        className="h-screen flex flex-col justify-center text-4xl bg-black bg-opacity-80"
      >
        <Image src="/bg1.jpg" fill className="opacity-80 -z-10" />
        <TypeWriter />
      </section>
      <section id="about">
        <h1 id="title">
          <span className="underline underline-offset-4 decoration-blue-500">
            Abou
          </span>
          t Me
        </h1>
        <div className="w-4/5 mx-auto bg-white">
          <div className="my-10">
            {/* 사진? */}
            <div className="grid grid-rows-2 grid-cols-2 w-full h-[30vh]">
              <div className="size-24 "></div>
              <div>메일</div>
              <div>깃허브</div>
              <div>블로그</div>
            </div>
            <div>
              <h1>
                저는 수학 문제 푸는 것을 좋아해서 수학과 전공을 선택하였습니다.{" "}
                <br />
                마크업 언어에 대한 호기심에 혼자서 관련 영상과 서적을 찾아
                이것저것 시도해보면서 자연스럽게 프론트엔드 개발자를 꿈꾸게
                되었습니다.
                <br /> 수많은 도전과 경험을 통해 다양한 기술 스택을 쌓아
                적재적소에 알맞은 기술을 적용하여 최고의 UX를 제공할 수 있는
                프론트엔드 개발자가 되고 싶습니다.{" "}
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <div className="w-4/5 mx-auto bg-white">
          <h1 id="title">
            <span className="underline underline-offset-4 decoration-cyan-500">
              Skil
            </span>
            ls
          </h1>
          {/* TODO : 기술아이콘 + 옆에 할 수 있는 거 */}
          <div className="flex flex-row justify-around gap-4 border-4 border-cyan-500 rounded-lg my-10 p-5">
            <div className="flex flex-col shadow-sm rounded-lg">
              <h1>Frontend</h1>
              <div className="flex flex-row">
                <p>리액트를 이용해 이것저것 한다</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h1>Style</h1>
                <div className="border rounded-md shadow-sm">react vue</div>
              </div>
              <div className="flex flex-col">
                <h1>Communication</h1>
                <div className="border rounded-md shadow-sm">react vue</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="w-4/5 mx-auto bg-white">
          <h1 id="title">
            <span className="underline underline-offset-4 decoration-indigo-500">
              Projec
            </span>
            ts
          </h1>
          {/* TODO : 프로젝트 3개 캐러셀 + 앞면에는 위에 제목, 밑에는 flex로 왼쪽 스샷, 오른쪽 간략 설명, flip시 readme, github 링크 */}
        </div>
      </section>
      <section id="contact">
        <div className="w-4/5 mx-auto bg-white">
          <h1>CONTACT</h1>
          {/* 이메일, 블로그, 깃허브 */}
        </div>
      </section>
    </main>
  );
}
