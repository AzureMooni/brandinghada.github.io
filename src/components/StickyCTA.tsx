"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 400px 이상 스크롤되었을 때 하단 스티키 CTA 바 노출
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = () => {
    const previewSection = document.getElementById("interactive-preview");
    if (previewSection) {
      previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#030C1B]/90 backdrop-blur-md border-t border-white/[0.08] py-4 px-6 flex items-center justify-center animate-in slide-in-from-bottom-full duration-300">
      <div className="max-w-4xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white text-xs sm:text-sm font-light leading-none">
            지금 사장님 가게에 쌓인 포털 리뷰 평판을 확인하고 5분 홈페이지를 조립하세요.
          </p>
        </div>
        
        {/* 카카오 옐로우 액센트와 딥블루 프레임의 고전환 CTA 버튼 */}
        <button
          onClick={handleScrollToForm}
          className="flex items-center justify-center gap-2 bg-[#fef01b] hover:bg-[#f3e316] text-[#030C1B] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl border-2 border-[#134074] shadow-md hover:shadow-lg transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer w-full sm:w-auto"
        >
          <MessageCircle className="w-4.5 h-4.5 text-[#030C1B] fill-[#030C1B] animate-pulse" />
          <span>내 비즈니스 5분 초안 무료 확인하기</span>
          <ArrowRight className="w-4 h-4 text-[#030C1B]" />
        </button>
      </div>
    </div>
  );
}
