"use client";

import { useState, useEffect } from "react";
import { Check, X, ShieldAlert, Award, Zap } from "lucide-react";

// 🔢 Count-up 애니메이션 컴포넌트 추가
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function CountUp({ end, duration = 1200, suffix = "", prefix = "", decimals = 0 }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const val = progress * end;
      setCount(Number(val.toFixed(decimals)) as any);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, decimals]);

  return (
    <span>
      {prefix}
      {count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export function Differentiation() {
  return (
    <section className="py-36 md:py-44 border-t border-[#22222b]/50 px-6 relative overflow-hidden bg-gradient-to-b from-[#070709] to-background">
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

        {/* 📊 시각 지표 (Visual Metrics Dashboard) - Count-up 및 형광펜 효과 탑재 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="relative group bg-gradient-to-br from-[#111115] to-[#14141a] border border-[#22222b] hover:border-primary/30 rounded-2xl p-6 text-center transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-primary" />
            <span className="text-xs text-muted-foreground font-black block mb-2">실제 시공 평판 과잉청구 검증률</span>
            <span className="text-4xl sm:text-5xl font-black text-primary font-mono tracking-tight block mb-2">
              <CountUp end={99.8} decimals={1} suffix="%" />
            </span>
            <span className="text-[11.5px] text-muted-foreground leading-relaxed block">
              플레이스에 등록된 사장님 실제 고객 리뷰 만족도 <span className="highlight-yellow text-slate-100 font-extrabold">평판 빅데이터 필터 검증</span> 완료
            </span>
          </div>

          {/* Card 2 */}
          <div className="relative group bg-gradient-to-br from-[#111115] to-[#14141a] border border-[#22222b] hover:border-secondary/30 rounded-2xl p-6 text-center transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-secondary" />
            <span className="text-xs text-muted-foreground font-black block mb-2">AI 초안 시안 확인 시간</span>
            <span className="text-4xl sm:text-5xl font-black text-secondary font-mono tracking-tight block mb-2">
              단 <CountUp end={5} suffix="분" />
            </span>
            <span className="text-[11.5px] text-muted-foreground leading-relaxed block">
              몇 주씩 지연되는 디자인 미팅 대신, 리뷰 스캔으로 <span className="highlight-blue text-slate-100 font-extrabold">5분 만에 세일즈 홈 완성</span>
            </span>
          </div>

          {/* Card 3 */}
          <div className="relative group bg-gradient-to-br from-[#111115] to-[#14141a] border border-[#22222b] hover:border-[#eab308]/30 rounded-2xl p-6 text-center transition-all duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-[#eab308]" />
            <span className="text-xs text-muted-foreground font-black block mb-2">완납 시 소스코드 완전 양도 보장</span>
            <span className="text-4xl sm:text-5xl font-black text-[#eab308] font-mono tracking-tight block mb-2">
              <CountUp end={100} suffix="%" />
            </span>
            <span className="text-[11.5px] text-muted-foreground leading-relaxed block">
              대행사 인질 리스크 완전 제거! 완납 즉시 법적으로 <span className="highlight-yellow text-slate-100 font-extrabold">영구 소유권 이전 권리</span> 성문화 보증
            </span>
          </div>
        </div>

        {/* 1. Desktop & Tablet View Table */}
        <div className="hidden md:block overflow-visible rounded-2xl border border-[#22222b] bg-[#111115]/40 backdrop-blur-md">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#22222b] bg-[#111115]">
                <th className="py-5 px-6 font-bold text-muted-foreground w-1/4">구분</th>
                <th className="py-5 px-6 font-bold text-muted-foreground w-3/8 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-muted-foreground/60" />
                  기존 홈페이지 제작 업체
                </th>
                
                {/* 🏆 브랜딩하다 열에 부드러운 Glow 광원 효과 및 골드 추천 배지 부착 */}
                <th className="py-5 px-6 font-black text-primary w-3/8 border-l border-[#22222b] bg-primary/10 relative shadow-[inset_0_0_20px_rgba(250,204,21,0.1)]">
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-primary via-accent to-secondary" />
                  
                  {/* Gold Badge */}
                  <div className="absolute -top-3.5 right-4 bg-gradient-to-r from-primary to-accent text-background text-[9px] font-black px-2 py-0.5 rounded shadow-lg flex items-center gap-0.5 uppercase tracking-wide z-10 animate-bounce">
                    <span>🏆 사장님 안심 추천</span>
                  </div>
                  
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                    브랜딩하다 (코리아니티)
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
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/10 relative shadow-[inset_0_0_10px_rgba(250,204,21,0.05)]">
                  <span className="text-primary font-black bg-primary/10 px-2 py-0.5 rounded border border-primary/20 mr-1.5">[AI 기반 초고속 구축]</span> 단 <span className="text-primary font-bold">5분 만에</span> 사장님 전용 모바일 홈페이지 초안 즉시 빌드
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">사장님 리소스</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  수차례 기획 미팅 필수, 홈페이지에 들어갈 텍스트와 사진 직접 준비
                </td>
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/10 relative shadow-[inset_0_0_10px_rgba(250,204,21,0.05)]">
                  <span className="text-secondary font-black bg-secondary/15 px-2 py-0.5 rounded border border-secondary/20 mr-1.5">[마찰 제로 프로세스]</span> 이미 인터넷에 쌓여있는 실제 방문자/시공 리뷰 자동 활용, <span className="text-primary font-bold">마찰 제로</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#14141a]/30 transition-colors">
                <td className="py-5 px-6 font-bold text-foreground">초기 비용 & 소유권</td>
                <td className="py-5 px-6 text-muted-foreground text-xs font-medium">
                  수백만 원대 고액 선불금 요구 및 매년 높은 서버/수정 요금 인질 영업
                </td>
                <td className="py-5 px-6 font-semibold text-foreground border-l border-[#22222b] bg-primary/10 relative shadow-[inset_0_0_10px_rgba(250,204,21,0.05)]">
                  <span className="text-[#facc15] font-black bg-[#facc15]/10 px-2 py-0.5 rounded border border-[#facc15]/20 mr-1.5">[법적 자산권 완전 양도]</span> 시안 100% 무료 확인, 맘에 들면 <span className="text-primary font-black">110만 원 정찰제</span> 구축 (월 유지관리 5.5만 원 고정 / 완납 시 소유권 양도)
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

          {/* Card 2: 브랜딩하다 (Highlight & Glow CRO) */}
          <div className="relative group">
            {/* Soft, beautiful yellow pulse glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-xl blur-lg opacity-40 animate-pulse" />
            
            <div className="relative bg-[#111115] border-2 border-primary rounded-xl p-5 shadow-[0_0_30px_rgba(250,204,21,0.2)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-primary font-black text-sm">
                  <Zap className="w-4 h-4 text-primary fill-primary animate-pulse" />
                  <span>브랜딩하다 (코리아니티)</span>
                </div>
                <span className="text-[9px] bg-gradient-to-r from-primary to-accent text-background px-2.5 py-0.5 rounded font-black flex items-center gap-0.5 shadow">
                  <span>🏆 사장님 추천 (Best)</span>
                </span>
              </div>
              
              <div className="space-y-4 text-xs">
                <div className="border-b border-[#22222b]/50 pb-3">
                  <span className="text-primary/70 block mb-1 font-bold">제작 기간</span>
                  <span className="text-foreground font-extrabold flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-primary font-black bg-primary/10 px-1 py-0.5 rounded border border-primary/20">[AI 기반 초고속 구축]</span>
                    <span>단 5분 만에 시안 초안 자동 퍼블리싱</span>
                  </span>
                </div>
                <div className="border-b border-[#22222b]/50 pb-3">
                  <span className="text-primary/70 block mb-1 font-bold">사장님 리소스</span>
                  <span className="text-foreground font-extrabold flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-secondary font-black bg-secondary/15 px-1 py-0.5 rounded border border-secondary/20">[마찰 제로 프로세스]</span>
                    <span>방문 시공 리뷰 자동 스캔, 사장님 개입 0%</span>
                  </span>
                </div>
                <div>
                  <span className="text-primary/70 block mb-1 font-bold">초기 비용 & 소유권</span>
                  <span className="text-primary font-black flex flex-wrap items-center gap-1.5 text-left">
                    <span className="text-[10px] text-[#facc15] font-black bg-[#facc15]/10 px-1 py-0.5 rounded border border-[#facc15]/20">[법적 자산권 완전 양도]</span>
                    <span>시안 무료 확인, 110만 원 정찰제 (월 5.5만 원 / 완납 시 자산권 양도)</span>
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
