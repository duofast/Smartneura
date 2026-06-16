"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Digital Transformation", href: "/digitaltransformation" },
    {
        label: "Solutions",
        href: "#solutions",
        children: [
            { label: "Smart City", href: "/smart-city" },
            { label: "Smart Safe City", href: "/smart-public-security" },
            { label: "Smart Electricity", href: "/manage-everything-energy" },
            { label: "Smart Street Lighting", href: "/smartstreetlighting" },
            { label: "Smart Electric Metering", href: "/smart-electric-metering" },
            { label: "Smart Water Metering", href: "/smart-water-metering" },
        ],
    },
    { label: "About Us", href: "/about-us" },
    { label: "Contacts", href: "/contacts" },
];

/** Pages with a light background at the top — header needs dark text from the start */
const LIGHT_HEADER_ROUTES = new Set(["/contacts"]);

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchOverlayRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const solidHeader = scrolled || LIGHT_HEADER_ROUTES.has(pathname);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!searchOverlayRef.current) return;
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        searchOverlayRef.current.style.setProperty("--x", `${x}%`);
        searchOverlayRef.current.style.setProperty("--y", `${y}%`);
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSearchOpen(false);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("keydown", onKey);
        };
    }, []);

    return (
        <>
            {/* ── Header ── */}
            <motion.header
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${solidHeader
                    ? "bg-white backdrop-blur-md shadow-sm border-b border-slate-200"
                    : "bg-transparent"
                    }`}
            >
                {/* ── Main bar ── */}
                <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 flex items-center justify-between h-16 lg:h-[70px]">

                    {/* LEFT — Logo */}
                    <motion.div
                        whileHover={{ scale: 1.06 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors duration-300 ${solidHeader ? "border-slate-900 bg-slate-900" : "border-white/40 bg-white/10"}`}>
                                <svg
                                    className="w-4 h-4 text-white"
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
                            <span
                                className={`text-lg tracking-tight transition-colors duration-300 ${solidHeader ? "text-slate-900" : "text-white"
                                    }`}
                            >
                                <span className="font-light">Smart</span>
                                <span className="font-bold">Neura</span>
                            </span>
                        </Link>
                    </motion.div>

                    {/* RIGHT — Nav + Search */}
                    <div className="hidden lg:flex items-center gap-8">
                        <nav className="flex items-center gap-7">
                            {navLinks.map((link, i) => (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ scale: 1.14 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={`group relative flex items-center gap-1.5 text-[15px] font-medium transition-all duration-200 py-1 hover:-translate-y-0.5 ${solidHeader
                                                ? "text-slate-800 hover:text-slate-900"
                                                : "text-white/90 hover:text-white"
                                                }`}
                                        >
                                            {link.label}
                                            {link.children && (
                                                <motion.svg
                                                    className={`w-3 h-3 transition-colors duration-300 ${solidHeader ? "text-slate-600" : "opacity-60 text-white"
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    animate={{
                                                        rotate: activeDropdown === link.label ? 180 : 0,
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2.5}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </motion.svg>
                                            )}
                                            {/* Active + hover underline */}
                                            <span
                                                className={`absolute -bottom-1 left-0 right-0 h-[2px] rounded-full transition-transform duration-200 origin-left ${solidHeader ? "bg-slate-900" : "bg-white"
                                                    } ${pathname === link.href
                                                        ? "scale-x-100"
                                                        : "scale-x-0 group-hover:scale-x-100"
                                                    }`}
                                            />
                                        </Link>
                                    </motion.div>

                                    {/* Dropdown */}
                                    <AnimatePresence>
                                        {link.children && activeDropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.97 }}
                                                transition={{ duration: 0.18, ease: "easeOut" }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-56 rounded-xl overflow-hidden shadow-xl border border-slate-100 p-1"
                                                style={{
                                                    background: "#ffffff",
                                                }}
                                            >
                                                {link.children.map((child, ci) => (
                                                    <motion.div
                                                        key={child.label}
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: ci * 0.04 }}
                                                    >
                                                        <Link
                                                            href={child.href}
                                                            className="group flex items-center gap-2 px-5 py-3.5 text-sm text-slate-700 hover:text-white hover:bg-black transition-all duration-200 border-b border-slate-100 last:border-0 font-medium rounded-lg"
                                                        >
                                                            <span className="w-0 group-hover:w-2 h-[2px] bg-white rounded-full transition-all duration-200" />
                                                            {child.label}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </nav>

                        {/* Search icon */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.65 }}
                        >
                            <button
                                onClick={() => setSearchOpen(true)}
                                className={`p-1.5 rounded-md transition-all duration-200 hover:-translate-y-0.5 ${solidHeader
                                    ? "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                                    : "text-white/80 hover:text-white hover:bg-white/10"
                                    }`}
                                aria-label="Search"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </motion.div>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden p-2 rounded-md transition-colors ${solidHeader
                            ? "text-slate-800 hover:bg-slate-100"
                            : "text-white hover:bg-white/50"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <div className="w-5 flex flex-col gap-1.5">
                            <motion.span
                                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.25 }}
                                className="block h-0.5 bg-current rounded-full"
                            />
                            <motion.span
                                animate={
                                    mobileOpen
                                        ? { opacity: 0, scaleX: 0 }
                                        : { opacity: 1, scaleX: 1 }
                                }
                                transition={{ duration: 0.25 }}
                                className="block h-0.5 bg-current rounded-full"
                            />
                            <motion.span
                                animate={
                                    mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
                                }
                                transition={{ duration: 0.25 }}
                                className="block h-0.5 bg-current rounded-full"
                            />
                        </div>
                    </button>
                </div>

                {/* ── Mobile menu ── */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className={`lg:hidden overflow-hidden border-t ${solidHeader ? "bg-white border-slate-200" : "border-white/10"
                                }`}
                            style={
                                !solidHeader
                                    ? {
                                        background: "rgba(255,255,255,0.05)",
                                        backdropFilter: "blur(40px)",
                                        WebkitBackdropFilter: "blur(40px)",
                                    }
                                    : {}
                            }
                        >
                            <nav className="px-6 py-4 flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <div key={link.label}>
                                        <motion.div
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.06 }}
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => !link.children && setMobileOpen(false)}
                                                className={`flex items-center justify-between px-3 py-3 font-medium text-sm rounded-lg transition-all ${solidHeader
                                                    ? pathname === link.href
                                                        ? "text-slate-900 bg-slate-200"
                                                        : "text-slate-800 hover:text-slate-900 hover:bg-slate-200"
                                                    : pathname === link.href
                                                        ? "text-white bg-white/20"
                                                        : "text-white/90 hover:text-white hover:bg-white/20"
                                                    }`}
                                            >
                                                {link.label}
                                                {link.children && (
                                                    <svg
                                                        className="w-3.5 h-3.5 opacity-50"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                )}
                                            </Link>
                                        </motion.div>

                                        {link.children && (
                                            <div
                                                className={`ml-3 mb-1 border-l pl-3 flex flex-col gap-1 ${solidHeader ? "border-slate-200" : "border-white/10"
                                                    }`}
                                            >
                                                {link.children.map((child, ci) => (
                                                    <motion.div
                                                        key={child.label}
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.3, delay: ci * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                                    >
                                                        <Link
                                                            href={child.href}
                                                            onClick={() => setMobileOpen(false)}
                                                            className={`block px-3 py-2 text-sm rounded-lg transition-all ${solidHeader
                                                                ? pathname === child.href
                                                                    ? "text-slate-900 bg-slate-200"
                                                                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-200"
                                                                : pathname === child.href
                                                                    ? "text-white bg-white/20"
                                                                    : "text-white/55 hover:text-white hover:bg-white/20"
                                                                }`}
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {/* Mobile search */}
                                <div className="mt-4 pt-4 border-t border-white/10 px-1">
                                    <button
                                        onClick={() => {
                                            setMobileOpen(false);
                                            setSearchOpen(true);
                                        }}
                                        className={`w-full flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-all ${solidHeader
                                            ? "bg-slate-100 text-slate-500"
                                            : "bg-white/10 text-white/40"
                                            }`}
                                    >
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                        Search SmartNeura...
                                    </button>
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            {/* ── Fullscreen Search Overlay (outside header so it's unaffected by scroll transforms) ── */}
            <AnimatePresence>
                {searchOpen && (
                    <motion.div
                        ref={searchOverlayRef}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onMouseMove={handleMouseMove}
                        onClick={() => setSearchOpen(false)}
                        className="fixed inset-0 z-[200] flex flex-col justify-center"
                        style={{
                            background: "rgba(0,0,0,0.94)",
                            backdropFilter: "blur(12px)",
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 24 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="px-10 lg:px-24 w-full"
                        >
                            {/* Input row */}
                            <div className="relative border-b border-white/40 flex items-center gap-4 pb-3">
                                <svg
                                    className="w-5 h-5 text-white/70 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <input
                                    autoFocus
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-1 bg-transparent text-white text-2xl lg:text-3xl font-light placeholder-white/25 outline-none tracking-wide"
                                />
                                <button
                                    onClick={() => setSearchOpen(false)}
                                    className="text-white/40 hover:text-white transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Hint */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.25 }}
                                className="mt-4 text-sm text-white/30 tracking-widest uppercase"
                            >
                                Press ESC or click outside to close
                            </motion.p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
