"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
    {
        title: "Smart Home",
        image: "/AboutUs/SmartHome.jpg",
        description:
            "Intelligent home automation systems that enhance comfort, security, and energy efficiency for modern living.",
    },
    {
        title: "Smart Building",
        image: "/AboutUs/SmartBuilding.jpg",
        description:
            "Connected building management solutions optimizing energy, operations, and occupant experience.",
    },
    {
        title: "Smart Cities",
        image: "/AboutUs/SmartCities.jpg",
        description:
            "Comprehensive urban intelligence platforms transforming how cities serve and connect their citizens.",
    },
];

function ValueCard({
    value,
    index,
}: {
    value: (typeof values)[0];
    index: number;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="flex flex-col cursor-pointer group z-40"
        >
            {/* Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <motion.div
                    animate={{ scale: hovered ? 1.06 : 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="w-full h-full"
                >
                    <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Overlay */}
                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-[#0a1628]/30 to-transparent flex flex-col justify-end p-5"
                >
                    <motion.p
                        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-white/90 text-sm leading-relaxed"
                    >
                        {value.description}
                    </motion.p>
                </motion.div>
            </div>

            {/* Title */}
            <motion.div
                animate={{ y: hovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-center"
            >
                <h3
                    className={`text-lg font-semibold transition-colors duration-200 ${index === 0 || index === 2
                        ? "font-bold text-slate-900"
                        : "text-slate-700"
                        } group-hover:text-sky-600`}
                >
                    {value.title}
                </h3>
            </motion.div>

            {/* Underline */}
            <motion.div
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-1 mx-auto w-12 h-[2px] bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full origin-center"
            />
        </motion.div>
    );
}

export default function AboutCoreValues() {
    return (
        <section className="relative w-full py-16 lg:py-24 bg-white overflow-hidden">

            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-sky-50 blur-3xl opacity-70 pointer-events-none" />

            <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="text-center mb-14"
                >
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 leading-relaxed">
                        To achieve this vision we are promoting three segments as our core
                        values
                    </h2>
                    <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {values.map((value, i) => (
                        <ValueCard key={value.title} value={value} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}