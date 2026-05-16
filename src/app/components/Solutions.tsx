"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Anton, Inter } from "next/font/google";
import { motion, useInView } from "framer-motion";
import FlowArt, { FlowSection } from "@/components/ui/story-scroll";

const anton = Anton({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const solutions = [
    {
        title: "Smart City",
        image: "/Home/Solutions/SmartCity.jpg",
        bg: "#f0f9ff",
        tagline: "Connected urban ecosystems",
        description:
            "Intelligent infrastructure linking citizens, services, and systems for smarter, more responsive cities.",
        highlights: [
            "Citizen-first digital services",
            "Integrated city operations",
            "Data-driven urban planning",
        ],
    },
    {
        title: "Safe City",
        image: "/Home/Solutions/SafeCity.jpg",
        bg: "#f8fafc",
        tagline: "Public safety reimagined",
        description:
            "AI-powered surveillance and real-time monitoring that protect communities without compromising trust.",
        highlights: [
            "24/7 situational awareness",
            "Predictive threat detection",
            "Unified command centers",
        ],
    },
    {
        title: "Smart Street Lighting",
        image: "/Home/Solutions/StreetLighting.jpg",
        bg: "#eff6ff",
        tagline: "Light that thinks ahead",
        description:
            "Adaptive lighting that cuts energy use, lowers costs, and keeps streets safe through intelligent control.",
        highlights: [
            "Up to 60% energy savings",
            "Remote dimming & scheduling",
            "Sensor-ready infrastructure",
        ],
    },
    {
        title: "Smart Transport",
        image: "/Home/Solutions/Transport.jpg",
        bg: "#eef2ff",
        tagline: "Mobility without friction",
        description:
            "Integrated platforms for seamless, data-driven transportation across rail, road, and multimodal networks.",
        highlights: [
            "Real-time fleet visibility",
            "Passenger experience apps",
            "Traffic & route optimization",
        ],
    },
    {
        title: "Smart Surveillance",
        image: "/Home/Solutions/Surveillance.jpg",
        bg: "#f1f5f9",
        tagline: "See more. Act faster.",
        description:
            "Enterprise-grade monitoring with AI analytics for continuous awareness across critical assets and sites.",
        highlights: [
            "Edge AI video analytics",
            "Multi-site orchestration",
            "Compliance-ready archiving",
        ],
    },
    {
        title: "Smart Utilities",
        image: "/Home/Solutions/Utilities.jpg",
        bg: "#ecfdf5",
        tagline: "Resources, optimized",
        description:
            "Smart metering and grid intelligence for energy, water, and utilities that run leaner and greener.",
        highlights: [
            "Smart metering at scale",
            "Outage prediction & response",
            "Renewable integration",
        ],
    },
    {
        title: "Network Virtualization",
        image: "/Home/Solutions/Network.jpg",
        bg: "#eef2ff",
        tagline: "Infrastructure that flexes",
        description:
            "Software-defined networking built for carriers and enterprises that need speed, scale, and security.",
        highlights: [
            "SDN & NFV orchestration",
            "Zero-touch provisioning",
            "Multi-cloud connectivity",
        ],
    },
    {
        title: "No Code & Low Code",
        image: "/Home/Solutions/NoCode.jpg",
        bg: "#f5f3ff",
        tagline: "Build at the speed of ideas",
        description:
            "Rapid application platforms that let teams ship digital products without heavy engineering overhead.",
        highlights: [
            "Drag-and-drop workflows",
            "Enterprise governance built in",
            "Faster time-to-market",
        ],
    },
    {
        title: "Generative AI",
        image: "/Home/Solutions/GenAI.jpg",
        bg: "#f0fdfa",
        tagline: "Intelligence that amplifies",
        description:
            "Enterprise GenAI that transforms how organizations create, decide, and automate—with guardrails you trust.",
        highlights: [
            "Secure model deployment",
            "Domain-tuned assistants",
            "Workflow automation",
        ],
    },
] as const;

const textVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 1.14, x: -40 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { duration: 0.9, ease },
    },
};

