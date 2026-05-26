"use client";

import { useState, useRef, FormEvent } from "react";
import { Search, Loader2 } from "lucide-react";

interface HeroProps {
  onSearchStart: (keyword: string) => void;
  onSearchComplete: (keyword: string) => void;
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

    // 1초간 단계별 AI 분석 로딩 애니메이션 구현 (Mock)
    setLoadingStep(1); // 0.3초: 리뷰 데이터 수집 중
    
    setTimeout(() => {
      setLoadingStep(2); // 0.6초: 부정 여론 필터링 및 긍정 강점 추출 중
    }, 350);

    setTimeout(() => {
      setLoadingStep(3); // 0.8초: 모바일 웹 최적화 시안 빌드 중
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
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Sub Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-wider uppercase animate-pulse">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          No-Code AI Sales Engine
        </div>

        {/* Main Copies */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-foreground">
          우리는 설명하지 않습니다.<br />
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            결과물로 제안합니다.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          말 대신 결과로 계약하는 AI 세일즈 엔진, <span className="text-foreground font-bold">브랜딩하다</span>
        </p>

        {/* Search Bar UI */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto w-full mb-8">
          <div className="relative group">
            {/* Glow border on focus/hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-focus-within:opacity-75 group-hover:opacity-50 transition duration-300 pointer-events-none" />
            
            <div className="relative flex items-center bg-[#111115] border border-[#22222b] rounded-2xl overflow-hidden px-4 sm:px-6 py-4">
              <Search className="w-5 h-5 text-muted-foreground mr-3 sm:mr-4 flex-shrink-0" />
              
              <input
                ref={searchInputRef}
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="우리 동네 학원 이름을 입력해 보세요."
                disabled={isLoading}
                className="w-full bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-base sm:text-lg font-medium pr-12"
              />

              <button
                type="submit"
                disabled={isLoading || !keyword.trim()}
                className="absolute right-2 px-4 sm:px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-accent text-background font-bold text-sm hover:opacity-90 disabled:opacity-50 disabled:from-muted disabled:to-muted disabled:text-muted-foreground transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="hidden sm:inline">분석 중...</span>
                  </>
                ) : (
                  <>
                    <span>제안받기</span>
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
              <span className="text-xs text-muted-foreground font-mono">VIBEFLOW ANALYZER v2</span>
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
                <span>[1/3] 네이버 플레이스 방문자 리뷰 분석 및 핵심 키워드 수집...</span>
              </div>
              <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 2 ? "text-primary font-bold" : "text-muted-foreground/50"}`}>
                <span className={loadingStep >= 2 ? "text-primary" : "text-muted-foreground/30"}>{loadingStep >= 2 ? "✓" : "○"}</span>
                <span>[2/3] 학부모 신뢰도 중심의 마케팅 소구점 및 긍정 필터링 적용...</span>
              </div>
              <div className={`flex items-center gap-2 transition-colors ${loadingStep >= 3 ? "text-primary font-bold" : "text-muted-foreground/50"}`}>
                <span className={loadingStep >= 3 ? "text-primary font-bold animate-pulse" : "text-muted-foreground/30"}>{loadingStep >= 3 ? "✓" : "○"}</span>
                <span>[3/3] 초정밀 모바일 시안 프레임 실시간 빌드 및 모바일 최적화...</span>
              </div>
            </div>
          </div>
        )}

        {/* Search Samples */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm">
          <span className="text-muted-foreground">시뮬레이션 추천 검색어 :</span>
          <button 
            type="button"
            onClick={() => handleSampleClick("연세에이스영어")}
            className="px-3 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            연세에이스영어
          </button>
          <button 
            type="button"
            onClick={() => handleSampleClick("스마트러닝학원")}
            className="px-3 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            스마트러닝학원
          </button>
          <button 
            type="button"
            onClick={() => handleSampleClick("아이그림미술학원")}
            className="px-3 py-1 rounded-full border border-[#22222b] bg-[#111115] hover:border-primary/50 text-muted-foreground hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            아이그림미술학원
          </button>
        </div>
      </div>
    </section>
  );
}
