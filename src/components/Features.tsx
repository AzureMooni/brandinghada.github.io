"use client";

import { motion } from "framer-motion";
import { BarChart3, Target, Lightbulb, Wallet } from "lucide-react";

const features = [
    {
        icon: BarChart3,
        title: "현재 온라인 노출 상태 분석",
        description: "우리 브랜드가 고객에게 어떻게 보이고 있는지 객관적인 데이터를 통해 정밀하게 분석합니다.",
    },
    {
        icon: Target,
        title: "경쟁업체 대비 손님 유도 점수",
        description: "경쟁사들과 비교하여 우리 가게의 매력도가 어느 정도인지 점수화하여 보여드립니다.",
    },
    {
        icon: Lightbulb,
        title: "맞춤형 마케팅 전략 제안",
        description: "업종, 위치, 타겟 고객을 고려한 최적의 마케팅 전략을 수립하여 제안합니다.",
    },
    {
        icon: Wallet,
        title: "예상 효과 및 비용 안내",
        description: "투입 비용 대비 얻을 수 있는 기대 효과를 명확하게 제시하여 효율적인 예산 집행을 돕습니다.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        왜 <span className="text-primary">브랜딩하다</span>인가요?
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        단순한 광고 대행이 아닌, 브랜드의 가치를 높이는 체계적인 솔루션을 제공합니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
