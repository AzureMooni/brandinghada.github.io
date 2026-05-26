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
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-extrabold px-3 py-1 rounded border border-secondary/20 bg-secondary/5">
            로컬 소상공인 보증 등급
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-4 mb-3">
            왜 브랜딩하다가 홈페이지 제작의 새로운 기준인가?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            비싼 선불 계약이나 골치 아픈 디자인 기획 회의 대신, 이미 검증된 실제 고객 평판 데이터로 결과를 입증합니다.
          </p>
        </div>

        {/* 1. Desktop & Tablet View Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-[#22222b] bg-[#111115]/40 backdrop-blur-md">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#22222b] bg-[#111115]">
                <th className="py-5 px-6 font-bold text-muted-foreground w-1/4">구분</th>
                <th className="py-5 px-6 font-bold text-muted-foreground w-3/8 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-muted-foreground/60" />
                  기존 홈페이지 제작 업체
                </th>
                <th className="py-5 px-6 font-black text-primary w-3/8 border-l border-[#22222b] bg-primary/5 relative">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                    브랜딩하다 (바이브플로우)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#22222b]/50">
              {/* Row 1 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">제작 기간</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  최소 2주에서 수개월 소요 (시안 피드백 및 개발 지연 마찰 지속)
                </td>
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/5">
                  단 <span className="text-primary font-bold">5분 만에</span> 사장님 전용 모바일 홈페이지 초안 즉시 빌드
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">사장님 리소스</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  수차례 기획 미팅 필수, 홈페이지에 들어갈 텍스트와 사진 직접 준비
                </td>
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/5">
                  이미 인터넷에 쌓여있는 실제 방문자/시공 리뷰 자동 활용, <span className="text-primary font-bold">마찰 제로</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">초기 비용</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  제작이 시작되기 전에 수백만 원 대의 고액 착수금 및 디자인 선불금 요구
                </td>
                <td className="py-5 px-6 font-semibold text-primary border-l border-[#22222b] bg-primary/5">
                  초기 완성과 시안 확인은 <span className="underline decoration-primary">100% 무료</span>, 맘에 들면 월 구독 전환
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Mobile View 1-Column Cards */}
        <div className="md:hidden space-y-6">
          
          {/* Card 1: 기존 업체 */}
          <div className="bg-[#111115]/50 border border-[#22222b] rounded-xl p-5 relative">
            <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm mb-4">
              <ShieldAlert className="w-4 h-4 text-muted-foreground/80" />
              <span>기존 홈페이지 제작 업체</span>
            </div>
            
            <div className="space-y-4 text-xs">
              <div className="border-b border-[#22222b]/50 pb-3">
                <span className="text-muted-foreground block mb-1">제작 기간</span>
                <span className="text-foreground font-semibold">
                  수주일 ~ 수개월 소요 (끝없는 지연 가능성)
                </span>
              </div>
              <div className="border-b border-[#22222b]/50 pb-3">
                <span className="text-muted-foreground block mb-1">사장님 리소스</span>
                <span className="text-foreground font-semibold">
                  기획 미팅 필수, 각종 텍스트 및 시공 사진 사장님이 직접 수집
                </span>
              </div>
              <div>
                <span className="text-muted-foreground block mb-1">초기 비용</span>
                <span className="text-foreground font-semibold">
                  수백만 원 대의 과도한 선불 착수 및 개발금 요구
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 브랜딩하다 (Highlight) */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-35" />
            
            <div className="relative bg-[#111115] border border-primary/30 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary font-black text-sm">
                  <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                  <span>브랜딩하다 (바이브플로우)</span>
                </div>
                <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-black">
                  추천
                </span>
              </div>
              
              <div className="space-y-4 text-xs">
                <div className="border-b border-[#22222b]/50 pb-3">
                  <span className="text-primary/70 block mb-1 font-bold">제작 기간</span>
                  <span className="text-foreground font-extrabold">
                    단 5분 만에 시안 초안 자동 퍼블리싱
                  </span>
                </div>
                <div className="border-b border-[#22222b]/50 pb-3">
                  <span className="text-primary/70 block mb-1 font-bold">사장님 리소스</span>
                  <span className="text-foreground font-extrabold">
                    기존에 이미 쌓여 있는 매장 시공 리뷰 자동 스캔, 사장님 마찰 제로
                  </span>
                </div>
                <div>
                  <span className="text-primary/70 block mb-1 font-bold">초기 비용</span>
                  <span className="text-primary font-black">
                    완성 시안 무료 확인 후 마음에 들 때만 저렴한 월 구독형 전환
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
