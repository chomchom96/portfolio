import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "조용운의 포트폴리오입니다.",
  description: "프론트엔드 개발자 조용운의 포트폴리오입니다. React, Next.js, Vue.js를 활용한 웹 애플리케이션 개발 경험을 소개합니다.",
  keywords: "프론트엔드, 개발자, 포트폴리오, React, Next.js, Vue.js, 웹 개발",
  openGraph: {
    title: "조용운의 포트폴리오",
    description: "프론트엔드 개발자 조용운의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
