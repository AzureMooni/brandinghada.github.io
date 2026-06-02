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

    // 1초간 단계별 AI 시공 리뷰 분석 로딩 애니메이션 (Mock)
    setLoadingStep(1); // 0.3초
    
    setTimeout(() => {
      setLoadingStep(2); // 0.6초
    }, 350);

    setTimeout(() => {
      setLoadingStep(3); // 0.8초
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
    <section className="relative pt-36 pb-32 md:pt-48 md:pb-44 flex flex-col items-center justify-center overflow-hidden px-6 bg-gradient-to-b from-background to-[#070709] border-b border-[#22222b]/30">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title, search input and social proof */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Sub Badge (Count-up 연동 가격 배지) */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black tracking-wider uppercase animate-pulse">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                No-Code Local Builder
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-[#2563eb]/10 text-slate-100 text-xs font-black tracking-wider">
                <span className="text-primary font-black"><CountUp end={110} suffix="만 원" /></span> 정찰제
                <span className="w-1 h-1 rounded-full bg-slate-500" />
                월 <span className="text-primary font-black"><CountUp end={5.5} duration={1200} decimals={1} suffix="만 원" /></span> 유지보수
              </div>
            </div>

            {/* Compressed Bold Title */}
            <h1 className="text-3.5xl sm:text-5xl md:text-5.5xl font-extrabold tracking-tight leading-[1.25] text-foreground">
              사장님 성함만 넣으세요.<br />
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                5분 뒤 전화 오는 홈페이지가 생깁니다.
              </span>
            </h1>

            {/* 사회적 증거 배지 (버튼 바로 위 배치) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs sm:text-sm font-black shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>🟢 실시간 검증: 이미 <span className="text-white font-mono font-black text-sm"><CountUp end={154} /></span>명의 사장님이 시안을 확인했습니다!</span>
            </div>

            {/* Search Bar UI */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative group max-w-xl">
                {/* Glow border on focus/hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-focus-within:opacity-75 group-hover:opacity-50 transition duration-300 pointer-events-none" />
                
                <div className="relative flex items-center bg-[#111115] border border-[#22222b] rounded-2xl overflow-hidden px-4 sm:px-5 py-4">
                  <Search className="w-5 h-5 text-muted-foreground mr-3 flex-shrink-0" />
                  
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="예: '한양지붕공사' 또는 가게 이름을 입력하세요."
                    disabled={isLoading}
                    className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm sm:text-base font-semibold pr-12"
                  />

                  {/* 입체적인 Shimmer 광원 효과 CTA 버튼 */}
                  <button
                    type="submit"
                    disabled={isLoading || !keyword.trim()}
                    className="absolute right-2 px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary via-accent to-primary text-background font-black text-xs sm:text-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 disabled:from-muted disabled:to-muted disabled:text-muted-foreground transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(250,204,21,0.25)] overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite] pointer-events-none" />
                    {isLoading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
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
              <div className="max-w-xl bg-[#14141a] border border-[#22222b] rounded-xl p-4 text-left animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] text-muted-foreground font-mono">AI CONSTRUCT ANALYZER</span>
                  <span className="text-xs font-bold text-primary animate-pulse">Running AI pipeline...</span>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-[#22222b] h-1.5 rounded-full overflow-hidden mb-3">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-full transition-all duration-500" 
                    style={{ width: `${(loadingStep / 3) * 100}%` }}
                  />
                </div>

                {/* Steps text */}
                <div className="space-y-1.5 font-mono text-[10px] text-[#8e8e9f]">
                  <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 1 ? "text-primary font-black" : "text-muted-foreground/40"}`}>
                    <span>{loadingStep >= 1 ? "✓" : "○"}</span>
                    <span>[1/3] 실제 시공 고객 리뷰 분석 및 만족도 추출 중...</span>
                  </div>
                  <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 2 ? "text-primary font-black" : "text-muted-foreground/40"}`}>
                    <span>{loadingStep >= 2 ? "✓" : "○"}</span>
                    <span>[2/3] 과잉청구 의혹 제거 및 기술 전문성 특장점 정제 중...</span>
                  </div>
                  <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 3 ? "text-primary font-black" : "text-muted-foreground/40"}`}>
                    <span>{loadingStep >= 3 ? "✓" : "○"}</span>
                    <span>[3/3] 전화 문의 유도를 극대화하는 모바일 홈 시안 퍼블리싱 중...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Search Samples */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-muted-foreground font-semibold">시뮬레이션 추천 검색어 :</span>
              {["한양지붕공사", "일성종합설비", "바른인테리어"].map((sample) => (
                <button 
                  key={sample}
                  type="button"
                  onClick={() => handleSampleClick(sample)}
                  className="px-2.5 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
                >
                  {sample}
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Premium Auto-scrolling Mobile Device Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[280px] aspect-[9/18.5] bg-[#070709] rounded-[44px] p-2.5 shadow-[0_0_50px_rgba(250,204,21,0.08)] border-[5px] border-[#22222b] overflow-hidden group">
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

                  {/* CTA Phone Call Button */}
                  <div className="pt-1">
                    <div className="w-full bg-gradient-to-r from-primary via-accent to-primary text-background font-black text-[10px] py-2.5 rounded-lg text-center flex items-center justify-center gap-1.5 border border-primary/20">
                      <Phone className="w-3 h-3 text-background fill-background animate-pulse" />
                      <span>전화 문의하기</span>
                    </div>
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
                    <span className="text-[7.5px] font-black text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded uppercase">Verified Review Log</span>
                    <p className="text-[9px] font-bold text-white mt-1">"돈이 하나도 안 아까워요"</p>
                    <p className="text-[8px] text-muted-foreground font-medium">인천 남동구 만수동 이*진 사장님 실제 리뷰 평판 분석 동기화</p>
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
