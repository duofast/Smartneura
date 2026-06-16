"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { anton, ease, inter, sectionContainer, sectionSpacing } from "@/lib/typography";

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
            viewport={{ once: false, margin: "-60px" }}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group z-40 flex cursor-pointer flex-col"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
                <motion.div
                    animate={{ scale: hovered ? 1.06 : 1 }}
                    transition={{ duration: 0.5, ease }}
                    className="h-full w-full"
                >
                    <Image
                        src={value.image}
                        alt={value.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 33vw, 90vw"
                    />
                </motion.div>

                <motion.div
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end bg-black/75 p-4 sm:p-5"
                >
                    <motion.p
                        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                        transition={{ duration: 0.3 }}
                        className="text-sm leading-relaxed text-white/90"
                    >
                        {value.description}
                    </motion.p>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: hovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-center"
            >
                <h3
                    className={`${anton.className} text-lg uppercase tracking-tight text-slate-900 transition-colors duration-200 group-hover:text-black sm:text-xl`}
                >
                    {value.title}
                </h3>
            </motion.div>

            <motion.div
                animate={{ scaleX: hovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="mx-auto mt-1 h-0.5 w-12 origin-center rounded-full bg-black"
            />
        </motion.div>
    );
}

export default function AboutCoreValues() {
    return (
        <section
            className={`relative w-full overflow-hidden bg-white ${sectionSpacing} ${inter.className}`}
        >
            <div className={sectionContainer}>
                <div className="mb-12 flex justify-center sm:mb-14">
                    <SectionHeader
                        eyebrow="Core Values"
                        title="Three Segments We Promote"
                        align="center"
                    />
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                    {values.map((value, i) => (
                        <ValueCard key={value.title} value={value} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
