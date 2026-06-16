"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { anton, ease } from "@/lib/typography";

interface PageHeroProps {
    eyebrow?: string;
    title: string;
    titleHtml?: boolean;
    description?: string;
    image: string;
    dark?: boolean;
    cta?: { label: string; href: string };
}

export function PageHero({
    eyebrow,
    title,
    titleHtml = false,
    description,
    image,
    dark = true,
    cta,
}: PageHeroProps) {
    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${image}')` }}
            />
            <div
                className={`absolute inset-0 ${
                    dark
                        ? "bg-gradient-to-b from-black/55 via-black/45 to-black/72"
                        : "bg-gradient-to-b from-black/40 via-black/30 to-black/55"
                }`}
            />

            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-28 lg:px-10">
                {eyebrow ? (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease }}
                        className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-sm"
                    >
                        {eyebrow}
                    </motion.p>
                ) : null}

                <motion.h1
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, delay: eyebrow ? 0.1 : 0, ease }}
                    className={`${anton.className} text-[clamp(2.25rem,9vw,5.5rem)] font-normal uppercase leading-[0.9] tracking-tight text-white`}
                    style={{ textShadow: "0 2px 40px rgba(0,0,0,0.45)" }}
                    {...(titleHtml
                        ? { dangerouslySetInnerHTML: { __html: title } }
                        : { children: title })}
                />

                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.35, ease }}
                    className="mx-auto mt-5 h-1 w-16 origin-center rounded-full bg-white/90"
                />

                {description ? (
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.45, ease }}
                        className="mt-6 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:text-lg"
                        style={{ textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}
                    >
                        {description}
                    </motion.p>
                ) : null}

                {cta ? (
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65, delay: 0.6, ease }}
                        className="mt-8"
                    >
                        <Link
                            href={cta.href}
                            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6 sm:py-3"
                        >
                            {cta.label}
                            <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                ) : null}
            </div>
        </section>
    );
}
