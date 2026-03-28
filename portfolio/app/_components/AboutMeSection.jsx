import Image from "next/image";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative flex justify-center bg-slate-50 px-4 py-16 text-slate-900 lg:px-8"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* 왼쪽: 프로필 카드 (데스크탑 기준 크게, 한눈에 보이도록) */}
        <div className="mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0">
          <div className="flex flex-col items-center rounded-2xl bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-2xl bg-slate-100 shadow-inner sm:h-36 sm:w-36">
              <Image
                src="/증명사진2.jpg"
                alt="조용운 프로필 사진"
                width={192}
                height={192}
                style={{ objectFit: "cover" }}
                quality={90}
              />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              조용운
            </h2>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-indigo-500">
              Frontend Developer
            </p>
            <p className="mt-3 text-center text-sm text-slate-500">
              아주대학교 수학과 · 문제를 구조적으로 바라보는 시야로
              프론트엔드 개발을 합니다.
            </p>

            <div className="mt-6 flex w-full flex-col gap-3 text-sm">
              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                    Email
                  </p>
                  <p className="text-sm font-medium text-slate-900">
                    cyy8071@gmail.com
                  </p>
                </div>
                <a
                  href="mailto:cyy8071@gmail.com"
                  className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-medium text-white shadow-sm hover:bg-indigo-600"
                >
                  연락하기
                </a>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                    Online
                  </p>
                  <p className="text-sm font-medium text-slate-900">
                    Github &amp; Velog
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/chomchom96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 transition-colors hover:text-slate-900"
                  >
                    <svg
                      className="h-6 w-6"
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
                    className="text-emerald-500 transition-colors hover:text-emerald-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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

        {/* 오른쪽: 소개 텍스트 (넓게, 데스크탑에서 가독성 높게) */}
        <div className="w-full flex-1">
          <div className="mx-auto max-w-xl space-y-6">
            <p className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium tracking-tight text-indigo-700">
              프론트엔드 개발자 · Problem Solver
            </p>
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              저를 한 문장으로 소개하면,
              <span className="block text-indigo-600">
                문제를 끝까지 파고드는 개발자입니다.
              </span>
            </h3>
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                수학 문제 풀기를 좋아서 수학과에 입학했고, 알고리즘 문제와 웹
                어플리케이션 만들기가 재밌어서 독학으로 코딩 공부를
                시작했습니다.
              </p>
              <p>
                완성도 있는 코드와 깔끔한 UI를 추구합니다. 프론트엔드 실력을
                다지며 적재적소에 맞는 기술로 좋은 성능과 훌륭한 UX를 제공하는
                개발자가 되고 싶습니다.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                타입 안정성과 클린 코드 지향
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                사용자 경험 중심의 인터페이스 설계
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                협업과 소통을 중시하는 팀 플레이어
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}