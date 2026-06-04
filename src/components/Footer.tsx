"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Logo & Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xl font-black tracking-tight text-slate-800 bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent">
                브랜딩하다 <span className="text-xs font-normal text-slate-500">(운영사: 코리아니티)</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded border border-yellow-500/25 text-yellow-700 bg-yellow-50">
                로컬 소상공인 솔루션
              </span>
            </div>
            
            {/* 서울 공식 비즈니스 파트너 인증 배지 */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-700 text-[10px] font-black tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              서울 공식 로컬 비즈니스 파트너
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-bold">
              우리는 구구절절 설명하지 않고 오직 실제 시공 결과물과 고객 리뷰 평판으로 입증합니다. 사장님이 시공 현장에서 땀 흘려 일하시는 순간에도 24시간 작동하는 로컬 비즈니스용 AI 세일즈 홈페이지 빌더.
            </p>
          </div>

          {/* Company Info */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-slate-800 text-xs uppercase font-extrabold tracking-wider">Company</h3>
            <ul className="space-y-2 text-xs text-slate-500 font-bold">
              <li>상호명 : 코리아니티</li>
              <li>대표자 : 김경문</li>
              <li>사업자등록번호 : 414-50-00825</li>
              <li className="flex items-center gap-1">
                <span>공식 채널 바로가기</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </li>
            </ul>
          </div>

          {/* Legal / Action */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-slate-800 text-xs uppercase font-extrabold tracking-wider">Legal</h3>
            <ul className="space-y-2 text-xs text-slate-500 font-bold">
              <li>
                <Link href="#" className="hover:text-slate-800 transition-colors">이용약관</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-800 transition-colors">개인정보처리방침</Link>
              </li>
              <li>
                <button 
                  onClick={handleScrollToTop}
                  className="hover:text-yellow-600 transition-colors text-left cursor-pointer"
                >
                  맨 위로 이동 ↑
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
          <p className="text-slate-400 font-medium">
            &copy; {currentYear} Brandinghada. Powered by VibeFlow. All rights reserved.
          </p>
          <p className="text-slate-400 font-mono text-[10px]">
            Designed for Local Inbound Sales Optimization
          </p>
        </div>

      </div>
    </footer>
  );
}
