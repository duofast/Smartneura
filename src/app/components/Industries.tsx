"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Anton, Inter } from "next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/** Min wheel delta (accumulated) before advancing one step */
const WHEEL_ACCUM_THRESHOLD = 45;
const SCROLL_ANIM_DURATION = 0.55;

const anton = Anton({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const SLIDE_EASE = [0.4, 0, 0.2, 1] as const;
const SLIDE_DURATION = 0.75;

const industries = [
    {
        title: "Government",
        image: "/Home/Industries/Government.png",
        bg: "#f0f9ff",
        description:
            "Smart governance platforms that modernize public services and deliver citizen-first digital experiences.",
    },
    {
        title: "Aerospace & Defense",
        image: "/Home/Industries/Aerospace.webp",
        bg: "#f8fafc",
        description:
            "Mission-critical systems built for resilience—secure networks and infrastructure for high-stakes environments.",
    },
    {
        title: "Banking",
        image: "/Home/Industries/Banking.png",
        bg: "#eff6ff",
        description:
            "Digital transformation for financial institutions with compliance-ready architecture and omnichannel journeys.",
    },
    {
        title: "Telecom & Cloud",
        image: "/Home/Industries/Telecom.jpg",
        bg: "#eef2ff",
        description:
            "Network virtualization, cloud-native infrastructure, and intelligent automation for global carriers.",
    },
    {
        title: "Manufacturing",
        image: "/Home/Industries/Manufacturing.jpg",
        bg: "#f1f5f9",
        description:
            "IoT-driven smart factories, predictive maintenance, and end-to-end production visibility.",
    },
    {
        title: "Energy & Utilities",
        image: "/Home/Industries/Energy.png",
        bg: "#ecfdf5",
        description:
            "Smart grid management, renewable integration, and real-time metering for optimized delivery.",
    },
    {
        title: "Retail",
        image: "/Home/Industries/Retail.jpg",
        bg: "#fdf2f8",
        description:
            "AI-powered omnichannel retail—inventory intelligence and personalized customer experiences.",
    },
    {
        title: "Education",
        image: "/Home/Industries/Education.jpg",
        bg: "#f5f3ff",
        description:
            "Digital campuses and learning platforms connecting students, faculty, and administration securely.",
    },
    {
        title: "Healthcare",
        image: "/Home/Industries/Healthcare.jpg",
        bg: "#f0fdfa",
        description:
            "Connected health ecosystems with clinical data security and interoperable patient-first systems.",
    },
] as const;

const COUNT = industries.length;

/** One extra scroll step to dwell on first / last industry before leaving the section */
const ENTRY_BUFFER_STEPS = 1;
const EXIT_BUFFER_STEPS = 1;
const SCROLL_VH_PER_STEP = 85;
const TOTAL_SCROLL_STEPS =
    ENTRY_BUFFER_STEPS + (COUNT - 1) + EXIT_BUFFER_STEPS;

function stepToIndex(step: number): number {
    if (step < ENTRY_BUFFER_STEPS) return 0;
    if (step >= TOTAL_SCROLL_STEPS - EXIT_BUFFER_STEPS) return COUNT - 1;
    return step - ENTRY_BUFFER_STEPS + 1;
}

function circularOffset(index: number, active: number): number {
    let diff = index - active;
    if (diff > COUNT / 2) diff -= COUNT;
    if (diff < -COUNT / 2) diff += COUNT;
    return diff;
}

/** All cards anchor from horizontal center — slide via x for smooth motion */
function layoutForOffset(offset: number) {
    const base = { left: "50%", right: "auto" as const };

    if (offset === 0) {
        return {
            ...base,
            x: "-50%",
            width: "min(54vw, 520px)",
            height: "100%",
            zIndex: 30,
            opacity: 1,
            scale: 1,
        };
    }
    if (offset === -1) {
        return {
            ...base,
            x: "-122%",
            width: "min(34vw, 340px)",
            height: "84%",
            zIndex: 20,
            opacity: 0.72,
            scale: 0.86,
        };
    }
    if (offset === 1) {
        return {
            ...base,
            x: "22%",
            width: "min(34vw, 340px)",
            height: "84%",
            zIndex: 20,
            opacity: 0.72,
            scale: 0.86,
        };
    }
    return null;
}

function enterInitial(offset: number, direction: number) {
    if (direction > 0 && offset === 1) {
        return { x: "55%", opacity: 0, scale: 0.78 };
    }
    if (direction < 0 && offset === -1) {
        return { x: "-155%", opacity: 0, scale: 0.78 };
    }
    return false;
}

function exitTarget(offset: number, direction: number) {
    if (direction > 0 && offset === -1) {
        return { x: "-155%", opacity: 0, scale: 0.75 };
    }
    if (direction < 0 && offset === 1) {
        return { x: "55%", opacity: 0, scale: 0.75 };
    }
    return { opacity: 0, scale: 0.7 };
}

export default function Industries() {
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const pinRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [direction, setDirection] = useState(0);
    const currentStepRef = useRef(0);
    const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
    const isAnimatingRef = useRef(false);
    const wheelAccumRef = useRef(0);
    const touchStartYRef = useRef(0);

    const active = industries[activeIndex];

    useEffect(() => {
        industries.forEach(({ image }) => {
            const img = new window.Image();
            img.src = image;
        });
    }, []);

    useGSAP(
        () => {
            if (!trackRef.current || !pinRef.current) return;

            const scrollLength =
                window.innerHeight *
                TOTAL_SCROLL_STEPS *
                (SCROLL_VH_PER_STEP / 100);

            const getScrollYForStep = (step: number) => {
                const st = scrollTriggerRef.current;
                if (!st) return 0;
                const t =
                    TOTAL_SCROLL_STEPS > 1
                        ? step / (TOTAL_SCROLL_STEPS - 1)
                        : 0;
                return st.start + t * (st.end - st.start);
            };

            const getStepFromScroll = () => {
                const st = scrollTriggerRef.current;
                if (!st) return 0;
                const range = st.end - st.start;
                if (range <= 0) return 0;
                const progress = (window.scrollY - st.start) / range;
                const clamped = Math.max(0, Math.min(1, progress));
                return Math.round(clamped * (TOTAL_SCROLL_STEPS - 1));
            };

            const resetScrollState = () => {
                gsap.killTweensOf(window);
                isAnimatingRef.current = false;
                wheelAccumRef.current = 0;
            };

            const applyStep = (step: number, dir: 1 | -1) => {
                const idx = stepToIndex(step);
                currentStepRef.current = step;
                setCurrentStep(step);
                setDirection(dir);
                setActiveIndex(idx);
            };

            const goToStep = (nextStep: number, dir: 1 | -1) => {
                if (isAnimatingRef.current) return;
                if (nextStep < 0 || nextStep >= TOTAL_SCROLL_STEPS) return;

                isAnimatingRef.current = true;
                wheelAccumRef.current = 0;
                currentStepRef.current = nextStep;
                applyStep(nextStep, dir);

                gsap.to(window, {
                    scrollTo: { y: getScrollYForStep(nextStep), autoKill: false },
                    duration: SCROLL_ANIM_DURATION,
                    ease: "power2.inOut",
                    onComplete: () => {
                        isAnimatingRef.current = false;
                    },
                });
            };

            const tryAdvance = (delta: number) => {
                const st = scrollTriggerRef.current;
                if (!st?.isActive || isAnimatingRef.current) return false;

                const step = currentStepRef.current;

                if (delta > 0 && step >= TOTAL_SCROLL_STEPS - 1) {
                    wheelAccumRef.current = 0;
                    return false;
                }
                if (delta < 0 && step <= 0) {
                    wheelAccumRef.current = 0;
                    return false;
                }

                wheelAccumRef.current += delta;

                if (Math.abs(wheelAccumRef.current) < WHEEL_ACCUM_THRESHOLD) {
                    return false;
                }

                const dir = wheelAccumRef.current > 0 ? 1 : -1;
                wheelAccumRef.current = 0;
                goToStep(step + dir, dir);
                return true;
            };

            const trigger = ScrollTrigger.create({
                trigger: trackRef.current,
                start: "top top",
                end: () => `+=${scrollLength}`,
                pin: pinRef.current,
                pinSpacing: true,
                anticipatePin: 1,
                onEnter: () => {
                    resetScrollState();
                    applyStep(getStepFromScroll(), 1);
                },
                onEnterBack: () => {
                    resetScrollState();
                    applyStep(getStepFromScroll(), -1);
                },
                onLeave: resetScrollState,
                onLeaveBack: resetScrollState,
                onUpdate: (self) => {
                    if (isAnimatingRef.current) return;
                    const step = Math.round(
                        self.progress * (TOTAL_SCROLL_STEPS - 1),
                    );
                    if (step !== currentStepRef.current) {
                        applyStep(
                            step,
                            step > currentStepRef.current ? 1 : -1,
                        );
                    }
                },
            });

            scrollTriggerRef.current = trigger;

            const onWheel = (e: WheelEvent) => {
                if (!scrollTriggerRef.current?.isActive) return;

                if (isAnimatingRef.current) {
                    e.preventDefault();
                    return;
                }

                const consumed = tryAdvance(e.deltaY);
                if (consumed) e.preventDefault();
            };

            const onTouchStart = (e: TouchEvent) => {
                if (!scrollTriggerRef.current?.isActive) return;
                touchStartYRef.current = e.touches[0].clientY;
            };

            const onTouchEnd = (e: TouchEvent) => {
                if (!scrollTriggerRef.current?.isActive || isAnimatingRef.current) {
                    return;
                }
                const dy = touchStartYRef.current - e.changedTouches[0].clientY;
                if (Math.abs(dy) < 40) return;

                const dir = dy > 0 ? 1 : -1;
                const step = currentStepRef.current;

                if (dir > 0 && step >= TOTAL_SCROLL_STEPS - 1) return;
                if (dir < 0 && step <= 0) return;

                e.preventDefault();
                goToStep(step + dir, dir);
            };

            window.addEventListener("wheel", onWheel, { passive: false });
            window.addEventListener("touchstart", onTouchStart, { passive: true });
            window.addEventListener("touchend", onTouchEnd, { passive: false });

            const onLoad = () => ScrollTrigger.refresh();
            window.addEventListener("load", onLoad);

            return () => {
                window.removeEventListener("wheel", onWheel);
                window.removeEventListener("touchstart", onTouchStart);
                window.removeEventListener("touchend", onTouchEnd);
                window.removeEventListener("load", onLoad);
                trigger.kill();
                scrollTriggerRef.current = null;
            };
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} id="industries" className={inter.className}>
            <div
                ref={trackRef}
                style={{ height: `${TOTAL_SCROLL_STEPS * SCROLL_VH_PER_STEP}vh` }}
            >
                <div
                    ref={pinRef}
                    className="relative h-screen w-full overflow-hidden flex flex-col"
                    style={{
                        backgroundColor: active.bg,
                        transition: "background-color 0.75s cubic-bezier(0.4,0,0.2,1)",
                    }}
                >
                    <header className="relative z-50 shrink-0 pt-20 sm:pt-24 pb-1 px-6 text-center">
                        <p className="text-sky-600 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-2">
                            Who We Serve
                        </p>
                        <h2
                            className={`${anton.className} text-slate-900 uppercase leading-[0.9] tracking-tight`}
                            style={{ fontSize: "clamp(2.75rem, 12vw, 6.5rem)" }}
                        >
                            Industries
                        </h2>
                        <div className="mt-3 mx-auto w-14 h-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full" />
                    </header>

                    <div className="relative z-20 flex-1 min-h-0 w-full px-2 sm:px-4 pb-5">
                        <div className="relative w-full max-w-[1200px] mx-auto h-full min-h-[50vh] sm:min-h-[56vh]">
                            <AnimatePresence initial={false} mode="popLayout">
                                {industries.map((industry, i) => {
                                    const offset = circularOffset(i, activeIndex);
                                    if (Math.abs(offset) > 1) return null;

                                    const layout = layoutForOffset(offset);
                                    if (!layout) return null;

                                    const isCenter = offset === 0;

                                    return (
                                        <motion.article
                                            key={i}
                                            className="absolute bottom-0"
                                            initial={enterInitial(offset, direction)}
                                            animate={layout}
                                            exit={exitTarget(offset, direction)}
                                            transition={{
                                                duration: SLIDE_DURATION,
                                                ease: SLIDE_EASE,
                                            }}
                                        >
                                            <div
                                                className={`relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl ${
                                                    isCenter
                                                        ? "ring-2 ring-sky-400/40"
                                                        : "ring-1 ring-slate-200/80"
                                                }`}
                                            >
                                                <Image
                                                    src={industry.image}
                                                    alt={industry.title}
                                                    fill
                                                    className="object-cover object-center"
                                                    sizes={
                                                        isCenter
                                                            ? "(max-width: 768px) 92vw, 520px"
                                                            : "(max-width: 768px) 42vw, 340px"
                                                    }
                                                    draggable={false}
                                                    priority={isCenter}
                                                />

                                                {isCenter && (
                                                    <div className="absolute inset-0 flex flex-col justify-end">
                                                        <div className="bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent pt-28 sm:pt-36 pb-6 sm:pb-8 px-5 sm:px-8">
                                                            <AnimatePresence mode="wait">
                                                                <motion.div
                                                                    key={activeIndex}
                                                                    initial={{
                                                                        opacity: 0,
                                                                        y: 18,
                                                                    }}
                                                                    animate={{
                                                                        opacity: 1,
                                                                        y: 0,
                                                                    }}
                                                                    exit={{
                                                                        opacity: 0,
                                                                        y: -12,
                                                                    }}
                                                                    transition={{
                                                                        duration: 0.4,
                                                                        ease: SLIDE_EASE,
                                                                    }}
                                                                >
                                                                    <p className="text-sky-300 text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-2">
                                                                        {String(
                                                                            activeIndex + 1
                                                                        ).padStart(2, "0")}{" "}
                                                                        /{" "}
                                                                        {String(COUNT).padStart(
                                                                            2,
                                                                            "0"
                                                                        )}
                                                                    </p>
                                                                    <h3 className="text-white font-semibold text-xl sm:text-2xl lg:text-[1.75rem] mb-2 sm:mb-3 leading-tight">
                                                                        {industry.title}
                                                                    </h3>
                                                                    <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-md sm:max-w-lg">
                                                                        {
                                                                            industry.description
                                                                        }
                                                                    </p>
                                                                </motion.div>
                                                            </AnimatePresence>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.article>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        <div className="relative z-40 flex flex-col items-center gap-3 pt-3">
                            <div className="flex items-center justify-center gap-2">
                                {industries.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${
                                            i === activeIndex
                                                ? "w-8 bg-gradient-to-r from-sky-500 to-indigo-600"
                                                : "w-1.5 bg-slate-400/50"
                                        }`}
                                    />
                                ))}
                            </div>
                            <p className="text-slate-400 text-xs">
                                {currentStep >= TOTAL_SCROLL_STEPS - EXIT_BUFFER_STEPS
                                    ? "Scroll once more to continue to Solutions"
                                    : currentStep < ENTRY_BUFFER_STEPS
                                      ? "Scroll down for more industries"
                                      : "Scroll to explore each industry"}
                            </p>
                            <Link
                                href="/contacts"
                                className="inline-flex items-center gap-2 text-slate-700 text-sm font-semibold hover:text-sky-600 transition-colors"
                            >
                                Partner with SmartNeura
                                <ArrowRight size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
