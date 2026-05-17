"use client";

import { useEffect, useRef } from "react";

const COLORS = [
    // #dfbd97 (highest priority)
    "rgba(223, 189, 151, VAL)",
    "rgba(223, 189, 151, VAL)",
    "rgba(223, 189, 151, VAL)",
    "rgba(223, 189, 151, VAL)",
    // #334a80
    "rgba(51, 74, 128, VAL)",
    "rgba(51, 74, 128, VAL)",
    "rgba(51, 74, 128, VAL)",
    // #a6a9ba
    "rgba(166, 169, 186, VAL)",
    "rgba(166, 169, 186, VAL)",
    // #040d1e (lowest priority)
    "rgba(4, 13, 30, VAL)",
];

interface TrailDot {
    x: number;
    y: number;
    opacity: number;
    size: number;
    color: string;
}

export default function CursorTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dotsRef = useRef<TrailDot[]>([]);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const rect = canvas.parentElement?.getBoundingClientRect();
            canvas.width = rect?.width ?? window.innerWidth;
            canvas.height = rect?.height ?? window.innerHeight;
        };
        resize();

        const resizeObserver = new ResizeObserver(resize);
        if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Only spawn if cursor is inside the canvas bounds
            if (x < 0 || y < 0 || x > canvas.width || y > canvas.height) return;

            for (let i = 0; i < 3; i++) {
                const color = COLORS[Math.floor(Math.random() * COLORS.length)];
                dotsRef.current.push({
                    x: x + (Math.random() - 0.5) * 12,
                    y: y + (Math.random() - 0.5) * 12,
                    opacity: 0.6 + Math.random() * 0.4,
                    size: 5 + Math.random() * 10,
                    color,
                });
            }

            if (dotsRef.current.length > 150) {
                dotsRef.current = dotsRef.current.slice(-150);
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dotsRef.current = dotsRef.current
                .map((dot) => ({
                    ...dot,
                    opacity: dot.opacity - 0.015,
                    size: dot.size * 0.97,
                }))
                .filter((dot) => dot.opacity > 0);

            dotsRef.current.forEach((dot) => {
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fillStyle = dot.color.replace("VAL", String(dot.opacity));
                ctx.shadowBlur = 16;
                ctx.shadowColor = dot.color.replace("VAL", "0.4");
                ctx.fill();
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            resizeObserver.disconnect();
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-30"
            style={{ mixBlendMode: "multiply" }}
        />
    );
}