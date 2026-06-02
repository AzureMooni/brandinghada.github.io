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
    { name: "완벽한 AS 철저 보장", percentage: 88 }
  ],
  reviewsCount: 94,
  mobilePreview: {
    badge: "로컬 안심 공식 파트너 시안",
    title: `정직과 신용으로 책임 시공 - ${keyword || "한양지붕공사"}`,
    description: "불필요한 과도 공사비 요구나 날림 시공은 이제 끝입니다. 사장님 매장 평판에 쌓인 강력한 리뷰를 모아 세련된 맞춤 모바일 페이지를 제공합니다.",
    features: ["빅데이터 평판 필터링으로 다듬은 과잉청구 0% 약속", "홈페이지 터치 한 번으로 사장님과 직통 모바일 유선 연결", "고객 유치 전환율을 극대화하는 반응형 액션 배치"],
    accentColor: "from-[#facc15] to-[#2563eb]"
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

  // 검색 데이터 할당
  const activeData = MOCK_PREVIEW_DATA[keyword] || DEFAULT_MOCK_DATA(keyword);
  const displayKeyword = keyword || "한양지붕공사";
  const displayData = keyword ? activeData : MOCK_PREVIEW_DATA["한양지붕공사"];

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

  // 슬라이더 마우스/터치 드래그 연동 로직
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

    // 알림톡 수신 화면 모핑 작동!
    setIsKakaoSent(true);
    setShowToast(true);
    setPhoneNumber("");
    
    alert(`[알림톡 시안 발송 성공]\n\n사장님 가게 맞춤형 5분 홈페이지 임시 시안이 전송되었습니다!\n\n오른쪽 스마트폰 시뮬레이터 화면을 확인하시면 카카오 알림톡 수신 내용과 임시 주소를 직접 체험해보실 수 있습니다.`);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  const handlePhoneCallDemo = () => {
    // 실제 통화 다이얼 화면 활성화
    window.location.href = "tel:010-3054-3990";
  };

  const handleResetKakaoDemo = () => {
    setIsKakaoSent(false);
  };

  return (
    <section 
      id="interactive-preview"
      className={`relative py-24 border-t border-slate-200 overflow-hidden px-6 transition-all duration-1000 bg-white ${
        isSearched ? "opacity-100 translate-y-0" : "opacity-90"
      }`}
    >
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-xl blur opacity-30" />
            <div className="relative flex items-center gap-3 bg-white border border-slate-300 px-6 py-4 rounded-xl shadow-2xl">
              <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-600">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">[알림톡 도착] 모바일을 확인하십시오.</p>
                <p className="text-xs text-slate-500 mt-0.5">폰 화면이 카카오 알림톡 수신 모드로 모핑되었습니다.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Blur */}
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#2563eb] font-extrabold px-3 py-1 rounded border border-secondary/20 bg-secondary/5">
            {isSearched ? "초정밀 모바일 시안 생성 완료" : "실제 완성 시안 샘플 구동 중"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mt-4 mb-3">
            {isSearched ? (
              <>
                실시간 매칭 결과: <span className="text-blue-700 font-black">{displayKeyword}</span>
              </>
            ) : (
              "사장님이 땀 흘려 일하실 때도, 홈페이지가 세일즈합니다."
            )}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold">
            리뷰 평판 빅데이터를 분석하여 신뢰도를 떨어뜨리는 단어를 거르고, 시공 퀄리티가 돋보이도록 전용 슬라이더 포트폴리오를 적용했습니다.
          </p>
        </div>

        {/* Dashboard & Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* LEFT: Place Review Dashboard */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-slate-300 transition-colors duration-300 h-full">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-transparent" />
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  고객 리뷰 키워드 추출 결과
                </h3>
                <p className="text-xs text-slate-500 mt-1">플레이스에 기록된 소상공인 실사용 강점 빅데이터</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-slate-900 font-mono">{displayData.reviewsCount}</span>
                <span className="text-xs text-slate-500 block">시공 만족 후기</span>
              </div>
            </div>

            {/* Keyword Gauge Bars */}
            <div className="space-y-6">
              {displayData.keywords.map((kw, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-700 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {kw.name}
                    </span>
                    <span className="text-blue-700 font-mono">{animatedProgress[idx] || 0}%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${animatedProgress[idx] || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Dashboard Sub Stats */}
            <div className="grid grid-cols-2 gap-4 mt-10 pt-8 border-t border-slate-200">
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <p className="text-[10px] text-slate-500 font-semibold">바가지 청구 방지 검증</p>
                <p className="text-sm font-extrabold text-emerald-600 mt-1 font-mono">100% PASS</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-3 text-center">
                <p className="text-[10px] text-slate-500 font-semibold">날림/부실 시공 요소 제거</p>
                <p className="text-sm font-extrabold text-blue-600 mt-1 font-mono">마찰 제로</p>
              </div>
            </div>

            {/* Security Proof */}
            <div className="flex items-center gap-2 mt-6 justify-center text-[10px] text-slate-500 font-medium">
              <Shield className="w-3 h-3 text-slate-400" />
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

              {/* [INNOVATIVE] 1. KAKAO ALARM TOK SCREEN MODE */}
              {isKakaoSent ? (
                <div className="w-full h-full bg-[#bacee0] rounded-[38px] overflow-y-auto relative text-left select-none hide-scrollbar z-20 pb-12 pt-6 animate-in fade-in zoom-in-95 duration-300">
                  {/* Kakao Header */}
                  <div className="sticky top-0 bg-[#bacee0] px-5 py-3.5 z-20 flex items-center justify-between border-b border-[#a9bdcf]">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <span className="text-xs font-black text-[#2e3b47]">알림톡 수신 성공</span>
                    </div>
                    <button 
                      onClick={handleResetKakaoDemo}
                      className="text-[10px] font-bold bg-[#3a3a3c] text-white px-2.5 py-1 rounded hover:bg-[#4a4a4c] transition-all cursor-pointer"
                    >
                      홈페이지로 돌아가기
                    </button>
                  </div>

                  {/* Kakao chat window content */}
                  <div className="p-4 space-y-4 font-sans text-xs">
                    {/* Timestamp */}
                    <p className="text-center text-[10px] text-[#748796] my-2">2026년 5월 26일 화요일</p>

                    {/* Chat Bubble Grid */}
                    <div className="flex gap-2 items-start max-w-[90%]">
                      {/* Avatar */}
                      <div className="w-8 h-8 rounded-lg bg-[#3a3a3c] text-primary flex items-center justify-center text-[10px] font-black flex-shrink-0">
                        BH
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-[10px] text-[#4f5c69] font-bold">브랜딩하다 공식 채널</p>
                        
                        {/* Message Box */}
                        <div className="bg-white text-black p-4 rounded-r-2xl rounded-bl-2xl shadow border border-[#d6e0ea] space-y-3">
                          <div className="flex items-center gap-1.5 text-primary bg-[#0a0a0c] px-2 py-1.5 rounded text-[10px] font-black">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>[브랜딩하다] 로컬 세일즈 알림톡</span>
                          </div>
                          
                          <p className="font-extrabold text-[12px]">{displayKeyword} 사장님,</p>
                          <p className="text-[#333] leading-relaxed text-[11px]">
                            축하드립니다! 사장님 가게 시공 리뷰를 분석한 **전화 문의 특화 홈페이지**가 5분 만에 완성되어 소유권 대기 상태로 등록되었습니다.
                          </p>

                          <div className="bg-[#f5f6f8] p-3 rounded-lg border border-[#eee] space-y-1.5 text-[10px] font-mono text-slate-700">
                            <div>• <strong>완성 주소:</strong> bh.com/{keyword ? "hanyang" : "hanyang"}</div>
                            <div>• <strong>상태:</strong> 100% 임시 도메인 연동 대기</div>
                            <div>• <strong>통계:</strong> 리뷰 {displayData.reviewsCount}개 반영 완료</div>
                          </div>

                          <p className="text-[#444] leading-relaxed text-[10.5px]">
                            지금 바로 아래 노란색 버튼을 터치하여 사장님 소유의 공식 도메인과 연결하고 실제 현장 전화를 받으십시오.
                          </p>

                          {/* Interactive Domain Connect Button */}
                          <button 
                            onClick={() => alert("도메인 연결 SaaS 결제 모듈 연동 단계로 이동합니다 (초기 7일 무료 체험).")}
                            className="w-full bg-[#fef01b] hover:bg-[#f3e316] text-[#3c1e1e] font-black text-center py-3.5 rounded-lg border border-[#e2d210] flex items-center justify-center gap-1.5 transition-all text-xs cursor-pointer shadow-sm"
                          >
                            <Phone className="w-3.5 h-3.5 fill-[#3c1e1e]" />
                            <span>1초 만에 내 도메인 연결하기</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <button 
                        onClick={handleResetKakaoDemo}
                        className="text-[10px] text-[#4f5c69] hover:text-black font-semibold flex items-center gap-1 mx-auto underline cursor-pointer"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>다시 시공 프리뷰 시안 보기</span>
                      </button>
                    </div>

                  </div>
                </div>
              ) : (
                /* [NORMAL] 2. NORMAL HOMEPAGE VIEW PORT */
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

                    {/* Smart Mobile Action buttons */}
                    <div className="pt-2">
                      <button 
                        onClick={handlePhoneCallDemo}
                        className="w-full bg-gradient-to-r from-primary via-accent to-primary text-background font-black text-xs py-3.5 rounded-xl text-center shadow-lg hover:shadow-primary/25 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer border border-primary/20"
                      >
                        <Phone className="w-4 h-4 text-background fill-background animate-pulse" />
                        <span>전화 문의하기</span>
                      </button>
                      <p className="text-center text-[9px] text-muted-foreground/60 mt-1.5 font-medium">터치 시 즉시 직통 전화 다이얼로 연결됩니다.</p>
                    </div>

                    {/* [INNOVATIVE] Before & After Image Slider Component */}
                    <div className="pt-4 border-t border-[#22222b]/50 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-[9.5px] uppercase font-bold text-muted-foreground tracking-wider">시공 실력 직관 증명 (드래그)</p>
                        <span className="text-[8px] bg-primary/20 text-primary px-1 rounded font-bold animate-pulse">BEFORE & AFTER</span>
                      </div>
                      
                      {/* Interactive Drag Box */}
                      <div 
                        ref={sliderRef}
                        onMouseDown={handleStartDrag}
                        onTouchStart={handleStartDrag}
                        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#22222b]"
                      >
                        {/* BEFORE Image (Under Layer) */}
                        <div className="absolute inset-0 bg-[#16161f] flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mb-2">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <p className="text-[10px] text-red-400 font-extrabold">🚨 시공 전 (Before)</p>
                          <p className="text-[8.5px] text-muted-foreground mt-1 max-w-[80%]">심각한 빗물 누수 균열 및 낡고 방수 기능 상실된 철골 상태</p>
                        </div>

                        {/* AFTER Image (Top Slider Layer) */}
                        <div 
                          className="absolute inset-y-0 left-0 bg-[#111115] flex flex-col items-center justify-center p-4 text-center border-r-2 border-primary overflow-hidden"
                          style={{ width: `${sliderPosition}%` }}
                        >
                          <div className="w-200% h-full absolute inset-0 flex flex-col items-center justify-center p-4 text-center select-none" style={{ width: sliderRef.current?.getBoundingClientRect().width || "280px" }}>
                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-2">
                              <Sparkles className="w-4 h-4 animate-spin" />
                            </div>
                            <p className="text-[10px] text-primary font-extrabold">✨ 시공 후 (After)</p>
                            <p className="text-[8.5px] text-foreground font-semibold mt-1 max-w-[80%]">안동안 누수 없는 Safety Yellow 보강 방수 및 깔끔한 외관 마감 완료</p>
                          </div>
                        </div>

                        {/* Slider Handle Knob */}
                        <div 
                          className="absolute inset-y-0 w-8 -ml-4 flex items-center justify-center pointer-events-none z-10"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="w-7 h-7 rounded-full bg-primary text-background flex items-center justify-center shadow-lg border border-[#22222b]">
                            <Smartphone className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </div>
                      <p className="text-center text-[8px] text-muted-foreground/60">손가락이나 마우스로 스마트폰 사진을 드래그해 시공 전후 실력을 비교해보세요.</p>
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
              )}
            </div>
          </div>

        </div>

        {/* BOTTOM: Lead Generation Form */}
        <div className="relative group max-w-4xl mx-auto mt-16">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 via-blue-500 to-yellow-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300" />
          
          <div className="relative bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-2xl text-center md:text-left flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-hidden shadow-md">
            
            <div className="space-y-2">
              <h3 className="text-base sm:text-lg font-bold text-slate-800 flex items-center justify-center md:justify-start gap-2">
                <MessageSquare className="w-5 h-5 text-yellow-600" />
                이 홈페이지 시안을 사장님 핸드폰으로 무료로 받으시겠습니까?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-bold">
                휴대폰 번호만 남겨주시면 방금 조립된 홈페이지 주소와 관리 안내를 **카카오 알림톡**으로 즉시 무료 발송해 드립니다.
              </p>
            </div>

            <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:max-w-md flex-shrink-0">
              <div className="relative flex items-center bg-white border border-slate-300 rounded-xl px-4 py-3 focus-within:border-yellow-500 transition-all duration-300 shadow-inner">
                <Phone className="w-4 h-4 text-slate-400 mr-2.5" />
                <input
                  type="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="휴대폰 번호 입력"
                  className="bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none w-full font-bold"
                />
              </div>
              <button 
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-950 font-black text-sm rounded-xl hover:opacity-95 transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>무료 시안 받아보기</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
