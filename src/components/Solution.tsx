"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, ShieldCheck } from "lucide-react";

const solutions = [
    {
        icon: Brain,
        title: "설득 시스템",
        description: "읽는 순간 예약 버튼을 누르는 심리 마케팅 기술 적용.",
    },
    {
        icon: BarChart3,
        title: "객관적 데이터 분석",
        description: "경쟁사와 비교하여 우리 가게의 '매력도'를 점수로 증명.",
    },
    {
        icon: ShieldCheck,
        title: "리스크 ZERO",
        description: "효과 없는 보여주기식 숫자 놀음은 절대 사절.",
    },
];

export function Solution() {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        중요한 건 '노출'이 아니라<br />
                        <span className="text-primary">'구매 설득 점수'</span>입니다.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary mx-auto">
                                <solution.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-center">{solution.title}</h3>
                            <p className="text-muted-foreground text-center text-lg leading-relaxed">
                                {solution.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
