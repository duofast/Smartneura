import { Anton, Inter } from "next/font/google";

export const anton = Anton({ weight: "400", subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const sectionPadding = "px-4 sm:px-6 lg:px-16";
export const sectionContainer = `mx-auto max-w-[1400px] ${sectionPadding}`;
export const sectionSpacing = "py-16 sm:py-20 lg:py-32";
