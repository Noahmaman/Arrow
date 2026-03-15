"use client";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/solutions", label: t("solutions") },
    { href: "/ai-agents", label: t("agents") },
    { href: "/services", label: t("services") },
    { href: "/pricing", label: t("pricing") },
    { href: "/about", label: t("about") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
               
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 glass rounded-full px-2 py-1">
              {["en", "fr", "es"].map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`px-2 py-1 rounded-full text-xs font-semibold uppercase transition-all ${
                    locale === l
                      ? "bg-[#FF6820] text-white"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="/contact"
             
              className="bg-[#FF6820] hover:bg-[#FF8C42] text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
            >
              {t("getStarted")}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden glass border-t border-white/10 py-4 px-2 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
               
                className="text-white/80 hover:text-white py-2 px-3 rounded-lg hover:bg-white/5 text-sm font-medium transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-white/10">
              {["en", "fr", "es"].map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                    locale === l ? "bg-[#FF6820] text-white" : "text-white/50"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
