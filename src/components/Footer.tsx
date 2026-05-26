"use client";

import Link from "next/link";
import { Youtube, Instagram, Music, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#22222b]/50 text-[#8e8e9f] py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                브랜딩하다
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded border border-primary/20 text-primary/70">
                로컬 소상공인 솔루션
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-sm">
              우리는 구구절절 설명하지 않고 오직 실제 시공 결과물과 고객 리뷰 평판으로 입증합니다. 사장님이 시공 현장에서 땀 흘려 일하시는 순간에도 24시간 작동하는 로컬 비즈니스용 AI 세일즈 홈페이지 빌더.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://blog.naver.com/brandinghada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-[#111115] border border-[#22222b] hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="네이버 블로그"
              >
                <span className="text-xs font-black font-mono">B.</span>
              </a>
              <a 
                href="https://youtube.com/channel/UC0VgLW6y_VWGBuLHbcMT4Rg?si=Wjn732zukQ4MlQRM" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-[#111115] border border-[#22222b] hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="유튜브"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/branding_hada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-[#111115] border border-[#22222b] hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="인스타그램"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.tiktok.com/@branding_hada" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-lg bg-[#111115] border border-[#22222b] hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="틱톡"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-foreground text-xs uppercase font-extrabold tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium">
              <li>상호명 : 맬로우앤모어</li>
              <li>대표자 : 김경문</li>
              <li>사업자등록번호 : 273-59-00931</li>
              <li className="flex items-center gap-1">
                <span>공식 채널 바로가기</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </li>
            </ul>
          </div>

          {/* Legal / Action */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-foreground text-xs uppercase font-extrabold tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium">
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">이용약관</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground transition-colors">개인정보처리방침</Link>
              </li>
              <li>
                <button 
                  onClick={handleScrollToTop}
                  className="hover:text-primary transition-colors text-left cursor-pointer"
                >
                  맨 위로 이동 ↑
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#22222b]/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-muted-foreground/60 font-medium">
            &copy; {currentYear} Brandinghada. Powered by VibeFlow. All rights reserved.
          </p>
          <p className="text-muted-foreground/40 font-mono text-[10px]">
            Designed for Local Inbound Sales Optimization
          </p>
        </div>

      </div>
    </footer>
  );
}
