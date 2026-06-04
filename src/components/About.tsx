"use client";

import { 
  Coffee, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building,
  Heart
} from "lucide-react";

export function About() {
  return (
    <section className="py-36 md:py-44 border-t border-slate-200 px-6 relative overflow-hidden bg-slate-50">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Personal brand Identity & Real Operating Dashboard Visuals */}
          <div className="lg:col-span-5 flex flex-col gap-6 items-center lg:items-stretch w-full max-w-sm mx-auto lg:mx-0">
            <div className="relative group">
              {/* Outer soft glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-500" />
              
              {/* Box container presenting Personal Brand Identity */}
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center shadow-lg">
                {/* Visual Avatar Placeholder with premium initials */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-500/10 to-blue-500/10 border border-slate-200 flex items-center justify-center mb-6">
                  <span className="text-3xl font-black bg-gradient-to-r from-yellow-600 to-blue-600 bg-clip-text text-transparent select-none">
                    BH
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-slate-800 mb-1">대표디렉터</h3>
                <p className="text-blue-700 text-sm font-bold mb-4">브랜딩하다 총괄 설계자</p>
                
                {/* Highlights (비즈니스와 기술 전문성의 두 개의 축) */}
                <div className="w-full space-y-4 text-sm text-slate-600 border-t border-slate-100 pt-4 text-left">
                  {/* Axis 1: Business Real Experience */}
                  <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex gap-2.5 items-start">
                    <Building className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-slate-800 block mb-0.5">실전 자영업 매장 운영 경험</span>
                      <span className="text-xs sm:text-sm leading-relaxed block font-semibold">
                        오프라인 숙박업 매장을 실제로 직접 책임 운영한 노하우 (사장님 고민 백배 공감)
                      </span>
                    </div>
                  </div>
                  
                  {/* Axis 2: AI & Technology Innovation */}
                  <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex gap-2.5 items-start">
                    <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-extrabold text-slate-800 block mb-0.5">체계적인 자동화 시스템</span>
                      <span className="text-xs sm:text-sm leading-relaxed block font-semibold">
                        복잡한 과정 없이 신속하게 제작하는 마케팅 특화 웹 솔루션 총괄
                      </span>
                    </div>
                  </div>

                  {/* Highlighted Local Partner Indicator */}
                  <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-xl flex items-center gap-2 text-yellow-800 font-black text-center justify-center text-xs sm:text-sm shadow-sm">
                    <MapPin className="w-5 h-5 animate-bounce text-yellow-600" />
                    <span>서울 전 지역 무료 방문 상담 가능</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 📊 실제 운영 STAY 통합 운영 대시보드 비주얼 블록 (현장형 전문가 증명 CRO) */}
            <div className="relative group bg-white border border-slate-200 rounded-2xl p-6 shadow-xl relative overflow-hidden text-left hover:border-yellow-500/30 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-yellow-500 to-blue-600" />
              
              <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-700 uppercase tracking-wider">실시간 예약 운영 대시보드 (LIVE)</span>
                </div>
                <span className="text-[9px] text-slate-400 font-mono">STATION #5</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block mb-1">통합 객실 점유율</span>
                  <span className="text-xl font-black text-yellow-600 font-mono tracking-tight">96.4%</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-xl text-center">
                  <span className="text-[10px] text-slate-500 font-bold block mb-1">오늘 예약 점유</span>
                  <span className="text-xl font-black text-blue-600 font-mono tracking-tight">14 / 15실</span>
                </div>
              </div>
              
              {/* SVG 미니 렌더링 그래프 (비주얼 피로 해소 및 시각화 극대화) */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-2">
                <span className="text-[10px] text-slate-500 font-bold block">월간 실시간 예약 대행 자산 추이</span>
                <div className="h-10 flex items-end gap-1.5 pt-2">
                  <div className="w-full bg-slate-200 rounded h-[35%] transition-all" />
                  <div className="w-full bg-slate-200 rounded h-[50%] transition-all" />
                  <div className="w-full bg-slate-200 rounded h-[70%] transition-all" />
                  <div className="w-full bg-blue-600 rounded h-[85%] transition-all animate-pulse" />
                  <div className="w-full bg-yellow-500 rounded h-[96%] transition-all" />
                </div>
                <div className="flex justify-between text-[8px] text-slate-400 font-mono">
                  <span>2월</span>
                  <span>3월</span>
                  <span>4월</span>
                  <span>5월</span>
                  <span>현재</span>
                </div>
              </div>
              
              <div className="flex items-center gap-1.5 mt-3 justify-center text-[10px] text-slate-500 font-bold">
                <span>✓ 정직한 데이터 분석과 실제 고객 평판 기반 대시보드 검증</span>
              </div>
            </div>

          </div>

          {/* Right Side: Message Details (10% 폰트 증량 및 가독성 업그레이드) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-blue-500/50" />
              <span className="text-xs uppercase tracking-widest text-blue-700 font-black">
                동반성장 약속 & 대표 인사말
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.3] text-center lg:text-left">
              "임대료 무서운 줄 아는 개발자가 만드는 홈페이지"
            </h2>

            {/* 잡지 스타일 레이아웃 (넓은 줄 간격 및 큰 본문 폰트) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700 text-base sm:text-lg leading-[2.0] font-bold text-left pt-6 border-t border-slate-200">
              <div className="space-y-6">
                <p>
                  저 또한 오프라인 매장을 직접 대출을 받아 창업하고, 매월 피가 마르는 심정으로 높은 임대료와 직원의 주휴수당을 결제했던 실제 자영업자 출신 개발자입니다.
                </p>
                <p>
                  화려한 프레젠테이션과 비현실적인 기획서로 사장님들을 현혹하는 대형 광고 대행사들은 사장님들이 매월 1일이 다가올 때마다 겪는 숨막히는 압박과 인건비의 무서운 무게를 단 1%도 알지 못합니다.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  그렇기 때문에 저는 복잡하고 쓸데없는 장식성 화려함은 완전히 배격하고, 오직 <strong>'스마트폰으로 사장님께 전화 문의와 예약'</strong>이 올 수밖에 없도록 설계된 아주 간결하고 빠른 매출형 홈페이지를 직접 만들어 제공하고 있습니다.
                </p>
                <p>
                  서울 지역 소상공인 사장님이시라면 언제든 불러주십시오. 따뜻한 아메리카노 한 잔 양손에 들고 찾아뵈어, 매장 포털 지도 진단과 효과적인 고객 유치 전략을 정직하게 무료로 짚어 드리겠습니다.
                </p>
              </div>
            </div>

            {/* Offline Meeting Highlight Callout - 카카오톡 링크 연동 활성화 */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-6 h-6 text-yellow-600 animate-pulse" />
                </div>
                <div className="text-left">
                  <h4 className="text-base sm:text-lg font-black text-slate-800">서울 전 지역 무료 현장 방문 신청</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-[1.5] font-bold">네이버 지도 진단부터 홈페이지 시안 실물 설명까지 한 번에</p>
                </div>
              </div>
              <a 
                href="http://pf.kakao.com/_xcjrxjX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:opacity-95 text-slate-950 font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md text-center block button-click-action"
              >
                <span>카카오톡 1:1 상담하기</span>
                <ArrowRight className="w-4.5 h-4.5 text-slate-950" />
              </a>
            </div>

            {/* Footer Signature Box */}
            <div className="pt-6 border-t border-[#22222b]/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs text-muted-foreground">본 프로젝트는 모든 제작 및 유지 계약이 법적으로 명문화됩니다.</span>
              </div>
              <div className="text-right self-end sm:self-center">
                <span className="text-xs text-muted-foreground block">운영사: 코리아니티</span>
                <span className="text-sm text-foreground font-black tracking-wide">
                  브랜딩하다 <span className="text-primary font-bold text-base font-serif italic ml-1">대표디렉터</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
