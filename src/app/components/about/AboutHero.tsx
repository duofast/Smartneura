"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/AboutUs/AboutHero.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-thin text-white tracking-tight mb-8"
                    style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
                >
                    About <span className="font-bold">US</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-white/85 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed"
                    style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
                >
                    We are living in an era where digital technology is changing very
                    rapidly and transforming our lifestyle, doing business, govern the
                    government and cities, almost every aspect of a human being.
                </motion.p>
            </div>

            {/* Bottom ellipse curve */}
            <div
                className="absolute bottom-0 left-0 right-0 z-20 bg-white"
                style={{ height: "60px", borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
            />
        </section>
    );
}