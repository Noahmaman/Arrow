import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description: "Arrow AI delivers specialized AI solutions for Finance, Healthcare, Retail, Manufacturing, Legal, and Logistics sectors.",
};

const sectors = [
  { key: "finance", href: "/solutions/finance", icon: "💳", color: "#FF6820", stats: ["85% fraud reduction", "60% compliance cost cut", "99.7% accuracy"] },
  { key: "healthcare", href: "/solutions/healthcare", icon: "🏥", color: "#10B981", stats: ["40% wait time reduction", "Radiologist-level accuracy", "Faster drug discovery"] },
  { key: "retail", href: "/solutions/retail", icon: "🛍️", color: "#6366F1", stats: ["35% higher conversion", "70% fewer stockouts", "Real-time pricing"] },
  { key: "manufacturing", href: "/solutions/manufacturing", icon: "⚙️", color: "#F59E0B", stats: ["45% less downtime", "99.9% defect detection", "Full supply chain visibility"] },
  { key: "legal", href: "/solutions/legal", icon: "⚖️", color: "#8B5CF6", stats: ["80% faster due diligence", "1000s of contracts/hour", "Continuous compliance"] },
  { key: "logistics", href: "/solutions", icon: "🚚", color: "#06B6D4", stats: ["30% route optimization", "Real-time tracking", "AI demand prediction"] },
];

export default function SolutionsPage() {
  const t = useTranslations("solutions");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Header */}
      <section className="py-24 relative" style={{ background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)" }}>
        <GlowOrb color="#FF6820" size={500} className="top-0 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            {locale === "fr" ? "Nos Solutions" : locale === "es" ? "Nuestras Soluciones" : "Our Solutions"}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map(({ key, href, icon, color, stats }) => (
              <Link key={key} href={href}>
                <div className="glass-card rounded-3xl p-8 group h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                    style={{ background: `${color}22`, border: `1px solid ${color}44` }}
                  >
                    {icon}
                  </div>
                  <h2 className="text-white font-bold text-2xl mb-3">
                    {t(key as "finance" | "healthcare" | "retail" | "manufacturing" | "legal" | "logistics")}
                  </h2>
                  <div className="space-y-2 mb-6">
                    {stats.map((stat) => (
                      <div key={stat} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                        <span className="text-white/60">{stat}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                    style={{ color }}
                  >
                    {t("viewSolution")}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {locale === "fr"
              ? "Votre secteur n'est pas listé ?"
              : locale === "es"
              ? "¿Tu sector no está listado?"
              : "Your sector not listed?"}
          </h2>
          <p className="text-white/80 mb-8">
            {locale === "fr"
              ? "Nous construisons des solutions IA pour tous les secteurs. Parlons de vos besoins."
              : locale === "es"
              ? "Construimos soluciones de IA para todos los sectores. Hablemos de tus necesidades."
              : "We build AI solutions for every industry. Let's talk about your specific needs."}
          </p>
          <Link
            href="/contact"
           
            className="inline-block bg-white text-[#FF6820] font-bold px-8 py-4 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            {tCommon("bookDemo")}
          </Link>
        </div>
      </section>
    </div>
  );
}
