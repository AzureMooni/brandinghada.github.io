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
    <section className="py-36 md:py-44 border-t border-white/[0.06] px-6 relative overflow-hidden bg-[#030C1B]">
      {/* Decorative Blur BG */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />


      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-20 text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-widest text-slate-300 font-light px-3 py-1 rounded border border-white/10 bg-white/[0.03] backdrop-blur-md">
            로컬 소상공인 보증 등급
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-4 mb-3 font-outfit">
            왜 브랜딩하다가<br className="sm:hidden" /> <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-normal">홈페이지 제작의 새로운 기준인가?</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            비싼 선불 계약이나 골치 아픈 디자인 기획 회의 대신, 이미 검증된 실제 고객 평판 데이터로 결과를 입증합니다.
          </p>
        </div>

        {/* 📊 시각 지표 (Visual Metrics Dashboard) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20 max-w-5xl mx-auto reveal">
          {/* Card 1 */}
          <div className="relative group glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-300 shadow-xl border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/20" />
            <span className="text-xs text-slate-450 font-light block mb-2">실제 시공 평판 과잉청구 검증률</span>
            <span className="text-4xl sm:text-5xl font-light text-white font-outfit tracking-tight block mb-2">
              <CountUp end={99.8} decimals={1} suffix="%" />
            </span>
            <span className="text-[11.5px] text-slate-400 leading-relaxed block font-light">
              플레이스에 등록된 사장님 실제 고객 리뷰 만족도 <span className="bg-white/[0.03] text-blue-300 px-1 py-0.5 rounded font-normal border border-white/15">평판 빅데이터 필터 검증</span> 완료
            </span>
          </div>

          {/* Card 2 */}
          <div className="relative group glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-300 shadow-xl border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/20" />
            <span className="text-xs text-slate-450 font-light block mb-2">시안 확인 시간</span>
            <span className="text-4xl sm:text-5xl font-light text-white font-outfit tracking-tight block mb-2">
              단 <CountUp end={5} suffix="분" />
            </span>
            <span className="text-[11.5px] text-slate-400 leading-relaxed block font-light">
              몇 주씩 지연되는 디자인 미팅 대신, 리뷰 스캔으로 <span className="bg-white/[0.03] text-blue-300 px-1 py-0.5 rounded font-normal border border-white/15">5분 만에 세일즈 홈 완성</span>
            </span>
          </div>

          {/* Card 3 */}
          <div className="relative group glass-card glass-card-hover rounded-2xl p-6 text-center transition-all duration-300 shadow-xl border border-white/10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-white/20" />
            <span className="text-xs text-slate-450 font-light block mb-2">완납 시 소스코드 완전 양도 보장</span>
            <span className="text-4xl sm:text-5xl font-light text-white font-outfit tracking-tight block mb-2">
              <CountUp end={100} suffix="%" />
            </span>
            <span className="text-[11.5px] text-slate-400 leading-relaxed block font-light">
              대행사 인질 리스크 완전 제거! 완납 즉시 법적으로 <span className="bg-white/[0.03] text-blue-300 px-1 py-0.5 rounded font-normal border border-white/15">법적 소유권 100% 보장</span> 성문화 보증
            </span>
          </div>
        </div>

        {/* 1. Desktop & Tablet View Table */}
        <div className="hidden md:block overflow-visible rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-xl shadow-2xl reveal">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="py-5 px-6 font-medium text-slate-450 w-1/4">구분</th>
                <th className="py-5 px-6 font-medium text-slate-455 w-3/8 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-slate-500" />
                  기존 홈페이지 제작 업체
                </th>
                
                {/* 🏆 브랜딩하다 열에 골드 추천 배지 부착 */}
                <th className="py-5 px-6 font-normal text-white w-3/8 border-l border-white/10 bg-white/[0.03] relative shadow-inner">
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-indigo-500" />
                  
                  {/* Gold Badge */}
                  <div className="absolute -top-3.5 right-4 bg-white text-[#030C1B] text-[9px] font-normal px-2.5 py-0.5 rounded shadow-lg flex items-center gap-0.5 uppercase tracking-wide z-10">
                    <span>🏆 사장님 안심 추천</span>
                  </div>
                  
                  <span className="flex items-center gap-2 font-outfit font-light">
                    <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                    브랜딩하다 (코리아니티)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {/* Row 1 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-5 px-6 font-medium text-slate-300">제작 기간</td>
                <td className="py-5 px-6 text-slate-500 text-xs font-light leading-relaxed">
                  최소 2주에서 수개월 소요 (시안 피드백 및 개발 지연 마찰 지속)
                </td>
                <td className="py-5 px-6 font-light text-slate-300 border-l border-white/10 bg-white/[0.01] relative">
                  <span className="text-blue-300 font-normal bg-white/[0.03] px-2 py-0.5 rounded border border-white/10 mr-1.5">[자체 개발 고성능 시스템 구축]</span> 단 <span className="text-white font-normal">5분 만에</span> 사장님 전용 모바일 홈페이지 초안 즉시 조립
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-5 px-6 font-medium text-slate-300">사장님 리소스</td>
                <td className="py-5 px-6 text-slate-500 text-xs font-light leading-relaxed">
                  수차례 기획 미팅 필수, 홈페이지에 들어갈 텍스트와 사진 직접 준비
                </td>
                <td className="py-5 px-6 font-light text-slate-300 border-l border-white/10 bg-white/[0.01] relative">
                  <span className="text-blue-350 font-normal bg-white/[0.03] px-2 py-0.5 rounded border border-white/10 mr-1.5">[쉬운 홈페이지 관리]</span> 이미 인터넷에 쌓여있는 실제 방문자/시공 리뷰 자동 활용, <span className="text-white font-normal">마찰 제로</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-5 px-6 font-medium text-slate-300">초기 비용 & 소유권</td>
                <td className="py-5 px-6 text-slate-500 text-xs font-light leading-relaxed">
                  수백만 원대 고액 선불금 요구 및 매년 높은 서버/수정 요금 인질 영업
                </td>
                <td className="py-5 px-6 font-light text-slate-300 border-l border-white/10 bg-white/[0.01] relative">
                  <span className="text-blue-300 font-normal bg-white/[0.03] px-2 py-0.5 rounded border border-white/10 mr-1.5">[법적 소유권 100% 보장]</span> 시안 100% 무료 확인, 맘에 들면 <span className="text-white font-normal">110만 원 정찰제</span> 구축 (월 유지관리 5.5만 원 고정 / 완납 시 소유권 완전 이전)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Mobile View 1-Column Cards */}
        <div className="md:hidden space-y-6 reveal">
          
          {/* Card 1: 기존 업체 */}
          <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 relative">
            <div className="flex items-center gap-2 text-slate-500 font-light text-sm mb-4">
              <ShieldAlert className="w-4 h-4" />
              <span>기존 홈페이지 제작 업체</span>
            </div>
            
            <div className="space-y-4 text-xs font-light">
              <div className="border-b border-white/5 pb-3">
                <span className="text-slate-550 block mb-1">제작 기간</span>
                <span className="text-slate-450 font-normal">
                  수주일 ~ 수개월 소요 (끝없는 지연 가능성)
                </span>
              </div>
              <div className="border-b border-white/5 pb-3">
                <span className="text-slate-550 block mb-1">사장님 리소스</span>
                <span className="text-slate-455 font-normal">
                  기획 미팅 필수, 각종 텍스트 및 시공 사진 사장님이 직접 수집
                </span>
              </div>
              <div>
                <span className="text-slate-550 block mb-1">초기 비용</span>
                <span className="text-slate-455 font-normal">
                  수백만 원 대의 과도한 선불 착수 및 개발금 요구
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: 브랜딩하다 (Highlight & Glow) */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-20" />
            
            <div className="relative glass-card border border-white/10 rounded-xl p-5 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-white font-light text-sm font-outfit">
                  <Zap className="w-4 h-4 text-blue-400 animate-pulse" />
                  <span>브랜딩하다 (코리아니티)</span>
                </div>
                <span className="text-[9px] bg-white text-[#030C1B] px-2.5 py-0.5 rounded font-normal flex items-center gap-0.5 shadow">
                  <span>🏆 사장님 추천 (Best)</span>
                </span>
              </div>
              
              <div className="space-y-4 text-xs font-light">
                <div className="border-b border-white/5 pb-3">
                  <span className="text-blue-300 block mb-1">제작 기간</span>
                  <span className="text-slate-300 font-normal flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-blue-400 font-light bg-white/[0.03] px-1 py-0.5 rounded border border-white/10">[자체 고성능 시스템]</span>
                    <span>단 5분 만에 시안 초안 자동 조립</span>
                  </span>
                </div>
                <div className="border-b border-white/5 pb-3">
                  <span className="text-blue-350 block mb-1">사장님 리소스</span>
                  <span className="text-slate-300 font-normal flex flex-wrap items-center gap-1.5">
                    <span className="text-[10px] text-blue-400 font-light bg-white/[0.03] px-1 py-0.5 rounded border border-white/10">[쉬운 홈페이지 관리]</span>
                    <span>방문 시공 리뷰 자동 스캔, 사장님 개입 0%</span>
                  </span>
                </div>
                <div>
                  <span className="text-blue-300 block mb-1">초기 비용 & 소유권</span>
                  <span className="text-slate-300 font-normal flex flex-wrap items-center gap-1.5 text-left">
                    <span className="text-[10px] text-blue-400 font-light bg-white/[0.03] px-1 py-0.5 rounded border border-white/10">[법적 소유권 100% 보장]</span>
                    <span>시안 무료 확인, 110만 원 정찰제 (월 5.5만 원 / 완납 시 소유권 완전 양도)</span>
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

