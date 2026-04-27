import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "브랜딩하다 | Brandinghada",
  description: "요식업·소상공인 마케팅 전문. 가짜 리뷰 없는 데이터 기반 매출 상승 전략. 네이버 플레이스 최적화부터 블로그 체험단까지. 지금 무료 진단 받으세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={cn(inter.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
