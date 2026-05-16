"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const solutions = [
    {
        title: "Smart City",
        image: "/Home/Solutions/SmartCity.jpg",
        description: "Intelligent urban infrastructure connecting citizens, services, and systems for smarter living.",
        align: "left",
    },
    {
        title: "Safe City",
        image: "/Home/Solutions/SafeCity.jpg",
        description: "Advanced public security systems leveraging AI-powered surveillance and real-time monitoring.",
        align: "right",
    },
    {
        title: "Smart Street Lighting",
        image: "/Home/Solutions/StreetLighting.jpg",
        description: "Energy-efficient adaptive lighting solutions that reduce costs and carbon footprint.",
        align: "left",
    },
    {
        title: "Smart Transport",
        image: "/Home/Solutions/Transport.jpg",
        description: "Integrated mobility platforms enabling seamless, data-driven transportation networks.",
        align: "right",
    },
    {
        title: "Smart Surveillance",
        image: "/Home/Solutions/Surveillance.jpg",
        description: "AI-driven monitoring systems providing 24/7 situational awareness and threat detection.",
        align: "left",
    },
    {
        title: "Smart Utilities",
        image: "/Home/Solutions/Utilities.jpg",
        description: "Smart metering and grid solutions optimizing energy, water, and resource management.",
        align: "right",
    },
    {
        title: "Network Virtualization",
        image: "/Home/Solutions/Network.jpg",
        description: "Software-defined networking enabling flexible, scalable, and secure infrastructure.",
        align: "left",
    },
    {
        title: "No Code & Low Code Platform",
        image: "/Home/Solutions/NoCode.jpg",
        description: "Rapid application development platforms empowering teams to build without barriers.",
        align: "right",
    },
    {
        title: "Generative AI",
        image: "/Home/Solutions/GenAI.jpg",
        description: "Cutting-edge AI solutions transforming how enterprises create, decide, and innovate.",
        align: "left",
    },
];

function SolutionRow({
    solution,
    index,
}: {
    solution: (typeof solutions)[0];
    index: number;
}) {
    const [hovered, setHovered] = useState(false);
    const isLeft = solution.align === "left";

    return (
        <motion.div
            initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className={`flex items-center gap-6 lg:gap-10 ${isLeft ? "flex-row" : "flex-row-reverse"
                }`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Image */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                className="relative w-[55%] aspect-[16/9] rounded-2xl overflow-hidden shadow-lg flex-shrink-0"
            >
                <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover"
                />

                {/* Hover overlay */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-[#0a1628]/20 to-transparent"
                />

                {/* Number badge */}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-sky-500/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                    <span className="text-white text-xs font-bold">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                </div>
            </motion.div>

            {/* Text */}
            <div className={`flex-1 flex flex-col gap-3 ${isLeft ? "items-start" : "items-end text-right"}`}>
                {/* Connector line */}
                <motion.div
                    animate={{ scaleX: hovered ? 1 : 0.4, opacity: hovered ? 1 : 0.3 }}
                    transition={{ duration: 0.4 }}
                    className={`h-[2px] w-16 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full ${isLeft ? "origin-left" : "origin-right"
                        }`}
                />

                <motion.h3
                    animate={{ x: hovered ? (isLeft ? 4 : -4) : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl lg:text-3xl font-bold text-slate-900"
                >
                    {solution.title}
                </motion.h3>

                <motion.p
                    animate={{ opacity: hovered ? 1 : 0.6 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-500 text-sm lg:text-base leading-relaxed max-w-xs"
                >
                    {solution.description}
                </motion.p>

                {/* Learn more */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : (isLeft ? -8 : 8) }}
                    transition={{ duration: 0.3 }}
                    className={`flex items-center gap-2 text-sky-500 text-sm font-semibold ${isLeft ? "" : "flex-row-reverse"
                        }`}
                >
                    <span>Learn more</span>
                    <svg
                        className={`w-4 h-4 ${isLeft ? "" : "rotate-180"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default function Solutions() {
    return (
        <section className="relative w-full py-20 lg:py-28 overflow-hidden" style={{ background: "#f8fafc" }}>

            {/* Background blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-sky-100 blur-3xl opacity-50 pointer-events-none" />
            <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-50 pointer-events-none" />

            <div className="relative max-w-[1100px] mx-auto px-6 lg:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-center mb-20"
                >
                    <p className="text-sky-500 text-sm font-semibold tracking-widest uppercase mb-3">
                        What We Offer
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-black text-slate-900 tracking-tight">
                        Smart Solutions
                    </h2>
                    <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
                </motion.div>

                {/* Alternating rows */}
                <div className="flex flex-col gap-16 lg:gap-24">
                    {solutions.map((solution, i) => (
                        <SolutionRow key={solution.title} solution={solution} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}