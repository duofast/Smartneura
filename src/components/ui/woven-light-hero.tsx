"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import * as THREE from "three";

const eyebrow = "Smart Transforming for Tomorrow";
const description =
    "From existing state to future state--together we succeed. SmartNeura guides enterprises through digital transformation with precision, security, and scale built for the industries that power the world.";

export const WovenLightHero = () => {
    const textControls = useAnimation();
    const buttonControls = useAnimation();
    const [titleNumber, setTitleNumber] = useState(0);
    const titles = useMemo(() => ["Transform", "Innovate", "Empower"], []);

    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setTitleNumber((current) => (current === titles.length - 1 ? 0 : current + 1));
        }, 2000);

        return () => window.clearTimeout(timeoutId);
    }, [titleNumber, titles]);

    useEffect(() => {
        textControls.start((i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08 + 0.45,
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }));

        buttonControls.start({
            opacity: 1,
            y: 0,
            transition: { delay: 1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        });
    }, [buttonControls, textControls]);

    return (
        <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
            <WovenCanvas />
            <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />
            <div className="absolute inset-0 z-[1] bg-black/20" aria-hidden />

            <div className="relative z-10 flex w-full max-w-4xl flex-col items-center px-6 py-28 text-center sm:px-10">
                <motion.p
                    custom={0}
                    initial={{ opacity: 0, y: 24 }}
                    animate={textControls}
                    className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white/70 sm:text-sm"
                >
                    {eyebrow}
                </motion.p>

                <motion.h1
                    custom={1}
                    initial={{ opacity: 0, y: 24 }}
                    animate={textControls}
                    className="flex max-w-3xl flex-col items-center text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
                >
                    <span className="block">SmartNeura helps you</span>
                    <span className="relative mt-2 flex min-h-[1.05em] w-full justify-center overflow-hidden pb-2 text-center text-white">
                        {titles.map((title, index) => (
                            <motion.span
                                key={title}
                                className="absolute font-bold"
                                initial={{ opacity: 0, y: "-100%" }}
                                transition={{ type: "spring", stiffness: 55, damping: 16 }}
                                animate={
                                    titleNumber === index
                                        ? {
                                            y: 0,
                                            opacity: 1,
                                        }
                                        : {
                                            y: titleNumber > index ? "-150%" : "150%",
                                            opacity: 0,
                                        }
                                }
                            >
                                {title}
                            </motion.span>
                        ))}
                    </span>
                </motion.h1>

                <motion.p
                    custom={2}
                    initial={{ opacity: 0, y: 26 }}
                    animate={textControls}
                    className="mt-5 max-w-2xl text-base font-medium leading-relaxed tracking-tight text-white/72 sm:text-lg"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={buttonControls}
                    className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
                >
                    <Link
                        href="#solutions"
                        className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md border border-white/40 bg-black/20 px-7 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto sm:text-base"
                    >
                        Explore Solutions
                        <PhoneCall className="h-4 w-4" />
                    </Link>
                    <Link
                        href="#transformation"
                        className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md bg-white px-7 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:w-auto sm:text-base"
                    >
                        Start Your Transformation
                        <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

const WovenCanvas = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        let animationFrameId = 0;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
        mount.appendChild(renderer.domElement);

        const mouse = new THREE.Vector2(0, 0);
        const clock = new THREE.Clock();
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const particleCount = reducedMotion ? 7000 : 22000;
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        const geometry = new THREE.BufferGeometry();
        const torusKnot = new THREE.TorusKnotGeometry(1.55, 0.48, 220, 36);
        const color = new THREE.Color();

        for (let i = 0; i < particleCount; i += 1) {
            const vertexIndex = i % torusKnot.attributes.position.count;
            const x = torusKnot.attributes.position.getX(vertexIndex);
            const y = torusKnot.attributes.position.getY(vertexIndex);
            const z = torusKnot.attributes.position.getZ(vertexIndex);
            const offset = i * 3;

            positions[offset] = x;
            positions[offset + 1] = y;
            positions[offset + 2] = z;
            originalPositions[offset] = x;
            originalPositions[offset + 1] = y;
            originalPositions[offset + 2] = z;

            color.setHSL(Math.random(), 0.8, 0.7);
            colors[offset] = color.r;
            colors[offset + 1] = color.g;
            colors[offset + 2] = color.b;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        torusKnot.dispose();

        const material = new THREE.PointsMaterial({
            size: 0.021,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.8,
            depthWrite: false,
        });

        const points = new THREE.Points(geometry, material);
        points.rotation.x = -0.15;
        scene.add(points);

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("resize", handleResize);

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            const mouseX = mouse.x * 3;
            const mouseY = mouse.y * 3;

            if (!reducedMotion) {
                for (let i = 0; i < particleCount; i += 1) {
                    const offset = i * 3;
                    const dx = positions[offset] - mouseX;
                    const dy = positions[offset + 1] - mouseY;
                    const dz = positions[offset + 2];
                    const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                    if (distance < 1.45 && distance > 0.001) {
                        const force = (1.45 - distance) * 0.009;
                        velocities[offset] += (dx / distance) * force;
                        velocities[offset + 1] += (dy / distance) * force;
                        velocities[offset + 2] += (dz / distance) * force;
                    }

                    velocities[offset] += (originalPositions[offset] - positions[offset]) * 0.0011;
                    velocities[offset + 1] +=
                        (originalPositions[offset + 1] - positions[offset + 1]) * 0.0011;
                    velocities[offset + 2] +=
                        (originalPositions[offset + 2] - positions[offset + 2]) * 0.0011;

                    velocities[offset] *= 0.95;
                    velocities[offset + 1] *= 0.95;
                    velocities[offset + 2] *= 0.95;

                    positions[offset] += velocities[offset];
                    positions[offset + 1] += velocities[offset + 1];
                    positions[offset + 2] += velocities[offset + 2];
                }

                geometry.attributes.position.needsUpdate = true;
            }

            points.rotation.y = elapsedTime * 0.055;
            points.rotation.z = Math.sin(elapsedTime * 0.16) * 0.08;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.domElement.remove();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden />;
};
