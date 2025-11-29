"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_bg_1764321770767.png"
                    alt="Busy Korean restaurant background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold bg-secondary/20 text-secondary border border-secondary/50 rounded-full">
                        요식업 · 소상공인 전문 마케팅 에이전시
                    </span>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
                        사장님, 지금 그 <span className="text-yellow-400">'가짜 리뷰'</span>에<br />
                        돈 버리고 계신 겁니다.
                    </h1>

                    <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
                        네이버는 다 압니다. 예약 없는 껍데기 마케팅 멈추고<br />
                        <span className="font-bold text-yellow-400">'브랜딩하다'</span>로 진짜 매출을 만드세요.
                    </p>

                    <Link
                        href="https://naver.me/FE3zwy7e"
                        target="_blank"
                        className="group inline-flex items-center gap-2 px-8 py-5 bg-yellow-400 text-slate-900 text-xl font-bold rounded-lg hover:bg-yellow-500 transition-all shadow-xl hover:shadow-yellow-400/25 hover:-translate-y-1"
                    >
                        이번 달 100팀 한정! 무료 진단 받기
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
