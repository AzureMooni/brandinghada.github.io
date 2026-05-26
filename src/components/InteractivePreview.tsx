"use client";

import { useState, useEffect } from "react";
import { Phone, CheckCircle, ArrowRight, Smartphone, Star, Shield, Users, Sparkles, MessageCircle, AlertTriangle } from "lucide-react";

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
  };
}

const MOCK_PREVIEW_DATA: Record<string, MockDataStructure> = {
  "한양지붕공사": {
    keywords: [
      { name: "과잉청구 없음 (투명한 가격)", percentage: 98 },
      { name: "당일 신속 시공 완료", percentage: 95 },
      { name: "누수 및 빗물 차단 완벽", percentage: 92 },
      { name: "친절하고 뒷정리 깔끔", percentage: 89 }
    ],
    reviewsCount: 154,
    mobilePreview: {
      badge: "20년 경력 지붕수리 전문",
      title: "동네 주민들이 인정한 지붕 수리·방수 맛집 - 한양지붕공사",
      description: "빗물 누수 차단율 100%! 오랜 현장 경력의 정밀 진단과 철저한 책임 시공으로 안전하고 튼튼한 지붕을 지켜드립니다.",
      features: ["거품을 완전히 뺀 정직한 자재 가격 및 투명한 견적", "당일 긴급 공사 및 신속한 24시간 긴급 상담 서비스", "시공 완료 후 3년간 완벽한 무상 하자 보증서 발급"],
      accentColor: "from-[#facc15] to-[#eab308]"
    }
  },
  "일성종합설비": {
    keywords: [
      { name: "정밀 누수 원인 분석 신속", percentage: 97 },
      { name: "거품 없는 직영 공사비", percentage: 96 },
      { name: "최신 탐지 전문 장비 보유", percentage: 94 },
      { name: "친절하고 상세한 설명", percentage: 91 }
    ],
    reviewsCount: 128,
    mobilePreview: {
      badge: "배관·누수·방수 책임 해결",
      title: "안심하고 믿고 맡기는 정직한 설비 파트너 - 일성종합설비",
      description: "첨단 배관 내시경 및 초정밀 청음 탐지기로 타일 파손을 최소화하고, 물길을 단 한 번에 완벽하게 잡아 드립니다.",
      features: ["불필요한 공사를 권유하지 않는 정직한 원인 진단", "해결하지 못하면 출장/탐지비 0원! 정직과 신뢰의 원칙", "수도, 보일러, 싱크대, 화장실 방수공사 원스톱 책임 해결"],
      accentColor: "from-[#2563eb] to-[#3b82f6]"
    }
  },
  "바른인테리어": {
    keywords: [
      { name: "공사 중간 추가 비용 제로", percentage: 99 },
      { name: "하자 없는 성실 시공 보장", percentage: 95 },
      { name: "꼼꼼한 1:1 맞춤 피드백", percentage: 93 },
      { name: "성실한 마감 조치 신속", percentage: 90 }
    ],
    reviewsCount: 110,
    mobilePreview: {
      badge: "거품 없는 본사 직영 시공 전문",
      title: "동네 주민들이 먼저 추천하는 책임 리모델링 - 바른인테리어",
      description: "외주 하청 없는 100% 직영 팀 시공과 투명한 자재 단가 공개로, 하자 걱정 없는 품격 있는 공간을 완성해 드립니다.",
      features: ["공사 도중 말도 안 되는 추가 요금을 절대 요구하지 않는 투명 계약", "무료 3D 도면 설계 및 공간 맞춤형 실용 디자인 제안", "신속하고 성실한 하자 조치 및 든든한 평생 케어 시스템"],
      accentColor: "from-[#facc15] to-[#2563eb]"
    }
  }
};

