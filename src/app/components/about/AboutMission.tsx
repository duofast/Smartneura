"use client";

import { motion } from "framer-motion";

export default function AboutMission() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-white">
            <div className="max-w-[900px] mx-auto px-6 lg:px-16">

                {/* Main statement */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="mb-10"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-snug">
                        We are integrating the technologies of{" "}
                        <span className="text-sky-500">Artificial Intelligence</span>,{" "}
                        <span className="text-sky-500">Internet of Things</span>,{" "}
                        <span className="text-sky-500">Cloud computing</span> and{" "}
                        <span className="text-sky-500">Blockchain</span>, etc. with Digital
                        Transformation expertise in{" "}
                        <span className="text-indigo-600">Smart Governance</span>,{" "}
                        <span className="text-indigo-600">Smart Cities</span>, and{" "}
                        <span className="text-indigo-600">Smart Services</span>.
                    </h2>
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="w-full h-[1px] bg-slate-200 origin-left mb-10"
                />

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-slate-500 text-sm lg:text-base leading-relaxed"
                >
                    SmartNeura with clear envision a world for the betterment of people
                    livability, which provide clean, healthy living conditions without
                    pollution and congestion. Providing digital infrastructure to different
                    sectors like energy, utilities, local government and creates high
                    quality jobs. Focusing on sustainability for current and future economy.
                </motion.p>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8"
                >
                    {[
                        { value: "10+", label: "Years Experience" },
                        { value: "50+", label: "Smart Projects" },
                        { value: "20+", label: "Countries Reached" },
                        { value: "98%", label: "Client Satisfaction" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                            whileHover={{ y: -4 }}
                            className="flex flex-col items-center text-center p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <span className="text-3xl font-bold text-sky-500">{stat.value}</span>
                            <span className="text-xs text-slate-500 mt-1">{stat.label}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}