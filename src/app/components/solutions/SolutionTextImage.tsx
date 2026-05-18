"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
    title: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
    reverse?: boolean;
    dark?: boolean;
    bullets?: string[];
}

export default function SolutionTextImage({
    title, paragraphs, image, imageAlt, reverse = false, dark = false, bullets,
}: Props) {
    return (
        <section className={`relative w-full py-16 lg:py-24 overflow-hidden ${dark ? "bg-[#0a4a6e] text-white" : "bg-white"}`}>
            <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
                <div className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>

                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 flex flex-col gap-5"
                    >
                        <h2 className={`text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight ${dark ? "text-white" : "text-slate-900"}`}>
                            {title}
                        </h2>
                        {paragraphs.map((p, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`text-sm lg:text-base leading-relaxed ${dark ? "text-white/80" : "text-slate-600"}`}
                                dangerouslySetInnerHTML={{ __html: p }}
                            />
                        ))}
                        {bullets && (
                            <ul className="flex flex-col gap-2 mt-2">
                                {bullets.map((b, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08, duration: 0.4 }}
                                        className={`flex items-start gap-3 text-sm lg:text-base ${dark ? "text-white/80" : "text-slate-600"}`}
                                    >
                                        <span className="w-2 h-2 rounded-full bg-sky-400 flex-shrink-0 mt-2" />
                                        <span dangerouslySetInnerHTML={{ __html: b }} />
                                    </motion.li>
                                ))}
                            </ul>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 w-full"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image src={image} alt={imageAlt} fill className="object-cover" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}