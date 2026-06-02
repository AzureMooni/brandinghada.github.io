"use client";

import { 
  Terminal, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  FileCode, 
  Coffee,
  Sparkles
} from "lucide-react";

export function ActivityLog() {
  const logs = [
    {
      time: "오늘",
      icon: <MapPin className="w-4.5 h-4.5 text-primary" />,
      title: "인천 남동구 종합 인테리어 매장 플레이스 분석 및 모바일 시안 추출 완료",
      desc: "소비자 리뷰에서 '추가 요금 걱정 없음', '꼼꼼한 직영 시공' 평판을 빅데이터로 추출하여 5분 만에 전용 모바일 홈페이지 임시 시안 빌드 및 카카오 알림톡 전송 완료.",
      tag: "시안 빌드"
    },
    {
      time: "어제",
      icon: <FileCode className="w-4.5 h-4.5 text-secondary" />,
      title: "제5조 기술 이전 보증 및 소유권 완전 양도 조항 시스템 문서화 보안 업그레이드",
      desc: "갑질 및 기술 인질 행위를 법적으로 차단하는 '표준 마케팅/개발 약정서' 제5조 규정을 계약 모듈 시스템에 자동 동기화하여 소상공인 법적 권리 보장을 한층 더 강화했습니다.",
      tag: "시스템 갱신"
    },
    {
      time: "3일 전",
      icon: <Sparkles className="w-4.5 h-4.5 text-accent" />,
      title: "gstack 초고속 빌더 코어 렌더링 파이프라인 최적화로 모바일 로딩 0.4초 단축",
      desc: "불필요한 중복 스크립트 로드 프로세스를 정교하게 리팩토링하여 모바일 환경 LCP(최대 콘텐츠 렌더링 시간) 성능을 기존 대비 15% 이상 획기적으로 개선 완료했습니다.",
      tag: "성능 개선"
    },
    {
      time: "4일 전",
      icon: <Coffee className="w-4.5 h-4.5 text-orange-400" />,
      title: "인천 부평구 설비 시공점 대표님과 1:1 오프라인 커피챗 미팅 스케줄 확정",
      desc: "현장 일로 바쁘신 부평구 대표님의 요청으로 오프라인 현장 미팅 약속을 수립했습니다. 표준 약정서 실물 사본과 플레이스 맞춤형 무료 진단 컨설팅을 들고 방문 예정입니다.",
      tag: "로컬 파트너"
    }
  ];

  return (
    <section className="py-36 md:py-44 border-t border-[#22222b]/50 px-6 relative overflow-hidden bg-[#070709]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-secondary/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          {/* 🔴 깜빡이는 실시간 LIVE 인디케이터 장착 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-red-500/20 bg-red-500/5 text-red-500 text-xs font-black tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>SYSTEM LIVE ACTIVATED</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-foreground leading-[1.3] mb-4">
            사업을 아는 개발자의<br />실시간 현장 활동 로그
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-[1.6]">
            멈춰 있는 웹사이트는 신뢰를 주지 못합니다. 브랜딩하다는 지금 이 순간에도 사장님들의 온라인 자산을 정직하고 활발하게 업데이트하고 있습니다.
          </p>
        </div>

        {/* 📜 타임라인 UI 구조 */}
        <div className="relative border-l border-[#22222b] ml-4 sm:ml-6 space-y-12">
          {logs.map((log, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Connector Dot */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#111115] border border-[#22222b] flex items-center justify-center group-hover:border-primary/50 group-hover:bg-[#14141a] transition-all duration-300 shadow">
                {log.icon}
              </div>

              {/* Log Card Box */}
              <div className="bg-[#111115]/50 border border-[#22222b] group-hover:border-secondary/30 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                {/* Glow bar indicator */}
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#22222b] group-hover:bg-gradient-to-b group-hover:from-primary group-hover:to-secondary transition-colors" />
                
                {/* Card Top */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black bg-[#1b1b22] text-muted-foreground px-2 py-0.5 rounded border border-[#22222b]">
                      {log.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{log.time}</span>
                    </span>
                  </div>
                  
                  {idx === 0 && (
                    <span className="text-[9px] bg-primary/20 text-primary border border-primary/20 px-2 py-0.5 rounded-full font-black animate-pulse">
                      최신 로그
                    </span>
                  )}
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-black text-foreground mb-2 group-hover:text-primary transition-colors leading-[1.4] text-left">
                  {log.title}
                </h3>
                
                {/* Card Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-[1.65] font-medium text-left word-break-keep-all">
                  {log.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Live Status Summary Card */}
        <div className="mt-16 bg-gradient-to-r from-secondary/10 via-[#111115] to-secondary/10 border border-[#22222b] rounded-2xl p-5 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <Terminal className="w-5 h-5 animate-pulse" />
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm font-semibold leading-relaxed text-left sm:max-w-xl">
            저희는 구태의연한 정기 관리비 청구에 안주하지 않습니다. 매일 인천 지역을 중심으로 오프라인 사장님들을 모시고 상담하며 실시간 시스템을 증명해 보입니다.
          </p>
        </div>

      </div>
    </section>
  );
}
