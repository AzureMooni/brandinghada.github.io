import { useState, useRef, FormEvent, useEffect } from "react";
import { Search, Loader2 } from "lucide-react";

interface HeroProps {
  onSearchStart: (keyword: string) => void;
  onSearchComplete: (keyword: string) => void;
}

// 🔢 Count-up 애니메이션 컴포넌트 추가 (가독성 & 신뢰 증거 강화)
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
    <section className="relative pt-44 pb-32 md:pt-60 md:pb-44 flex flex-col items-center justify-center overflow-hidden px-6 bg-gradient-to-b from-background to-[#070709]">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Sub Badge (Count-up 연동 가격 배지) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-black tracking-wider uppercase animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            No-Code Local Builder
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-[#f4f4f7] text-xs font-extrabold tracking-wider">
            <CountUp end={110} suffix="만 원" /> 정찰제
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            월 <CountUp end={5.5} duration={1200} decimals={1} suffix="만 원" /> 유지보수
          </div>
        </div>

        {/* Main Copies */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.2] text-foreground">
          사장님은 사업에만 집중하세요.<br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            온라인 고객은 '브랜딩하다'가<br />모셔옵니다.
          </span>
        </h1>

        {/* 🖊️ 스캔 가능한 레이아웃 & 형광펜 효과(Highlight-yellow) 가미 */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-[1.6]">
          우리는 구구절절 설명하지 않습니다. 말뿐인 영업에 속지 마세요.<br className="hidden sm:inline" />
          AI가 사장님의 실제 시공/매장 리뷰를 분석하여 <span className="text-slate-100 font-black highlight-yellow">5분 만에 만든 홈페이지 시안</span>을 지금 바로 확인해 보세요.
        </p>

        {/* Search Bar UI */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full mb-8">
          <div className="relative group">
            {/* Glow border on focus/hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-focus-within:opacity-75 group-hover:opacity-50 transition duration-300 pointer-events-none" />
            
            <div className="relative flex items-center bg-[#111115] border border-[#22222b] rounded-2xl overflow-hidden px-4 sm:px-6 py-4.5">
              <Search className="w-5 h-5 text-muted-foreground mr-3 sm:mr-4 flex-shrink-0" />
              
              <input
                ref={searchInputRef}
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="예: '한양지붕공사' 또는 사장님 가게 이름을 입력하세요."
                disabled={isLoading}
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base sm:text-lg font-medium pr-12"
              />

              {/* ✨ 입체적인 Shimmer 광원 효과 CTA 버튼으로 업그레이드 */}
              <button
                type="submit"
                disabled={isLoading || !keyword.trim()}
                className="absolute right-2 px-5 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-primary via-accent to-primary text-background font-black text-sm hover:opacity-95 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-50 disabled:scale-100 disabled:from-muted disabled:to-muted disabled:text-muted-foreground transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(250,204,21,0.25)] hover:shadow-[0_0_30px_rgba(250,204,21,0.4)] overflow-hidden group/btn"
              >
                {/* Shimmer overlay block */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1.2s_infinite] pointer-events-none" />
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline">시공 리뷰 분석 중...</span>
                  </>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center gap-1">
                      <span>시안 즉시 확인하기</span>
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* Step-by-step Loading UI */}
        {isLoading && (
          <div className="max-w-md mx-auto bg-[#14141a] border border-[#22222b] rounded-xl p-4 mb-8 text-left animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground font-mono">AI CONSTRUCT ANALYZER</span>
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
            <div className="space-y-1.5 font-mono text-[11px]">
              <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 1 ? "text-primary font-bold" : "text-muted-foreground/50"}`}>
                <span className={loadingStep >= 1 ? "text-primary" : "text-muted-foreground/30"}>✓</span>
                <span>[1/3] 실제 시공 고객 리뷰 분석 및 만족도 추출 중...</span>
              </div>
              <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 2 ? "text-primary font-bold" : "text-muted-foreground/50"}`}>
                <span className={loadingStep >= 2 ? "text-primary" : "text-muted-foreground/30"}>{loadingStep >= 2 ? "✓" : "○"}</span>
                <span>[2/3] 과잉청구 의혹 제거 및 기술 전문성 특장점 정제 중...</span>
              </div>
              <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 3 ? "text-primary font-bold" : "text-muted-foreground/50"}`}>
                <span className={loadingStep >= 3 ? "text-primary font-bold animate-pulse" : "text-muted-foreground/30"}>{loadingStep >= 3 ? "✓" : "○"}</span>
                <span>[3/3] 전화 문의 유도를 극대화하는 모바일 홈 시안 퍼블리싱 중...</span>
              </div>
            </div>
          </div>
        )}

        {/* Search Samples */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="text-muted-foreground">시뮬레이션 추천 검색어 :</span>
          <button 
            type="button"
            onClick={() => handleSampleClick("한양지붕공사")}
            className="px-3 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            한양지붕공사
          </button>
          <button 
            type="button"
            onClick={() => handleSampleClick("일성종합설비")}
            className="px-3 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            일성종합설비
          </button>
          <button 
            type="button"
            onClick={() => handleSampleClick("바른인테리어")}
            className="px-3 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            바른인테리어
          </button>
        </div>
      </div>
    </section>
  );
}
