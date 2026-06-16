"use client";

import {
    BarChart3,
    Brain,
    Building2,
    ClipboardList,
    Droplets,
    FlaskConical,
    Gem,
    Handshake,
    Landmark,
    Leaf,
    Lightbulb,
    Lock,
    Radio,
    Search,
    Settings,
    Shield,
    Sparkles,
    Target,
    TowerControl,
    TrendingUp,
    Trophy,
    Wrench,
    type LucideIcon,
} from "lucide-react";

export const solutionIcons = {
    lock: Lock,
    gem: Gem,
    leaf: Leaf,
    sparkles: Sparkles,
    trophy: Trophy,
    settings: Settings,
    radio: Radio,
    tower: TowerControl,
    building: Building2,
    "trending-up": TrendingUp,
    flask: FlaskConical,
    wrench: Wrench,
    droplets: Droplets,
    landmark: Landmark,
    "bar-chart": BarChart3,
    search: Search,
    clipboard: ClipboardList,
    brain: Brain,
    target: Target,
    shield: Shield,
    handshake: Handshake,
    lightbulb: Lightbulb,
} as const satisfies Record<string, LucideIcon>;

export type SolutionIconName = keyof typeof solutionIcons;

export function SolutionIcon({
    name,
    className = "",
    size = 28,
}: {
    name: SolutionIconName;
    className?: string;
    size?: number;
}) {
    const Icon = solutionIcons[name];
    return <Icon size={size} className={className} aria-hidden />;
}
