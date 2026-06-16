"use client";

import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Footer7 } from "@/components/ui/footer-7";

const sections = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "/" },
      { name: "Digital Transformation", href: "/digitaltransformation" },
      { name: "About Us", href: "/about-us" },
      { name: "Contact", href: "/contacts" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Smart City", href: "/smart-city" },
      { name: "Safe City", href: "/smart-public-security" },
      { name: "Smart Energy", href: "/manage-everything-energy" },
      { name: "Water Metering", href: "/smart-water-metering" },
    ],
  },
  {
    title: "Reach Us",
    links: [
      { name: "info@smartneura.com", href: "mailto:info@smartneura.com" },
      { name: "0061-0425625489", href: "tel:0061-0425625489" },
      { name: "Melbourne, Australia", href: "/contacts" },
    ],
  },
];

const socialLinks = [
  {
    icon: <FaLinkedin className="size-[18px]" />,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter className="size-[18px]" />,
    href: "#",
    label: "Twitter",
  },
  {
    icon: <FaInstagram className="size-[18px]" />,
    href: "#",
    label: "Instagram",
  },
];

function SmartNeuraLogo() {
  return (
    <Link href="/" className="inline-flex w-fit items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/5">
        <svg
          className="h-4 w-4 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2 12h20M12 2c-4 4-4 16 0 20M12 2c4 4 4 16 0 20"
          />
        </svg>
      </div>
      <span className="text-lg tracking-tight text-white">
        <span className="font-light">Smart</span>
        <span className="font-bold">Neura</span>
      </span>
    </Link>
  );
}

export default function Footer() {
  return (
    <Footer7
      logoNode={<SmartNeuraLogo />}
      description="Smart. Secure. Scalable. Enterprise digital transformation built for the industries that power the world."
      sections={sections}
      socialLinks={socialLinks}
      copyright="© 2026 SmartNeura. All rights reserved."
    />
  );
}
