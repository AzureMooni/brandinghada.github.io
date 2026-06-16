"use client";

import { useState, useEffect } from "react";
import { Check, X, ShieldAlert, Award, Zap, AlertTriangle, ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ThumbsUp } from "lucide-react";

// 🔢 Count-up 애니메이션 컴포넌트
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
  // Before & After 경험 증명 데이터 (Social Proof)
  const socialProofStories = [
    {
      author: "서울 마포구 최** 사장님 (시공 전문)",
      before: "매달 블로그 대행 광고비로 80만 원씩 뜯겼는데, 정작 깎아달라는 단가 비교 문의만 가끔 오고 실제 시공 계약은 단 한 건도 없었습니다.",
      after: "실제 방문 고객들이 남긴 우수한 평판과 리뷰 데이터를 딥블루 기지에 장착하여 설득하자, 광고비를 안 쓰는데도 타사보다 20% 비싼 단가에 원격 계약이 맺어지기 시작했습니다."
    },
    {
      author: "경기 수원시 이** 사장님 (설비 전문)",
      before: "홈페이지를 만들어 준다던 관리 대행사가 도메인을 가로채서 매년 수십만 원의 유지 요금 인질극을 벌이며 추가 계약을 강요했습니다.",
      after: "100% 소유권 이전 및 계약 제5조 기술독립 조항을 보장받으니 속이 다 시원합니다. 내 도메인과 소스코드를 완전히 상속받고 마찰 없이 공사 본업에만 집중하고 있습니다."
    },
    {
      author: "강원 강릉시 김** 사장님 (펜션·풀빌라 STAY)",
      before: "수백만 원 들인 화려한 사이트는 모바일에서 정렬이 다 깨지고, 고객들이 예약/문의 상담 버튼을 찾기 어려워 이탈율이 85%에 달했습니다.",
      after: "잡다한 플래시 장식을 배격하고, 모바일 폰 화면 정중앙에 '카톡 1:1 예약'을 고정하자마자 유입된 고객들의 모바일 예약 직접 전환율이 즉각 240% 이상 폭증했습니다."
    }
  ];

  // 3단계 온보딩 프로세스 가이드 데이터
  const onboardingSteps = [
    {
      step: "01",
      title: "5분 초안 자동 조립",
      desc: "가게 이름 입력",
      detail: "포털 평판 빅데이터를 분석하여 AI가 5분 만에 사장님 맞춤형 모바일 시안 초안을 실시간으로 조립합니다."
    },
    {
      step: "02",
      title: "표준 약정서 법적 조율",
      desc: "권리 관계 명문화",
      detail: "소스코드 저작재산권 이전, 인프라 비용 한도 설정, 무상 하자 보증 범위를 명문화한 표준 안심 약정서에 법적으로 서명합니다."
    },
    {
      step: "03",
      title: "정찰제 락업 빌드",
      desc: "최종 기지 락업 전송",
      detail: "조립된 시안을 사장님이 확인하고 컨펌하시면, 110만 원 단일 정찰제로 평생 소장 가능한 매출형 독점 홈페이지를 즉시 빌드하여 완성해 드립니다."
    }
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24 max-w-5xl mx-auto reveal">
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

        {/* 대조표 테이블 */}
        <div className="hidden md:block overflow-visible rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-xl shadow-2xl reveal mb-32">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="py-5 px-6 font-medium text-slate-450 w-1/4">구분</th>
                <th className="py-5 px-6 font-medium text-slate-455 w-3/8 flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-slate-500" />
                  기존 홈페이지 제작 업체
                </th>
                <th className="py-5 px-6 font-normal text-white w-3/8 border-l border-white/10 bg-white/[0.03] relative shadow-inner">
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-indigo-500" />
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
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-5 px-6 font-medium text-slate-300">제작 기간</td>
                <td className="py-5 px-6 text-slate-500 text-xs font-light leading-relaxed">
                  최소 2주에서 수개월 소요 (시안 피드백 및 개발 지연 마찰 지속)
                </td>
                <td className="py-5 px-6 font-light text-slate-300 border-l border-white/10 bg-white/[0.01] relative">
                  <span className="text-blue-300 font-normal bg-white/[0.03] px-2 py-0.5 rounded border border-white/10 mr-1.5">[자체 개발 시스템 구축]</span> 단 <span className="text-white font-normal">5분 만에</span> 사장님 전용 모바일 홈페이지 초안 즉시 조립
                </td>
              </tr>
              <tr className="hover:bg-white/[0.02] transition-colors">
                <td className="py-5 px-6 font-medium text-slate-300">사장님 리소스</td>
                <td className="py-5 px-6 text-slate-500 text-xs font-light leading-relaxed">
                  수차례 기획 미팅 필수, 홈페이지에 들어갈 텍스트와 사진 직접 준비
                </td>
                <td className="py-5 px-6 font-light text-slate-300 border-l border-white/10 bg-white/[0.01] relative">
                  <span className="text-blue-355 font-normal bg-white/[0.03] px-2 py-0.5 rounded border border-white/10 mr-1.5">[쉬운 홈페이지 관리]</span> 이미 인터넷에 쌓여있는 실제 방문자/시공 리뷰 자동 활용, <span className="text-white font-normal">마찰 제로</span>
                </td>
              </tr>
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

        {/* 모바일 대조 카드 */}
        <div className="md:hidden space-y-6 reveal mb-32">
          <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5 relative">
            <div className="flex items-center gap-2 text-slate-500 font-light text-sm mb-4">
              <ShieldAlert className="w-4 h-4" />
              <span>기존 홈페이지 제작 업체</span>
            </div>
            <div className="space-y-4 text-xs font-light">
              <div className="border-b border-white/5 pb-3">
                <span className="text-slate-550 block mb-1">제작 기간</span>
                <span className="text-slate-450 font-normal">수주일 ~ 수개월 소요 (끝없는 지연 가능성)</span>
              </div>
              <div className="border-b border-white/5 pb-3">
                <span className="text-slate-550 block mb-1">사장님 리소스</span>
                <span className="text-slate-455 font-normal">기획 미팅 필수, 각종 텍스트 및 시공 사진 사장님이 직접 수집</span>
              </div>
              <div>
                <span className="text-slate-550 block mb-1">초기 비용</span>
                <span className="text-slate-455 font-normal">수백만 원 대의 과도한 선불 착수 및 개발금 요구</span>
              </div>
            </div>
          </div>

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
                    <span className="text-[10px] text-blue-400 font-light bg-white/[0.03] px-1 py-0.5 rounded border border-white/10">[자체 시스템]</span>
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

        {/* 🤝 BEFORE & AFTER 경험 증명 (Social Proof) - 리마케팅 후기 그리드 */}
        <div className="mb-32 reveal">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-slate-300 font-light px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-4">
              <ThumbsUp className="w-3.5 h-3.5 text-blue-400" />
              Before & After Stories
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3 font-outfit">
              광고 대행사에 끌려다니던 사장님들의<br />
              <span className="font-normal bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">놀라운 갑(甲)의 위치 전환 증명</span>
            </h2>
            <p className="text-slate-405 text-xs sm:text-sm font-light">
              비싼 키워드 광고 인질극과 연장 이용 유도에 고통받던 사장님들이 브랜딩하다를 선택한 생생한 결과입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {socialProofStories.map((story, idx) => (
              <div 
                key={idx}
                className="glass-card border border-white/10 rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4 text-left">
                  {/* Before Section */}
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-red-400 uppercase tracking-wider bg-red-950/30 border border-red-500/20 px-2 py-0.5 rounded">
                      <AlertTriangle className="w-3 h-3 text-red-400" />
                      Before (도입 전)
                    </span>
                    <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-light">
                      "{story.before}"
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center justify-center py-1.5">
                    <ArrowRight className="w-5 h-5 text-blue-400/30 rotate-90 md:rotate-0" />
                  </div>

                  {/* After Section */}
                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded">
                      <Sparkles className="w-3 h-3 text-emerald-450" />
                      After (기지 탑재 후)
                    </span>
                    <p className="text-slate-205 text-xs sm:text-[13px] leading-relaxed font-normal">
                      "{story.after}"
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mt-6 text-left">
                  <span className="text-[11px] text-slate-500 font-light block">{story.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🗺️ 3단계 온보딩 프로세스 가이드 (인포그래픽 타임라인 카드) */}
        <div className="reveal">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-slate-300 font-light px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Onboarding Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight text-white mb-3 font-outfit">
              가게 이름 입력부터 완성까지<br />
              <span className="font-normal bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">단 3단계 안심 빌드 시스템</span>
            </h2>
            <p className="text-slate-405 text-xs sm:text-sm font-light">
              불필요한 대면 미팅 없이 비대면 프로세스로 가장 빠르고 명확하게 사장님만의 매출 무기를 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connection Line in Desktop */}
            <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[1px] bg-gradient-to-r from-blue-600/20 via-indigo-600/30 to-blue-600/20 -translate-y-12 z-0" />

            {onboardingSteps.map((step, idx) => (
              <div 
                key={idx}
                className="relative glass-card border border-white/10 hover:border-white/20 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 shadow-xl z-10 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-650 text-white font-mono font-medium flex items-center justify-center mx-auto mb-6 border border-white/15 shadow-md">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-light text-white mb-1.5 font-outfit">{step.title}</h3>
                  <span className="text-[10px] text-blue-300 font-bold bg-blue-950/40 px-2 py-0.5 rounded border border-blue-500/20 inline-block mb-4 uppercase tracking-wider">
                    {step.desc}
                  </span>
                  <p className="text-slate-400 text-xs sm:text-[13px] leading-relaxed font-light text-left">
                    {step.detail}
                  </p>
                </div>
                
                {/* Visual indicator (Chevrons) for next step (except last) */}
                {idx < 2 && (
                  <div className="md:hidden mt-6 flex justify-center">
                    <ArrowRight className="w-5 h-5 text-blue-500/40 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
