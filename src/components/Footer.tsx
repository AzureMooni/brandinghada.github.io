"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1627] border-t border-slate-800 text-slate-400 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Logo mode="footer" />
              <span className="text-xs font-bold text-slate-400">
                [대표자: 김경문]
              </span>
              <a
                href="http://pf.kakao.com/_xcjrxjX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-xs font-extrabold text-blue-450 hover:text-blue-355 transition-colors border-b border-blue-500/30"
              >
                <span>카카오톡 채널 상담</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
            
            {/* 서울 공식 비즈니스 파트너 인증 배지 */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              서울 공식 로컬 비즈니스 파트너
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm font-bold">
              우리는 구구절절 설명하지 않고 오직 실제 시공 결과물과 고객 리뷰 평판으로 입증합니다. 사장님이 시공 현장에서 땀 흘려 일하시는 순간에도 24시간 작동하는 로컬 비즈니스용 AI 세일즈 홈페이지 빌더.
            </p>
          </div>

          {/* Company Info */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white text-xs uppercase font-extrabold tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs text-slate-400 font-bold">
              <li>상호명 : 코리아니티</li>
              <li>대표자 : 김경문</li>
              <li>사업자등록번호 : 414-50-00825</li>
              <li>
                <a
                  href="http://pf.kakao.com/_xcjrxjX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-blue-405 transition-colors"
                >
                  <span>공식 채널 바로가기</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Action */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-white text-xs uppercase font-extrabold tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs text-slate-400 font-bold">
              <li>
                <Link href="#" className="hover:text-white transition-colors">이용약관</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
              </li>
              <li>
                <button 
                  onClick={handleScrollToTop}
                  className="hover:text-blue-405 transition-colors text-left cursor-pointer"
                >
                  맨 위로 이동 ↑
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
          <p className="text-slate-500 font-medium">
            &copy; {currentYear} Brandinghada. Powered by VibeFlow. All rights reserved.
          </p>
          <p className="text-slate-500 font-mono text-[10px]">
            Designed for Local Inbound Sales Optimization
          </p>
        </div>

      </div>
    </footer>
  );
}
