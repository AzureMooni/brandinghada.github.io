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
  Sparkles
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
      icon: <Key className="w-5 h-5 text-primary" />,
      title: "영구 소유권 보장",
      desc: "구축비 완납 시 소스코드 및 독점 운영권 사장님 귀속",
      detail: "임대형 솔루션처럼 평생 이용료를 내지 않으면 사이트가 닫히는 불안감이 없습니다. 완납 즉시 모든 소유권은 사장님에게 양도됩니다."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-secondary" />,
      title: "언제든 독립 가능",
      desc: "제5조 기술 이전 조항에 따른 시스템 및 도메인 이전 보장",
      detail: "이른바 '자산 볼모 행위'를 절대 하지 않습니다. 사장님이 원하실 때 언제든 다른 서버나 자체 인프라로 무리 없이 독립할 수 있도록 기술 이전을 조항으로 보장합니다."
    },
    {
      icon: <Settings className="w-5 h-5 text-accent" />,
      title: "투명한 유지보수",
      desc: "월 5.5만 원(VAT 포함)으로 올인원 케어",
      detail: "추가 비용 폭탄 없이 서버 호스팅, 도메인, 연 2회 수정(연간 플랜 기준)까지 머리 아픈 인프라 관리를 브랜딩하다가 대행합니다."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
      title: "손해배상 명시",
      desc: "공급자 귀책 시 최근 1개월 관리비 한도 내 배상 책임 약정",
      detail: "구두 계약에 그치지 않고, 공급자의 치명적인 귀책으로 서비스 장애 발생 시 계약서상 명문화된 배상 약정에 따라 투명하게 책임을 다합니다."
    }
  ];

  return (
    <section className="py-24 border-t border-[#22222b]/50 px-6 relative overflow-hidden bg-gradient-to-b from-background to-[#070709]">
      {/* Decorative Glow elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Part 1: Value Proposition (가치 제안) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary font-extrabold px-3 py-1 rounded-full border border-primary/20 bg-primary/5 mb-4">
              <Sparkles className="w-3 h-3 text-primary" />
              Core Value Proposition
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground leading-[1.3] mb-4">
              왜 1인 기업부터 강소기업까지<br />홈페이지가 필수일까요?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-[1.6]">
              단순한 텍스트 나열을 넘어, 방문자가 신뢰하고 연락할 수밖에 없는 명확한 비즈니스 무기를 쥐여드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueProps.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#111115]/50 border border-[#22222b] hover:border-primary/40 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5"
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-[#14141a] border border-[#22222b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  {item.title}
                </h3>
                <p className="text-primary text-xs sm:text-sm font-bold mb-4">
                  {item.desc}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm leading-[1.7] font-medium">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Efficiency & Price Callout */}
          <div className="mt-12 bg-gradient-to-r from-secondary/10 via-[#111115] to-primary/10 border border-[#22222b] rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
            <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 flex flex-wrap items-center justify-center gap-2 leading-[1.4]">
              <span>💡 시중 500만 원대 에이전시 퀄리티를</span>
              <span className="text-primary font-black bg-primary/10 px-2 py-0.5 rounded border border-primary/20">110만 원 정찰제</span>
              <span>로 구현하는 이유</span>
            </h4>
            <p className="text-muted-foreground text-xs sm:text-sm leading-[1.7] font-medium max-w-2.5xl mx-auto">
              브랜딩하다는 자체 개발한 고효율 개발 스택인 <span className="text-foreground font-semibold">gstack 시스템</span>을 활용하여, 불필요한 기획 마찰과 수작업 코딩 프로세스를 획기적으로 단축했습니다. 거품 없는 가격으로 대기업급 퍼포먼스의 경량 고속 웹사이트를 사장님 품에 안겨드립니다.
            </p>
          </div>
        </div>

        {/* Part 2: Trust & Safety Guarantees (신뢰와 안전장치) */}
        <div className="pt-8 border-t border-[#22222b]/30">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-secondary font-extrabold px-3 py-1 rounded-full border border-secondary/20 bg-secondary/5 mb-4">
              <CheckCircle2 className="w-3 h-3 text-secondary animate-pulse" />
              Safety & Transparency
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-[1.3] mb-4">
              안심하고 맡기세요,<br />계약서로 명시하는 신뢰와 안전장치
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-[1.6]">
              제작 업체들의 고질적인 갑질이나 도메인 인질극이 두려우셨나요?<br className="hidden sm:inline" />
              브랜딩하다는 정직한 상생 비즈니스를 약속하며, 모든 안전장치를 계약 조항에 투명하게 담았습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {safetyGuarantees.map((item, idx) => (
              <div 
                key={idx} 
                className="group relative bg-[#111115]/40 border border-[#22222b] hover:border-secondary/40 rounded-xl p-6 backdrop-blur-md transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#14141a] border border-[#22222b] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-secondary text-xs sm:text-sm font-semibold mb-2">
                      {item.desc}
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-[1.6] font-medium">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
