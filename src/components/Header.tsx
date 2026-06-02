"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
          className="text-xl font-black tracking-tight text-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
        >
          <span className="bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent group-hover:glow-yellow font-sans">
            브랜딩하다
          </span>
          <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded border border-yellow-500/30 text-yellow-700 group-hover:border-yellow-500 group-hover:text-yellow-600 transition-all duration-300">
            소상공인 5분 시안 빌더
          </span>
        </Link>

        <div>
          <button 
            onClick={() => alert("SaaS 플랫폼 출시 준비 중입니다. 완성된 시안은 아래 리드 폼을 통해 카톡으로 즉시 전송됩니다.")}
            className="px-4 py-1.5 text-xs font-bold rounded-md border border-slate-200 bg-white text-slate-600 hover:text-yellow-600 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-sm cursor-pointer"
          >
            SaaS 로그인
          </button>
        </div>
      </div>
    </header>
  );
}
