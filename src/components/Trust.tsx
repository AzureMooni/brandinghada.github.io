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
  Info
} from "lucide-react";

export function Trust() {
  const valueProps = [
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "온라인 간판",
      desc: "24시간 잠들지 않는 신뢰의 베이스캠프",
      detail: "아무리 훌륭한 시공 능력을 갖췄더라도 온라인에 신뢰할 수 있는 간판이 없다면 고객은 주저합니다. 브랜딩하다가 사장님의 땀방울과 신뢰를 온전히 담아내는 온라인 기지를 구축합니다."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-secondary" />,
      title: "채용 경쟁력",
      desc: "구직자가 가장 먼저 확인하는 비전 설명서",
      detail: "일할 사람 구하기 힘든 시대, 우수한 인재는 홈페이지부터 검색해 봅니다. 회사의 비전, 시공 철학, 깔끔한 사내 문화를 투명하게 보여주어 업계 최고 수준의 채용 경쟁력을 확보해 드립니다."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-accent" />,
      title: "매출 최적화",
      desc: "광고비는 줄이고, 실시간 알림으로 상담은 늘리고",
      detail: "비싼 키워드 광고에만 의존하지 마세요. 방문한 고객을 놓치지 않는 실시간 간편 알림/상담 신청 시스템을 탑재하여 이탈율을 줄이고 상담 전환율을 극대화합니다."
    }
  ];

  const safetyGuarantees = [
    {
      icon: <Key className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />,
      clause: "[제4조 사용권 및 지식재산권]",
      title: "영구 소유권 보장",
      desc: "구축비 완납 시 소스코드 및 독점 운영권 사장님 귀속",
      detail: "임대형 솔루션처럼 평생 이용료를 내지 않으면 사이트가 닫히는 불안감이 없습니다. 구축 완료 및 잔금 완납 즉시 소스코드와 독점 운영 자산권은 사장님에게 완전히 귀속됩니다.",
      tooltipDetail: "⚖️ 구축 잔금 완납과 동시에 해당 사이트의 HTML/CSS/JS 소스 코드 저작재산권과 포털 소유 및 제어권이 사장님에게 법적으로 완전 양도되며, 대행사의 임대 연장 강요 의무가 원천 소멸됩니다."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />,
      clause: "[제5조 기술 이전 조항]",
      title: "언제든 독립 가능",
      desc: "시스템 및 도메인의 자유로운 이전 보장(자산 볼모 행위 금지)",
      detail: "시스템 권한을 빌미로 추가 계약을 강요하는 '인질 영업'을 배격합니다. 사장님이 자체 서버 구축이나 타사 인프라로 이전을 원하실 때 계약서 제5조에 의거해 자유로운 독립과 기술 이전을 무상 지원합니다.",
      tooltipDetail: "⚖️ 시스템 독립 요청 시, 도메인 기관 이전 및 데이터 백업 이전을 7영업일 이내에 의무적으로 지원하며, 어떠한 형태의 '자산 인질 행위'도 계약 위반으로 규정하여 민사적 책임을 집니다."
    },
    {
      icon: <Settings className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />,
      clause: "[제2조 및 제3조 유지관리 및 수정 권한]",
      title: "투명한 유지보수 약정",
      desc: "월 5.5만 원(VAT 포함)으로 올인원 유지관리 대행",
      detail: "도메인 갱신비, 웹 호스팅 서버 비용, 연 2회 자유로운 텍스트/이미지 수정(연간 플랜 기준)까지 머리 아픈 인프라 운영 관리를 명확한 단일 고정 비용으로 완벽히 대행합니다.",
      tooltipDetail: "⚖️ 계약서 상 명시된 월 5.5만 원 외의 추가 인프라 요금 청구가 전면 금지되며, 연 2회 수정 권한은 계약 갱신 시마다 리셋되어 영구 보장됩니다."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />,
      clause: "[제5조 손해배상 제한 및 귀책]",
      title: "손해배상 범위의 성문화",
      desc: "공급자 과실에 따른 서비스 장애 시 최근 1개월 관리비 한도 배상",
      detail: "구두 합의나 단순 양해를 넘어, 계약서상에 명확한 공급자 귀책 사유와 배상 한도를 기재했습니다. 치명적인 기술 결함이나 귀책 발생 시 책임 범위 내에서 끝까지 배상합니다.",
      tooltipDetail: "⚖️ 당사 과실로 인한 4시간 이상의 연속 서버 장애 발생 시, 장애 시간에 비례하여 최근 1개월 관리비의 전액 범위 내에서 즉각적이고 투명하게 보증 및 현금 배상 책임 조항이 성문화되어 있습니다."
    }
  ];

  return (
    <section className="py-36 md:py-44 border-t border-[#22222b]/50 px-6 relative overflow-hidden bg-gradient-to-b from-background to-[#070709]">
      {/* Decorative Glow elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Part 1: Value Proposition (가치 제안) */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary font-extrabold px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              Core Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.3] mb-4">
              왜 1인 기업부터 강소기업까지<br />홈페이지가 필수일까요?
            </h2>
            {/* 형광펜(Highlight) 효과 적용으로 메시지 스캔성 극대화 */}
            <p className="text-muted-foreground text-sm sm:text-base leading-[1.6]">
              단순한 텍스트 나열을 넘어, 방문자가 <span className="highlight-blue text-slate-100 font-extrabold">신뢰하고 연락할 수밖에 없는 명확한 비즈니스 무기</span>를 쥐여드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#111115]/80 border border-[#22222b] hover:border-primary/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-[#14141a] border border-[#22222b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-yellow-400 text-xs sm:text-sm font-bold mb-4">
                  {item.desc}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-[1.7] font-medium">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Efficiency & Price Callout */}
          <div className="mt-12 bg-gradient-to-r from-secondary/15 via-[#111115] to-primary/15 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
            <h4 className="text-base sm:text-lg font-bold text-white mb-2 flex flex-wrap items-center justify-center gap-2 leading-[1.4]">
              <span>💡 시중 500만 원대 에이전시 퀄리티를</span>
              <span className="text-yellow-400 font-black bg-yellow-400/10 px-2 py-0.5 rounded border border-yellow-400/20">110만 원 정찰제</span>
              <span>로 구현하는 이유</span>
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm leading-[1.7] font-medium max-w-2.5xl mx-auto">
              브랜딩하다는 자체 개발한 고효율 개발 스택인 <span className="text-white font-semibold">gstack 시스템</span>을 활용하여, 불필요한 기획 마찰과 수작업 코딩 프로세스를 획기적으로 단축했습니다. 거품 없는 가격으로 대기업급 퍼포먼스의 경량 고속 웹사이트를 사장님 품에 안겨드립니다.
            </p>
          </div>
        </div>

        {/* Part 2: Trust & Safety Guarantees (신뢰와 안전장치 - 공인 약정서 스타일) */}
        <div className="pt-24 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/5 text-blue-700 text-xs sm:text-sm font-black mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              Safety & Transparency
            </span>
            <h2 className="text-3.5xl sm:text-4.5xl font-black tracking-tight text-slate-900 leading-[1.35] mb-6">
              안심하고 맡기세요,<br />계약서로 약속하는 투명한 안전장치
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-[1.8] font-bold">
              제작 대행사들의 갑질이나 도메인 기술 인질극이 두려우셨나요?<br className="hidden sm:inline" />
              브랜딩하다는 모든 법적 안전망과 권리 조항을 표준 계약서 상에 명확히 표기하여 완전히 보호해 드립니다.
            </p>
          </div>

          {/* 📜 공인 약정서 (White Paper) 스타일 컨테이너 */}
          <div className="max-w-4xl mx-auto bg-[#ffffff] text-slate-800 border-t-8 border-t-blue-600 border border-slate-300 rounded-3xl p-6 sm:p-14 shadow-2xl relative overflow-visible text-left mb-16">
            {/* Watermark/Stamp effect decoration */}
            <div className="absolute right-6 top-6 opacity-[0.03] pointer-events-none select-none">
              <Stamp className="w-56 h-56 text-blue-600" />
            </div>

            {/* Document Header */}
            <div className="border-b-2 border-slate-300 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-black tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded uppercase">
                  Standard Service Agreement
                </span>
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 mt-2">
                  디지털 대행 표준 공인 약정서 핵심 요약
                </h2>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 px-4 py-2 rounded-xl text-sm font-black text-slate-600">
                <FileText className="w-4.5 h-4.5 text-slate-500" />
                <span>표준약정 기반 투명 계약 약정</span>
              </div>
            </div>

            {/* Clauses List (가독성 10% 확대 완료) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12">
              {safetyGuarantees.map((item, idx) => {
                // 조항 번호 매핑 및 용어 순화
                const clauseNum = idx === 0 ? "제4조 소유권 보장" : idx === 1 ? "제5조 독립보장" : idx === 2 ? "제2조 유지보수 보장" : "제5조 손해배상 보장";
                return (
                  <div 
                    key={idx} 
                    className="group relative flex items-start gap-4 leading-[1.7] bg-slate-50 hover:bg-slate-100/70 border border-slate-200 p-5 rounded-2xl transition-all duration-300 cursor-help"
                  >
                    {/* 💬 마우스 호버 / 터치 시 솟아오르는 CSS 기반 인터랙티브 툴팁(Tooltip) */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-80 bg-slate-950 border border-slate-800 text-slate-100 rounded-xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.4)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-30 text-sm leading-relaxed select-none">
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-slate-950" />
                      <p className="font-extrabold text-yellow-500 mb-1.5 flex items-center gap-1.5 text-sm">
                        <Info className="w-4 h-4 text-yellow-500 fill-yellow-500/10" />
                        <span>보증 계약서 명시 효력</span>
                      </p>
                      <p className="text-slate-300 font-bold">{item.tooltipDetail}</p>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-300 flex items-center justify-center flex-shrink-0 text-blue-600 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      {item.icon}
                    </div>
                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs sm:text-sm font-black text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                          {clauseNum}
                        </span>
                        <span className="text-[10px] text-slate-400 bg-slate-200/50 px-1.5 py-0.5 rounded font-black group-hover:text-blue-700 group-hover:bg-blue-50 transition-colors">자세히 ⓘ</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-blue-700 font-extrabold text-sm mb-2 leading-relaxed">
                        {item.desc}
                      </p>
                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-bold word-break-keep-all">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Document Signature Box */}
            <div className="mt-16 pt-10 border-t border-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <p className="text-slate-500 text-sm font-bold leading-relaxed max-w-md">
                ※ 본 내용은 실재하는 코리아니티 표준 마케팅/개발 계약서 상의 핵심 기재 내용을 정직하게 요약한 것입니다. 모든 소스코드 소유권과 자유로운 도메인 제어 권한은 사장님의 완전한 권리로 보장받습니다.
              </p>
              
              <div className="flex flex-col items-end self-end sm:self-center">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                    CERTIFIED BY KOREANITY
                  </span>
                </div>
                <span className="text-xs sm:text-sm text-slate-500 font-bold">운영사: 코리아니티</span>
                <span className="text-base sm:text-lg text-slate-900 font-black tracking-wide">
                  브랜딩하다 대표이사 <span className="text-blue-700 font-serif italic text-lg sm:text-xl font-bold ml-1 relative">
                    김 경 문
                    <span className="absolute -top-1.5 -right-4 text-[11px] text-red-600 border-2 border-red-600 rounded-full px-1.5 font-black scale-75 rotate-12 bg-white/80 animate-pulse">인</span>
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Action Center - PDF 다운로드 링크 포함 (정중앙 주인공 배치 / 새 창 활성화) */}
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-slate-600 text-sm sm:text-base font-bold leading-relaxed">
              도메인 인질극 등 대행사 리스크에서 벗어나 계약 체결 즉시 법적인 권리와 완벽한 보호를 받으세요.
            </p>
            <a 
              href="/standard_agreement.html" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4.5 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 hover:opacity-95 text-white font-black text-base sm:text-lg rounded-2xl flex items-center justify-center gap-2.5 transition-all hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(29,78,216,0.3)] cursor-pointer text-center block"
            >
              <FileText className="w-5.5 h-5.5 text-white" />
              <span>실제 표준 약정서 전문 보기 (새 창)</span>
              <ArrowUpRight className="w-5 h-5 text-white" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
