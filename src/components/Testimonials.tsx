"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        image: "/review_meat_1764318743844.png",
        alt: "고깃집 리뷰 이미지",
        text: "솔직히 반신반의했는데, 진단받고 메뉴판 문구 하나 바꿨더니 주말 예약이 2배 늘었습니다. 진짜 소름 돋네요.",
        author: "마포구 고깃집 김OO 사장님",
    },
    {
        image: "/review_cafe_1764318760187.png",
        alt: "카페 리뷰 이미지",
        text: "다른 대행사는 글자 수 채우기 바쁜데, 여기는 우리 가게의 강점을 정확히 찝어줍니다. 매출이 증명해주네요.",
        author: "인천 카페 이OO 사장님",
    },
    {
        image: "/review_scissors_1764321792193.png",
        alt: "뷰티샵 리뷰 이미지",
        text: "무료 진단이라길래 대충 해줄 줄 알았는데, 분석 보고서 퀄리티 보고 바로 계약했습니다. 돈 낭비 멈추게 해 주셔서 감사합니다.",
        author: "강남 뷰티샵 박OO 원장님",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        이미 많은 사장님들이 경험했습니다.
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-2xl overflow-hidden shadow-md border border-border"
                        >
                            <div className="relative h-48 w-full">
                                <Image
                                    src={item.image}
                                    alt={item.alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8">
                                <p className="text-lg mb-6 leading-relaxed">"{item.text}"</p>
                                <p className="font-bold text-primary text-right">- {item.author}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
