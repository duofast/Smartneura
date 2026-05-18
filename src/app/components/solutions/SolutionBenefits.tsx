"use client";

import { motion } from "framer-motion";

interface Benefit {
    icon: string;
    title: string;
    desc: string;
}

interface Props {
    title: string;
    benefits: Benefit[];
    dark?: boolean;
}

export default function SolutionBenefits({ title, benefits, dark = false }: Props) {
    return (
        <section className={`relative w-full py-16 lg:py-24 ${dark ? "bg-slate-900" : "bg-white"}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`text-3xl lg:text-4xl font-bold text-center mb-16 ${dark ? "text-white" : "text-slate-900"}`}
                >
                    {title}
                </motion.h2>

                <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(benefits.length, 4)} gap-8`}>
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            whileHover={{ y: -6 }}
                            className={`flex flex-col items-center text-center p-6 rounded-2xl border transition-shadow hover:shadow-lg ${dark ? "border-white/10 bg-white/5 hover:bg-white/10" : "border-slate-100 bg-slate-50 hover:bg-white"
                                }`}
                        >
                            <div className="w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-3xl mb-4 shadow-inner">
                                {b.icon}
                            </div>
                            <h3 className={`font-bold text-lg mb-2 ${dark ? "text-white" : "text-slate-900"}`}>{b.title}</h3>
                            <p className={`text-sm leading-relaxed ${dark ? "text-white/60" : "text-slate-500"}`}>{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}