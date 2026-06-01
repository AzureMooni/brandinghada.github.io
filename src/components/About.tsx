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
    <section className="py-24 border-t border-[#22222b]/50 px-6 relative overflow-hidden bg-gradient-to-b from-[#070709] to-background">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/3 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo Frame or Dynamic Visual Badge */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative group">
              {/* Outer soft glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Box container presenting Personal Brand Identity */}
              <div className="relative bg-[#111115] border border-[#22222b] rounded-2xl p-8 max-w-sm flex flex-col items-center">
                {/* Visual Avatar Placeholder with premium initials */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-[#22222b] flex items-center justify-center mb-6">
                  <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent select-none">
                    KM
                  </span>
                </div>
                
                <h3 className="text-xl font-extrabold text-foreground mb-1">김경문 대표</h3>
                <p className="text-primary text-xs font-bold mb-4">브랜딩하다 대표디렉터 & AI 솔루션 빌더</p>
                
                {/* Highlights (비즈니스와 기술 전문성의 두 개의 축) */}
                <div className="w-full space-y-4 text-xs text-[#8e8e9f] border-t border-[#22222b] pt-4 text-left">
                  {/* Axis 1: Business Real Experience */}
                  <div className="bg-[#14141a] border border-[#22222b] p-3 rounded-lg flex gap-2.5 items-start">
                    <Building className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block mb-0.5">실전 자영업 비즈니스 축</span>
                      <span className="text-[11px] leading-relaxed block">
                        5채의 오프라인 숙박업 매장 실제 직접 책임 운영 (사장님 고민 백배 공감)
                      </span>
                    </div>
                  </div>
                  
                  {/* Axis 2: AI & Technology Innovation */}
                  <div className="bg-[#14141a] border border-[#22222b] p-3 rounded-lg flex gap-2.5 items-start">
                    <Sparkles className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-foreground block mb-0.5">AI 기술/플랫폼 혁신 축</span>
                      <span className="text-[11px] leading-relaxed block">
                        gstack 자동화 빌더 탑재 및 경량 고속 마케팅 웹 솔루션 설계·총괄
                      </span>
                    </div>
                  </div>

                  {/* Highlighted Local Partner Indicator */}
                  <div className="bg-primary/10 border border-primary/20 p-2.5 rounded-lg flex items-center gap-2 text-primary font-black text-center justify-center">
                    <MapPin className="w-4.5 h-4.5 animate-bounce" />
                    <span>인천 지역 오프라인 즉시 미팅 가능</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-primary/50" />
              <span className="text-xs uppercase tracking-widest text-primary font-black">
                Personal Branding & Commitment
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-[1.3]">
              "사업을 해본 사람만이<br className="sm:hidden" /> 사장님의 마음을 압니다."
            </h2>

            <div className="space-y-4 text-[#8e8e9f] text-sm sm:text-base leading-[1.7] font-medium">
              <p>
                안녕하세요, 브랜딩하다를 이끌고 있는 김경문입니다.
              </p>
              <p>
                저 또한 인천 등지에서 <strong className="text-foreground font-bold">5채의 숙박업 매장</strong>을 직접 창업하고 땀 흘리며 운영하고 있습니다. 전단지를 돌리고, 포털 지도를 편집하고, 고객 한 명에게 머리 조아리던 실제 현장의 치열함을 몸소 겪었습니다.
              </p>
              <p>
                화려한 미사여구와 비현실적인 기획서로 무장한 IT 대행사들은 사장님이 매월 납부해야 하는 임대료와 인건비의 무게를 알지 못합니다. 그렇기에 저는 오직 <strong className="text-foreground font-bold">'실질적인 온라인 고객 전환'</strong>에만 집중하는 가장 실용적인 gstack 솔루션을 만들었습니다.
              </p>
              <p>
                컴퓨터 화면 뒤에 숨지 않겠습니다. <strong className="text-primary font-bold">인천 지역 소상공인</strong> 사장님이시라면 언제든 불러주십시오. 따뜻한 아메리카노 한 잔과 함께, 사장님의 고민과 마케팅 방향을 오프라인에서 허심탄회하게 맞대어 드릴 것을 약속합니다.
              </p>
            </div>

            {/* Offline Meeting Highlight Callout */}
            <div className="bg-[#111115]/60 border border-[#22222b] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">인천 오프라인 커피챗 미팅</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-[1.5]">가벼운 비즈니스 고민 상담부터 시안 무료 진단까지</p>
                </div>
              </div>
              <a 
                href="https://blog.naver.com/brandinghada"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-primary text-background font-bold text-xs sm:text-sm rounded-lg hover:opacity-90 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <span>블로그로 미팅 문의하기</span>
                <ArrowRight className="w-4.5 h-4.5" />
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
                  브랜딩하다 디렉터 <span className="text-primary font-bold text-base font-serif italic ml-1">김 경 문</span>
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
