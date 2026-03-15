import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Services | Arrow AI",
  description: "End-to-end AI services from strategy to deployment — AI consulting, custom development, agent deployment, data engineering, integrations, and ongoing support.",
};

const services = [
  {
    icon: "🧭",
    titleKey: "service1Title",
    descKey: "service1Desc",
    color: "#FF6820",
    features: ["AI maturity audit", "ROI modeling", "Use-case prioritization", "Executive workshops"],
  },
  {
    icon: "⚙️",
    titleKey: "service2Title",
    descKey: "service2Desc",
    color: "#6366F1",
    features: ["Model training & fine-tuning", "MLOps pipelines", "API integration", "Model monitoring"],
  },
  {
    icon: "🤖",
    titleKey: "service3Title",
    descKey: "service3Desc",
    color: "#10B981",
    features: ["Multi-agent orchestration", "Tool & API integration", "Memory management", "Human-in-the-loop"],
  },
  {
    icon: "🗄️",
    titleKey: "service4Title",
    descKey: "service4Desc",
    color: "#F59E0B",
    features: ["ETL/ELT pipelines", "Data lakehouse design", "Feature store setup", "Real-time streaming"],
  },
  {
    icon: "🔌",
    titleKey: "service5Title",
    descKey: "service5Desc",
    color: "#8B5CF6",
    features: ["ERP & CRM connectors", "REST & GraphQL APIs", "Legacy system bridges", "Security & compliance"],
  },
  {
    icon: "🎓",
    titleKey: "service6Title",
    descKey: "service6Desc",
    color: "#06B6D4",
    features: ["Executive AI literacy", "Technical upskilling", "Prompt engineering", "AI governance"],
  },
];

const processSteps = [
  { icon: "🔍", detail: "Deep-dive workshops to map your data assets and business priorities." },
  { icon: "📐", detail: "Architects select models, define data flows, and map integration points." },
  { icon: "💻", detail: "Agile sprints deliver working software in weeks, not months." },
  { icon: "🚀", detail: "CI/CD to production with monitoring dashboards and runbooks." },
  { icon: "📈", detail: "Continuous monitoring, retraining, and capability expansion." },
];

const faqs = [
  {
    q: "How long does a typical AI project take?",
    a: "Most projects deliver a first working prototype in 4–6 weeks. Full production deployment typically takes 3–5 months depending on scope and data readiness.",
  },
  {
    q: "Do you work with our existing infrastructure?",
    a: "Yes. We integrate with your existing cloud providers (AWS, Azure, GCP), on-premise systems, ERP platforms, and data warehouses.",
  },
  {
    q: "How do you ensure data privacy and compliance?",
    a: "All engagements follow GDPR and ISO 27001 standards. We offer on-premise deployment options and never train on your proprietary data without explicit consent.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have dedicated practice teams for finance, healthcare, retail, manufacturing, legal, and logistics — each with domain-specific AI models and accelerators.",
  },
  {
    q: "Can you work with small data volumes?",
    a: "Yes. We use transfer learning, synthetic data generation, and few-shot techniques to build effective models even when labeled data is scarce.",
  },
];

