"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BusinessTransformation() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-green-100 blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-sky-100 blur-3xl opacity-40 pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* LEFT — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                            Business Transformation
                        </h2>

                        <p className="text-slate-800 text-lg lg:text-xl font-medium leading-relaxed">
                            Are you ready to revolutionize your business?
                        </p>

                        <p className="text-slate-700 text-base lg:text-lg font-medium leading-relaxed">
                            Welcome to SmartNeura – your partner in navigating the
                            ever-changing landscape of modern business.
                        </p>

                        <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                            At Smart Neura, we understand the challenges that businesses face
                            in today's rapidly evolving landscape. With technological
                            advancements, changing consumer preferences, and dynamic market
                            conditions, staying ahead of the curve is more critical than ever.
                        </p>

                        <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                            That's why we're here to help you navigate the complexities of
                            business transformation and unlock your organization's full
                            potential.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.02, x: 4 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="inline-flex items-center gap-2 text-sky-500 font-semibold text-sm cursor-pointer w-fit"
                        >
                            Learn More
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 w-full"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full aspect-square max-w-[500px] mx-auto"
                        >
                            <Image
                                src="/DigitalTransformation/BTransformation.jpg"
                                alt="Business Transformation"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}