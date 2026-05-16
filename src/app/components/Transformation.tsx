"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Transformation() {
    return (
        <section id="transformation" className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* LEFT — Text slides in from left */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            From Evaluation to{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-600">
                                Transformation
                            </span>
                        </h2>

                        <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                            At <span className="font-semibold text-slate-800">SmartNeura</span>, we
                            understand that every enterprise is unique, with its own set of challenges,
                            goals, and opportunities. That's why we've developed a comprehensive
                            methodology to guide organizations from their{" "}
                            <span className="font-semibold text-slate-800">current state</span> to their{" "}
                            <span className="font-semibold text-slate-800">desired future state</span>.
                            With our expertise in digital transformation, we enable enterprises to achieve
                            their goals with precision, efficiency, and scalability.
                        </p>

                        {/* Subtle stat row */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            {[
                                { value: "100+", label: "Enterprises Transformed" },
                                { value: "15+", label: "Years of Expertise" },
                                { value: "98%", label: "Client Satisfaction" },
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="flex flex-col"
                                >
                                    <span className="text-3xl font-bold text-sky-500">{stat.value}</span>
                                    <span className="text-sm text-slate-500 mt-1">{stat.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT — Image slides in from right */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex-1 w-full"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
                            <Image
                                src="/Home/EvolutionToTransformation.jpg"
                                alt="From Evaluation to Transformation"
                                fill
                                className="object-cover"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 to-transparent" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}