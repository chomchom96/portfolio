import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "조용운의 포트폴리오입니다.",
  description: "",
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
