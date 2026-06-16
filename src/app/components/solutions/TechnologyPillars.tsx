"use client";

import { SolutionIcon, type SolutionIconName } from "./solution-icons";
import { anton, inter, sectionContainer } from "@/lib/typography";

const pillars: { icon: SolutionIconName; title: string }[] = [
    { icon: "brain", title: "Intelligence" },
    { icon: "target", title: "Precision" },
    { icon: "shield", title: "Security" },
    { icon: "handshake", title: "Reliability" },
];

export default function TechnologyPillars() {
    return (
        <section className={`bg-black py-14 sm:py-16 ${inter.className}`}>
            <div className={`${sectionContainer} text-center`}>
                <h2
                    className={`${anton.className} mb-10 text-[clamp(1.5rem,5vw,2.25rem)] font-normal uppercase tracking-tight text-white sm:mb-12`}
                >
                    Smart Neura Technology
                </h2>
                <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
                    {pillars.map((item) => (
                        <div
                            key={item.title}
                            className="flex flex-col items-center gap-3"
                        >
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 sm:h-20 sm:w-20">
                                <SolutionIcon
                                    name={item.icon}
                                    size={28}
                                    className="text-white sm:hidden"
                                />
                                <SolutionIcon
                                    name={item.icon}
                                    size={32}
                                    className="hidden text-white sm:block"
                                />
                            </div>
                            <p className="text-sm font-semibold text-white sm:text-base">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
