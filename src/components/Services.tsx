"use client";

import { motion } from "framer-motion";
import { MapPin, PenTool, Instagram } from "lucide-react";

const services = [
    {
        icon: MapPin,
        title: "플레이스 최적화",
        description: "네이버 지도 순위 상승 및 매력적인 세팅으로 방문을 유도합니다.",
    },
    {
        icon: PenTool,
        title: "프리미엄 블로그",
        description: "단순 배포가 아닌, 읽고 오게 만드는 고퀄리티 원고를 작성합니다.",
    },
    {
        icon: Instagram,
        title: "인스타그램 브랜딩",
        description: "지역 맛집/핫플로 만드는 시각적 콘텐츠를 기획하고 제작합니다.",
    },
];

export function Services() {
    return (
        <section id="service" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        브랜딩하다는 이런 서비스를 제공합니다.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-muted/30 border border-border hover:border-secondary/50 transition-colors text-center"
                        >
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm text-secondary">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
