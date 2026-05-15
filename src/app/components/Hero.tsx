"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const title = "Transform, Innovate, Empower";
const subtitle = "From Existing State to Future State—Together We Succeed";

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

            // Start fading out text + video 1.5s before end
            if (remaining <= 1.5 && !fadingOutRef.current) {
                fadingOutRef.current = true;
                setFadingOut(true);
                setTextVisible(false);
            }
        };

        const onSeeked = () => {
            if (video.currentTime < 0.5) {
                // Video restarted — fade back in, then show text
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

    const charVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.03,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            },
        }),
        exit: (i: number) => ({
            opacity: 0,
            y: -10,
            transition: {
                delay: i * 0.01,
                duration: 0.2,
                ease: "easeIn" as const,
            },
        }),
    };

    const subtitleVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: title.length * 0.03 + 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            },
        },
        exit: {
            opacity: 0,
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeIn" as const,
            },
        },
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black"
            style={{ clipPath: "ellipse(150% 99% at 50% 0%)" }}
        >

            {/* Video */}
            <video
                ref={videoRef}
                src="/Home/EarthVideo.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ pointerEvents: "none" }}
            />

            {/* Fade to black overlay for seamless loop */}
            <motion.div
                animate={{ opacity: fadingOut ? 1 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 bg-black z-10"
                style={{ pointerEvents: "none" }}
            />

            {/* Permanent dark overlay */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.4) 100%)",
                    pointerEvents: "none",
                }}
            />

            {/* Loading screen */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 z-30 bg-black flex flex-col items-center justify-center gap-6"
                    >
                        <motion.div
                            animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center ring-2 ring-white/20"
                        >
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20" />
                            </svg>
                        </motion.div>
                        <span className="text-white text-xl tracking-tight">
                            <span className="font-light">Smart</span>
                            <span className="font-bold">Neura</span>
                        </span>
                        <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-full h-full bg-gradient-to-r from-transparent via-sky-400 to-transparent"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero text */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">

                {/* Title — character by character */}
                <h1
                    className="text-white font-thin text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight tracking-tight"
                    style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
                >
                    <AnimatePresence mode="wait">
                        {textVisible && (
                            <motion.span key="title" className="inline">
                                {title.split(" ").map((word, wi) => (
                                    <span key={wi} className="inline-block whitespace-nowrap mr-[0.25em]">
                                        {word.split("").map((char, ci) => (
                                            <motion.span
                                                key={ci}
                                                custom={wi * 8 + ci}
                                                variants={charVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="inline-block"
                                            >
                                                {char}
                                            </motion.span>
                                        ))}
                                    </span>
                                ))}
                            </motion.span>
                        )}
                    </AnimatePresence>
                </h1>

                {/* Subtitle — fades in after title completes */}
                <AnimatePresence mode="wait">
                    {textVisible && (
                        <motion.p
                            key="subtitle"
                            variants={subtitleVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="mt-6 text-white font-semibold text-base sm:text-lg lg:text-xl tracking-wide"
                            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

        </section>
    );
}