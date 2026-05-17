"use client";

import { motion } from "framer-motion";

export default function DTHero() {
    return (
        <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/DigitalTransformation/DTHero.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-thin text-white tracking-tight"
                    style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
                >
                    Digital Transformation
                </motion.h1>
            </div>

            <div
                className="absolute bottom-0 left-0 right-0 z-20 bg-white"
                style={{ height: "60px", borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
            />
        </section>
    );
}