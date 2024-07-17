import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="flex items-center bg-blue-500 px-4 py-12 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-4 md:flex-row">
          <div className="my-auto hidden h-[60vh] items-center overflow-hidden rounded-lg bg-white bg-opacity-90 p-8 shadow-xl md:flex md:w-1/4 md:flex-col">
            <div className="mb-6 h-48 w-48 overflow-hidden rounded-full ring">
              <Image
                src="/증명사진2.jpg" 
                alt="Profile picture"
                width={192}
                height={192}
                objectFit="cover"
              />
            </div>
            <h2 className="mb-2 text-2xl font-bold text-gray-800">조용운</h2>
            <p className="text-gray-600">cyy8071@gmail.com</p>
            <p className="text-gray-600">아주대학교 수학과</p>
          </div>

          <div className="flex h-[60vh] flex-col justify-between md:w-1/2">
            <div className="overflow-hidden rounded-lg bg-white bg-opacity-90 p-8 shadow-xl">
              <h3 className="mb-4 text-3xl font-semibold text-gray-800">
                About Me
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  수학 문제 풀기를 좋아서 수학과에 입학했고, 알고리즘 문제와 웹
                  어플리케이션 만들기가 재밌어서 독학으로 코딩 공부를
                  시작했습니다.
                </p>
                <p>
                  완성도 있는 코드와 깔끔한 UI를 추구하는 열정적인 개발자입니다.
                  사용자 중심의 디자인과 효율적인 기능 구현을 통해 최상의 웹
                  경험을 제공하는 것이 제 목표입니다.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white bg-opacity-90 p-8 shadow-xl">
              <h3 className="mb-4 text-3xl font-semibold text-gray-800">
                Connect with me
              </h3>
              <div className="flex space-x-6">
                <a
                  href="mailto:cyy8071@gmail.com"
                  className="text-blue-600 transition-colors duration-300 hover:text-blue-800"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  href="https://github.com/chomchom96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-gray-800"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://velog.io/@error_io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 transition-colors duration-300 hover:text-green-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3zm6.883 6.25q.945 0 1.125.9l1.463 8.303q.697-.923 1.146-1.553a14 14 0 0 0 1.283-2.273q.608-1.283.608-2.295q0-.607-.338-.967q-.315-.382-1.193-.967q.9-1.148 2.25-1.148q.72 0 1.193.428q.495.427.494 1.26q0 1.395-1.17 3.488q-1.147 2.07-4.431 6.232l-2.227.156l-1.711-9.628h-2.25V7.24q.9-.293 2.115-.63q1.215-.36 1.643-.36"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
