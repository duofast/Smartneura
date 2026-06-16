"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { AnimatedStat } from "@/components/ui/animated-stat";
import { ease, inter, sectionContainer } from "@/lib/typography";

const missionText =
    "We are integrating the technologies of Artificial Intelligence, Internet of Things, Cloud computing and Blockchain with Digital Transformation expertise across Smart Governance, Smart Cities, and Smart Services. SmartNeura envisions a world where digital infrastructure improves everyday livability—delivering clean, healthy living conditions without pollution or congestion. We partner with energy, utilities, and local government to deploy secure, scalable platforms that create high-quality jobs, accelerate innovation, and build a sustainable economy for generations to come.";

const emphasisWords = [
    "Artificial",
    "Intelligence",
    "Internet",
    "Things",
    "Cloud",
    "Blockchain",
    "Digital",
    "Transformation",
    "Smart",
    "Governance",
    "Cities",
    "Services",
    "SmartNeura",
    "secure",
    "scalable",
    "sustainable",
];

export default function AboutMission() {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section className={`relative w-full bg-white ${inter.className}`}>
            <div
                ref={scrollRef}
                className="flex min-h-[75vh] flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-10"
            >
                <div className={`${sectionContainer} w-full max-w-4xl`}>
                    <div className="mb-8 flex justify-center sm:mb-10">
                        <SectionHeader
                            eyebrow="Our Mission"
                            title="Building a Smarter Future"
                            align="center"
                        />
                    </div>

                    <TextGradientScroll
                        text={missionText}
                        emphasisWords={emphasisWords}
                        containerRef={scrollRef}
                        type="word"
                        scrollOffset={["start 0.9", "end 0.15"]}
                        className="mx-auto max-w-3xl justify-center text-center text-lg leading-relaxed text-slate-600 sm:text-xl sm:leading-relaxed lg:text-2xl lg:leading-relaxed"
                    />
                </div>
            </div>

            <div className={`${sectionContainer} max-w-[900px] pb-16 sm:pb-20 lg:pb-24`}>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
                    {[
                        { value: 10, suffix: "+", label: "Years Experience" },
                        { value: 50, suffix: "+", label: "Smart Projects" },
                        { value: 20, suffix: "+", label: "Countries Reached" },
                        { value: 98, suffix: "%", label: "Client Satisfaction" },
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5, ease }}
                            className="flex flex-col items-center rounded-xl border border-slate-100 p-3 text-center shadow-sm transition-shadow hover:shadow-md sm:p-4"
                        >
                            <AnimatedStat
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                                valueClassName="text-2xl font-bold text-black tabular-nums sm:text-3xl"
                                labelClassName="mt-1 text-[10px] text-slate-500 sm:text-xs"
                                className="flex flex-col items-center"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
