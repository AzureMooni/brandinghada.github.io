"use client";

import { motion } from "framer-motion";

export function Problem() {
    return (
        <section className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">
                        열심히 했는데, 왜 내 가게만 파리 날릴까요?
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        체험단, 영수증 리뷰... 남들 하는 거 다 해봤는데 제자리걸음이신가요?<br />
                        이유는 고객을 <span className="text-red-600 font-bold">'설득'</span>하지 못했기 때문입니다.<br />
                        단순 노출은 이제 의미가 없습니다.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