export default function ServicesPage() {
  const t = useTranslations("services");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-28 relative"
        style={{ background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 65%)" }}
      >
        <GlowOrb color="#FF6820" size={600} className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 opacity-30" />
        <GlowOrb color="#6366F1" size={300} className="top-1/2 right-0 opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6820] animate-pulse" />
            {locale === "fr" ? "Ce que nous faisons" : locale === "es" ? "Lo que hacemos" : "What We Do"}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed mb-10">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5"
            >
              {locale === "fr" ? "Obtenir un devis" : locale === "es" ? "Obtener presupuesto" : "Get a Quote"}
            </Link>
            <Link
              href="/case-studies"
              className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/20"
            >
              {locale === "fr" ? "Voir les cas clients" : locale === "es" ? "Ver casos de éxito" : "View Case Studies"}
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Nos expertises" : locale === "es" ? "Nuestras áreas" : "Our Expertise"}
            title={
              locale === "fr"
                ? "Six domaines d'excellence"
                : locale === "es"
                ? "Seis áreas de excelencia"
                : "Six Areas of Excellence"
            }
            subtitle={
              locale === "fr"
                ? "Chaque service est conçu pour s'intégrer parfaitement à votre organisation."
                : locale === "es"
                ? "Cada servicio está diseñado para integrarse en tu organización."
                : "Each service is designed to integrate seamlessly into your existing organization."
            }
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon, titleKey, descKey, color, features }) => (
              <div
                key={titleKey}
                className="glass-card rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{ background: `${color}22`, border: `1px solid ${color}44` }}
                >
                  {icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {t(titleKey as "service1Title" | "service2Title" | "service3Title" | "service4Title" | "service5Title" | "service6Title")}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm mb-6">
                  {t(descKey as "service1Desc" | "service2Desc" | "service3Desc" | "service4Desc" | "service5Desc" | "service6Desc")}
                </p>
                <ul className="space-y-2 mb-6">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/50 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div
                  className="pt-4 border-t flex items-center gap-1 text-sm font-semibold"
                  style={{ borderColor: `${color}22`, color }}
                >
                  {locale === "fr" ? "En savoir plus" : locale === "es" ? "Saber más" : "Learn more"}
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1B2D 100%)" }}
      >
        <GlowOrb color="#FF6820" size={500} className="top-1/2 -left-48 -translate-y-1/2 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Méthodologie" : locale === "es" ? "Metodología" : "Methodology"}
            title={t("processTitle")}
            subtitle={
              locale === "fr"
                ? "Un processus agile et transparent qui garantit des résultats rapides et durables."
                : locale === "es"
                ? "Un proceso ágil y transparente que garantiza resultados rápidos y sostenibles."
                : "An agile, transparent process that guarantees fast, lasting results."
            }
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-start">
            {(["step1", "step2", "step3", "step4", "step5"] as const).map((key, i) => (
              <div key={key} className="flex flex-col items-center text-center relative">
                <div className="relative mb-4 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-orange flex items-center justify-center text-2xl shadow-lg shadow-orange-500/30">
                    {processSteps[i].icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full glass border border-[#FF6820]/40 flex items-center justify-center text-[#FF6820] text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-white font-bold mb-2">{t(key)}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{processSteps[i].detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="FAQ"
            title={
              locale === "fr"
                ? "Questions fréquentes"
                : locale === "es"
                ? "Preguntas frecuentes"
                : "Frequently Asked Questions"
            }
            center
          />
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div
                key={q}
                className="glass-card rounded-2xl p-6 border border-white/5 hover:border-[#FF6820]/20 transition-colors"
              >
                <h4 className="text-white font-semibold text-base mb-3 flex items-start gap-3">
                  <span className="text-[#FF6820] font-bold text-lg leading-none mt-0.5">Q</span>
                  {q}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <GlowOrb color="#ffffff" size={500} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {locale === "fr"
              ? "Prêt à démarrer votre projet IA ?"
              : locale === "es"
              ? "¿Listo para iniciar tu proyecto de IA?"
              : "Ready to Start Your AI Project?"}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Parlons de vos défis. Nous construirons la solution parfaite pour votre entreprise."
              : locale === "es"
              ? "Hablemos de tus retos. Construiremos la solución perfecta para tu empresa."
              : "Let's talk about your challenges. We'll build the perfect solution for your business."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              {tCommon("bookDemo")}
            </Link>
            <Link
              href="/pricing"
              className="inline-block bg-white/10 border border-white/30 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white/20 hover:-translate-y-1 transition-all"
            >
              {locale === "fr" ? "Voir les tarifs" : locale === "es" ? "Ver precios" : "View Pricing"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
