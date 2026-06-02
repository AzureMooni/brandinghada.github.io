import { useState, useRef, FormEvent, useEffect } from "react";
import { Search, Loader2, Sparkles, Smartphone, Phone, ArrowUpRight, ShieldCheck, Star } from "lucide-react";

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
    <section className="relative pt-40 pb-36 md:pt-52 md:pb-48 flex flex-col items-center justify-center overflow-hidden px-6 bg-white border-b border-slate-200">
      {/* Background Decorative Gradients (Soft Light mode) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/3 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-yellow-500/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title, search input and social proof */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Sub Badge (용어 순화 완료 - 4050 사장님 눈높이형) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-700 text-xs sm:text-sm font-black tracking-wide animate-pulse">
                <span className="w-2 h-2 rounded-full bg-yellow-600" />
                쉬운 홈페이지 관리 & 실시간 수정
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-700 text-xs sm:text-sm font-black tracking-wide">
                <span className="text-yellow-600 font-black"><CountUp end={110} suffix="만 원" /></span> 정찰제
                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                월 <span className="text-yellow-600 font-black"><CountUp end={5.5} duration={1200} decimals={1} suffix="만 원" /></span> 유지보수
              </div>
            </div>

            {/* 10% 더 커지고 눈이 편한 한글 타이틀 */}
            <h1 className="text-4xl sm:text-5.5xl md:text-6.5xl font-black tracking-tight leading-[1.3] text-slate-900">
              사장님 성함만 넣으세요.<br />
              <span className="bg-gradient-to-r from-yellow-600 via-amber-500 to-blue-600 bg-clip-text text-transparent">
                5분 뒤 전화 오는 홈페이지가 생깁니다.
              </span>
            </h1>

            {/* 사회적 증거 배지 (라이트 테마 대비) */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl border border-emerald-500/25 bg-emerald-500/5 text-emerald-700 text-xs sm:text-base font-black shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>🟢 실시간 확인: 이미 <span className="text-slate-900 font-mono font-black text-sm sm:text-lg"><CountUp end={154} /></span>명의 사장님이 시안을 확인하셨습니다!</span>
            </div>

            {/* Search Bar UI */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative group max-w-xl">
                {/* Glow border on focus/hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-2xl blur opacity-15 group-focus-within:opacity-40 group-hover:opacity-25 transition duration-300 pointer-events-none" />
                
                <div className="relative flex items-center bg-white border border-slate-300 rounded-2xl overflow-hidden px-4 sm:px-6 py-4.5 shadow-md">
                  <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
                  
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="예: '한양지붕공사' 또는 가게 이름을 입력하세요."
                    disabled={isLoading}
                    className="w-full bg-transparent text-slate-800 placeholder:text-slate-400 outline-none text-base sm:text-lg font-bold pr-12"
                  />

                  {/* 입체적인 Shimmer 광원 효과 CTA 버튼 (가독성 강화) */}
                  <button
                    type="submit"
                    disabled={isLoading || !keyword.trim()}
                    className="absolute right-2 px-5 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-slate-950 font-black text-sm sm:text-base hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 disabled:from-slate-200 disabled:to-slate-200 disabled:text-slate-400 transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-white/30 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite] pointer-events-none" />
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>분석 중...</span>
                      </>
                    ) : (
                      <span>시안 즉시 확인</span>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {/* Step-by-step Loading UI (Light Theme) */}
            {isLoading && (
              <div className="max-w-xl bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left animate-in fade-in slide-in-from-top-2 duration-300 shadow-sm">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] text-slate-500 font-mono font-black">자체 제작 고성능 시스템 가동 중</span>
                  <span className="text-xs font-bold text-yellow-600 animate-pulse">홈페이지 자동 조립 중...</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-4">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-blue-500 h-full transition-all duration-500" 
                    style={{ width: `${(loadingStep / 3) * 100}%` }}
                  />
                </div>

                {/* Steps text */}
                <div className="space-y-2 font-bold text-xs text-slate-600">
                  <div className={`flex items-center gap-2.5 transition-colors ${loadingStep >= 1 ? "text-yellow-600" : "text-slate-300"}`}>
                    <span>{loadingStep >= 1 ? "✓" : "○"}</span>
                    <span>[1단계] 사장님 가게에 쌓인 진짜 추천 글 수집 완료</span>
                  </div>
                  <div className={`flex items-center gap-2.5 transition-colors ${loadingStep >= 2 ? "text-yellow-600" : "text-slate-300"}`}>
                    <span>{loadingStep >= 2 ? "✓" : "○"}</span>
                    <span>[2단계] 불필요한 과잉청구 오해 요소 자동 차단 완료</span>
                  </div>
                  <div className={`flex items-center gap-2.5 transition-colors ${loadingStep >= 3 ? "text-yellow-600" : "text-slate-300"}`}>
                    <span>{loadingStep >= 3 ? "✓" : "○"}</span>
                    <span>[3단계] 전화가 잘 오도록 설계된 모바일 화면 완성 완료</span>
                  </div>
                </div>
              </div>
            )}

            {/* Search Samples */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="text-slate-500 font-bold">눌러서 바로 확인해보세요 :</span>
              {["한양지붕공사", "일성종합설비", "바른인테리어"].map((sample) => (
                <button 
                  key={sample}
                  type="button"
                  onClick={() => handleSampleClick(sample)}
                  className="px-3.5 py-1.5 rounded-full border border-slate-200 bg-slate-50 hover:border-yellow-500 hover:bg-yellow-50 text-slate-700 hover:text-slate-900 font-bold transition-all duration-300 cursor-pointer"
                >
                  {sample}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Premium Auto-scrolling Mobile Device Mockup (Light contrast) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/18.5] bg-[#070709] rounded-[44px] p-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border-[5px] border-[#22222b] overflow-hidden group">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#22222b] rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-10 h-1 bg-[#111115] rounded-full mr-2"></div>
                <div className="w-2 h-2 bg-[#111115] rounded-full"></div>
              </div>
              
              {/* Bottom Home Indicator */}
              <div className="absolute bottom-1 w-24 h-1 bg-[#22222b] rounded-full left-1/2 -translate-x-1/2 z-30" />

              {/* Autoscrolling Mobile Content Wrapper */}
              <div className="w-full h-full bg-[#0a0a0c] rounded-[36px] overflow-hidden relative text-left select-none">
                
                {/* Scrolling Content - Animate automatically via CSS */}
                <div className="absolute w-full top-0 left-0 space-y-4 px-4 pt-8 pb-12 animate-[scrollMockup_25s_ease-in-out_infinite]">
                  
                  {/* Local Business Header */}
                  <div className="flex items-center justify-between border-b border-[#22222b]/50 pb-2.5 mb-2">
                    <span className="text-[10px] font-black text-white">한양지붕공사</span>
                    <span className="text-[8px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-black tracking-wide">시공 전문</span>
                  </div>

                  {/* Rating star Badge */}
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[8px] font-black">
                    <Star className="w-2.5 h-2.5 fill-primary" />
                    <span>실제 리뷰 만족도 99.8%</span>
                  </div>

                  {/* Main Copy inside mockup */}
                  <h4 className="text-xs sm:text-[13px] font-black text-white leading-snug tracking-tight">
                    동네 주민들이 인정한 지붕 수리·방수 맛집
                  </h4>
                  <p className="text-[9.5px] text-muted-foreground leading-normal">
                    빗물 누수 차단율 100%! 오랜 현장 경력의 정밀 진단과 철저한 책임 시공으로 안전하고 튼튼하게 지켜드립니다.
                  </p>

                  {/* CTA Phone Call Button - 전화 활성화 */}
                  <div className="pt-1">
                    <a 
                      href="tel:010-3054-3990"
                      className="w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 text-slate-950 font-black text-[10.5px] py-3 rounded-lg text-center flex items-center justify-center gap-1.5 border border-primary/20 shadow-md block hover:scale-[1.03] transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-slate-950 fill-slate-950 animate-pulse" />
                      <span>전화 바로 걸기</span>
                    </a>
                  </div>

                  {/* Key Strengths */}
                  <div className="pt-2 border-t border-[#22222b]/40 space-y-2">
                    <span className="text-[8px] uppercase font-bold text-muted-foreground tracking-wider block">우리 업체만의 안심 약속</span>
                    <div className="space-y-1.5 text-[8.5px]">
                      <div className="bg-[#111115] border border-[#22222b] p-2 rounded-lg flex gap-1.5">
                        <span className="text-primary font-bold">1</span>
                        <p className="text-foreground/90 font-medium">거품을 완전히 뺀 정직한 자재 가격 및 견적</p>
                      </div>
                      <div className="bg-[#111115] border border-[#22222b] p-2 rounded-lg flex gap-1.5">
                        <span className="text-primary font-bold">2</span>
                        <p className="text-foreground/90 font-medium">당일 긴급 공사 및 신속한 24시간 상담</p>
                      </div>
                      <div className="bg-[#111115] border border-[#22222b] p-2 rounded-lg flex gap-1.5">
                        <span className="text-primary font-bold">3</span>
                        <p className="text-foreground/90 font-medium">시공 완료 후 3년간 무상 하자 보증서 발급</p>
                      </div>
                    </div>
                  </div>

                  {/* Review Proof Box */}
                  <div className="bg-gradient-to-br from-[#111115] to-[#14141a] border border-[#22222b] p-3 rounded-lg text-center space-y-1">
                    <span className="text-[7.5px] font-black text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded uppercase">실제 손님 만족도</span>
                    <p className="text-[9px] font-bold text-white mt-1">"돈이 하나도 안 아까워요"</p>
                    <p className="text-[8px] text-muted-foreground font-medium">인천 남동구 만수동 이*진 사장님 실제 후기 데이터</p>
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
