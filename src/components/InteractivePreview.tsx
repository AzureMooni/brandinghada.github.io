"use client";

import { useState, useEffect } from "react";
import { Phone, CheckCircle, ArrowRight, Smartphone, Star, Shield, Users, Sparkles, MessageCircle } from "lucide-react";

interface InteractivePreviewProps {
  keyword: string;
  isSearched: boolean;
}

interface MockDataStructure {
  keywords: { name: string; percentage: number }[];
  reviewsCount: number;
  mobilePreview: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    accentColor: string;
    accentGlow: string;
  };
}

const MOCK_PREVIEW_DATA: Record<string, MockDataStructure> = {
  "연세에이스영어": {
    keywords: [
      { name: "내신/성적 향상", percentage: 98 },
      { name: "꼼꼼한 오답 피드백", percentage: 95 },
      { name: "철저한 개별 맞춤 관리", percentage: 92 },
      { name: "밀착형 구문 분석", percentage: 89 }
    ],
    reviewsCount: 142,
    mobilePreview: {
      badge: "영어의 완성은 밀착 관리",
      title: "우리동네 엄마들이 인정한 영어 맛집 - 연세에이스영어",
      description: "설명회 마감 신화, 진짜 성적 향상으로 증명하는 소수 정예 밀착 케어 시스템",
      features: ["대형 학원이 놓치는 1:1 오답 정밀 피드백", "매주 카카오톡으로 발행되는 맞춤 피드백 리포트", "원장 직강 & 대치동 출신 강사진의 전 타임 코칭"],
      accentColor: "from-[#00f2fe] to-[#09d9e6]",
      accentGlow: "rgba(0, 242, 254, 0.4)"
    }
  },
  "스마트러닝학원": {
    keywords: [
      { name: "자기주도학습 성향 형성", percentage: 97 },
      { name: "체계적인 커리큘럼", percentage: 94 },
      { name: "집중이 잘되는 환경", percentage: 92 },
      { name: "친절하고 꼼꼼한 피드백", percentage: 88 }
    ],
    reviewsCount: 98,
    mobilePreview: {
      badge: "주입식 교육의 종말",
      title: "스스로 공부하는 아이를 만듭니다 - 스마트러닝학원",
      description: "공식 암기 위주 교육에서 탈피하여, 스스로 문제를 해결하고 원리를 꿰뚫는 초밀착 스마트 러닝",
      features: ["1:1 개인별 맞춤 스케줄러 & 메타인지 강화 코칭", "언제든 자유롭게 이용 가능한 프리미엄 독학 공간", "학부모 안심 출입 확인 & 실시간 학습 현황 제공"],
      accentColor: "from-[#b624ff] to-[#9d4edd]",
      accentGlow: "rgba(182, 36, 255, 0.4)"
    }
  },
  "아이그림미술학원": {
    keywords: [
      { name: "아이 고유의 창의력 발달", percentage: 99 },
      { name: "섬세하고 따뜻한 지도", percentage: 96 },
      { name: "다양한 재료 및 기법 경험", percentage: 93 },
      { name: "넓고 위생적인 스튜디오", percentage: 91 }
    ],
    reviewsCount: 115,
    mobilePreview: {
      badge: "생각을 표현하는 예술 공간",
      title: "창의력과 감각을 키우는 - 아이그림미술학원",
      description: "똑같은 사물을 똑같이 그리는 주입식 미술이 아닌, 아이 개성과 창의적 시각을 여는 감성 미술관",
      features: ["소수 정예로 완성하는 1:1 맞춤형 스토리텔링 드로잉", "매월 개최되는 자체 디지털 전시회 및 피드백 북", "위생 및 안심 안전 통학 케어 케어 서비스"],
      accentColor: "from-[#ff2e93] to-[#ff8a00]",
      accentGlow: "rgba(255, 46, 147, 0.4)"
    }
  }
};

const DEFAULT_MOCK_DATA = (keyword: string): MockDataStructure => ({
  keywords: [
    { name: "친절하고 꼼꼼한 개별 지도", percentage: 95 },
    { name: "리뷰 강점 필터링 결과 우수", percentage: 93 },
    { name: "안심하고 믿고 맡길 수 있는 환경", percentage: 91 },
    { name: "학부모 추천 및 지인 동반 등록", percentage: 87 }
  ],
  reviewsCount: 84,
  mobilePreview: {
    badge: "로컬 1등 브랜딩 최적화 시안",
    title: `우리동네 안심 랜드마크 교육 - ${keyword || "우리동네 교육 브랜드"}`,
    description: "소중한 우리 아이들의 성장을 위해, 가장 안전한 공간에서 최적의 맞춤 학습 프로그램을 제안합니다.",
    features: ["리뷰 기반 키워드를 100% 녹여낸 직관적인 강점 소구", "모바일 통신 속도에 맞춘 0.5초 초경량 로딩 아키텍처", "전송 전환율을 극대화하는 미니멀리즘 리드 획득 설계"],
    accentColor: "from-[#00f2fe] to-[#b624ff]",
    accentGlow: "rgba(0, 242, 254, 0.3)"
  }
});

