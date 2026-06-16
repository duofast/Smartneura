"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        title: "Evaluate Current State",
        image: "/Home/Approach1.jpg",
        color: "#ffffff",
        points: [
            "Conduct a detailed analysis of your systems, processes, and infrastructure.",
            "Identify strengths, weaknesses, and opportunities for improvement.",
            "Develop a comprehensive understanding of your business landscape.",
        ],
    },
    {
        title: "Define Future Goals",
        image: "/Home/Approach2.jpg",
        color: "#f8fafc",
        points: [
            "Collaborate with your team to set clear, strategic objectives.",
            "Align goals with your vision, focusing on digital transformation and market leadership.",
            "Prioritize outcomes such as enhanced efficiency, scalability, and customer success.",
        ],
    },
    {
        title: "Develop a Roadmap",
        image: "/Home/Approach3.jpg",
        color: "#f1f5f9",
        points: [
            "Create a step-by-step plan to achieve your goals with precision.",
            "Integrate advanced technologies, including AI, GenAI, IoT, no/low-code platforms, network virtualization, etc.",
            "Establish actionable milestones and timelines for measurable progress.",
        ],
    },
    {
        title: "Execute and Transform",
        image: "/Home/Approach4.jpg",
        color: "#f8fafc",
        points: [
            "Implement solutions and strategies with expert guidance and minimal disruption.",
            "Monitor progress and adapt strategies for optimal results.",
            "Ensure sustainable growth with future-ready, secure, and scalable systems.",
        ],
    },
];

function ApproachCard({
    step,
    index,
    total,
}: {
    step: (typeof steps)[0];
    index: number;
    total: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [80, 0, 0, -40]
    );
    const opacity = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0, 1, 1, 0.6]
    );
    const scale = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        [0.96, 1, 1, 0.98]
    );

    return (
        <motion.div
            ref={ref}
            style={{ y, opacity, scale, backgroundColor: step.color }}
            className="sticky top-24 rounded-2xl overflow-hidden shadow-xl border border-slate-100 mb-6"
        >
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:h-[420px]">
                    <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                    />
                    {/* Step number */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-md bg-black flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                </div>

                {/* Text */}
                <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-[3px] w-8 bg-black rounded-full" />
                        <span className="text-slate-900 text-sm font-semibold uppercase tracking-widest">
                            Step {index + 1} of {total}
                        </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">
                        {step.title}
                    </h3>

                    <ul className="flex flex-col gap-3">
                        {step.points.map((point, pi) => (
                            <motion.li
                                key={pi}
                                initial={{ opacity: 0, x: -12 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: pi * 0.1, duration: 0.4 }}
                                className="flex items-start gap-3 text-slate-600 text-sm lg:text-base"
                            >
                                <span className="w-2 h-2 rounded-full bg-black flex-shrink-0 mt-2" />
                                <span dangerouslySetInnerHTML={{ __html: point }} />
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

export default function Approach() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-white">
            <div className="max-w-[1100px] mx-auto px-6 lg:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                        Our Approach: Transforming Enterprises for Success
                    </h2>
                    <p className="text-slate-600 text-base lg:text-lg max-w-3xl mx-auto">
                        At <span className="font-semibold text-slate-800">SmartNeura</span>, we
                        help enterprises transition from their current state to their desired
                        future with a clear, actionable methodology:
                    </p>
                </motion.div>

                {/* Stacking cards */}
                <div className="flex flex-col gap-0">
                    {steps.map((step, i) => (
                        <ApproachCard
                            key={step.title}
                            step={step}
                            index={i}
                            total={steps.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
