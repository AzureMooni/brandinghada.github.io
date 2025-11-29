"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-10">
                        망설이는 순간, 경쟁 가게는 앞서갑니다.
                    </h2>

                    <Link
                        href="https://naver.me/FE3zwy7e"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-10 py-6 bg-yellow-400 text-slate-900 text-2xl font-bold rounded-full hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 animate-pulse"
                    >
                        지금 바로 무료 진단 보고서 신청하기 (클릭)
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
