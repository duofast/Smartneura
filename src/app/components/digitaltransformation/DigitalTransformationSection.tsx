"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalTransformationSection() {
    return (
        <section className="relative w-full py-20 lg:py-32 overflow-hidden" style={{ background: "#f8fafc" }}>

            <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-50 pointer-events-none -translate-y-1/2" />

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">

                    {/* RIGHT — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 flex flex-col gap-5"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                            Digital Transformation
                        </h2>

                        {[
                            "Discover the transformative power of digital technology with our comprehensive digital transformation services.",
                            "Our strategic approach integrates digital solutions across all facets of your organization from processes and products to operations and technology infrastructure. By evaluating your current workflows, systems, and market needs.",
                            "At Smart Neura, we specialize in helping businesses navigate their digital transformation journey. Our team of experts works closely with clients to develop tailored strategies, implement cutting-edge technologies, and drive measurable results.",
                            "Whether you're looking to optimize operations, elevate customer experiences, or drive innovation, we're here to guide you every step of the way.",
                        ].map((text, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-slate-500 text-sm lg:text-base leading-relaxed"
                            >
                                {text}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* LEFT — Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 w-full"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/DigitalTransformation/DT.jpg"
                                alt="Digital Transformation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}