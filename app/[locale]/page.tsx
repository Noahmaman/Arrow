import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Arrow AI — Enterprise AI Solutions",
  description: "Arrow AI builds and deploys custom AI solutions for enterprises — intelligent agents, automation, and digital transformation.",
};

const sectors = [
  { key: "finance", icon: "💳", href: "/solutions/finance", color: "#FF6820" },
  { key: "healthcare", icon: "🏥", href: "/solutions/healthcare", color: "#10B981" },
  { key: "retail", icon: "🛍️", href: "/solutions/retail", color: "#6366F1" },
  { key: "manufacturing", icon: "⚙️", href: "/solutions/manufacturing", color: "#F59E0B" },
  { key: "legal", icon: "⚖️", href: "/solutions/legal", color: "#8B5CF6" },
  { key: "logistics", icon: "🚚", href: "/solutions", color: "#06B6D4" },
];

const agents = [
  { icon: "🤖", titleKey: "agent1Title", descKey: "agent1Desc" },
  { icon: "📊", titleKey: "agent3Title", descKey: "agent3Desc" },
  { icon: "💼", titleKey: "agent4Title", descKey: "agent4Desc" },
];

export default function HomePage() {
  const t = useTranslations("home");
  const tSolutions = useTranslations("solutions");
  const tAgents = useTranslations("agents");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16" style={{background: "linear-gradient(180deg, #2D0A00 0%, #1a0800 20%, #0F1B2D 60%)"}}>
        <GlowOrb color="#FF6820" size={600} className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-40" />
        <GlowOrb color="#FF8C42" size={300} className="top-1/3 right-0 opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#FF6820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6820] animate-pulse"></span>
            Next-Generation Enterprise AI
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            {locale === "fr" ? "L'IA qui " : locale === "es" ? "La IA que " : "AI That "}
            <span className="gradient-text">
              {locale === "fr" ? "transforme" : locale === "es" ? "transforma" : "Transforms"}
            </span>
            <br />
            {locale === "fr" ? "votre entreprise" : locale === "es" ? "tu empresa" : "Your Business"}
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {t("heroSubtitle")}
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Link
              href="/solutions"
             
              className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-8 py-4 rounded-full transition-all text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              {t("heroCta")}
            </Link>
            <Link
              href="/contact"
             
              className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all text-base border border-white/20"
            >
              {t("heroCtaSecondary")}
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { value: t("stat1Value"), label: t("stat1Label") },
              { value: t("stat2Value"), label: t("stat2Label") },
              { value: t("stat3Value"), label: t("stat3Label") },
              { value: t("stat4Value"), label: t("stat4Label") },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-white/50 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#0F1B2D"/>
          </svg>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white/30 text-sm uppercase tracking-widest mb-8">{t("statsTitle")}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {["BNP Paribas", "Sanofi", "Carrefour", "Airbus", "Orange", "L'Oréal"].map((brand) => (
              <span key={brand} className="text-white/20 font-bold text-lg tracking-wide hover:text-white/40 transition-colors">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-24 relative">
        <GlowOrb color="#FF6820" size={500} className="top-1/2 -left-64 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Nos Solutions" : locale === "es" ? "Nuestras Soluciones" : "Our Solutions"}
            title={t("solutionsTitle")}
            subtitle={t("solutionsSubtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map(({ key, icon, href, color }) => (
              <Link key={key} href={href}>
                <div className="glass-card rounded-2xl p-6 group cursor-pointer h-full"
                  style={{"--hover-color": color} as React.CSSProperties}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                    style={{background: `${color}22`, border: `1px solid ${color}44`}}>
                    {icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{tSolutions(key as "finance" | "healthcare" | "retail" | "manufacturing" | "legal" | "logistics")}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {key === "finance" && "Fraud detection, risk management & compliance automation."}
                    {key === "healthcare" && "Diagnostic AI, patient flow optimization & clinical support."}
                    {key === "retail" && "Personalization engine, demand forecasting & dynamic pricing."}
                    {key === "manufacturing" && "Predictive maintenance, quality control & supply chain AI."}
                    {key === "legal" && "Contract analysis, due diligence & compliance monitoring."}
                    {key === "logistics" && "Route optimization, demand prediction & warehouse automation."}
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-sm font-medium" style={{color}}>
                    {tCommon("learnMore")}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="py-24 relative" style={{background: "linear-gradient(180deg, #0F1B2D 0%, #0a1520 50%, #0F1B2D 100%)"}}>
        <GlowOrb color="#FF6820" size={400} className="top-1/2 right-0 -translate-y-1/2 opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="AI Agents"
            title={tAgents("title")}
            subtitle={tAgents("subtitle")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {agents.map(({ icon, titleKey, descKey }) => (
              <div key={titleKey} className="glass-card rounded-2xl p-6">
                <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg shadow-orange-500/20">
                  {icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{tAgents(titleKey as "agent1Title" | "agent3Title" | "agent4Title")}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{tAgents(descKey as "agent1Desc" | "agent3Desc" | "agent4Desc")}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/ai-agents" className="inline-flex items-center gap-2 glass border border-[#FF6820]/40 text-[#FF6820] hover:bg-[#FF6820]/10 font-semibold px-6 py-3 rounded-full transition-all">
              {locale === "fr" ? "Voir tous les agents" : locale === "es" ? "Ver todos los agentes" : "Explore All Agents"}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Notre Approche" : locale === "es" ? "Nuestro Enfoque" : "Our Approach"}
            title={locale === "fr" ? "De la stratégie au déploiement" : locale === "es" ? "De la estrategia al despliegue" : "From Strategy to Deployment"}
            subtitle={locale === "fr" ? "Un processus éprouvé pour garantir le succès de votre projet IA." : locale === "es" ? "Un proceso probado para garantizar el éxito de tu proyecto de IA." : "A proven process to ensure the success of your AI project."}
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-start">
            {["Discovery", "Design", "Development", "Deployment", "Optimization"].map((step, i) => (
              <div key={step} className="flex flex-col items-center text-center relative">
                {i < 4 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-px bg-gradient-to-r from-[#FF6820]/40 to-transparent" />
                )}
                <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold text-lg mb-3 relative z-10 shadow-lg shadow-orange-500/30">
                  {i + 1}
                </div>
                <h4 className="text-white font-semibold mb-1">{step}</h4>
                <p className="text-white/40 text-xs">
                  {i === 0 && (locale === "fr" ? "Analyse des besoins" : locale === "es" ? "Análisis de necesidades" : "Needs analysis")}
                  {i === 1 && (locale === "fr" ? "Architecture IA" : locale === "es" ? "Arquitectura IA" : "AI architecture")}
                  {i === 2 && (locale === "fr" ? "Construction & tests" : locale === "es" ? "Construcción y pruebas" : "Build & testing")}
                  {i === 3 && (locale === "fr" ? "Mise en production" : locale === "es" ? "Puesta en producción" : "Go live")}
                  {i === 4 && (locale === "fr" ? "Amélioration continue" : locale === "es" ? "Mejora continua" : "Continuous improvement")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <GlowOrb color="#ffffff" size={400} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("ctaTitle")}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{t("ctaSubtitle")}</p>
          <Link
            href="/contact"
           
            className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            {t("ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
