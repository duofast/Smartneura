"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ease, inter, sectionContainer, sectionSpacing } from "@/lib/typography";
import { SolutionIcon, type SolutionIconName } from "./solution-icons";

interface Benefit {
    icon: SolutionIconName;
    title: string;
    desc: string;
}

interface Props {
    title: string;
    eyebrow?: string;
    benefits: Benefit[];
    dark?: boolean;
}

function benefitGridClass(count: number) {
    if (count <= 2) return "sm:grid-cols-2";
    if (count === 3) return "sm:grid-cols-2 lg:grid-cols-3";
    return "sm:grid-cols-2 lg:grid-cols-3";
}

export default function SolutionBenefits({
    title,
    eyebrow = "Key Benefits",
    benefits,
    dark = false,
}: Props) {
    return (
        <section
            className={`relative w-full ${sectionSpacing} ${inter.className} ${
                dark ? "bg-slate-900" : "bg-white"
            }`}
        >
            <div className={sectionContainer}>
                <div className="mb-12 flex justify-center sm:mb-16">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={title}
                        align="center"
                        dark={dark}
                    />
                </div>

                <div
                    className={`grid grid-cols-1 gap-6 sm:gap-8 ${benefitGridClass(benefits.length)}`}
                >
                    {benefits.map((b, i) => (
                        <motion.div
                            key={b.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: i * 0.08, duration: 0.6, ease }}
                            whileHover={{ y: -6 }}
                            className={`flex flex-col items-center rounded-2xl border p-5 text-center transition-shadow hover:shadow-lg sm:p-6 ${
                                dark
                                    ? "border-white/10 bg-white/5 hover:bg-white/10"
                                    : "border-slate-100 bg-slate-50 hover:bg-white"
                            }`}
                        >
                            <div
                                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-md shadow-inner sm:h-16 sm:w-16 ${
                                    dark
                                        ? "bg-white/10"
                                        : "border border-black/10 bg-white"
                                }`}
                            >
                                <SolutionIcon
                                    name={b.icon}
                                    size={26}
                                    className={dark ? "text-white" : "text-slate-900"}
                                />
                            </div>
                            <h3
                                className={`mb-2 text-base font-semibold sm:text-lg ${
                                    dark ? "text-white" : "text-slate-900"
                                }`}
                            >
                                {b.title}
                            </h3>
                            <p
                                className={`text-sm leading-relaxed ${
                                    dark ? "text-white/60" : "text-slate-500"
                                }`}
                            >
                                {b.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
