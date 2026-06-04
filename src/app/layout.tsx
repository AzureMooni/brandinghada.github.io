import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "450 900",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "브랜딩하다 | Brandinghada",
  description: "요식업·소상공인 마케팅 전문. 가짜 리뷰 없는 데이터 기반 매출 상승 전략. 네이버 플레이스 최적화부터 블로그 체험단까지. 지금 무료 진단 받으세요.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.png?v=2", type: "image/png" }
    ],
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" href="/favicon.png?v=2" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        {/* Google Fonts - Inter & Pretendard CDN link */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" as="style" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css" />
      </head>
      <body className={cn(pretendard.className, "antialiased")}>
        {children}
        <Script
          strategy="lazyOnload"
          src="//wcs.pstatic.net/wcslog.js"
        />
        <Script id="naver-analytics" strategy="lazyOnload">
          {`
            if (!wcs_add) var wcs_add = {};
            wcs_add["wa"] = "157c84ac2282d50";
            if (window.wcs) {
                wcs_do();
            }
          `}
        </Script>
      </body>
    </html>
  );
}
