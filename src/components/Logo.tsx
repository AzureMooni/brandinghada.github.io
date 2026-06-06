"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  mode?: "header" | "footer";
  className?: string;
}

export function Logo({ mode = "header", className }: LogoProps) {
  const isHeader = mode === "header";
  
  // Header: 딥 네이비 (#0B2545) | Footer: Charcoal Blue (#1D2D44)
  const colorClass = isHeader 
    ? "text-[#0B2545]" 
    : "text-[#1D2D44]";

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {/* 📐 딥블루 계열 배경에 흰색 B만 크게 강조한 미니멀 심볼 */}
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("flex-shrink-0 transition-colors duration-300 rounded-md shadow-sm", colorClass)}
      >
        {/* 딥블루/Charcoal Blue 배경 */}
        <rect
          width="24"
          height="24"
          rx="5"
          fill="currentColor"
        />
        {/* 흰색 'B' 심볼 */}
        <path
          d="M8.5 6.5h4a2.25 2.25 0 0 1 2.25 2.25v0A2.25 2.25 0 0 1 12.5 11h-4v-4.5Z"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <path
          d="M8.5 11h4.5a2.25 2.25 0 0 1 2.25 2.25v0a2.25 2.25 0 0 1-2.25 2.25h-4.5V11Z"
          stroke="white"
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>

      {/* ✍️ 단단한 고대비 워드마크 */}
      <span
        className={cn(
          "font-sans tracking-tight transition-colors duration-300",
          isHeader 
            ? "text-xl font-black text-[#0B2545]" 
            : "text-lg font-extrabold text-[#1D2D44]"
        )}
      >
        브랜딩하다
      </span>
    </div>
  );
}
