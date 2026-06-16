import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { anton, inter, sectionContainer, sectionSpacing } from "@/lib/typography";

export interface Feature73Item {
    id: string;
    title: string;
    description: string;
    image: string;
}

export interface Feature73Props {
    heading?: string;
    eyebrow?: string;
    description?: string;
    linkUrl?: string;
    linkText?: string;
    features?: Feature73Item[];
}

export function Feature73({
    heading = "Powerful Features",
    eyebrow,
    description = "Discover the powerful features that make our platform stand out from the rest.",
    linkUrl = "/contacts",
    linkText = "Book a demo",
    features = [],
}: Feature73Props) {
    const [primary, ...secondary] = features;

    return (
        <section className={`bg-white ${sectionSpacing} ${inter.className}`}>
            <div className={`${sectionContainer} flex flex-col gap-12 lg:gap-16`}>
                <div className="lg:max-w-md">
                    {eyebrow ? (
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 sm:text-sm">
                            {eyebrow}
                        </p>
                    ) : null}
                    <h2
                        className={`${anton.className} mb-4 text-[clamp(1.75rem,5vw,3rem)] font-normal uppercase leading-[0.92] tracking-tight text-slate-900 lg:mb-6`}
                    >
                        {heading}
                    </h2>
                    <div className="mb-6 h-1 w-14 rounded-full bg-black" />
                    <p className="mb-8 text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
                        {description}
                    </p>
                    <Link
                        href={linkUrl}
                        className="group inline-flex items-center text-sm font-semibold text-slate-900 transition-colors hover:text-black sm:text-base"
                    >
                        {linkText}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                    {primary ? (
                        <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm md:col-span-2 md:grid md:grid-cols-2 md:gap-0">
                            <div className="relative min-h-[14rem] md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                                <Image
                                    src={primary.image}
                                    alt={primary.title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    priority
                                />
                            </div>
                            <div className="flex flex-col justify-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                                <h3
                                    className={`${anton.className} mb-3 text-xl uppercase tracking-tight text-slate-900 sm:mb-4 sm:text-2xl lg:mb-6`}
                                >
                                    {primary.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
                                    {primary.description}
                                </p>
                            </div>
                        </div>
                    ) : null}

                    {secondary.map((feature) => (
                        <div
                            key={feature.id}
                            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                        >
                            <div className="relative aspect-[16/9] w-full">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                />
                            </div>
                            <div className="flex flex-1 flex-col px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                                <h3
                                    className={`${anton.className} mb-3 text-xl uppercase tracking-tight text-slate-900 sm:mb-4 sm:text-2xl lg:mb-6`}
                                >
                                    {feature.title}
                                </h3>
                                <p className="text-sm leading-relaxed text-slate-500 sm:text-base lg:text-lg">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
