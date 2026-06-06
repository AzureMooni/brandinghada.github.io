import { useState, useRef, FormEvent, useEffect } from "react";
import { Search, Loader2, Sparkles, Smartphone, Phone, ArrowUpRight, ShieldCheck, Star, MessageCircle } from "lucide-react";

interface HeroProps {
  onSearchStart: (keyword: string) => void;
  onSearchComplete: (keyword: string) => void;
}

// 🔢 Count-up 애니메이션 컴포넌트
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUp({ end, duration = 1200, suffix = "", prefix = "", decimals = 0 }: CountUpProps) {
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

export function Hero({ onSearchStart, onSearchComplete }: HeroProps) {
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!keyword.trim() || isLoading) return;

    setIsLoading(true);
    onSearchStart(keyword);

    // AI 시공 리뷰 분석 로딩 애니메이션
    setLoadingStep(1);
    
    setTimeout(() => {
      setLoadingStep(2);
    }, 350);

    setTimeout(() => {
      setLoadingStep(3);
    }, 700);

    setTimeout(() => {
      setIsLoading(false);
      setLoadingStep(0);
      onSearchComplete(keyword);
      
      // 검색 완료 후 시안 프레임 영역으로 부드럽게 스크롤
      setTimeout(() => {
        const previewSection = document.getElementById("interactive-preview");
        if (previewSection) {
          previewSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }, 1100);
  };

  const handleSampleClick = (sampleName: string) => {
    setKeyword(sampleName);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <section className="relative pt-40 pb-36 md:pt-52 md:pb-48 flex flex-col items-center justify-center overflow-hidden px-6 bg-[#071120] border-b border-[#1e293b]">
      {/* Background Decorative Gradients (Soft Light mode) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#134074]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title, search input and social proof */}
          <div className="lg:col-span-7 text-left space-y-8 reveal">
            {/* Sub Badge (용어 순화 완료 - 4050 사장님 눈높이형) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e293b] bg-[#111e35] text-[#94a3b8] text-xs sm:text-sm font-black tracking-wide animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-[#134074]" />
                쉬운 홈페이지 관리 & 실시간 수정
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#1e293b] bg-[#111e35] text-[#94a3b8] text-xs sm:text-sm font-black tracking-wide">
                <span className="text-white font-black"><CountUp end={110} suffix="만 원" /></span> 정찰제
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                월 <span className="text-white font-black"><CountUp end={5.5} duration={1200} decimals={1} suffix="만 원" /></span> 유지보수
              </div>
            </div>
 
            {/* 10% 더 커지고 눈이 편한 한글 타이틀 */}
            <h1 className="text-4xl sm:text-5.5xl md:text-6.5xl font-black tracking-tight leading-[1.3] text-white">
              사장님 성함만 넣으세요.<br />
              <span className="bg-gradient-to-r from-white via-[#94a3b8] to-slate-400 bg-clip-text text-transparent">
                5분 뒤 카톡 문의가 시작되는 홈페이지가 생깁니다.
              </span>
            </h1>
 
            {/* 사회적 증거 배지 (라이트 테마 대비) */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10 text-emerald-300 text-xs sm:text-base font-black shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>🟢 실시간 확인: 이미 <span className="text-white font-mono font-black text-sm sm:text-lg"><CountUp end={154} /></span>명의 사장님이 시안을 확인하셨습니다!</span>
            </div>
 
            {/* Search Bar UI */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative group max-w-xl">
                {/* Glow border on focus/hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#134074] to-[#0b2545] rounded-2xl blur opacity-25 group-focus-within:opacity-50 group-hover:opacity-35 transition duration-300 pointer-events-none" />
                
                <div className="relative flex items-center bg-[#111e35] border border-[#1e293b] rounded-2xl overflow-hidden px-4 sm:px-6 py-4.5 shadow-md">
                  <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                  
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="예: 'GG그린방수' 또는 가게 이름을 입력하세요."
                    disabled={isLoading}
                    className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none text-base sm:text-lg font-bold pr-12"
                  />
 
                  {/* 입체적인 Shimmer 광원 효과 CTA 버튼 (가독성 강화) */}
                  <button
                    type="submit"
                    disabled={isLoading || !keyword.trim()}
                    className="absolute right-2 px-5 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-[#134074] via-[#0b2545] to-[#134074] text-white font-black text-sm sm:text-base hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 disabled:from-slate-800 disabled:to-slate-800 disabled:text-slate-500 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite] pointer-events-none" />
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>분석 중...</span>
                      </>
                    ) : (
                      <span>시안 즉시 확인</span>
                    )}
                  </button>
                </div>
              </div>
            </form>
 
            {/* Step-by-step Loading UI */}
            {isLoading && (
              <div className="max-w-xl bg-[#111e35] border border-[#1e293b] rounded-2xl p-5 text-left animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] text-[#94a3b8] font-mono font-black">자체 개발 고성능 시스템 가동 중</span>
                  <span className="text-xs font-bold text-[#134074] animate-pulse">홈페이지 자동 조립 중...</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
                  <div 
                    className="bg-gradient-to-r from-[#134074] to-[#0b2545] h-full transition-all duration-500" 
                    style={{ width: `${(loadingStep / 3) * 100}%` }}
                  />
                </div>
 
                {/* Steps text */}
                <div className="space-y-2 font-bold text-xs text-slate-350">
                  <div className={`flex items-center gap-2.5 transition-colors ${loadingStep >= 1 ? "text-blue-400" : "text-slate-650"}`}>
                    <span>{loadingStep >= 1 ? "✓" : "○"}</span>
                    <span>[1단계] 사장님 가게에 쌓인 진짜 추천 글 수집 완료</span>
                  </div>
                  <div className={`flex items-center gap-2.5 transition-colors ${loadingStep >= 2 ? "text-blue-400" : "text-slate-650"}`}>
                    <span>{loadingStep >= 2 ? "✓" : "○"}</span>
                    <span>[2단계] 불필요한 과잉청구 오해 요소 자동 차단 완료</span>
                  </div>
                  <div className={`flex items-center gap-2.5 transition-colors ${loadingStep >= 3 ? "text-blue-400" : "text-slate-650"}`}>
                    <span>{loadingStep >= 3 ? "✓" : "○"}</span>
                    <span>[3단계] 카카오톡 상담이 바로 열리는 모바일 화면 조립 완료</span>
                  </div>
                </div>
              </div>
            )}
 
            {/* Search Samples */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="text-slate-400 font-bold">눌러서 바로 확인해보세요 :</span>
              {["GG그린방수", "일성종합설비", "바른인테리어"].map((sample) => (
                <button 
                  key={sample}
                  type="button"
                  onClick={() => handleSampleClick(sample)}
                  className="px-3.5 py-1.5 rounded-full border border-[#1e293b] bg-[#111e35] hover:bg-[#134074] text-slate-300 hover:text-white font-bold transition-all duration-300 cursor-pointer shadow-sm"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>
 
          {/* Right Column: Premium Auto-scrolling Mobile Device Mockup (Apple style Bezel, Pin-Light Effect) */}
          <div className="lg:col-span-5 flex justify-center reveal">
            <div 
              id="mobile-mockup-frame"
              className="relative w-full max-w-[280px] aspect-[9/18.5] bg-[#0f172a] rounded-[44px] p-2.5 shadow-[0_10px_50px_rgba(0,0,0,0.35)] border-[5px] border-[#334155] overflow-hidden group transition-all duration-300 ease-out will-change-transform"
            >
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#334155] rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-[#475569] rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-[#475569] rounded-full"></div>
              </div>
              
              {/* Bottom Home Indicator */}
              <div className="absolute bottom-1 w-24 h-1 bg-[#475569] rounded-full left-1/2 -translate-x-1/2 z-30" />
 
              {/* Autoscrolling Mobile Content Wrapper */}
              <div className="w-full h-full bg-[#ffffff] rounded-[36px] overflow-hidden relative text-left select-none border border-slate-250 shadow-inner">
                
                {/* Scrolling Content - Animate automatically via CSS */}
                <div className="absolute w-full top-0 left-0 space-y-4 px-4 pt-8 pb-12 animate-[scrollMockup_25s_ease-in-out_infinite]">
                  
                  {/* Local Business Header */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 mb-2">
                    <span className="text-[10px] font-black text-[#0b2545]">GG그린방수</span>
                    <span className="text-[8px] bg-blue-50 text-[#0b2545] px-1.5 py-0.5 rounded font-black tracking-wide border border-blue-200/50">시공 전문</span>
                  </div>
 
                  {/* Rating star Badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-blue-200/50 bg-blue-50 text-[#0b2545] text-[8px] font-black">
                    <Star className="w-2.5 h-2.5 fill-[#134074] text-[#134074]" />
                    <span>실제 리뷰 만족도 99.8%</span>
                  </div>
 
                  {/* Main Copy inside mockup */}
                  <h4 className="text-xs sm:text-[13px] font-black text-[#0b2545] leading-snug tracking-tight">
                    동네 주민들이 인정한 옥상 방수·누수 해결사
                  </h4>
                  <p className="text-[9.5px] text-[#1d2d44] leading-normal font-bold">
                    빗물 누수 차단율 100%! 오랜 현장 경력의 특허 방수 공법과 정밀 진단으로 옥상 누수 걱정을 완벽히 해결해 드립니다.
                  </p>
 
                  {/* CTA KakaoTalk Button - 카카오톡 활성화 */}
                  <div className="pt-1">
                    <a 
                      href="http://pf.kakao.com/_xcjrxjX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#fef01b] hover:bg-[#f3e316] text-[#3c1e1e] font-black text-[10.5px] py-3 rounded-lg text-center flex items-center justify-center gap-1.5 border border-yellow-400/20 shadow-md block hover:scale-[1.03] transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-slate-950 fill-slate-950 animate-pulse" />
                      <span>카카오톡 1:1 상담하기</span>
                    </a>
                  </div>
 
                  {/* Key Strengths */}
                  <div className="pt-2 border-t border-slate-200 space-y-2">
                    <span className="text-[8px] uppercase font-bold text-slate-600 tracking-wider block">우리 업체만의 안심 약속</span>
                    <div className="space-y-1.5 text-[8.5px]">
                      <div className="bg-white border border-slate-200 p-2 rounded-lg flex gap-1.5 shadow-sm">
                        <span className="text-[#134074] font-black">1</span>
                        <p className="text-[#1d2d44] font-extrabold">특허받은 친환경 복합 시트 공법</p>
                      </div>
                      <div className="bg-white border border-slate-200 p-2 rounded-lg flex gap-1.5 shadow-sm">
                        <span className="text-[#134074] font-black">2</span>
                        <p className="text-[#1d2d44] font-extrabold">당일 긴급 공사 및 신속한 24시간 상담</p>
                      </div>
                      <div className="bg-white border border-slate-200 p-2 rounded-lg flex gap-1.5 shadow-sm">
                        <span className="text-[#134074] font-black">3</span>
                        <p className="text-[#1d2d44] font-extrabold">시공 완료 후 3년간 무상 하자 보증서 발급</p>
                      </div>
                    </div>
                  </div>
 
                  {/* Review Proof Box */}
                  <div className="bg-white border border-slate-200 p-3 rounded-lg text-center space-y-1 shadow-sm">
                    <span className="text-[7.5px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200/50 px-1.5 py-0.5 rounded uppercase">실제 손님 만족도</span>
                    <p className="text-[9px] font-black text-slate-950 mt-1">"돈이 하나도 안 아깝습니다"</p>
                    <p className="text-[8px] text-slate-800 font-extrabold">[서울 전 지역 방문 상담 가능] 이*진 사장님 실제 후기 데이터</p>
                  </div>
 
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scrollMockup {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40%); }
        }
      `}</style>
    </section>
  );
}
