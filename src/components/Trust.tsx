"use client";

import { 
  Globe, 
  Briefcase, 
  TrendingUp, 
  Key, 
  RefreshCw, 
  Settings, 
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  FileText,
  ArrowUpRight,
  Stamp,
  Info,
  DollarSign,
  Activity,
  Users
} from "lucide-react";

export function Trust() {
  // 4대 핵심 가치 그리드 (4-POINT) 벤치마킹
  const valueProps = [
    {
      icon: <Key className="w-5 h-5 text-blue-405" />,
      title: "100% 영구 소유권 보장",
      desc: "대행사 종속 탈피, 소스코드 및 독점 권리 귀속",
      detail: "매달 임대료를 내지 않으면 사이트가 닫히는 대행사 락인 리스크를 완전히 박멸합니다. 구축비 완납 즉시 홈페이지의 모든 소스코드와 도메인 관리 권한을 사장님에게 법적으로 완전 양도합니다.",
      image: "/images/luxury_villa_exterior.png",
      badge: "Ownership Guaranteed"
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-405" />,
      title: "인프라 유지비 거품 제거",
      desc: "추가 요금 제로, 투명한 단일 고정 비용",
      detail: "도메인 갱신비 폭리나 단순 텍스트 수정을 할 때마다 수십만 원씩 청구하는 악습을 배격합니다. 월 5.5만 원의 고정 관리 비용으로 모든 호스팅 서버 운영 및 유지관리를 완벽하게 전담합니다.",
      image: "/images/deep_blue_abstract.png",
      badge: "Zero Hidden Cost"
    },
    {
      icon: <Users className="w-5 h-5 text-blue-405" />,
      title: "실전 자영업자 맞춤 설계",
      desc: "리뷰 기반 자동 조립, 사장님 개입 최소화",
      detail: "머리 아픈 디자인 기획안 작성이나 수차례의 회의 마찰을 없앴습니다. 이미 포털에 쌓여있는 실제 손님들의 긍정적인 평판과 리뷰 빅데이터를 활용해 신뢰가 가는 세일즈 콘텐츠를 자동 조립합니다.",
      image: "/images/luxury_resort_lobby.png",
      badge: "Local Reputation Fit"
    },
    {
      icon: <Activity className="w-5 h-5 text-blue-405" />,
      title: "24시간 자동 세일즈 머신",
      desc: "이탈율 최소화 및 카카오톡 직접 전환 유도",
      detail: "구구절절 장황한 회사 소개는 고객을 이탈하게 만듭니다. 사장님이 시공 현장에서 일하고 계시는 순간에도, 모바일로 유입된 동네 잠재고객이 카카오톡 1:1 상담을 즉시 누를 수밖에 없도록 설계했습니다.",
      image: "/images/deep_blue_abstract.png",
      badge: "24/7 Automated Sales"
    }
  ];

  const safetyGuarantees = [
    {
      icon: <Key className="w-5 h-5 text-blue-405 flex-shrink-0 mt-0.5" />,
      clause: "[제4조 소유권 및 지식재산권]",
      title: "영구 소유권 보장",
      desc: "구축비 완납 시 소스코드 및 독점 운영권 사장님 귀속",
      detail: "임대형 솔루션처럼 평생 이용료를 내지 않으면 사이트가 닫히는 불안감이 없습니다. 구축 완료 및 잔금 완납 즉시 소스코드와 독점 운영 자산권은 사장님에게 완전히 귀속됩니다.",
      tooltipDetail: "⚖️ 구축 잔금 완납과 동시에 해당 사이트의 HTML/CSS/JS 소스 코드 저작재산권과 포털 소유 및 제어권이 사장님에게 법적으로 완전 양도되며, 대행사의 임대 연장 강요 의무가 원천 소멸됩니다."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-405 flex-shrink-0 mt-0.5" />,
      clause: "[제5조 기술 이전 조항]",
      title: "언제든 독립 가능",
      desc: "시스템 및 도메인의 자유로운 이전 보장(자산 볼모 행위 금지)",
      detail: "시스템 권한을 빌미로 추가 계약을 강요하는 '인질 영업'을 배격합니다. 사장님이 자체 서버 구축이나 타사 인프라로 이전을 원하실 때 계약서 제5조에 의거해 자유로운 독립과 기술 이전을 무상 지원합니다.",
      tooltipDetail: "⚖️ 시스템 독립 요청 시, 도메인 기관 이전 및 데이터 백업 이전을 7영업일 이내에 의무적으로 지원하며, 어떠한 형태의 '자산 인질 행위'도 계약 위반으로 규정하여 민사적 책임을 집니다."
    },
    {
      icon: <Settings className="w-5 h-5 text-blue-405 flex-shrink-0 mt-0.5" />,
      clause: "[제2조 및 제3조 유지관리 및 수정 권한]",
      title: "투명한 유지보수 약정",
      desc: "월 5.5만 원(VAT 포함)으로 올인원 유지관리 대행",
      detail: "도메인 갱신비, 웹 호스팅 서버 비용, 연 2회 자유로운 텍스트/이미지 수정(연간 플랜 기준)까지 머리 아픈 인프라 운영 관리를 명확한 단일 고정 비용으로 완벽히 대행합니다.",
      tooltipDetail: "⚖️ 계약서 상 명시된 월 5.5만 원 외의 추가 인프라 요금 청구가 전면 금지되며, 연 2회 수정 권한은 계약 갱신 시마다 리셋되어 영구 보장됩니다."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-blue-405 flex-shrink-0 mt-0.5" />,
      clause: "[제5조 손해배상 제한 및 귀책]",
      title: "손해배상 범위의 성문화",
      desc: "공급자 과실에 따른 서비스 장애 시 최근 1개월 관리비 한도 배상",
      detail: "구두 합의나 단순 양해를 넘어, 계약서상에 명확한 공급자 귀책 사유와 배상 한도를 기재했습니다. 치명적인 기술 결함이나 귀책 발생 시 책임 범위 내에서 끝까지 배상합니다.",
      tooltipDetail: "⚖️ 당사 과실로 인한 4시간 이상의 연속 서버 장애 발생 시, 장애 시간에 비례하여 최근 1개월 관리비의 전액 범위 내에서 즉각적이고 투명하게 보증 및 현금 배상 책임 조항이 성문화되어 있습니다."
    }
  ];

  return (
    <section className="py-36 md:py-44 border-t border-white/[0.06] px-6 relative overflow-hidden bg-[#030C1B]">
      {/* Decorative Glow elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Part 1: 4대 핵심 가치 그리드 (비대칭 지그재그 배치) */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-24 reveal">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-slate-300 font-light px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] mb-4 backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-blue-400" />
              4-POINT CORE VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.35] mb-4 font-outfit">
              모든 업종의 소상공인을 위한<br />
              <span className="font-normal bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">매출 극대화 4대 핵심 가치</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-[1.7] font-light max-w-xl mx-auto">
              허황된 대행사 광고 문구를 버리고, 사장님의 공간을 찾아오는 고객이 <span className="highlight-blue text-white font-normal bg-blue-950/60 px-1 py-0.5 rounded">즉시 전환되게 만드는 직관적인 가치</span>를 탑재했습니다.
            </p>
          </div>

          {/* 비대칭 잡지형 지그재그 격자 */}
          <div className="space-y-32">
            {valueProps.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={idx} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal"
                >
                  {/* Content layout based on index */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-2 lg:col-start-8" : ""}`}>
                    <span className="text-xs uppercase tracking-widest text-blue-400 font-mono font-medium block">
                      ✦ {item.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-white font-outfit tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-blue-300 text-sm font-medium">
                      {item.desc}
                    </p>
                    <p className="text-slate-400 text-sm sm:text-base leading-[1.8] font-light">
                      {item.detail}
                    </p>
                  </div>

                  {/* Image/Mockup Grid */}
                  <div className={`lg:col-span-7 relative group ${isEven ? "lg:order-1 lg:col-start-1" : ""}`}>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-500" />
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-card transition-all duration-500 group-hover:scale-[1.01]">
                      {/* Premium Image */}
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700 ease-out"
                      />
                      {/* Elegant Overlay Label */}
                      <div className="absolute bottom-4 left-4 bg-[#030C1B]/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/15 text-[10px] text-slate-300 font-mono tracking-widest uppercase">
                        Fine Architecture Style
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Price Callout */}
          <div className="mt-28 glass-card rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xl border border-white/10 reveal">
            <h4 className="text-base sm:text-lg font-light text-white mb-2.5 flex flex-wrap items-center justify-center gap-2 leading-[1.4] font-outfit">
              <span>💡 시중 500만 원대 에이전시 퀄리티를</span>
              <span className="text-blue-350 font-normal bg-blue-950/40 px-2.5 py-0.5 rounded border border-blue-500/20 text-sm">110만 원 정찰제</span>
              <span>로 구현하는 이유</span>
            </h4>
            <p className="text-slate-450 text-xs sm:text-sm leading-[1.7] font-light max-w-2.5xl mx-auto">
              브랜딩하다는 자체 개발한 고효율 개발 스택인 <span className="text-white font-normal">자체 개발 고성능 시스템</span>을 활용하여, 불필요한 기획 마찰과 수작업 코딩 프로세스를 획기적으로 단축했습니다. 거품 없는 가격으로 대기업급 퍼포먼스의 경량 고속 웹사이트를 사장님 품에 안겨드립니다.
            </p>
          </div>
        </div>

        {/* Part 2: Trust & Safety Guarantees (신뢰와 안전장치) */}
        <div className="pt-24 border-t border-white/[0.06] reveal">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-slate-300 text-xs sm:text-sm font-light mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              Safety & Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.35] mb-6 font-outfit">
              안심하고 맡기세요,<br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent font-light">계약서로 약속하는 투명한 안전장치</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-[1.8] font-light">
              제작 대행사들의 갑질이나 도메인 기술 인질극이 두려우셨나요?<br className="hidden sm:inline" />
              브랜딩하다는 모든 법적 안전망과 권리 조항을 표준 계약서 상에 명확히 표기하여 완전히 보호해 드립니다.
            </p>
          </div>

          {/* 📜 공인 약정서 (White Paper) 스타일 컨테이너 */}
          <div className="max-w-4xl mx-auto bg-[#030C1B]/80 text-white border-t-4 border-t-white/20 border border-white/10 rounded-3xl p-6 sm:p-14 shadow-2xl backdrop-blur-xl transition-all duration-500 relative overflow-visible text-left mb-16 reveal">
            <div className="absolute right-6 top-6 opacity-[0.02] pointer-events-none select-none">
              <Stamp className="w-56 h-56 text-white" />
            </div>

            {/* Document Header */}
            <div className="border-b border-white/10 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-light tracking-widest text-[#94a3b8] bg-white/[0.03] border border-white/5 px-2.5 py-1 rounded uppercase">
                  Standard Service Agreement
                </span>
                <h2 className="text-xl sm:text-2xl font-light tracking-tight text-white mt-2">
                  디지털 대행 표준 공인 약정서 핵심 요약
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-white/[0.02] border border-white/10 px-4 py-2 rounded-xl text-xs sm:text-sm font-light text-slate-300">
                <FileText className="w-4.5 h-4.5 text-slate-400" />
                <span>표준약정 기반 투명 계약 약정</span>
              </div>
            </div>

            {/* Clauses List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
              {safetyGuarantees.map((item, idx) => {
                const clauseNum = idx === 0 ? "제4조 소유권 보장" : idx === 1 ? "제5조 독립보장" : idx === 2 ? "제2조 유지보수 보장" : "제5조 손해배상 보장";
                return (
                  <div 
                    key={idx} 
                    className="group relative flex items-start gap-4 leading-[1.7] bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 p-5 rounded-2xl transition-all duration-300 cursor-help shadow-md"
                  >
                    {/* Tooltip */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-80 bg-[#030C1B] border border-white/10 text-slate-100 rounded-xl p-5 shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30 text-xs sm:text-sm leading-relaxed select-none">
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-[#030C1B]" />
                      <p className="font-medium text-blue-400 mb-1.5 flex items-center gap-1.5 text-xs sm:text-sm">
                        <Info className="w-4 h-4 text-blue-400" />
                        <span>보증 계약서 명시 효력</span>
                      </p>
                      <p className="text-slate-300 font-light">{item.tooltipDetail}</p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 text-white group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-light text-slate-300 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-md">
                          {clauseNum}
                        </span>
                        <span className="text-[10px] text-slate-500 font-light group-hover:text-blue-300 transition-colors">자세히 ⓘ</span>
                      </div>
                      <h3 className="text-lg font-light text-white mb-1 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 font-normal text-xs sm:text-sm mb-2 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light word-break-keep-all">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Document Signature Box */}
            <div className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed max-w-md">
                ※ 본 내용은 실재하는 코리아니티 표준 마케팅/개발 계약서 상의 핵심 기재 내용을 정직하게 요약한 것입니다. 모든 소스코드 소유권과 자유로운 도메인 제어 권한은 사장님의 완전한 권리로 보장받습니다.
              </p>
              
              <div className="flex flex-col items-end self-end sm:self-center">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest font-outfit">
                    CERTIFIED BY KOREANITY
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-light">운영사: 코리아니티</span>
                <span className="text-sm sm:text-base text-slate-200 font-semibold tracking-wide">
                  [대표자: 김경문] <span className="text-blue-400 font-serif italic text-base font-bold ml-1 relative">
                    (인)
                    <span className="absolute -top-1.5 -right-4 text-[9px] text-red-500 border-2 border-red-500 rounded-full px-1 font-bold scale-75 rotate-12 bg-[#030C1B]/80 animate-pulse">인</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Center - PDF 다운로드 링크 */}
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              도메인 인질극 등 대행사 리스크에서 벗어나 계약 체결 즉시 법적인 권리와 완벽한 보호를 받으세요.
            </p>
            <a 
              href="/standard_agreement.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#030C1B] font-medium text-xs sm:text-sm rounded-xl hover:bg-slate-100 transition-all hover:shadow-lg cursor-pointer text-center button-click-action"
            >
              <FileText className="w-4.5 h-4.5" />
              <span>표준 약정서 전문 보기</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
