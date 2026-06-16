"use client";

import React, { createContext, useContext, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

type TextOpacityEnum = "none" | "soft" | "medium";
type ViewTypeEnum = "word" | "letter";

type TextGradientScrollType = {
    text: string;
    type?: ViewTypeEnum;
    className?: string;
    textOpacity?: TextOpacityEnum;
    emphasisWords?: string[];
    containerRef?: React.RefObject<HTMLElement | null>;
    scrollOffset?: NonNullable<Parameters<typeof useScroll>[0]>["offset"];
};

type LetterType = {
    children: React.ReactNode | string;
    progress: MotionValue<number>;
    range: number[];
    emphasized?: boolean;
};

type WordType = {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: number[];
    emphasized?: boolean;
};

type CharType = {
    children: React.ReactNode;
    progress: MotionValue<number>;
    range: number[];
    emphasized?: boolean;
};

type TextGradientScrollContextType = {
    textOpacity?: TextOpacityEnum;
    type?: ViewTypeEnum;
};

const TextGradientScrollContext = createContext<TextGradientScrollContextType>({});

function useGradientScroll() {
    return useContext(TextGradientScrollContext);
}

function TextGradientScroll({
    text,
    className,
    type = "word",
    textOpacity = "soft",
    emphasisWords = [],
    containerRef,
    scrollOffset = ["start 0.85", "end 0.2"],
}: TextGradientScrollType) {
    const fallbackRef = useRef<HTMLDivElement>(null);
    const targetRef = containerRef ?? fallbackRef;

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: scrollOffset,
    });

    const emphasisSet = new Set(
        emphasisWords.map((word) => word.toLowerCase()),
    );

    const words = text.split(" ");

    const content = (
        <p className={cn("relative m-0 flex flex-wrap", className)}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = (i + 1) / words.length;
                const emphasized = emphasisSet.has(
                    word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase(),
                );

                return type === "word" ? (
                    <Word
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                        emphasized={emphasized}
                    >
                        {word}
                    </Word>
                ) : (
                    <Letter
                        key={i}
                        progress={scrollYProgress}
                        range={[start, end]}
                        emphasized={emphasized}
                    >
                        {word}
                    </Letter>
                );
            })}
        </p>
    );

    if (containerRef) {
        return (
            <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
                {content}
            </TextGradientScrollContext.Provider>
        );
    }

    return (
        <TextGradientScrollContext.Provider value={{ textOpacity, type }}>
            <div ref={fallbackRef}>{content}</div>
        </TextGradientScrollContext.Provider>
    );
}

export { TextGradientScroll };

const Word = ({ children, progress, range, emphasized }: WordType) => {
    const opacity = useTransform(progress, range, [0.12, 1]);

    return (
        <span className="relative me-2 mt-2">
            <span
                className={cn("absolute opacity-10", emphasized && "font-bold")}
            >
                {children}
            </span>
            <motion.span
                style={{ opacity }}
                className={cn(emphasized && "font-bold text-slate-950")}
            >
                {children}
            </motion.span>
        </span>
    );
};

const Letter = ({ children, progress, range, emphasized }: LetterType) => {
    if (typeof children === "string") {
        const amount = range[1] - range[0];
        const step = amount / children.length;

        return (
            <span className="relative me-2 mt-2">
                {children.split("").map((char: string, i: number) => {
                    const start = range[0] + i * step;
                    const end = range[0] + (i + 1) * step;
                    return (
                        <Char
                            key={`c_${i}`}
                            progress={progress}
                            range={[start, end]}
                            emphasized={emphasized}
                        >
                            {char}
                        </Char>
                    );
                })}
            </span>
        );
    }

    return null;
};

const Char = ({ children, progress, range, emphasized }: CharType) => {
    const opacity = useTransform(progress, range, [0.12, 1]);
    const { textOpacity } = useGradientScroll();

    return (
        <span className="relative">
            <span
                className={cn(
                    "absolute",
                    textOpacity === "none" && "opacity-0",
                    textOpacity === "soft" && "opacity-10",
                    textOpacity === "medium" && "opacity-30",
                    emphasized && "font-bold",
                )}
            >
                {children}
            </span>
            <motion.span
                style={{ opacity }}
                className={cn(emphasized && "font-bold text-slate-950")}
            >
                {children}
            </motion.span>
        </span>
    );
};