const DEFAULT_MOCK_DATA = (keyword: string): MockDataStructure => ({
  keywords: [
    { name: "정직한 자재 가격 및 사용", percentage: 96 },
    { name: "친절하고 책임감 있는 시공", percentage: 94 },
    { name: "과잉청구 없는 합리적 비용", percentage: 91 },
    { name: "완벽한 사후 AS 보장", percentage: 88 }
  ],
  reviewsCount: 94,
  mobilePreview: {
    badge: "우리동네 보증 안심 시안",
    title: `정직과 성실로 안심 시공을 약속하는 - ${keyword || "한양지붕공사"}`,
    description: "속 터지는 중간 추가 요금이나 불량 시공은 이제 끝입니다. 동네 주민들이 인정해주신 리뷰 강점을 모아 매력적인 직영 시안을 구성했습니다.",
    features: ["빅데이터 분석으로 걸러낸 과잉청구 0%의 투명함", "터치 한 번으로 사장님 직통 모바일 전화 통화 즉시 연결", "모바일 속도에 맞춰 0.5초 만에 열리는 초경량 퍼포먼스"],
    accentColor: "from-[#facc15] to-[#2563eb]"
  }
});

export function InteractivePreview({ keyword, isSearched }: InteractivePreviewProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([]);

  // 검색어 분기 데이터 로드
  const activeData = MOCK_PREVIEW_DATA[keyword] || DEFAULT_MOCK_DATA(keyword);
  const displayKeyword = keyword || "한양지붕공사";
  const displayData = keyword ? activeData : MOCK_PREVIEW_DATA["한양지붕공사"];

  // 프로그레스 바 애니메이션 구동
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

    const rawNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (rawNumber.length < 10) {
      alert("올바른 휴대폰 번호를 입력해 주세요.");
      return;
    }

    setShowToast(true);
    setPhoneNumber("");

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const handlePhoneCallDemo = () => {
    alert(`[전화 연결 시뮬레이션]\n"${displayKeyword}" 사장님 직통 스마트폰 통화로 자연스럽게 연결됩니다.`);
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
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-75" />
            <div className="relative flex items-center gap-3 bg-[#111115] border border-[#22222b] px-6 py-4 rounded-xl shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">[전송 완료] 카카오 알림톡 전송 요청</p>
                <p className="text-xs text-muted-foreground mt-0.5">시안 소유 등록 링크가 1분 이내에 발송됩니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Blur Effect */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-extrabold px-3 py-1 rounded border border-secondary/20 bg-secondary/5">
            {isSearched ? "홈페이지 시안 생성 완료" : "실제 완성 시안 샘플 구동 중"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-4 mb-3">
            {isSearched ? (
              <>
                실시간 분석 매칭: <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-black">{displayKeyword}</span>
              </>
            ) : (
              "사장님이 바쁜 현장에서 일할 때도, 홈페이지가 알아서 전화 문의를 받습니다."
            )}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            리뷰 데이터에서 과잉청구나 부실공사 불안 요소를 완전히 제거하고, 신뢰도가 높은 강점을 뽑아내어 전화 문의율이 극대화된 모바일 홈페이지를 구워냈습니다.
          </p>
        </div>

        {/* Dashboard & Preview Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: Place Review Dashboard */}
          <div className="lg:col-span-5 bg-[#111115] border border-[#22222b] rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#333340] transition-colors duration-300 h-full">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  고객 리뷰 키워드 추출 결과
                </h3>
                <p className="text-xs text-muted-foreground mt-1">네이버 플레이스에서 추출한 실제 평판 통계</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-foreground font-mono">{displayData.reviewsCount}</span>
                <span className="text-xs text-muted-foreground block">시공 고객 평가</span>
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
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${animatedProgress[idx] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Sub Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-[#22222b]/50">
              <div className="bg-[#14141a] border border-[#22222b] rounded-xl p-3 text-center">
                <p className="text-[10px] text-muted-foreground font-semibold">바가지 견적 의혹 필터링</p>
                <p className="text-sm font-extrabold text-[#00ff66] mt-1 font-mono">100% CLEAN</p>
              </div>
              <div className="bg-[#14141a] border border-[#22222b] rounded-xl p-3 text-center">
                <p className="text-[10px] text-muted-foreground font-semibold">시공 하자 불안 요소 차단</p>
                <p className="text-sm font-extrabold text-primary mt-1 font-mono">신뢰지수 최상</p>
              </div>
            </div>

            {/* Proof Badges */}
            <div className="flex items-center gap-2 mt-6 justify-center text-[10px] text-muted-foreground font-medium">
              <Shield className="w-3 h-3 text-muted-foreground/80" />
              <span>로컬 소상공인 보증 등급 데이터 동기화 완료</span>
            </div>
          </div>

          {/* RIGHT: Mobile Web Frame mockup */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-[#070709] rounded-[48px] p-3 shadow-2xl border-[6px] border-[#22222b] relative overflow-hidden group">
              
              {/* Speaker bezel notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#22222b] rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-1 bg-[#111115] rounded-full mr-2" />
                <div className="w-2.5 h-2.5 bg-[#111115] rounded-full" />
              </div>

              {/* Home indicator bar */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-1 bg-[#22222b] rounded-full z-30" />

              {/* Mobile Viewport Screen */}
              <div className="w-full h-full bg-[#0a0a0c] rounded-[38px] overflow-y-auto relative text-left select-none hide-scrollbar z-20 pb-12 pt-6">
                
                {/* Mobile Header Bar */}
                <div className="sticky top-0 bg-[#0a0a0c]/90 backdrop-blur-md px-5 py-3 border-b border-[#22222b]/50 z-20 flex items-center justify-between">
                  <span className="text-[11px] font-black tracking-tight text-white">
                    {keyword ? displayKeyword : "한양지붕공사"}
                  </span>
                  <span className="text-[9px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-extrabold uppercase">
                    실시간 시안
                  </span>
                </div>

                {/* Mobile Content Screen */}
                <div className="p-5 space-y-6">
                  {/* Badge */}
                  <span className="inline-block text-[9px] font-bold text-primary tracking-wide uppercase px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                    ✦ {displayData.mobilePreview.badge}
                  </span>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-black text-white leading-snug tracking-tight">
                    {displayData.mobilePreview.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed">
                    {displayData.mobilePreview.description}
                  </p>

                  {/* Smart Mobile Action buttons (Phone calls focused) */}
                  <div className="pt-2">
                    <button 
                      onClick={handlePhoneCallDemo}
                      className="w-full bg-gradient-to-r from-primary via-accent to-primary text-background font-black text-xs py-3.5 rounded-xl text-center shadow-lg hover:shadow-primary/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-primary/20"
                    >
                      <Phone className="w-4 h-4 text-background fill-background animate-pulse" />
                      <span>전화 문의하기</span>
                    </button>
                    <p className="text-center text-[9px] text-muted-foreground/60 mt-1.5 font-medium">모바일 환경에서 즉시 직통 전화 다이얼로 연결됩니다.</p>
                  </div>

                  {/* Strengths Card */}
                  <div className="pt-4 border-t border-[#22222b]/50 space-y-3">
                    <p className="text-[9.5px] uppercase font-bold text-muted-foreground tracking-wider">우리 업체만의 안심 약속</p>
                    
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

                  {/* Guarantee Box */}
                  <div className="bg-gradient-to-br from-[#111115] to-[#14141a] border border-[#22222b] p-4 rounded-xl text-center space-y-2 mt-4">
                    <Sparkles className="w-4 h-4 text-primary mx-auto animate-spin" />
                    <p className="text-[9.5px] font-bold text-white">100% 매칭 검증 평판 적용</p>
                    <p className="text-[8.5px] text-muted-foreground leading-relaxed">실제 시공 고객들의 우수 평판을 토대로 제작된 사장님 전용 5분 안심 세일즈 시안입니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM: Lead Generation Form */}
        <div className="relative group max-w-4xl mx-auto">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300" />
          
          <div className="relative bg-[#111115] border border-[#22222b] p-6 sm:p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden">
            
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                이 홈페이지를 사장님 소유로 등록하고 실제 고객 전화를 받으시겠습니까?
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                핸드폰 번호를 남겨주시면 방금 완성된 홈페이지 링크 및 소유권 등록 안내를 카카오 알림톡으로 발송해 드립니다.
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
                  placeholder="휴대폰 번호 입력"
                  className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none w-full font-semibold"
                />
              </div>
              <button 
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-primary to-accent text-background font-bold text-sm rounded-xl hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(250,204,21,0.15)] flex items-center justify-center gap-2 cursor-pointer"
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
