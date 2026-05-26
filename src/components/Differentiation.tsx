"use client";

import { Check, X, ShieldAlert, Award, Zap } from "lucide-react";

export function Differentiation() {
  return (
    <section className="py-24 border-t border-[#22222b]/50 px-6 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-primary font-extrabold px-3 py-1 rounded border border-primary/20 bg-primary/5">
            영업과 계약의 프레임 시프트
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-4 mb-3">
            왜 브랜딩하다가 영업의 새로운 기준인가?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            말뿐인 기획서와 수백만 원 선불 계약 대신, 이미 준비된 실제 데이터 결과물로 증명합니다.
          </p>
        </div>

        {/* 1. Desktop & Tablet View Table (md:block hidden) */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#22222b] bg-[#111115]/40 backdrop-blur-md">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#22222b] bg-[#111115]">
                <th className="py-5 px-6 font-bold text-muted-foreground w-1/4">구분</th>
                <th className="py-5 px-6 font-bold text-muted-foreground w-3/8 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-muted-foreground/60" />
                  기존 웹 에이전시 (대행사)
                </th>
                <th className="py-5 px-6 font-black text-primary w-3/8 border-l border-[#22222b] bg-primary/5 relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                    브랜딩하다 (VibeFlow 엔진)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22222b]/50">
              {/* Row 1 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">진행 순서</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  문의 <span className="text-[#8e8e9f]/50 mx-1">➔</span> 미팅 <span className="text-[#8e8e9f]/50 mx-1">➔</span> 계약 <span className="text-[#8e8e9f]/50 mx-1">➔</span> 기획 <span className="text-[#8e8e9f]/50 mx-1">➔</span> 제작 (수주일 소요)
                </td>
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/5">
                  제작 <span className="text-primary font-bold">(5분)</span> <span className="text-primary/50 mx-1">➔</span> 제안 <span className="text-primary/50 mx-1">➔</span> 확인 <span className="text-primary/50 mx-1">➔</span> 계약
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">고객 리소스</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  수 차례의 미팅 필요, 기획서 작성 및 기초 자료 조사 직접 수행
                </td>
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/5">
                  이미 쌓인 플레이스 리뷰 100% 활용, 사장님 마찰 제로
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">초기 비용</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  수백만 원 대의 선불 개발 및 디자인 착수금 필요
                </td>
                <td className="py-5 px-6 font-semibold text-primary border-l border-[#22222b] bg-primary/5">
                  초기 시안 <span className="underline decoration-primary">무료 확인</span> 후 세일즈 완료 시 구독 전환
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Mobile View 1-Column Responsive Cards (md:hidden block) */}
        <div className="md:hidden space-y-6">
          
          {/* Card 1: 기존 대행사 */}
          <div className="bg-[#111115]/50 border border-[#22222b] rounded-xl p-5 relative">
            <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm mb-4">
              <ShieldAlert className="w-4 h-4 text-muted-foreground/80" />
              <span>기존 웹 에이전시 (대행사)</span>
            </div>
            
            <div className="space-y-4 text-xs">
              <div className="border-b border-[#22222b]/50 pb-3">
                <span className="text-muted-foreground block mb-1">진행 순서</span>
                <span className="text-foreground font-semibold">
                  문의 ➔ 미팅 ➔ 계약 ➔ 기획 ➔ 제작 (수주일)
                </span>
              </div>
              <div className="border-b border-[#22222b]/50 pb-3">
                <span className="text-muted-foreground block mb-1">고객 리소스</span>
                <span className="text-foreground font-semibold">
                  기획서 작성, 자료 조사, 수차례 오프라인 미팅 리소스 요구
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">초기 비용</span>
                <span className="text-foreground font-semibold">
                  수백만 원 대의 선불 착수 및 개발금
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 브랜딩하다 (Highlight) */}
          <div className="relative group">
            {/* Glow frame border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-35" />
            
            <div className="relative bg-[#111115] border border-primary/30 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary font-black text-sm">
                  <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                  <span>브랜딩하다 (VibeFlow 엔진)</span>
                </div>
                <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-black">
                  추천
                </span>
              </div>
              
              <div className="space-y-4 text-xs">
                <div className="border-b border-[#22222b]/50 pb-3">
                  <span className="text-primary/70 block mb-1 font-bold">진행 순서</span>
                  <span className="text-foreground font-extrabold">
                    제작 (5분) ➔ 제안 ➔ 확인 ➔ 계약
                  </span>
                </div>
                <div className="border-b border-[#22222b]/50 pb-3">
                  <span className="text-primary/70 block mb-1 font-bold">고객 리소스</span>
                  <span className="text-foreground font-extrabold">
                    이미 쌓여 있는 우리 동네 플레이스 리뷰 100% 활용, 마찰 제로
                  </span>
                </div>
                <div>
                  <span className="text-primary/70 block mb-1 font-bold">초기 비용</span>
                  <span className="text-primary font-black">
                    초기 완성 시안 무료 확인 후 구독 전환
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
