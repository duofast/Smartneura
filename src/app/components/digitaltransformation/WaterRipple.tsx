"use client";

import { useEffect, useRef } from "react";

interface InkDrop {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    color: string;
    hue: number;
}

interface InkParticle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    hue: number;
    saturation: number;
}

export default function WaterRipple() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const dropsRef = useRef<InkDrop[]>([]);
    const particlesRef = useRef<InkParticle[]>([]);
    const animFrameRef = useRef<number>(0);
    const lastDropTime = useRef<number>(0);
    const hueRef = useRef<number>(200);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const spawnInk = (x: number, y: number) => {
            const hue = hueRef.current;
            hueRef.current = (hue + 15) % 360;

            // Main ink drop
            dropsRef.current.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5,
                life: 0,
                maxLife: 80 + Math.random() * 60,
                size: 8 + Math.random() * 16,
                color: `hsla(${hue}, 80%, 55%, VAL)`,
                hue,
            });

            // Ink tendrils / particles spreading out
            const count = 12 + Math.floor(Math.random() * 10);
            for (let i = 0; i < count; i++) {
                const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
                const speed = 0.5 + Math.random() * 3;
                particlesRef.current.push({
                    x,
                    y,
                    vx: Math.cos(angle) * speed,
                    vy: Math.sin(angle) * speed,
                    life: 0,
                    maxLife: 60 + Math.random() * 80,
                    size: 2 + Math.random() * 6,
                    hue: hue + (Math.random() - 0.5) * 40,
                    saturation: 60 + Math.random() * 30,
                });
            }

            // Cap
            if (dropsRef.current.length > 20) dropsRef.current = dropsRef.current.slice(-20);
            if (particlesRef.current.length > 300) particlesRef.current = particlesRef.current.slice(-300);
        };

        const onMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastDropTime.current < 60) return;
            lastDropTime.current = now;
            spawnInk(e.clientX, e.clientY);
        };

        const animate = () => {
            // Fade canvas slowly — water diffusion effect
            ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw ink drops — main blob
            dropsRef.current = dropsRef.current
                .map((d) => ({
                    ...d,
                    life: d.life + 1,
                    x: d.x + d.vx,
                    y: d.y + d.vy,
                    vx: d.vx * 0.97,
                    vy: d.vy * 0.97,
                    size: d.size * 1.015,
                }))
                .filter((d) => d.life < d.maxLife);

            dropsRef.current.forEach((d) => {
                const progress = d.life / d.maxLife;
                const opacity = progress < 0.2
                    ? progress / 0.2 * 0.4
                    : (1 - progress) * 0.4;

                const grad = ctx.createRadialGradient(d.x, d.y, 0, d.x, d.y, d.size);
                grad.addColorStop(0, d.color.replace("VAL", String(opacity)));
                grad.addColorStop(0.4, d.color.replace("VAL", String(opacity * 0.7)));
                grad.addColorStop(1, d.color.replace("VAL", "0"));

                ctx.beginPath();
                ctx.arc(d.x, d.y, d.size, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            // Draw ink tendrils
            particlesRef.current = particlesRef.current
                .map((p) => ({
                    ...p,
                    life: p.life + 1,
                    x: p.x + p.vx + Math.sin(p.life * 0.1 + p.hue) * 0.3,
                    y: p.y + p.vy + Math.cos(p.life * 0.1 + p.hue) * 0.3,
                    vx: p.vx * 0.96,
                    vy: p.vy * 0.96,
                    size: p.size * 1.008,
                }))
                .filter((p) => p.life < p.maxLife);

            particlesRef.current.forEach((p) => {
                const progress = p.life / p.maxLife;
                const opacity = progress < 0.15
                    ? progress / 0.15 * 0.6
                    : (1 - progress) * 0.6;

                // Tendril blob
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
                grad.addColorStop(0, `hsla(${p.hue}, ${p.saturation}%, 50%, ${opacity})`);
                grad.addColorStop(0.6, `hsla(${p.hue}, ${p.saturation}%, 55%, ${opacity * 0.5})`);
                grad.addColorStop(1, `hsla(${p.hue}, ${p.saturation}%, 60%, 0)`);

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = grad;
                ctx.fill();
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[998]"
            style={{ mixBlendMode: "multiply" }}
        />
    );
}