"use client";

import { motion } from "framer-motion";
import { anton, ease } from "@/lib/typography";

export function SectionHeader({
    eyebrow,
    title,
    align = "left",
    dark = false,
}: {
    eyebrow?: string;
    title: string;
    align?: "left" | "center";
    dark?: boolean;
}) {
    const centered = align === "center";

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease }}
            className={centered ? "text-center" : ""}
        >
            {eyebrow ? (
                <p
                    className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] sm:text-sm ${
                        dark ? "text-white/70" : "text-slate-900"
                    } ${centered ? "mx-auto" : ""}`}
                >
                    {eyebrow}
                </p>
            ) : null}
            <h2
                className={`${anton.className} text-[clamp(1.75rem,5.5vw,3.75rem)] font-normal uppercase leading-[0.92] tracking-tight ${
                    dark ? "text-white" : "text-slate-900"
                }`}
            >
                {title}
            </h2>
            <div
                className={`mt-4 h-1 w-14 rounded-full ${
                    dark ? "bg-white" : "bg-black"
                } ${centered ? "mx-auto" : ""}`}
            />
        </motion.div>
    );
}
