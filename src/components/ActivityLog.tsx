"use client";

import { 
  CheckCircle2, 
  Clock, 
  Activity
} from "lucide-react";

export function ActivityLog() {
  return (
    <section className="py-24 md:py-32 border-t border-slate-200 px-6 relative overflow-hidden bg-slate-50">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-500/2 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* 🔴 깜빡이는 실시간 LIVE 인디케이터 장착 */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-red-500/20 bg-red-500/5 text-red-600 text-xs font-black tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>실시간 운영 현황</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.3] mb-8">
          지금 이 순간에도 <span className="text-blue-700">1,842개</span>의 현장이<br className="sm:hidden" /> 온라인에서 영업 중입니다
        </h2>

        {/* 통계 숫자 위젯 하나로 통합 */}
        <div className="max-w-md mx-auto bg-white border border-slate-200 rounded-3xl p-8 shadow-xl relative overflow-hidden hover:border-[#134074]/30 transition-all duration-300">
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#134074] to-[#0b2545]" />
          
          <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-5 h-5 text-[#134074]" />
              <span className="text-sm font-black text-slate-800 uppercase tracking-wider font-mono">운영 시스템 현황</span>
            </div>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          <div className="space-y-4 font-bold text-left">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block font-bold mb-1">누적 제작 완료 홈페이지</span>
                <span className="text-2xl font-black text-slate-900 font-mono">1,842건 영업 중</span>
              </div>
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-500 block font-bold mb-1">평균 디자인 시안 제작 시간</span>
                <span className="text-2xl font-black text-blue-700 font-mono">4분 52초</span>
              </div>
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 leading-relaxed font-bold mt-6 text-center">
            ※ 실시간 제작 통계는 자체 고성능 시스템의 자동 분석 데이터를 반영합니다.
          </p>
        </div>

      </div>
    </section>
  );
}