function SolutionStory({
    solution,
    index,
    total,
}: {
    solution: (typeof solutions)[number];
    index: number;
    total: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.45, once: false });

    const num = String(index + 1).padStart(2, "0");
    const isLast = index === total - 1;

    return (
        <FlowSection
            compact
            aria-label={solution.title}
            style={{ backgroundColor: solution.bg, color: "#0f172a" }}
        >
            <div ref={ref} className={`${inter.className} relative mx-auto h-full w-full max-w-6xl`}>
                <div className="grid h-full max-h-[min(88vh,820px)] grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    {/* Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="relative order-2 lg:order-1"
                    >
                        <motion.div
                            animate={
                                inView
                                    ? { y: [0, -10, 0], scale: [1, 1.03, 1] }
                                    : { y: 0, scale: 1 }
                            }
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-12px_rgba(14,165,233,0.25)] ring-1 ring-sky-200/60"
                        >
                            <Image
                                src={solution.image}
                                alt={solution.title}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 90vw"
                                priority={index < 2}
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-tr from-sky-900/25 via-transparent to-white/10"
                                aria-hidden
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                                inView
                                    ? { opacity: 1, scale: 1 }
                                    : { opacity: 0, scale: 0.8 }
                            }
                            transition={{ delay: 0.4, duration: 0.5, ease }}
                            className="absolute -bottom-3 -right-2 flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-bold text-sky-600 shadow-lg ring-2 ring-sky-100 sm:-right-4"
                        >
                            {num}
                        </motion.div>
                    </motion.div>

                    {/* Copy */}
                    <motion.div
                        variants={textVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="order-1 flex flex-col justify-center lg:order-2"
                    >
                        <motion.p
                            variants={itemVariants}
                            className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600"
                        >
                            {num} — Smart Solutions
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="mb-3 text-sm font-medium text-slate-500"
                        >
                            {solution.tagline}
                        </motion.p>

                        <motion.h2
                            variants={itemVariants}
                            className={`${anton.className} mb-4 text-[clamp(2.25rem,6.5vw,4.25rem)] font-normal uppercase leading-[0.92] tracking-tight text-slate-900`}
                        >
                            {solution.title}
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="mb-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg"
                        >
                            {solution.description}
                        </motion.p>

                        <motion.ul
                            variants={itemVariants}
                            className="mb-6 space-y-2.5"
                        >
                            {solution.highlights.map((h) => (
                                <li
                                    key={h}
                                    className="flex items-start gap-2.5 text-sm text-slate-700 sm:text-base"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/15 text-sky-600">
                                        <Check size={12} strokeWidth={2.5} />
                                    </span>
                                    {h}
                                </li>
                            ))}
                        </motion.ul>

                        {isLast ? (
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap gap-3"
                            >
                                <Link
                                    href="#transformation"
                                    className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-500"
                                >
                                    Start Your Transformation
                                    <ArrowRight size={16} />
                                </Link>
                                <Link
                                    href="/contacts"
                                    className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 backdrop-blur-sm transition-colors hover:bg-white"
                                >
                                    Contact Us
                                </Link>
                            </motion.div>
                        ) : (
                            <motion.div
                                variants={itemVariants}
                                className="flex items-center gap-2 text-sm font-medium text-sky-600"
                            >
                                <span className="h-px w-8 bg-sky-400" />
                                Scroll for next solution
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                {/* Progress */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-1.5 lg:bottom-8"
                >
                    {Array.from({ length: total }).map((_, i) => (
                        <span
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === index
                                    ? "w-8 bg-sky-500"
                                    : "w-1.5 bg-slate-300"
                            }`}
                        />
                    ))}
                </motion.div>
            </div>
        </FlowSection>
    );
}

function IntroPanel() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.5, once: false });

    return (
        <FlowSection
            compact
            aria-label="Smart Solutions introduction"
            style={{ backgroundColor: "#f8fafc", color: "#0f172a" }}
        >
            <div
                ref={ref}
                className={`${inter.className} relative mx-auto flex h-full max-h-[min(88vh,820px)] w-full max-w-6xl flex-col items-center justify-center text-center`}
            >
                <motion.div
                    variants={textVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="px-2"
                >
                    <motion.p
                        variants={itemVariants}
                        className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600"
                    >
                        What We Offer
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className={`${anton.className} mb-5 text-[clamp(2.75rem,10vw,6rem)] font-normal uppercase leading-[0.9] tracking-tight text-slate-900`}
                    >
                        Smart
                        <br />
                        Solutions
                    </motion.h2>

                    <motion.div
                        variants={itemVariants}
                        className="mx-auto mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500"
                    />

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
                    >
                        Nine enterprise capabilities—from smart cities to
                        generative AI—delivered with the same precision and
                        scale as our industry programs.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center gap-4 sm:gap-8"
                    >
                        {[
                            { label: "9", sub: "Solution domains" },
                            { label: "360°", sub: "Digital stack" },
                            { label: "Global", sub: "Delivery scale" },
                        ].map((stat) => (
                            <div
                                key={stat.sub}
                                className="min-w-[100px] rounded-2xl bg-white/70 px-5 py-4 shadow-sm ring-1 ring-slate-200/80 backdrop-blur-sm"
                            >
                                <p
                                    className={`${anton.className} text-3xl text-sky-600 sm:text-4xl`}
                                >
                                    {stat.label}
                                </p>
                                <p className="mt-1 text-xs font-medium text-slate-500 sm:text-sm">
                                    {stat.sub}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                    <motion.p
                        variants={itemVariants}
                        className="mt-10 text-sm font-medium text-slate-400"
                    >
                        Scroll to explore each solution
                    </motion.p>
                </motion.div>
            </div>
        </FlowSection>
    );
}

export default function Solutions() {
    return (
        <section id="solutions" className={`${inter.className} relative w-full`}>
            <FlowArt aria-label="Smart Solutions story scroll">
                <IntroPanel />
                {solutions.map((solution, i) => (
                    <SolutionStory
                        key={solution.title}
                        solution={solution}
                        index={i}
                        total={solutions.length}
                    />
                ))}
            </FlowArt>
        </section>
    );
}
