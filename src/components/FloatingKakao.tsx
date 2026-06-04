"use client";

import { MessageCircle } from "lucide-react";

export function FloatingKakao() {
  return (
    <a
      href="http://pf.kakao.com/_xcjrxjX"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#FEE500] hover:bg-[#F3D000] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all hover:scale-110 active:scale-95 group"
      aria-label="카카오톡 1:1 상담하기"
    >
      <MessageCircle className="w-7 h-7 text-[#191919] fill-[#191919]" />
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        카톡 1:1 간편상담하기
      </span>
    </a>
  );
}
