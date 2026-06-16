"use client";

import { PageHero } from "@/components/ui/page-hero";

export default function DTHero() {
    return (
        <PageHero
            eyebrow="Smart Transforming for Tomorrow"
            title="Digital<br/>Transformation"
            titleHtml
            description="From existing state to future state—together we succeed. SmartNeura guides enterprises through digital transformation with precision, security, and scale."
            image="/DigitalTransformation/DTHero.jpg"
            cta={{ label: "Start Your Journey", href: "/contacts" }}
        />
    );
}
