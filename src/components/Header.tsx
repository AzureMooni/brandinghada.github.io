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
          ? "bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#22222b]/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-black tracking-tight text-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
        >
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:glow-cyan">
            브랜딩하다
          </span>
          <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded border border-primary/30 text-primary/80 group-hover:border-primary group-hover:text-primary transition-all duration-300">
            VibeFlow Engine v2
          </span>
        </Link>

        <div>
          <button 
            onClick={() => alert("SaaS 플랫폼 베타 준비 중입니다.")}
            className="px-4 py-1.5 text-xs font-semibold rounded-md border border-[#22222b] bg-[#111115]/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,254,0.1)] cursor-pointer"
          >
            SaaS 로그인
          </button>
        </div>
      </div>
    </header>
  );
}
