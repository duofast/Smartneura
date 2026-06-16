"use client";

import { PageHero } from "@/components/ui/page-hero";

interface Props {
    title: string;
    subtitle?: string;
    image: string;
    dark?: boolean;
}

export default function SolutionHero({ title, subtitle, image, dark = true }: Props) {
    return (
        <PageHero
            eyebrow={subtitle}
            title={title}
            titleHtml
            image={image}
            dark={dark}
        />
    );
}
