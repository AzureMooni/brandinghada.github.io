"use client";

import { useState, useEffect, useRef } from "react";
import { Phone, CheckCircle, ArrowRight, Smartphone, Star, Shield, Users, Sparkles, MessageCircle, AlertTriangle, RefreshCw, MessageSquare } from "lucide-react";

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
  "방수·누수공사": {
    keywords: [
      { name: "과잉청구 없음 (투명한 견적)", percentage: 98 },
      { name: "옥상 방수 특허 공법 시공", percentage: 95 },
      { name: "빗물 누수 및 외벽 균열 차단", percentage: 92 },
      { name: "무상 하자 보증서 발급 보장", percentage: 89 }
    ],
    reviewsCount: 154,
    mobilePreview: {
      badge: "옥상 방수·외벽 누수 전문",
      title: "동네 주민들이 인정한 옥상 누수·방수 전문 기술 해결사",
      description: "빗물 누수 차단율 100%! 오랜 현장 경력의 노하우와 특허 방수 공법으로 옥상 및 건물 균열 누수 걱정을 정직하고 완벽하게 해결해 드립니다.",
      features: ["특허받은 친환경 복합 시트 공법 적용으로 영구 보장", "추가 요금 절대 없음! 계약서 명시 정찰제 견적 약속", "시공 완료 후 철저한 무상 하자 보증서 발급 보장"],
      accentColor: "from-[#134074] to-[#0b2545]"
    }
  },
  "종합 설비": {
    keywords: [
      { name: "정밀 누수 원인 탐지 신속", percentage: 97 },
      { name: "거품 없는 본사 직영 공사비", percentage: 96 },
      { name: "첨단 전문 관로 탐지 장비 보유", percentage: 94 },
      { name: "친절하고 투명한 기술 설명", percentage: 91 }
    ],
    reviewsCount: 128,
    mobilePreview: {
      badge: "배관·누수·설비 안심 해결",
      title: "안심하고 믿고 맡기는 정직한 직영 배관 설비 파트너",
      description: "첨단 내시경 장비와 초정밀 청음 탐지기를 사용하여 타일 파손을 최소화하고, 물길을 단 한 번에 확실하게 찾아 차단해 드립니다.",
      features: ["불필요한 공사를 절대 권유하지 않는 정밀 원인 규명", "원인을 규명하지 못하면 탐지 출장비 0원 원칙 준수", "수도, 보일러 배관, 싱크대 하수구 정밀 소통 올인원"],
      accentColor: "from-[#134074] to-[#0b2545]"
    }
  },
  "인테리어": {
    keywords: [
      { name: "공사 중간 추가 청구 제로", percentage: 99 },
      { name: "하자 없는 성실 마감 시공", percentage: 95 },
      { name: "꼼꼼한 1:1 맞춤 피드백", percentage: 93 },
      { name: "성실하고 신속한 AS 대처", percentage: 90 }
    ],
    reviewsCount: 110,
    mobilePreview: {
      badge: "본사 소속 직영 리모델링",
      title: "동네 이웃들이 먼저 추천하는 성실 책임 인테리어 전문",
      description: "외주 하청 없는 100% 직영 팀 시공과 투명한 고성능 자재 단가 공개로, 부실 공사 걱정 없는 품격 있는 명품 공간을 완성합니다.",
      features: ["공사 도중 추가 요금을 강요하지 않는 투명 약정 보증", "무료 3D 도면 사전 설계 및 라이프스타일 맞춤 공간 제안", "신속한 사후 처리와 평생 안심 점검 서비스 도입"],
      accentColor: "from-[#134074] to-[#0b2545]"
    }
  },
  "펜션·풀빌라": {
    keywords: [
      { name: "직관적이고 신속한 예약 신청", percentage: 98 },
      { name: "프라이빗 독채 및 개별 온수풀", percentage: 96 },
      { name: "철저한 위생 및 침구 케어", percentage: 94 },
      { name: "재방문율이 증명하는 평판 만족도", percentage: 92 }
    ],
    reviewsCount: 184,
    mobilePreview: {
      badge: "프라이빗 럭셔리 풀빌라 STAY",
      title: "사계절 따뜻한 개별 온수풀에서 즐기는 온전한 휴식",
      description: "이국적인 독채 아키텍처 구조와 깊은 신뢰감을 주는 명품 힐링 공간. 번잡한 도심에서 벗어나 프라이빗하게 쉴 수 있는 완벽한 여정을 선사합니다.",
      features: ["24시간 온도 조절 가능한 프라이빗 실내 온수풀 보유", "최고급 호텔식 베딩 서비스 및 매일 친환경 살균 소독 시행", "홈페이지를 통한 다이렉트 카카오톡 문의 시 우대 혜택 적용"],
      accentColor: "from-[#134074] to-[#0b2545]"
    }
  }
};

