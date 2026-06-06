"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/Logo";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="transition-all duration-300 flex items-center gap-2.5 group"
        >
          <Logo mode="header" />
          <span className="text-[9px] uppercase font-extrabold tracking-widest px-1.5 py-0.5 rounded border border-blue-200/50 text-[#134074] bg-blue-50/50 group-hover:border-[#134074] group-hover:text-[#0b2545] transition-all duration-300">
            소상공인 5분 시안 제작
          </span>
        </Link>

        <div>
          <button 
            onClick={() => alert("자체 개발 고성능 시스템 출시 준비 중입니다. 완성된 시안은 아래 신청양식을 통해 카카오톡으로 즉시 전송됩니다.")}
            className="px-4 py-1.5 text-xs font-extrabold rounded-md border border-slate-300 bg-white text-slate-700 hover:text-[#134074] hover:border-[#134074]/50 transition-all duration-300 hover:shadow-sm cursor-pointer"
          >
            자체 개발 시스템 로그인
          </button>
        </div>
      </div>
    </header>
  );
}
