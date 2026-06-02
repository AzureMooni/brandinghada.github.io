"use client";

import { 
  Terminal, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  FileCode, 
  Coffee,
  Sparkles,
  Server,
  Activity,
  ArrowUpRight
} from "lucide-react";

export function ActivityLog() {
  const logs = [
    {
      time: "방금 전",
      icon: <MapPin className="w-4 h-4 text-yellow-600" />,
      title: "인천 남동구 종합 인테리어 매장 플레이스 분석 완료",
      desc: "소비자 리뷰에서 '추가 요금 걱정 없음', '꼼꼼한 직영 시공' 평판을 빅데이터로 추출하여 5분 만에 전용 모바일 홈페이지 임시 시안 빌드 및 카카오 알림톡 전송 완료.",
      tag: "시안 빌드",
      thumbnail: "🏡"
    },
    {
      time: "17분 전",
      icon: <FileCode className="w-4 h-4 text-blue-600" />,
      title: "제5조 기술 이전 보증 조항 시스템 문서화 업그레이드",
      desc: "갑질 및 기술 인질 행위를 법적으로 차단하는 '표준 마케팅/개발 약정서' 제5조 규정을 계약 모듈 시스템에 자동 동기화하여 소상공인 법적 권리 보장을 한층 더 강화했습니다.",
      tag: "시스템 갱신",
      thumbnail: "📜"
    },
    {
      time: "2시간 전",
      icon: <Sparkles className="w-4 h-4 text-yellow-600 animate-pulse" />,
      title: "자체 제작 고성능 시스템 코어 렌더링 파이프라인 최적화 완료",
      desc: "불필요한 중복 스크립트 로드 프로세스를 정교하게 리팩토링하여 모바일 환경 LCP(최대 콘텐츠 렌더링 시간) 성능을 기존 대비 15% 이상 획기적으로 개선 완료했습니다.",
      tag: "성능 개선",
      thumbnail: "⚡"
    },
    {
      time: "5시간 전",
      icon: <Coffee className="w-4 h-4 text-yellow-600 animate-bounce" />,
      title: "인천 부평구 설비 시공점 대표님과 1:1 오프라인 커피챗 약정 확정",
      desc: "현장 일로 바쁘신 부평구 대표님의 요청으로 오프라인 현장 미팅 약속을 수립했습니다. 표준 약정서 실물 사본과 플레이스 맞춤형 무료 진단 컨설팅을 들고 방문 예정입니다.",
      tag: "로컬 파트너",
      thumbnail: "☕"
    }
  ];

  return (
    <section className="py-36 md:py-44 border-t border-slate-200 px-6 relative overflow-hidden bg-slate-50">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-2xl mx-auto">
          {/* 🔴 깜빡이는 실시간 LIVE 인디케이터 장착 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full border border-red-500/20 bg-red-500/5 text-red-600 text-xs font-black tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>SYSTEM LIVE ACTIVATED</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-[1.3] mb-4">
            멈춰 있지 않은 '브랜딩하다'<br />실시간 관제 대시보드
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-[1.6] font-bold">
            멈춰 있는 대행사 웹사이트는 살아있는 비즈니스를 보증할 수 없습니다. 브랜딩하다는 지금 이 순간에도 사장님들의 온라인 자산을 정직하고 활발하게 업데이트하고 있습니다.
          </p>
        </div>

        {/* 2-Column Live Dashboard Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: System Metrics Monitor Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-6 space-y-6 shadow-md sticky top-24">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <Server className="w-5 h-5 text-yellow-600" />
                <span className="text-sm font-black text-slate-800 uppercase tracking-wider font-mono">System Monitor</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            <div className="space-y-4 font-bold">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block font-bold">누적 AI 시안 빌드</span>
                  <span className="text-xl font-black text-slate-900 font-mono">1,842건</span>
                </div>
                <Activity className="w-5 h-5 text-yellow-600" />
              </div>
              
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block font-bold">평균 시안 출력 시간</span>
                  <span className="text-xl font-black text-blue-700 font-mono">4분 52초</span>
                </div>
                <Clock className="w-5 h-5 text-blue-600" />
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-500 block font-bold">계약서 소유권 보장율</span>
                  <span className="text-xl font-black text-emerald-600 font-mono">100%</span>
                </div>
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed font-bold">
              ※ 시스템 모니터링 수치는 브랜딩하다 고성능 시스템 코어 프레임워크와 네이버 플레이스 API 데이터 스캔 엔진의 처리 통계를 실시간 반영합니다.
            </p>
          </div>

          {/* Right Side: Streaming Visual Log Feed */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">LIVE STREAM FEED</span>
              <span className="text-[10px] text-slate-400 font-mono">UPDATES EVERY HOUR</span>
            </div>

            <div className="space-y-4">
              {logs.map((log, idx) => (
                <div 
                  key={idx} 
                  className="group relative bg-white border border-slate-200 hover:border-yellow-500/50 rounded-2xl p-5 shadow-sm transition-all duration-300 hover:translate-x-1 flex flex-col sm:flex-row gap-4 items-start relative overflow-hidden"
                >
                  {/* Left: Thumbnail container */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 group-hover:border-yellow-500/30 flex items-center justify-center text-xl flex-shrink-0 transition-all shadow-inner">
                    {log.thumbnail}
                  </div>

                  {/* Right: Content details */}
                  <div className="space-y-2 flex-grow text-left">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[9.5px] font-black bg-slate-100 text-yellow-700 px-2 py-0.5 rounded border border-slate-200">
                          {log.tag}
                        </span>
                        <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {log.time}
                        </span>
                      </div>
                      
                      {idx === 0 && (
                        <span className="text-[9px] bg-yellow-100 text-yellow-700 border border-yellow-300/40 px-2 py-0.5 rounded-full font-black animate-pulse">
                          LATEST ACTIVE
                        </span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-black text-slate-900 group-hover:text-yellow-600 transition-colors leading-snug">
                      {log.title}
                    </h3>
                    
                    <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-bold word-break-keep-all">
                      {log.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
