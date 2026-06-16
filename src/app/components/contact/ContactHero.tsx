"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    Check,
    Loader2,
    Mail,
    MapPin,
    Phone,
    User,
} from "lucide-react";
import { anton, ease, inter, sectionContainer } from "@/lib/typography";

const contactDetails = [
    {
        icon: MapPin,
        title: "Visit our office",
        value: "120 Spencer Street, Melbourne, Australia",
        href: undefined,
    },
    {
        icon: Phone,
        title: "Call us anytime",
        value: "0061-0425625489",
        href: "tel:0061-0425625489",
    },
    {
        icon: Mail,
        title: "Email us",
        value: "info@smartneura.com",
        href: "mailto:info@smartneura.com",
    },
];

function ContactRow({
    icon: Icon,
    title,
    value,
    href,
}: {
    icon: typeof MapPin;
    title: string;
    value: string;
    href?: string;
}) {
    const inner = (
        <div className="group flex items-center gap-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-105">
                <Icon size={20} strokeWidth={1.5} />
            </span>
            <div>
                <p className="text-base font-semibold text-slate-900">{title}</p>
                <p className="mt-0.5 text-sm text-slate-500">{value}</p>
            </div>
        </div>
    );

    if (href) {
        return (
            <Link href={href} className="block">
                {inner}
            </Link>
        );
    }

    return inner;
}

function FormField({
    id,
    label,
    required,
    icon: Icon,
    children,
}: {
    id: string;
    label: string;
    required?: boolean;
    icon?: typeof User;
    children: React.ReactNode;
}) {
    return (
        <div>
            <label
                htmlFor={id}
                className="mb-2 block text-sm font-medium text-slate-700"
            >
                {label}
                {required ? <span className="text-red-500"> *</span> : null}
            </label>
            <div className="relative">
                {Icon ? (
                    <Icon
                        size={18}
                        strokeWidth={1.5}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                ) : null}
                {children}
            </div>
        </div>
    );
}

const inputClass =
    "w-full rounded-xl border border-slate-200 bg-white py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/8";

export default function ContactHero() {
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);
    const [error, setError] = useState<string | null>(null);

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
            setFormState({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className={`bg-white pt-28 pb-20 sm:pt-32 sm:pb-28 ${inter.className}`}>
            <div className={sectionContainer}>
                <div className="mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* Left — headline + contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h1
                                className={`${anton.className} text-[clamp(2rem,5vw,2.75rem)] font-normal uppercase leading-[1.05] tracking-tight text-slate-900`}
                            >
                                Let&apos;s Talk About Your Next Project!
                            </h1>
                            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
                                Have questions about our solutions or want to discuss a
                                partnership? Reach out — we&apos;re here to help you build
                                smarter infrastructure.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8">
                            {contactDetails.map((item) => (
                                <ContactRow key={item.title} {...item} />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right — form card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease }}
                    >
                        <div className="rounded-2xl border border-slate-100 bg-white p-7 shadow-[0_12px_48px_-12px_rgba(15,23,42,0.14)] sm:p-9">
                            <AnimatePresence mode="wait">
                                {submitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -12 }}
                                        className="flex flex-col items-center py-14 text-center"
                                    >
                                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white">
                                            <Check size={26} strokeWidth={2} />
                                        </div>
                                        <h3 className="text-lg font-semibold text-slate-900">
                                            Message sent
                                        </h3>
                                        <p className="mt-2 max-w-xs text-sm text-slate-500">
                                            Thank you for reaching out. We&apos;ll get back
                                            to you shortly.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setSubmitted(false)}
                                            className="mt-8 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
                                        >
                                            Send another message
                                        </button>
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
                                        <h2 className="text-lg font-semibold text-slate-900">
                                            Send us a message
                                        </h2>

                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <FormField
                                                id="firstName"
                                                label="First Name"
                                                required
                                                icon={User}
                                            >
                                                <input
                                                    id="firstName"
                                                    type="text"
                                                    required
                                                    placeholder="John"
                                                    value={formState.firstName}
                                                    onChange={(e) =>
                                                        setFormState({
                                                            ...formState,
                                                            firstName: e.target.value,
                                                        })
                                                    }
                                                    className={`${inputClass} pl-11 pr-4`}
                                                />
                                            </FormField>
                                            <FormField
                                                id="lastName"
                                                label="Last Name"
                                                required
                                                icon={User}
                                            >
                                                <input
                                                    id="lastName"
                                                    type="text"
                                                    required
                                                    placeholder="Doe"
                                                    value={formState.lastName}
                                                    onChange={(e) =>
                                                        setFormState({
                                                            ...formState,
                                                            lastName: e.target.value,
                                                        })
                                                    }
                                                    className={`${inputClass} pl-11 pr-4`}
                                                />
                                            </FormField>
                                        </div>

                                        <FormField
                                            id="email"
                                            label="Email"
                                            required
                                            icon={Mail}
                                        >
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                value={formState.email}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        email: e.target.value,
                                                    })
                                                }
                                                className={`${inputClass} pl-11 pr-4`}
                                            />
                                        </FormField>

                                        <FormField
                                            id="phone"
                                            label="Phone Number"
                                            icon={Phone}
                                        >
                                            <input
                                                id="phone"
                                                type="tel"
                                                placeholder="+61 400 000 000"
                                                value={formState.phone}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        phone: e.target.value,
                                                    })
                                                }
                                                className={`${inputClass} pl-11 pr-4`}
                                            />
                                        </FormField>

                                        <FormField
                                            id="message"
                                            label="Message"
                                            required
                                        >
                                            <textarea
                                                id="message"
                                                required
                                                rows={5}
                                                placeholder="Tell us about your project..."
                                                value={formState.message}
                                                onChange={(e) =>
                                                    setFormState({
                                                        ...formState,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className={`${inputClass} resize-none px-4`}
                                            />
                                        </FormField>

                                        <AnimatePresence>
                                            {error ? (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -6 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -6 }}
                                                    className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-600"
                                                >
                                                    {error}
                                                </motion.p>
                                            ) : null}
                                        </AnimatePresence>

                                        <button
                                            type="submit"
                                            disabled={sending}
                                            className="mt-1 w-full rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition-colors hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {sending ? (
                                                <span className="inline-flex items-center justify-center gap-2">
                                                    <Loader2
                                                        size={16}
                                                        className="animate-spin"
                                                    />
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
