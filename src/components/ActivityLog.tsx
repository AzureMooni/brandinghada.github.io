"use client";

import { 
  CheckCircle2, 
  Clock, 
  Activity
} from "lucide-react";

export function ActivityLog() {
  return (
    <section className="py-24 md:py-32 border-t border-white/[0.06] px-6 relative overflow-hidden bg-[#030C1B]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center reveal">
        
        {/* 실시간 LIVE 인디케이터 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 rounded-full border border-blue-400/20 bg-blue-500/5 text-blue-300 text-[10px] font-black tracking-widest uppercase font-outfit">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-450 animate-pulse" />
          <span>실시간 운영 현황</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.3] mb-8 font-playfair">
          지금 이 순간에도 <span className="text-blue-400 font-normal">1,842개</span>의 현장이<br className="sm:hidden" /> 온라인에서 영업 중입니다
        </h2>

        {/* 통계 숫자 위젯 - Glassmorphism & Silver Border */}
        <div className="max-w-md mx-auto glass-card glass-card-hover rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex items-center justify-between mb-6 border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest font-outfit">SYSTEM STATUS</span>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="space-y-4 font-bold text-left">
            <div className="bg-white/[0.02] border border-white/[0.06] p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-normal mb-1">누적 제작 완료 홈페이지</span>
                <span className="text-xl font-normal text-white font-outfit">1,842건 영업 중</span>
              </div>
              <CheckCircle2 className="w-5 h-5 text-emerald-500/80" />
            </div>
            
            <div className="bg-white/[0.02] border border-white/[0.06] p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-normal mb-1">평균 디자인 시안 제작 시간</span>
                <span className="text-xl font-normal text-blue-400 font-outfit">4분 52초</span>
              </div>
              <Clock className="w-5 h-5 text-blue-400/80" />
            </div>
          </div>

          <p className="text-[10px] text-slate-500 leading-relaxed font-normal mt-6 text-center">
            ※ 실시간 제작 통계는 자체 고성능 시스템의 자동 분석 데이터를 반영합니다.
          </p>
        </div>

      </div>
    </section>
  );
}


