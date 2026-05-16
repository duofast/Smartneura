"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const industries = [
    {
        title: "Government",
        image: "/Home/Industries/Government.png",
        description: "Smart governance solutions for modern public services.",
    },
    {
        title: "Aerospace and Defense",
        image: "/Home/Industries/Aerospace.webp",
        description: "Advanced tech for mission-critical defense operations.",
    },
    {
        title: "Banking",
        image: "/Home/Industries/Banking.png",
        description: "Digital transformation for financial institutions.",
    },
    {
        title: "Telecom & Cloud Provider",
        image: "/Home/Industries/Telecom.jpg",
        description: "Next-gen network and cloud infrastructure solutions.",
    },
    {
        title: "Manufacturing Industries",
        image: "/Home/Industries/Manufacturing.jpg",
        description: "IoT and automation for smarter production lines.",
    },
    {
        title: "Energy and Utilities",
        image: "/Home/Industries/Energy.png",
        description: "Sustainable energy management and smart grid solutions.",
    },
    {
        title: "Retail",
        image: "/Home/Industries/Retail.jpg",
        description: "Omnichannel retail experiences powered by AI.",
    },
    {
        title: "Education",
        image: "/Home/Industries/Education.jpg",
        description: "Digital learning platforms and smart campus solutions.",
    },
    {
        title: "Healthcare",
        image: "/Home/Industries/Healthcare.jpg",
        description: "Connected health systems and patient-first technology.",
    },
];

function IndustryCard({
    industry,
    index,
}: {
    industry: (typeof industries)[0];
    index: number;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.6,
                delay: (index % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group flex flex-col cursor-pointer"
        >
            {/* Image box */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <motion.div
                    animate={{ scale: hovered ? 1.06 : 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full"
                >
                    <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Hover overlay */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/30 to-transparent flex flex-col justify-end p-5"
                >
                    <motion.p
                        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                        className="text-white/90 text-sm leading-relaxed"
                    >
                        {industry.description}
                    </motion.p>

                    {/* Arrow */}
                    <motion.div
                        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -8 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="mt-3 flex items-center gap-1.5 text-sky-400 text-sm font-medium"
                    >
                        Learn more
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.div>
                </motion.div>

                {/* Top-left number badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                    <span className="text-white text-xs font-semibold">{index + 1}</span>
                </div>
            </div>

            {/* Title below */}
            <motion.div
                animate={{ y: hovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 px-1 flex items-center justify-between"
            >
                <h3 className="text-slate-800 font-medium text-base group-hover:text-sky-600 transition-colors duration-200">
                    {industry.title}
                </h3>
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -6 }}
                    transition={{ duration: 0.25 }}
                >
                    <svg className="w-4 h-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.div>
            </motion.div>

            {/* Underline on hover */}
            <motion.div
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1 mx-1 h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full origin-left"
            />
        </motion.div>
    );
}

export default function Industries() {
    return (
        <section className="relative w-full py-20 lg:py-28 bg-white overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-sky-50 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-center mb-16"
                >
                    <p className="text-sky-500 text-sm font-semibold tracking-widest uppercase mb-3">
                        Who We Serve
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
                        Industries
                    </h2>
                    <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {industries.map((industry, i) => (
                        <IndustryCard key={industry.title} industry={industry} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}