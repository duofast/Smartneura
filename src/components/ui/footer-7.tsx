import React from "react";
import Link from "next/link";

interface Footer7Props {
  logoNode?: React.ReactNode;
  description?: string;
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
}

function FooterLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export const Footer7 = ({
  logoNode,
  description = "",
  sections = [],
  socialLinks = [],
  copyright = "",
}: Footer7Props) => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-16 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Brand */}
          <div className="flex max-w-sm flex-col gap-4">
            {logoNode}
            {description ? (
              <p className="text-sm leading-relaxed text-white/50">
                {description}
              </p>
            ) : null}
            {socialLinks.length > 0 ? (
              <ul className="flex items-center gap-5 pt-1">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="text-white/40 transition-colors hover:text-white"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <FooterLink
                        href={link.href}
                        className="text-sm text-white/45 transition-colors hover:text-white"
                      >
                        {link.name}
                      </FooterLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {copyright ? (
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-center text-xs text-white/35 sm:text-left">
              {copyright}
            </p>
          </div>
        ) : null}
      </div>
    </footer>
  );
};
