"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedStatProps {
    value: number;
    suffix?: string;
    label: string;
    duration?: number;
    className?: string;
    valueClassName?: string;
    labelClassName?: string;
}

export function AnimatedStat({
    value,
    suffix = "",
    label,
    duration = 1.4,
    className = "flex flex-col",
    valueClassName = "text-3xl font-bold text-slate-950 tabular-nums",
    labelClassName = "mt-1 text-sm text-slate-500",
}: AnimatedStatProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { amount: 0.45, once: false });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) {
            setDisplay(0);
            return;
        }

        let rafId = 0;
        const startTime = performance.now();

        const tick = (now: number) => {
            const progress = Math.min((now - startTime) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) {
                rafId = requestAnimationFrame(tick);
            }
        };

        rafId = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId);
    }, [inView, value, duration]);

    return (
        <div ref={ref} className={className}>
            <span className={valueClassName}>
                {display}
                {suffix}
            </span>
            <span className={labelClassName}>{label}</span>
        </div>
    );
}
