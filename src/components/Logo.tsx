"use client";

import { cn } from "@/lib/utils";

interface LogoProps {
  mode?: "header" | "footer";
  className?: string;
}

export function Logo({ mode = "header", className }: LogoProps) {
  const isHeader = mode === "header";
  
  // 딥 네이비 (#0B2545) vs Charcoal Blue (#1D2D44)
  const colorClass = isHeader 
    ? "text-[#0B2545]" 
    : "text-[#1D2D44]";

  return (
    <div className={cn("flex items-center gap-2.5 select-none", className)}>
      {/* 📐 기하학적 SVG 심볼 (완벽한 대칭과 직각의 미학 - 금(金)의 체계 & 임수(壬水)의 깊이) */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("flex-shrink-0 transition-colors duration-300", colorClass)}
      >
        {/* 'ㅂ' 형상과 사각 그리드 시스템의 직각 결합 */}
        <path
          d="M5 4v16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M19 4v16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M5 12h14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <path
          d="M5 20h14"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="square"
        />
        {/* 견고함을 시각화하는 내부 미니 사각형 포인트 코어 */}
        <rect
          x="9"
          y="6"
          width="6"
          height="3"
          fill="currentColor"
          className="opacity-80"
        />
      </svg>

      {/* ✍️ 단단한 고대비 워드마크 (Wordmark) */}
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
