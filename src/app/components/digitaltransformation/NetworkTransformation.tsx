"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        icon: "⚡",
        title: "Flexible Deployment",
        desc: "Bare-metal, VMs, or containers on COTS servers.",
    },
    {
        icon: "🔒",
        title: "End-to-End Security",
        desc: "Robust protection across all layers.",
    },
    {
        icon: "📈",
        title: "Cost-Effective Scalability",
        desc: "Reduce costs while scaling effortlessly.",
    },
    {
        icon: "🚀",
        title: "Future-Ready",
        desc: "Prepare for 5G, IoT, SD-WAN, and cloud-native applications.",
    },
];

export default function NetworkTransformation() {
    return (
        <section className="relative w-full py-20 lg:py-32 bg-white overflow-hidden">

            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-sky-50 blur-3xl opacity-60 pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

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
                                src="/DigitalTransformation/NT.jpg"
                                alt="Network Transformation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/20 to-transparent" />
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="flex-1 flex flex-col gap-6"
                    >
                        <div>
                            <p className="text-sky-500 text-sm font-semibold tracking-widest uppercase mb-2">
                                Network Transformation
                            </p>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Transform Your Network
                            </h2>
                        </div>

                        <p className="text-slate-500 text-sm lg:text-base leading-relaxed">
                            Unlock the future of connectivity with{" "}
                            <span className="font-semibold text-slate-800">
                                SmartNeura's Network Transformation Solutions
                            </span>
                            . Replace costly hardware with{" "}
                            <span className="font-semibold text-slate-800">
                                virtualized, high-performance software routers
                            </span>{" "}
                            optimized for{" "}
                            <span className="font-semibold text-slate-800">
                                CSPs, MNOs, and Enterprises
                            </span>
                            .
                        </p>

                        {/* Feature list */}
                        <div className="flex flex-col gap-3">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ x: 4 }}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors"
                                >
                                    <span className="text-lg flex-shrink-0">{f.icon}</span>
                                    <div>
                                        <span className="font-semibold text-slate-800 text-sm">
                                            {f.title}
                                        </span>
                                        <span className="text-slate-500 text-sm"> — {f.desc}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="text-slate-700 font-semibold text-sm lg:text-base"
                        >
                            Empower your business with smarter, faster, and more secure
                            networks.
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="w-fit px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-shadow"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}