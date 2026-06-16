"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { ease, inter, sectionContainer, sectionSpacing } from "@/lib/typography";

interface Props {
    title: string;
    eyebrow?: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
    dark?: boolean;
    bullets?: string[];
}

export default function SolutionTextImage({
    title,
    eyebrow,
    paragraphs,
    image,
    imageAlt,
    reverse = false,
    dark = false,
    bullets,
}: Props) {
    return (
        <section
            className={`relative w-full overflow-hidden ${sectionSpacing} ${inter.className} ${
                dark ? "bg-black text-white" : "bg-white"
            }`}
        >
            <div className={sectionContainer}>
                <div
                    className={`flex flex-col items-center gap-10 sm:gap-12 lg:gap-20 ${
                        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                >
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 48 : -48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{ duration: 0.8, ease }}
                        className="flex min-w-0 flex-1 flex-col gap-5"
                    >
                        <SectionHeader
                            eyebrow={eyebrow ?? "Smart Solutions"}
                            title={title}
                            dark={dark}
                        />

                        {paragraphs.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: i * 0.08, duration: 0.5, ease }}
                                className={`text-sm leading-relaxed sm:text-base ${
                                    dark ? "text-white/80" : "text-slate-500"
                                }`}
                                dangerouslySetInnerHTML={{ __html: p }}
                            />
                        ))}

                        {bullets ? (
                            <ul className="mt-2 flex flex-col gap-2">
                                {bullets.map((b, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: i * 0.08, duration: 0.4, ease }}
                                        className={`flex items-start gap-3 text-sm sm:text-base ${
                                            dark ? "text-white/80" : "text-slate-500"
                                        }`}
                                    >
                                        <span
                                            className={`mt-2 h-2 w-2 flex-shrink-0 rounded-full ${
                                                dark ? "bg-white" : "bg-black"
                                            }`}
                                        />
                                        <span dangerouslySetInnerHTML={{ __html: b }} />
                                    </motion.li>
                                ))}
                            </ul>
                        ) : null}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -48 : 48 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, margin: "-80px" }}
                        transition={{ duration: 0.8, ease }}
                        className="w-full min-w-0 flex-1"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-[0_24px_60px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/10"
                        >
                            <Image
                                src={image}
                                alt={imageAlt}
                                fill
                                className="object-cover"
                                sizes="(min-width: 1024px) 50vw, 90vw"
                            />
                            <div
                                className="pointer-events-none absolute inset-0"
                                aria-hidden
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)",
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
