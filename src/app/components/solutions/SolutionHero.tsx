"use client";

import { motion } from "framer-motion";

interface Props {
    title: string;
    subtitle?: string;
    image: string;
    dark?: boolean;
}

export default function SolutionHero({ title, subtitle, image, dark = true }: Props) {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${image}')` }}
            />
            <div className={`absolute inset-0 ${dark ? "bg-gradient-to-b from-black/60 via-black/30 to-black/60" : "bg-gradient-to-b from-black/20 via-transparent to-black/40"}`} />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-4"
                    >
                        {subtitle}
                    </motion.p>
                )}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-thin text-white tracking-tight leading-tight max-w-4xl"
                    style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 z-20 bg-white"
                style={{ height: "60px", borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
            />
        </section>
    );
}