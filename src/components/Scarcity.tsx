"use client";

import { motion } from "framer-motion";

export function Scarcity() {
    return (
        <section className="py-24 bg-yellow-400 text-slate-900">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        죄송합니다. 퀄리티 유지를 위해<br />
                        매월 딱 100팀만 받습니다.
                    </h2>
                    <p className="text-xl text-slate-900/80 leading-relaxed font-medium">
                        공장처럼 찍어내지 않습니다. 한 분 한 분 제대로 진단하기 위해 인원을 제한합니다.<br />
                        지금 신청하지 않으면 다음 달까지 기다리셔야 합니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