export function InteractivePreview({ keyword, isSearched }: InteractivePreviewProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState("연세에이스영어");
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([]);

  // 검색 데이터 로드
  const activeData = MOCK_PREVIEW_DATA[keyword] || DEFAULT_MOCK_DATA(keyword);
  const displayKeyword = keyword || "연세에이스영어";
  const displayData = keyword ? activeData : MOCK_PREVIEW_DATA["연세에이스영어"];

  // 프로그레스 바 애니메이션
  useEffect(() => {
    if (isSearched || !keyword) {
      setAnimatedProgress([0, 0, 0, 0]);
      const timer = setTimeout(() => {
        setAnimatedProgress(displayData.keywords.map(k => k.percentage));
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [keyword, isSearched, displayData]);

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    // 번호 검증 (정규식 최소 검증)
    const rawNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (rawNumber.length < 10) {
      alert("올바른 휴대폰 번호를 입력해 주세요.");
      return;
    }

    // 전송 완료 토스트 노출
    setShowToast(true);
    setPhoneNumber("");

    // 3.5초 뒤 토스트 자동 소멸
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <section 
      id="interactive-preview"
      className={`relative py-24 border-t border-[#22222b]/50 overflow-hidden px-6 transition-all duration-1000 ${
        isSearched ? "opacity-100 translate-y-0" : "opacity-90"
      }`}
    >
      {/* Toast Notification Popup */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-70" />
            <div className="relative flex items-center gap-3 bg-[#111115] border border-[#22222b] px-6 py-4 rounded-xl shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">[전송 완료] 카카오톡 발송 준비 완료</p>
                <p className="text-xs text-muted-foreground mt-0.5">AI 모바일 시안 링크가 1분 이내에 발송됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Light Elements */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-secondary font-extrabold px-3 py-1 rounded border border-secondary/20 bg-secondary/5">
            {isSearched ? "분석 결과 생성이 완료되었습니다" : "AI 제안 데모 프리뷰"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-4 mb-3">
            {isSearched ? (
              <>
                실시간 제안 엔진: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">{displayKeyword}</span>
              </>
            ) : (
              "사장님이 잠든 사이, AI가 시안으로 세일즈합니다."
            )}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            리뷰 데이터에서 부정을 발라내고 최고의 특장점을 끄집어내어 매력적인 1페이지 모바일 제안 웹 시안을 실시간으로 퍼블리싱했습니다.
          </p>
        </div>

        {/* Dashboard & Preview Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: Place Review Dashboard (L-col 5) */}
          <div className="lg:col-span-5 bg-[#111115] border border-[#22222b] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#333340] transition-colors duration-300 h-full">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  플레이스 리뷰 분석 대시보드
                </h3>
                <p className="text-xs text-muted-foreground mt-1">학부모 실사용 키워드 기반 AI 추출 강점 리스트</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-foreground font-mono">{displayData.reviewsCount}</span>
                <span className="text-xs text-muted-foreground block">수집 리뷰 건수</span>
              </div>
            </div>

            {/* Keyword Gauge Bars */}
            <div className="space-y-6">
              {displayData.keywords.map((kw, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-foreground flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {kw.name}
                    </span>
                    <span className="text-primary font-mono">{animatedProgress[idx] || 0}%</span>
                  </div>
                  <div className="w-full bg-[#1b1b22] h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${animatedProgress[idx] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Sub Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-[#22222b]/50">
              <div className="bg-[#14141a] border border-[#22222b] rounded-xl p-3 text-center">
                <p className="text-[10px] text-muted-foreground font-semibold">부정적인 후기 필터링</p>
                <p className="text-sm font-extrabold text-[#00ff66] mt-1 font-mono">100% CLEAN</p>
              </div>
              <div className="bg-[#14141a] border border-[#22222b] rounded-xl p-3 text-center">
                <p className="text-[10px] text-muted-foreground font-semibold">이탈 위험 요소 차단</p>
                <p className="text-sm font-extrabold text-primary mt-1 font-mono">마찰 제로</p>
              </div>
            </div>

            {/* Security Proof */}
            <div className="flex items-center gap-2 mt-6 justify-center text-[10px] text-muted-foreground font-medium">
              <Shield className="w-3 h-3 text-muted-foreground/80" />
              <span>네이버 플레이스 공식 API 및 크롤러 기반 실시간 동기화 완료</span>
            </div>
          </div>

          {/* RIGHT: Mobile Web Frame mockup (L-col 7) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-[#070709] rounded-[48px] p-3 shadow-2xl border-[6px] border-[#22222b] relative overflow-hidden group">
              
              {/* Speaker & Camera bezel notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#22222b] rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-[#111115] rounded-full mr-2" />
                <div className="w-2.5 h-2.5 bg-[#111115] rounded-full" />
              </div>

              {/* Home indicator bar at the bottom */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#22222b] rounded-full z-30" />

              {/* Mobile Viewport Screen */}
              <div className="w-full h-full bg-[#0a0a0c] rounded-[38px] overflow-y-auto relative text-left select-none hide-scrollbar z-20 pb-12 pt-6">
                
                {/* Mobile Header Bar */}
                <div className="sticky top-0 bg-[#0a0a0c]/90 backdrop-blur-md px-5 py-3 border-b border-[#22222b]/50 z-20 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-tight text-white">
                    {keyword ? displayKeyword : "연세에이스영어"}
                  </span>
                  <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-extrabold uppercase">
                    LIVE PREVIEW
                  </span>
                </div>

                {/* Mobile Content Screen */}
                <div className="p-5 space-y-6">
                  {/* Badge */}
                  <span className="inline-block text-[9px] font-bold text-primary tracking-wide uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    ✦ {displayData.mobilePreview.badge}
                  </span>

                  {/* Title & Brand Headline */}
                  <h4 className="text-lg sm:text-xl font-black text-white leading-tight tracking-tight">
                    {displayData.mobilePreview.title}
                  </h4>

                  {/* Description paragraph */}
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    {displayData.mobilePreview.description}
                  </p>

                  {/* Smart Mobile Action buttons */}
                  <div className="grid grid-cols-2 gap-2.5 pt-2">
                    <button className="bg-gradient-to-r from-primary to-accent text-background font-bold text-[10px] py-2 rounded-lg text-center shadow-lg hover:shadow-primary/20 transition-all cursor-pointer">
                      실시간 비대면 문의
                    </button>
                    <button className="bg-[#111115] border border-[#22222b] text-white font-bold text-[10px] py-2 rounded-lg text-center hover:border-muted transition-all cursor-pointer">
                      위치 및 지도보기
                    </button>
                  </div>

                  {/* Interactive Dashboard Bullet points (Features) */}
                  <div className="pt-4 border-t border-[#22222b]/50 space-y-3">
                    <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">우리 학원만의 확실한 소구 포인트</p>
                    
                    {displayData.mobilePreview.features.map((feat, idx) => (
                      <div key={idx} className="flex gap-2.5 items-start bg-[#111115] border border-[#22222b] p-3 rounded-xl transition-all duration-300 hover:border-primary/30">
                        <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-[10px] font-bold">
                          {idx + 1}
                        </div>
                        <p className="text-[10px] text-foreground font-semibold leading-relaxed">
                          {feat}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Proof Badges inside phone */}
                  <div className="bg-gradient-to-br from-[#111115] to-[#14141a] border border-[#22222b] p-4 rounded-xl text-center space-y-2 mt-4">
                    <Sparkles className="w-4 h-4 text-secondary mx-auto animate-spin" />
                    <p className="text-[10px] font-bold text-white">100% 매칭 플레이스 리뷰 증명</p>
                    <p className="text-[9px] text-muted-foreground leading-relaxed">수집된 학부모 리뷰 통계를 바탕으로 거짓 없이 안전하게 제작된 안심 세일즈 시안입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM: Lead Generation Form (Lead Generation Drop-off) */}
        <div className="relative group max-w-4xl mx-auto">
          {/* Neon Border Outline on Focus */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300" />
          
          <div className="relative bg-[#111115] border border-[#22222b] p-6 sm:p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
            
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                이 완성형 시안 링크를 카카오톡으로 즉시 받아보시겠습니까?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                휴대폰 번호를 입력하시면, 1초 전 생성된 전용 링크 및 카카오 알림톡이 즉시 발송됩니다.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:max-w-md flex-shrink-0">
              <div className="relative flex items-center bg-[#181822] border border-[#22222b] rounded-xl px-4 py-3 focus-within:border-primary transition-all duration-300">
                <Phone className="w-4 h-4 text-muted-foreground mr-2.5" />
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="휴대폰 번호 (-없이 입력)"
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full font-semibold"
                />
              </div>
              <button 
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-background font-bold text-sm rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,242,254,0.15)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>시안 받아보기</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
