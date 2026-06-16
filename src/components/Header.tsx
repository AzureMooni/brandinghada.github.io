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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#030C1B]/80 backdrop-blur-md border-b border-white/[0.06] py-3 shadow-lg"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="transition-all duration-300 flex items-center gap-2.5 group"
        >
          <Logo mode="header" />
          <span className="text-[9px] uppercase font-semibold tracking-widest px-2 py-0.5 rounded-md border border-white/[0.06] text-blue-300 bg-white/[0.02] group-hover:border-blue-400/30 group-hover:text-blue-200 transition-all duration-300 font-outfit">
            AI DRAFT BUILDER
          </span>
        </Link>

        <div>
          <button 
            onClick={() => alert("자체 개발 고성능 시스템 출시 준비 중입니다. 완성된 시안은 아래 신청양식을 통해 카카오톡으로 즉시 전송됩니다.")}
            className="px-4 py-1.5 text-[10px] font-semibold tracking-wider rounded-md border border-white/[0.08] bg-white/[0.02] text-slate-300 hover:text-white hover:bg-white/[0.05] hover:border-white/20 transition-all duration-350 hover:shadow-lg cursor-pointer font-outfit uppercase"
          >
            SYSTEM LOGIN
          </button>
        </div>
      </div>
    </header>
  );
}

