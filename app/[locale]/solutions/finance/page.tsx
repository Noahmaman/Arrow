import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Solutions for Finance & Banking | Arrow AI",
    description:
      "Transform your financial institution with Arrow AI — fraud detection (99.7% accuracy), risk management, automated KYC/AML, and algorithmic trading systems.",
    keywords: [
      "finance AI",
      "fraud detection AI",
      "risk management AI",
      "KYC automation",
      "AML AI",
      "banking AI",
      "algorithmic trading",
      "fintech AI",
    ],
    openGraph: {
      title: "AI Solutions for Finance & Banking | Arrow AI",
      description:
        "Fraud detection, risk management, intelligent compliance and automated trading with cutting-edge AI.",
    },
  };
}

export default function FinancePage() {
  const t = useTranslations("finance");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const features = [
    {
      title: t("feature1Title"),
      desc: t("feature1Desc"),
      icon: "🛡️",
      stat: "85%",
      statLabel:
        locale === "fr"
          ? "réduction des fraudes"
          : locale === "es"
          ? "reducción de fraude"
          : "fraud reduction",
    },
    {
      title: t("feature2Title"),
      desc: t("feature2Desc"),
      icon: "📊",
      stat: "99.2%",
      statLabel:
        locale === "fr"
          ? "précision du risque"
          : locale === "es"
          ? "precisión del riesgo"
          : "risk accuracy",
    },
    {
      title: t("feature3Title"),
      desc: t("feature3Desc"),
      icon: "✅",
      stat: "60%",
      statLabel:
        locale === "fr"
          ? "réduction des coûts"
          : locale === "es"
          ? "reducción de costos"
          : "cost reduction",
    },
    {
      title: t("feature4Title"),
      desc: t("feature4Desc"),
      icon: "📈",
      stat: "3x",
      statLabel:
        locale === "fr"
          ? "rendements améliorés"
          : locale === "es"
          ? "rendimientos mejorados"
          : "improved returns",
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)" }}
      >
        <GlowOrb color="#FF6820" size={500} className="top-0 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/solutions"
             
              className="inline-flex items-center gap-2 text-[#FF6820] text-sm mb-6 hover:gap-3 transition-all"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              {locale === "fr"
                ? "Toutes les solutions"
                : locale === "es"
                ? "Todas las soluciones"
                : "All Solutions"}
            </Link>
            <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
              💳{" "}
              {locale === "fr"
                ? "Finance & Banque"
                : locale === "es"
                ? "Finanzas y Banca"
                : "Finance & Banking"}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-white/60 text-xl mb-8">{t("heroSubtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
               
                className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-8 py-4 rounded-full transition-all"
              >
                {tCommon("bookDemo")}
              </Link>
              <Link
                href="/case-studies"
               
                className="glass border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-all"
              >
                {locale === "fr"
                  ? "Voir les cas clients"
                  : locale === "es"
                  ? "Ver casos de éxito"
                  : "View Case Studies"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === "fr"
                ? "Capacités clés"
                : locale === "es"
                ? "Capacidades clave"
                : "Core Capabilities"}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {locale === "fr"
                ? "Des solutions IA spécialisées pour chaque aspect de la finance moderne."
                : locale === "es"
                ? "Soluciones de IA especializadas para cada aspecto de las finanzas modernas."
                : "Specialized AI solutions for every aspect of modern finance."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ title, desc, icon, stat, statLabel }) => (
              <div key={title} className="glass-card rounded-3xl p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#FF6820]/20 rounded-xl flex items-center justify-center text-2xl border border-[#FF6820]/30 shrink-0">
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">{title}</h3>
                  </div>
                </div>
                <p className="text-white/60 mb-6 leading-relaxed">{desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold gradient-text">{stat}</span>
                  <span className="text-white/40 text-sm">{statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Banner */}
      <section
        className="py-16"
        style={{
          background: "rgba(255,104,32,0.05)",
          borderTop: "1px solid rgba(255,104,32,0.15)",
          borderBottom: "1px solid rgba(255,104,32,0.15)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">
              {locale === "fr"
                ? "Résultats prouvés"
                : locale === "es"
                ? "Resultados comprobados"
                : "Proven Results"}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                v: "99.7%",
                l:
                  locale === "fr"
                    ? "Précision détection fraude"
                    : locale === "es"
                    ? "Precisión detección fraude"
                    : "Fraud Detection Accuracy",
              },
              {
                v: "60%",
                l:
                  locale === "fr"
                    ? "Réduction coûts conformité"
                    : locale === "es"
                    ? "Reducción costos cumplimiento"
                    : "Compliance Cost Reduction",
              },
              {
                v: "< 50ms",
                l:
                  locale === "fr"
                    ? "Latence analyse risque"
                    : locale === "es"
                    ? "Latencia análisis riesgo"
                    : "Risk Analysis Latency",
              },
              {
                v: "200+",
                l:
                  locale === "fr"
                    ? "Institutions financières"
                    : locale === "es"
                    ? "Instituciones financieras"
                    : "Financial Institutions",
              },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="text-4xl font-bold gradient-text mb-2">{v}</div>
                <div className="text-white/50 text-sm">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-10 text-center relative">
            <div className="text-5xl text-[#FF6820]/40 font-serif leading-none mb-6">"</div>
            <blockquote className="text-white/80 text-xl leading-relaxed mb-8 italic">
              {locale === "fr"
                ? "Arrow AI a réduit nos pertes dues à la fraude de 85% en seulement trois mois. Le système de détection en temps réel est remarquablement précis et s'est intégré parfaitement à notre infrastructure existante."
                : locale === "es"
                ? "Arrow AI redujo nuestras pérdidas por fraude en un 85% en solo tres meses. El sistema de detección en tiempo real es notablemente preciso y se integró perfectamente con nuestra infraestructura existente."
                : "Arrow AI reduced our fraud losses by 85% in just three months. The real-time detection system is remarkably accurate and integrated seamlessly with our existing infrastructure."}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-[#FF6820]/20 rounded-full border border-[#FF6820]/30 flex items-center justify-center text-sm font-bold text-[#FF6820]">
                JM
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">
                  {locale === "fr" ? "Directeur des Risques" : locale === "es" ? "Director de Riesgos" : "Chief Risk Officer"}
                </div>
                <div className="text-white/40 text-xs">
                  {locale === "fr"
                    ? "Groupe Bancaire International"
                    : locale === "es"
                    ? "Grupo Bancario Internacional"
                    : "International Banking Group"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {locale === "fr"
              ? "Prêt à sécuriser et optimiser vos opérations financières ?"
              : locale === "es"
              ? "¿Listo para asegurar y optimizar tus operaciones financieras?"
              : "Ready to secure and optimize your financial operations?"}
          </h2>
          <p className="text-white/60 mb-8">
            {locale === "fr"
              ? "Nos experts en IA financière sont prêts à construire votre solution sur mesure."
              : locale === "es"
              ? "Nuestros expertos en IA financiera están listos para construir tu solución personalizada."
              : "Our financial AI experts are ready to build your custom solution."}
          </p>
          <Link
            href="/contact"
           
            className="inline-block bg-gradient-orange text-white font-bold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 transition-all"
          >
            {tCommon("bookDemo")}
          </Link>
        </div>
      </section>
    </div>
  );
}
