"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactHero() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);
        setError(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formState),
            });

            if (!res.ok) throw new Error("Failed");

            setSubmitted(true);
            setFormState({ firstName: "", lastName: "", email: "", message: "" });
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    const inputClass = (field: string) =>
        `w-full bg-white/10 backdrop-blur-sm border rounded-lg px-4 py-3 text-white placeholder-white/40 outline-none transition-all duration-300 text-sm ${focused === field
            ? "border-sky-400 bg-white/15 shadow-lg shadow-sky-500/10"
            : "border-white/20 hover:border-white/40"
        }`;

    return (
        <section className="relative w-full min-h-screen overflow-hidden pb-[80px] -mb-[80px]">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/Contacts/ContactHero.jpg')" }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

            {/* Animated background blobs */}
            <motion.div
                animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-96 h-96 rounded-full bg-sky-500 blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-indigo-500 blur-3xl pointer-events-none"
            />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-20 max-w-[1400px] mx-auto px-6 lg:px-16 py-32">

                {/* LEFT — Title */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="flex-1 flex flex-col gap-6 text-center lg:text-left"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-sky-400 text-sm font-semibold tracking-widest uppercase"
                    >
                        Get In Touch
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-thin text-white leading-tight tracking-tight"
                        style={{ textShadow: "0 2px 40px rgba(0,0,0,0.5)" }}
                    >
                        HOW TO{" "}
                        <span className="font-black block">REACH US</span>
                    </motion.h1>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="w-16 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-full mx-auto lg:mx-0"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-white/60 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                    >
                        We'd love to hear from you. Send us a message and we'll respond as
                        soon as possible.
                    </motion.p>

                    {/* Contact info pills */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row lg:flex-col gap-3 items-center lg:items-start"
                    >
                        {[
                            {
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                ),
                                text: "120 Spencer Street, Melbourne, Australia",
                            },
                            {
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                                ),
                                text: "0061-0425625489",
                            },
                            {
                                icon: (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                ),
                                text: "info@smartneura.com",
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/15 transition-colors cursor-default"
                            >
                                <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {item.icon}
                                </svg>
                                {item.text}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* RIGHT — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                    className="w-full lg:w-[480px] flex-shrink-0"
                >
                    <div
                        className="rounded-2xl p-6 sm:p-8 border border-white/15 shadow-2xl"
                        style={{
                            background: "rgba(10, 22, 40, 0.6)",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        className="w-16 h-16 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center"
                                    >
                                        <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <h3 className="text-white text-xl font-semibold">Message Sent!</h3>
                                    <p className="text-white/60 text-sm">
                                        Thank you for reaching out. We'll get back to you shortly.
                                    </p>
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setSubmitted(false)}
                                        className="mt-2 px-6 py-2 rounded-lg border border-sky-400/40 text-sky-400 text-sm hover:bg-sky-400/10 transition-colors"
                                    >
                                        Send another message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="flex flex-col gap-5"
                                >
                                    <div>
                                        <h2 className="text-white text-xl font-semibold mb-1">
                                            Send us a message
                                        </h2>
                                        <p className="text-white/40 text-sm">
                                            All fields marked with * are required.
                                        </p>
                                    </div>

                                    {/* Name row */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <div className="flex-1">
                                            <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                                First Name <span className="text-sky-400">*</span>
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01 }}
                                                type="text"
                                                required
                                                placeholder="John"
                                                value={formState.firstName}
                                                onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                                                onFocus={() => setFocused("firstName")}
                                                onBlur={() => setFocused(null)}
                                                className={inputClass("firstName")}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                                Last Name <span className="text-sky-400">*</span>
                                            </label>
                                            <motion.input
                                                whileFocus={{ scale: 1.01 }}
                                                type="text"
                                                required
                                                placeholder="Doe"
                                                value={formState.lastName}
                                                onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                                                onFocus={() => setFocused("lastName")}
                                                onBlur={() => setFocused(null)}
                                                className={inputClass("lastName")}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                            Email <span className="text-sky-400">*</span>
                                        </label>
                                        <motion.input
                                            whileFocus={{ scale: 1.01 }}
                                            type="email"
                                            required
                                            placeholder="john@example.com"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            onFocus={() => setFocused("email")}
                                            onBlur={() => setFocused(null)}
                                            className={inputClass("email")}
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-white/70 text-xs font-medium mb-1.5 uppercase tracking-wide">
                                            Comment or Message <span className="text-sky-400">*</span>
                                        </label>
                                        <motion.textarea
                                            whileFocus={{ scale: 1.01 }}
                                            required
                                            rows={5}
                                            placeholder="Tell us how we can help..."
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            onFocus={() => setFocused("message")}
                                            onBlur={() => setFocused(null)}
                                            className={`${inputClass("message")} resize-none`}
                                        />
                                    </div>

                                    {/* Error */}
                                    <AnimatePresence>
                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                className="text-red-400 text-sm text-center"
                                            >
                                                {error}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>

                                    {/* Submit */}
                                    <motion.button
                                        whileHover={{ scale: 1.02, y: -1 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                        type="submit"
                                        disabled={sending}
                                        className="w-full py-3.5 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-shadow duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {sending ? (
                                            <>
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending...
                                            </>
                                        ) : (
                                            "Submit"
                                        )}
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}