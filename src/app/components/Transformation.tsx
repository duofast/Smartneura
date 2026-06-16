"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedStat } from "@/components/ui/animated-stat";

const stats = [
    { value: 100, suffix: "+", label: "Enterprises Transformed" },
    { value: 15, suffix: "+", label: "Years of Expertise" },
    { value: 98, suffix: "%", label: "Client Satisfaction" },
];

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
                            <span className="text-black">
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

                        {/* Stats — count up each time section enters view */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            {stats.map((stat) => (
                                <AnimatedStat
                                    key={stat.label}
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    label={stat.label}
                                />
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
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 ring-1 ring-black/10">
                            <Image
                                src="/Home/EvolutionToTransformation.jpg"
                                alt="From Evaluation to Transformation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/10" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
