"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BG_VIDEO = "/Home/EarthVideo.mp4";

const contentEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

const contentVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: contentEase,
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: -14,
        transition: { duration: 0.35, ease: "easeIn" as const },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: contentEase },
    },
};

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [loading, setLoading] = useState(true);
    const [fadingOut, setFadingOut] = useState(false);
    const [textVisible, setTextVisible] = useState(false);
    const fadingOutRef = useRef(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const onCanPlay = () => {
            setLoading(false);
            setTimeout(() => setTextVisible(true), 300);
        };

        const onTimeUpdate = () => {
            if (!video.duration) return;
            const remaining = video.duration - video.currentTime;

            if (remaining <= 1.5 && !fadingOutRef.current) {
                fadingOutRef.current = true;
                setFadingOut(true);
                setTextVisible(false);
            }
        };

        const onSeeked = () => {
            if (video.currentTime < 0.5) {
                setTimeout(() => {
                    setFadingOut(false);
                    fadingOutRef.current = false;
                }, 200);
                setTimeout(() => {
                    setTextVisible(true);
                }, 800);
            }
        };

        video.addEventListener("canplay", onCanPlay);
        video.addEventListener("timeupdate", onTimeUpdate);
        video.addEventListener("seeked", onSeeked);

        return () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("timeupdate", onTimeUpdate);
            video.removeEventListener("seeked", onSeeked);
        };
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">
            <video
                ref={videoRef}
                src={BG_VIDEO}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ pointerEvents: "none" }}
            />

            {/* Seamless loop — fade to black before video restarts */}
            <motion.div
                animate={{ opacity: fadingOut ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 z-[15] bg-black pointer-events-none"
                aria-hidden
            />

            {/* Cinematic gradients for text readability */}
            <div
                className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/20 to-black/75 pointer-events-none"
                aria-hidden
            />
            <div
                className="absolute inset-0 z-[1] bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none"
                aria-hidden
            />
            <div
                className="absolute bottom-0 left-0 right-0 z-[1] h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none"
                aria-hidden
            />

            {/* Loading */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-6 bg-black"
                    >
                        <motion.div
                            animate={{
                                scale: [1, 1.08, 1],
                                opacity: [0.7, 1, 0.7],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 ring-2 ring-white/20"
                        >
                            <svg
                                className="h-8 w-8 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20"
                                />
                            </svg>
                        </motion.div>
                        <span className="text-xl tracking-tight text-white">
                            <span className="font-light">Smart</span>
                            <span className="font-bold">Neura</span>
                        </span>
                        <div className="h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="h-full w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom-left copy + CTAs */}
            <div className="absolute inset-0 z-20 flex items-end">
                <AnimatePresence mode="wait">
                    {textVisible && (
                        <motion.div
                            key="hero-content"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full max-w-2xl px-6 pb-10 sm:px-12 sm:pb-16"
                        >
                            <motion.p
                                variants={itemVariants}
                                className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sky-400/90 sm:text-sm"
                            >
                                Smart Transforming for Tomorrow
                            </motion.p>

                            <motion.h1
                                variants={itemVariants}
                                className="mb-4 text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
                            >
                                Transform, Innovate,{" "}
                                <span className="bg-gradient-to-r from-sky-300 via-white to-indigo-200 bg-clip-text text-transparent">
                                    Empower
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="mb-7 max-w-md text-sm leading-relaxed text-white/60 sm:text-base"
                            >
                                From existing state to future state—together we
                                succeed. SmartNeura guides enterprises through
                                digital transformation with precision, security,
                                and scale built for the industries that power
                                the world.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap items-center gap-3"
                            >
                                <Link
                                    href="#transformation"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90 sm:px-7 sm:text-base"
                                >
                                    Start Your Transformation
                                    <ArrowRight size={16} strokeWidth={2} />
                                </Link>
                                <Link
                                    href="#solutions"
                                    className="liquid-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-7 sm:text-base"
                                >
                                    Explore Solutions
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
