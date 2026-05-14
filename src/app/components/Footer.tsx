"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-20"
        >
            {/* Main footer body */}
            <div
                className="relative px-6 lg:px-16 pt-16 pb-8"
                style={{ background: "#0a1628", borderRadius: "80px 80px 0 0" }}
            >
                <div className="max-w-[1400px] mx-auto">

                    {/* Top section — 3 columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">

                        {/* Col 1 — Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="flex flex-col gap-4"
                        >
                            <Link href="/" className="flex items-center gap-2.5 w-fit">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center ring-2 ring-white/20">
                                    <svg
                                        className="w-5 h-5 text-white"
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
                                </div>
                                <span className="text-white text-xl tracking-tight">
                                    <span className="font-light">Smart</span>
                                    <span className="font-bold">Neura</span>
                                </span>
                            </Link>
                        </motion.div>

                        {/* Col 2 — About Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                                About Us
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                SmartNeura empowers enterprises with{" "}
                                <span className="text-white/90 font-medium">
                                    digital transformation, network virtualization, and emerging
                                    technologies
                                </span>
                                . We specialize in{" "}
                                <span className="text-white/90 font-medium">
                                    low-code development, cloud-native networking, AI, IoT, and
                                    smart solutions
                                </span>
                                , enabling businesses to{" "}
                                <span className="text-white/90 font-medium">
                                    innovate faster, scale smarter, and stay secure
                                </span>
                                .
                            </p>
                            <p className="text-white/60 text-sm leading-relaxed mt-4">
                                <span className="text-white font-semibold">
                                    Smart. Secure. Scalable.
                                </span>{" "}
                                Your partner in{" "}
                                <span className="text-white/90 font-medium">
                                    enterprise transformation
                                </span>
                                .
                            </p>
                        </motion.div>

                        {/* Col 3 — Contact Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-5">
                                Contact Us
                            </h3>
                            <div className="flex flex-col gap-4">

                                {/* Address */}
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="flex items-start gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-2 group-hover:border-white/50 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all">
                                        <svg className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white/90 text-sm font-medium group-hover:text-white transition-colors">SmartNeura PVT LTD</p>
                                        <p className="text-white/50 text-sm group-hover:text-white transition-colors">120 Spencer Street</p>
                                        <p className="text-white/50 text-sm group-hover:text-white transition-colors">Melbourne, Australia.</p>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-2 group-hover:border-white/50 flex items-center justify-center flex-shrink-0 transition-all">
                                        <svg className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                    </div>
                                    <a href="tel:0061-0425625489" className="text-white/60 text-sm hover:text-white transition-colors">
                                        0061-0425625489
                                    </a>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-full border border-white/20 group-hover:border-2 group-hover:border-white/50 flex items-center justify-center flex-shrink-0 transition-all">
                                        <svg className="w-3.5 h-3.5 text-white/70 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <a href="mailto:info@smartneura.com" className="text-white/60 text-sm hover:text-white transition-colors">
                                        info@smartneura.com
                                    </a>
                                </motion.div>

                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom bar — copyright + socials */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
                    >
                        <p className="text-white/40 text-sm tracking-wide uppercase">
                            © 2026 SmartNeura PVT LTD. All rights reserved
                        </p>

                        {/* Social icons */}
                        <div className="flex items-center gap-4">
                            {[
                                {
                                    label: "YouTube",
                                    href: "#",
                                    icon: (
                                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-2.73 13.6 13.6 0 00-7.64 0A4.83 4.83 0 014.41 6.69 27.26 27.26 0 003 12a27.26 27.26 0 001.41 5.31 4.83 4.83 0 003.77 2.73 13.6 13.6 0 007.64 0 4.83 4.83 0 003.77-2.73A27.26 27.26 0 0021 12a27.26 27.26 0 00-1.41-5.31zM10 15V9l5 3z" />
                                    ),
                                },
                                {
                                    label: "Facebook",
                                    href: "#",
                                    icon: (
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    ),
                                },
                                {
                                    label: "Instagram",
                                    href: "#",
                                    icon: (
                                        <>
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                        </>
                                    ),
                                },
                                {
                                    label: "LinkedIn",
                                    href: "#",
                                    icon: (
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                                    ),
                                },
                                {
                                    label: "Twitter",
                                    href: "#",
                                    icon: (
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                    ),
                                },
                            ].map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-2 hover:border-white/50 transition-colors"
                                    aria-label={social.label}
                                >
                                    <svg
                                        className="w-3.5 h-3.5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.5}
                                    >
                                        {social.icon}
                                    </svg>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    );
}