const DEFAULT_MOCK_DATA = (keyword: string): MockDataStructure => ({
  keywords: [
    { name: "정직한 자재 가격 및 사용", percentage: 96 },
    { name: "친절하고 책임감 있는 시공", percentage: 94 },
    { name: "과잉청구 없는 합리적 비용", percentage: 91 },
    { name: "완벽한 AS 철저 보장", percentage: 88 }
  ],
  reviewsCount: 94,
  mobilePreview: {
    badge: "안심 소상공인 공식 파트너",
    title: `정직과 신용으로 책임 시공 - ${keyword || "안심 하우스 빌더"}`,
    description: "불필요한 과도 공사비 요구나 날림 시공은 이제 끝입니다. 사장님 매장 평판에 쌓인 강력한 리뷰를 모아 세련된 맞춤 모바일 페이지를 제공합니다.",
    features: ["빅데이터 평판 필터링으로 다듬은 과잉청구 0% 약속", "홈페이지 터치 한 번으로 사장님과 직통 모바일 유선 연결", "고객 유치 전환율을 극대화하는 반응형 액션 배치"],
    accentColor: "from-[#134074] to-[#0b2545]"
  }
});

export function InteractivePreview({ keyword, isSearched }: InteractivePreviewProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isKakaoSent, setIsKakaoSent] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<number[]>([]);
  
  // Before/After 슬라이더 변수 (0 ~ 100)
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // 검색 데이터 할당 (특정 업체명 제외)
  const activeData = MOCK_PREVIEW_DATA[keyword] || DEFAULT_MOCK_DATA(keyword);
  const displayKeyword = keyword || "방수·누수공사";
  const displayData = keyword ? activeData : MOCK_PREVIEW_DATA["방수·누수공사"];

  // 프로그레스 바 동적 애니메이션
  useEffect(() => {
    if (isSearched || !keyword) {
      setAnimatedProgress([0, 0, 0, 0]);
      const timer = setTimeout(() => {
        setAnimatedProgress(displayData.keywords.map(k => k.percentage));
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [keyword, isSearched, displayData]);

  // 슬라이더 드래그 연동 로직
  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleSliderMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    window.removeEventListener("touchmove", handleTouchMove);
    window.removeEventListener("touchend", handleTouchEnd);
  };

  const handleStartDrag = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = true;
    if ("touches" in e) {
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
      handleSliderMove(e.touches[0].clientX);
    } else {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      handleSliderMove(e.clientX);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    const rawNumber = phoneNumber.replace(/[^0-9]/g, "");
    if (rawNumber.length < 10) {
      alert("올바른 휴대폰 번호 10~11자리를 입력해 주세요.");
      return;
    }

    setIsKakaoSent(true);
    setShowToast(true);
    setPhoneNumber("");
    
    alert(`[알림톡 시안 발송 성공]\n\n사장님 가게 맞춤형 5분 홈페이지 임시 시안이 전송되었습니다!\n\n오른쪽 스마트폰 시뮬레이터 화면을 확인하시면 카카오 알림톡 수신 내용과 임시 주소를 직접 체험해보실 수 있습니다.`);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const handlePhoneCallDemo = () => {
    window.open("http://pf.kakao.com/_xcjrxjX", "_blank");
  };

  const handleResetKakaoDemo = () => {
    setIsKakaoSent(false);
  };

  return (
    <section 
      id="interactive-preview"
      className={`relative py-24 border-t border-white/[0.06] overflow-hidden px-6 transition-all duration-1000 bg-[#030C1B] ${
        isSearched ? "opacity-100 translate-y-0" : "opacity-90"
      }`}
    >
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-550 rounded-xl blur opacity-30" />
            <div className="relative flex items-center gap-3 glass-card border border-white/10 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md">
              <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-404">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-light text-white">[알림톡 도착] 모바일을 확인하십시오.</p>
                <p className="text-xs text-slate-400 mt-0.5 font-light">알림톡 수신 모드로 폰 화면이 전환되었습니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-20 text-center max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-widest text-slate-300 font-light px-3 py-1 rounded border border-white/10 bg-white/[0.03] backdrop-blur-md">
            {isSearched ? "초정밀 모바일 시안 생성 완료" : "실제 완성 시안 샘플 구동 중"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mt-4 mb-3 font-outfit">
            {isSearched ? (
              <>
                실시간 매칭 결과: <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-normal">{displayKeyword}</span>
              </>
            ) : (
              "사장님이 땀 흘려 일하실 때도, 홈페이지가 세일즈합니다."
            )}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
            리뷰 평판 빅데이터를 분석하여 신뢰도를 떨어뜨리는 단어를 거르고, 시공 퀄리티가 돋보이도록 전용 슬라이더 포트폴리오를 적용했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* LEFT: Keyword analysis board */}
          <div className="lg:col-span-5 glass-card border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300 h-full flex flex-col justify-between shadow-2xl reveal">
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-transparent" />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-base sm:text-lg font-light text-white flex items-center gap-2 font-outfit">
                  <Star className="w-5 h-5 text-blue-400" />
                  고객 리뷰 키워드 추출 결과
                </h3>
                <p className="text-xs text-slate-450 mt-1 font-light">플레이스에 기록된 소상공인 실사용 강점 빅데이터</p>
              </div>

              <div className="text-left bg-white/[0.01] border border-white/5 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-450 block font-light">반영 리뷰 건수</span>
                  <span className="text-xs font-light text-blue-300 font-mono mt-0.5 block">[평판 신뢰 데이터 검증]</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-light text-white font-mono">{displayData.reviewsCount}</span>
                  <span className="text-[10px] text-slate-450 block font-light">시공 만족 후기</span>
                </div>
              </div>

              <div className="space-y-6">
                {displayData.keywords.map((kw, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-light">
                      <span className="text-slate-350 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-450" />
                        {kw.name}
                      </span>
                      <span className="text-blue-300 font-mono font-medium">{animatedProgress[idx] || 0}%</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedProgress[idx] || 0}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 mt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 text-center shadow-inner">
                  <p className="text-[10px] text-slate-455 font-light">바가지 청구 방지 검증</p>
                  <p className="text-sm font-medium text-emerald-400 mt-1 font-mono">100% PASS</p>
                </div>
                <div className="bg-white/[0.01] border border-white/5 rounded-xl p-3 text-center shadow-inner">
                  <p className="text-[10px] text-slate-455 font-light">날림/부실 시공 요소 제거</p>
                  <p className="text-sm font-medium text-blue-400 mt-1 font-mono">마찰 제로</p>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-center text-[10px] text-slate-450 font-light">
                <Shield className="w-3 h-3 text-slate-500" />
                <span>로컬 소상공인 보증 등급 데이터 동기화 완료</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Mobile Web Frame mockup (Apple Style Bezel, Pin-Light Effect) */}
          <div className="lg:col-span-7 flex justify-center reveal">
            <div 
              id="mobile-mockup-frame"
              className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/18.5] bg-white/[0.01] rounded-[48px] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 overflow-hidden group transition-all duration-300 ease-out will-change-transform"
            >
              
              {/* Speaker bezel notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-white/10 border-b border-x border-white/10 rounded-b-2xl z-30 flex items-center justify-center">
                <div className="w-12 h-0.5 bg-white/20 rounded-full mr-2" />
                <div className="w-2 h-2 bg-white/20 rounded-full" />
              </div>
  
              {/* Home indicator bar */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-28 h-0.5 bg-white/20 rounded-full z-30" />
  
              {/* 1. KAKAO ALARM TOK SCREEN MODE */}
              {isKakaoSent ? (
                <div className="w-full h-full bg-[#bacee0] rounded-[38px] overflow-y-auto relative text-left select-none hide-scrollbar z-20 pb-12 pt-6 animate-in fade-in zoom-in-95 duration-300">
                  {/* Kakao Header */}
                  <div className="sticky top-0 bg-[#bacee0] px-5 py-3.5 z-20 flex items-center justify-between border-b border-[#a9bdcf]">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-xs font-bold text-slate-800">알림톡 수신 성공</span>
                    </div>
                    <button 
                      onClick={handleResetKakaoDemo}
                      className="text-[10px] font-light bg-[#3a3a3c] text-white px-2.5 py-1 rounded hover:bg-[#4a4a4c] transition-all cursor-pointer font-outfit"
                    >
                      HOMEPAGE VIEW
                    </button>
                  </div>
  
                  {/* Kakao chat window content */}
                  <div className="p-4 space-y-4 font-sans text-xs">
                    <p className="text-center text-[10px] text-[#748796] my-2">오늘</p>
  
                    <div className="flex gap-2 items-start max-w-[90%]">
                      <div className="w-8 h-8 rounded-lg bg-[#3a3a3c] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 font-outfit">
                        BH
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-[10px] text-slate-700 font-bold">브랜딩하다 공식 채널</p>
                        
                        {/* Message Box */}
                        <div className="bg-white text-black p-4 rounded-r-2xl rounded-bl-2xl shadow-md border border-[#d6e0ea] space-y-3">
                          <div className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2 py-1.5 rounded text-[10px] font-bold">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>[브랜딩하다] 로컬 세일즈 알림톡</span>
                          </div>
                          
                          <p className="font-bold text-[12px]">{displayKeyword} 사장님,</p>
                          <p className="text-[#333] leading-relaxed text-[11px] font-normal">
                            축하드립니다! 사장님 가게 시공 리뷰를 분석한 **카카오톡 문의 특화 홈페이지**가 5분 만에 완성되어 소유권 대기 상태로 등록되었습니다.
                          </p>
  
                          <div className="bg-[#f8fafc] p-3 rounded-lg border border-[#e2e8f0] space-y-1.5 text-[10px] font-mono text-slate-850">
                            <div>• <strong>완성 주소:</strong> bh.com/preview-draft</div>
                            <div>• <strong>상태:</strong> 100% 임시 도메인 연동 대기</div>
                            <div>• <strong>통계:</strong> 리뷰 {displayData.reviewsCount}개 반영 완료</div>
                          </div>
  
                          <p className="text-[#333333] leading-relaxed text-[10.5px] font-normal">
                            지금 바로 아래 노란색 버튼을 터치하여 사장님 소유의 공식 도메인과 연결하고 1:1 상담을 진행해보십시오.
                          </p>
  
                          {/* Interactive Domain Connect Button */}
                          <a 
                            href="http://pf.kakao.com/_xcjrxjX"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-[#fef01b] hover:bg-[#f3e316] text-[#3c1e1e] font-black text-center py-3.5 rounded-lg border border-[#e2d210] flex items-center justify-center gap-1.5 transition-all text-xs cursor-pointer shadow-md block"
                          >
                            <MessageCircle className="w-3.5 h-3.5 fill-[#3c1e1e]" />
                            <span>1초 만에 카카오톡 1:1 상담하기</span>
                          </a>
                        </div>
                      </div>
                    </div>
  
                    <div className="text-center pt-4">
                      <button 
                        onClick={handleResetKakaoDemo}
                        className="text-[10px] text-slate-650 hover:text-black font-normal flex items-center gap-1 mx-auto underline cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>다시 시안 프리뷰 보기</span>
                      </button>
                    </div>
  
                  </div>
                </div>
              ) : (
                /* 2. NORMAL HOMEPAGE VIEW PORT - High Contrast White Background */
                <div className="w-full h-full bg-[#ffffff] rounded-[38px] overflow-y-auto relative text-left select-none hide-scrollbar z-20 pb-12 pt-6 border border-slate-200 shadow-inner">
                  
                  {/* Mobile Header Bar */}
                  <div className="sticky top-0 bg-white/95 backdrop-blur-md px-5 py-3 border-b border-slate-250 z-20 flex items-center justify-between">
                    <span className="text-[11px] font-bold tracking-tight text-[#0b2545]">
                      {keyword ? displayKeyword : "방수·누수공사 전문"}
                    </span>
                    <span className="text-[9px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold uppercase border border-blue-200/50 font-outfit">
                      DRAFT ACTIVE
                    </span>
                  </div>
  
                  {/* Mobile Content Screen */}
                  <div className="p-5 space-y-6">
                    {/* Badge */}
                    <span className="inline-block text-[9px] font-bold text-blue-705 tracking-wide uppercase px-2 py-0.5 rounded bg-blue-50 border border-blue-200/50">
                      ✦ {displayData.mobilePreview.badge}
                    </span>
  
                    {/* Title */}
                    <h4 className="text-base sm:text-lg font-bold text-[#0b2545] leading-snug tracking-tight">
                      {displayData.mobilePreview.title}
                    </h4>
  
                    {/* Description */}
                    <p className="text-[11.5px] text-[#1d2d44] leading-relaxed font-normal">
                      {displayData.mobilePreview.description}
                    </p>
  
                    {/* Smart Mobile Action buttons */}
                    <div className="pt-2">
                      {/* 카톡 정체성 노란색 + 딥블루 테두리 프레임 적용 */}
                      <button 
                        onClick={handlePhoneCallDemo}
                        className="w-full bg-[#fef01b] hover:bg-[#f3e316] text-[#3c1e1e] font-bold text-xs py-3.5 rounded-xl text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer border-2 border-[#134074]"
                      >
                        <MessageSquare className="w-4 h-4 text-[#3c1e1e] fill-[#3c1e1e] animate-pulse" />
                        <span>카카오톡 1:1 문의하기</span>
                      </button>
                      <p className="text-center text-[9px] text-slate-500 mt-2.5 font-normal leading-normal">
                        ※ 카카오톡 1:1 상담은 개인정보 노출 없이 안전하게 진행되며, 24시간 문의 가능합니다.
                      </p>
                    </div>
  
                    {/* BEFORE & AFTER Image Slider */}
                    <div className="pt-4 border-t border-slate-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[9.5px] uppercase font-bold text-slate-700 tracking-wider">시공 실력 직관 증명 (드래그)</p>
                        <span className="text-[8px] bg-blue-50 text-blue-700 px-1 rounded font-bold border border-blue-200/40">BEFORE & AFTER</span>
                      </div>
                      
                      {/* Interactive Drag Box */}
                      <div 
                        ref={sliderRef}
                        onMouseDown={handleStartDrag}
                        onTouchStart={handleStartDrag}
                        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none border border-slate-300 shadow-md"
                      >
                        {/* BEFORE Image (Under Layer) */}
                        <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center mb-2 border border-red-200">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <p className="text-[10px] text-red-700 font-bold">🚨 시공 전 (Before)</p>
                          <p className="text-[8.5px] text-[#1d2d44] mt-1 max-w-[80%] font-normal">심각한 균열 및 노후화로 인하여 부식이 진행된 상태</p>
                        </div>
  
                        {/* AFTER Image (Top Slider Layer) */}
                        <div 
                          className="absolute inset-y-0 left-0 bg-white flex flex-col items-center justify-center p-4 text-center border-r-2 border-blue-500 overflow-hidden"
                          style={{ width: `${sliderPosition}%` }}
                        >
                          <div className="w-200% h-full absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none" style={{ width: sliderRef.current?.getBoundingClientRect().width || "280px" }}>
                            <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-2 border border-blue-200">
                              <Sparkles className="w-4 h-4 animate-spin" />
                            </div>
                            <p className="text-[10px] text-[#0b2545] font-bold">✨ 시공 후 (After)</p>
                            <p className="text-[8.5px] text-[#1d2d44] font-normal mt-1 max-w-[80%]">하자 없는 명품 보강 시공 및 완벽하고 정돈된 안심 외관 마감</p>
                          </div>
                        </div>
  
                        {/* Slider Handle Knob */}
                        <div 
                          className="absolute inset-y-0 w-8 -ml-4 flex items-center justify-center pointer-events-none z-10"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg border border-[#1e293b]">
                            <Smartphone className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-[8px] text-slate-500 font-normal">손가락이나 마우스로 사진을 드래그해 전후 상태를 비교해보세요.</p>
                    </div>
  
                    {/* Strengths Card */}
                    <div className="pt-4 border-t border-slate-200 space-y-3">
                      <p className="text-[9.5px] uppercase font-bold text-slate-650 tracking-wider">우리 업체만의 안심 약속</p>
                      
                      {displayData.mobilePreview.features.map((feat, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start bg-white border border-slate-200 p-3 rounded-xl shadow-sm transition-all duration-300 hover:border-blue-500 hover:shadow-md">
                          <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-750 flex items-center justify-center flex-shrink-0 text-[10px] font-bold border border-blue-200/50">
                            {idx + 1}
                          </div>
                          <p className="text-[10px] text-slate-800 font-normal leading-relaxed">
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
  
                    {/* Guarantee Box */}
                    <div className="bg-white border border-slate-200 p-4 rounded-xl text-center space-y-2 mt-4 shadow-sm">
                      <Sparkles className="w-4 h-4 text-blue-500 mx-auto animate-spin" />
                      <p className="text-[9.5px] font-bold text-slate-900">100% 매칭 검증 평판 적용</p>
                      <p className="text-[8.5px] text-slate-600 leading-relaxed font-normal">실제 시공 고객들의 우수 평판을 토대로 제작된 사장님 전용 안심 세일즈 시안입니다.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM: Lead Generation Form (딥블루 프레임으로 감싸 선명하게 노출) */}
        <div className="relative group max-w-4xl mx-auto mt-16 reveal">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-650 via-blue-400 to-indigo-650 rounded-2xl blur opacity-25 group-hover:opacity-35 transition duration-300" />
          
          <div className="relative bg-[#111e35] border-2 border-white/20 p-6 sm:p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden shadow-xl text-white">
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-black text-white flex items-center justify-center md:justify-start gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                이 홈페이지 시안을 사장님 핸드폰으로 무료로 받으시겠습니까?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                휴대폰 번호만 남겨주시면 방금 조립된 홈페이지 주소와 관리 안내를 **카카오 알림톡**으로 즉시 무료 발송해 드립니다.
              </p>
            </div>
 
            <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:max-w-md flex-shrink-0">
              <div className="relative flex items-center bg-[#030C1B] border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-400 transition-all duration-300 shadow-inner">
                <Phone className="w-4 h-4 text-slate-400 mr-2.5" />
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="휴대폰 번호 입력"
                  className="bg-transparent text-sm text-white placeholder:text-slate-500 outline-none w-full font-light"
                />
              </div>
              
              {/* 내 비즈니스 5분 초안 무료 확인하기 (카톡 브랜딩 옐로우 연계 & 딥블루 프레임) */}
              <button 
                type="submit"
                className="px-6 py-3.5 bg-white text-[#030C1B] font-medium text-sm rounded-xl hover:bg-slate-100 hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer border border-[#030C1B]"
              >
                <span>5분 초안 무료 확인하기</span>
                <ArrowRight className="w-4 h-4 text-[#030C1B]" />
              </button>
            </form>
          </div>
        </div>
 
      </div>
    </section>
  );
}
