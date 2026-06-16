"use client";

import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import { inter, sectionContainer, sectionSpacing } from "@/lib/typography";

export type Feature8Item = {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    highlight?: string;
    layout: "hero" | "standard" | "wide" | "banner";
};

interface Features8Props {
    eyebrow?: string;
    heading?: string;
    features: Feature8Item[];
    className?: string;
}

function IconRing({
    icon: Icon,
    size = "md",
}: {
    icon: LucideIcon;
    size?: "md" | "lg";
}) {
    return (
        <div
            className={cn(
                "relative flex items-center justify-center rounded-full border border-slate-200 before:absolute before:-inset-2 before:rounded-full before:border before:border-slate-100",
                size === "lg" ? "aspect-square size-32" : "aspect-square size-12",
            )}
        >
            <Icon
                className={cn("text-slate-800", size === "lg" ? "size-10" : "size-5")}
                strokeWidth={1.25}
            />
        </div>
    );
}

function MiniChart() {
    return (
        <div className="flex h-28 items-end justify-center gap-1.5 px-4">
            {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                    key={i}
                    className="w-2 rounded-sm bg-slate-200"
                    style={{ height: `${h}%` }}
                />
            ))}
        </div>
    );
}

function FeatureCard({ feature }: { feature: Feature8Item }) {
    const Icon = feature.icon;

    if (feature.layout === "hero") {
        return (
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
                <CardContent className="relative m-auto w-full px-6 pb-8 pt-8 sm:pt-10">
                    <div className="relative mx-auto flex h-28 w-full max-w-[14rem] items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-dashed border-slate-200" />
                        <IconRing icon={Icon} size="lg" />
                        {feature.highlight ? (
                            <span className="absolute -bottom-1 text-4xl font-semibold text-slate-900">
                                {feature.highlight}
                            </span>
                        ) : null}
                    </div>
                    <h3 className="mt-8 text-center text-xl font-semibold text-slate-900 sm:text-2xl">
                        {feature.title}
                    </h3>
                    <p className="mt-3 text-center text-sm leading-relaxed text-slate-500 sm:text-base">
                        {feature.description}
                    </p>
                </CardContent>
            </Card>
        );
    }

    if (feature.layout === "standard") {
        return (
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
                <CardContent className="flex h-full flex-col px-6 pb-8 pt-8 sm:pt-10">
                    <div className="mx-auto">
                        <IconRing icon={Icon} />
                    </div>
                    <div className="relative z-10 mt-6 space-y-2 text-center">
                        <h3 className="text-lg font-semibold text-slate-900">
                            {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-500">
                            {feature.description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    if (feature.layout === "wide") {
        return (
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                <CardContent className="grid h-full gap-6 pt-8 sm:grid-cols-2 sm:pt-10">
                    <div className="relative z-10 flex flex-col justify-between gap-8 px-6 pb-8 sm:px-8">
                        <IconRing icon={Icon} />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                    <div className="relative -mb-6 -mr-6 mt-2 flex items-center border-l border-t border-slate-100 bg-slate-50/80 p-6 sm:ml-0 sm:mt-6">
                        <div className="absolute left-4 top-3 flex gap-1">
                            <span className="block size-2 rounded-full border border-slate-200 bg-slate-100" />
                            <span className="block size-2 rounded-full border border-slate-200 bg-slate-100" />
                            <span className="block size-2 rounded-full border border-slate-200 bg-slate-100" />
                        </div>
                        <MiniChart />
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="relative col-span-full overflow-hidden">
            <CardContent className="flex flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:items-start sm:px-10 sm:py-10">
                <IconRing icon={Icon} />
                <div className="space-y-2 text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
                        {feature.description}
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

export default function Features8({
    eyebrow = "Key Benefits",
    heading = "Benefits",
    features,
    className,
}: Features8Props) {
    return (
        <section
            className={cn(
                "bg-slate-50",
                sectionSpacing,
                inter.className,
                className,
            )}
        >
            <div className={cn(sectionContainer, "max-w-5xl")}>
                <div className="mb-12 flex justify-center sm:mb-14">
                    <SectionHeader
                        eyebrow={eyebrow}
                        title={heading}
                        align="center"
                    />
                </div>

                <div className="relative z-10 grid grid-cols-6 gap-3">
                    {features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}
