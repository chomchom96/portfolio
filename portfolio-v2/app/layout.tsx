import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "조용운 | 프론트엔드 개발자",
  description:
    "복잡한 구조를 정리하는 일을 좋아하는 프론트엔드 개발자 조용운의 포트폴리오입니다.",
  keywords: ["프론트엔드", "개발자", "React", "Next.js", "TypeScript", "포트폴리오"],
  authors: [{ name: "조용운" }],
  openGraph: {
    title: "조용운 | 프론트엔드 개발자",
    description: "복잡한 구조를 정리하는 일을 좋아하는 프론트엔드 개발자입니다.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
