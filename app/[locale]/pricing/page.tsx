import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent AI solution pricing for every stage of your digital transformation. From SME starter packages to full enterprise AI deployments.",
};

const plans = [
  {
    key: "starter",
    features: [
      "1 AI use case",
      "Up to 5 users",
      "Basic analytics dashboard",
      "Email support",
      "API access",
      "Monthly reports",
    ],
  },
  {
    key: "growth",
    features: [
      "Up to 5 AI use cases",
      "Up to 50 users",
      "Advanced analytics & alerts",
      "Priority support (24h)",
      "Full API access",
      "Custom integrations",
      "Dedicated success manager",
      "Weekly performance reviews",
    ],
    popular: true,
  },
  {
    key: "enterprise",
    features: [
      "Unlimited AI use cases",
      "Unlimited users",
      "Enterprise analytics suite",
      "24/7 dedicated support",
      "White-label options",
      "On-premise deployment",
      "Custom SLAs",
      "Dedicated AI team",
      "Quarterly strategy reviews",
    ],
  },
];

const comparisonFeatures = [
  { label: "AI Use Cases", starter: "1", growth: "Up to 5", enterprise: "Unlimited" },
  { label: "Users", starter: "Up to 5", growth: "Up to 50", enterprise: "Unlimited" },
  { label: "API Access", starter: "Basic", growth: "Full", enterprise: "Full + White-label" },
  { label: "Analytics", starter: "Basic dashboard", growth: "Advanced + alerts", enterprise: "Enterprise suite" },
  { label: "Support", starter: "Email", growth: "Priority (24h)", enterprise: "24/7 Dedicated" },
  { label: "Integrations", starter: false, growth: true, enterprise: true },
  { label: "Custom SLAs", starter: false, growth: false, enterprise: true },
  { label: "On-premise deployment", starter: false, growth: false, enterprise: true },
  { label: "Dedicated AI team", starter: false, growth: false, enterprise: true },
  { label: "Success manager", starter: false, growth: true, enterprise: true },
];

const faqs = [
  {
    q: {
      en: "How quickly can Arrow AI be deployed?",
      fr: "Combien de temps prend le déploiement ?",
      es: "¿Cuánto tiempo tarda el despliegue?",
    },
    a: {
      en: "Most starter implementations go live within 4-6 weeks. Complex enterprise deployments typically take 3-6 months depending on scope.",
      fr: "La plupart des implémentations de démarrage sont en ligne en 4 à 6 semaines. Les déploiements d'entreprise complexes prennent généralement 3 à 6 mois.",
      es: "La mayoría de las implementaciones iniciales están en vivo en 4-6 semanas. Los despliegues empresariales complejos toman 3-6 meses.",
    },
  },
  {
    q: {
      en: "Do you offer a free trial or proof of concept?",
      fr: "Proposez-vous un essai gratuit ou une preuve de concept ?",
      es: "¿Ofrecen prueba gratuita o prueba de concepto?",
    },
    a: {
      en: "Yes! We offer a free 30-day proof of concept for enterprise clients. Contact our sales team to get started.",
      fr: "Oui ! Nous offrons une preuve de concept gratuite de 30 jours pour les clients entreprises.",
      es: "¡Sí! Ofrecemos una prueba de concepto gratuita de 30 días para clientes empresariales.",
    },
  },
  {
    q: {
      en: "Can we integrate Arrow AI with our existing tools?",
      fr: "Peut-on intégrer Arrow AI à nos outils existants ?",
      es: "¿Podemos integrar Arrow AI con nuestras herramientas existentes?",
    },
    a: {
      en: "Absolutely. Arrow AI integrates with 200+ tools including Salesforce, SAP, HubSpot, Slack, and all major cloud platforms.",
      fr: "Absolument. Arrow AI s'intègre à plus de 200 outils dont Salesforce, SAP, HubSpot et Slack.",
      es: "Absolutamente. Arrow AI se integra con más de 200 herramientas incluyendo Salesforce, SAP, HubSpot y Slack.",
    },
  },
  {
    q: {
      en: "Is our data secure with Arrow AI?",
      fr: "Nos données sont-elles sécurisées ?",
      es: "¿Están seguros nuestros datos?",
    },
    a: {
      en: "Security is our top priority. We are SOC2 Type II certified, GDPR compliant, and offer on-premise deployment options for maximum data control.",
      fr: "La sécurité est notre priorité. Nous sommes certifiés SOC2 Type II, conformes au RGPD et offrons des options de déploiement sur site.",
      es: "La seguridad es nuestra prioridad. Somos certificados SOC2 Tipo II, cumplimos con GDPR y ofrecemos opciones de despliegue on-premise.",
    },
  },
  {
    q: {
      en: "What happens after deployment?",
      fr: "Que se passe-t-il après le déploiement ?",
      es: "¿Qué sucede después del despliegue?",
    },
    a: {
      en: "We provide ongoing monitoring, optimization, and support. Our AI systems continuously learn and improve based on your data and feedback.",
      fr: "Nous fournissons une surveillance, une optimisation et un support continus. Nos systèmes IA apprennent et s'améliorent continuellement.",
      es: "Proporcionamos monitoreo, optimización y soporte continuos. Nuestros sistemas de IA aprenden y mejoran continuamente.",
    },
  },
];

function CheckIcon({ filled }: { filled?: boolean }) {
  return (
    <div
      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
        filled ? "bg-[#FF6820]" : "bg-white/10"
      }`}
    >
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
  );
}

function CrossIcon() {
  return (
    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-white/5">
      <svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  );
}

export default function PricingPage() {
  const t = useTranslations("pricing");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  const headerLabel =
    locale === "fr"
      ? "Tarification transparente"
      : locale === "es"
      ? "Precios transparentes"
      : "Transparent Pricing";

  const comparisonTitle =
    locale === "fr"
      ? "Comparez les formules"
      : locale === "es"
      ? "Compare los planes"
      : "Compare Plans";

  const ctaTitle =
    locale === "fr"
      ? "Prêt à transformer votre entreprise ?"
      : locale === "es"
      ? "¿Listo para transformar tu empresa?"
      : "Ready to transform your business?";

  const ctaSubtitle =
    locale === "fr"
      ? "Discutez avec nos experts et obtenez un devis personnalisé en 24h."
      : locale === "es"
      ? "Habla con nuestros expertos y obtén un presupuesto personalizado en 24h."
      : "Speak with our experts and get a tailored quote within 24 hours.";

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)" }}
      >
        <GlowOrb
          color="#FF6820"
          size={500}
          className="top-0 left-1/2 -translate-x-1/2 opacity-25"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            {headerLabel}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t("title")}</h1>
          <p className="text-white/60 text-xl leading-relaxed">{t("subtitle")}</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map(({ key, features, popular }) => (
              <div
                key={key}
                className={`rounded-3xl p-8 relative ${
                  popular
                    ? "border border-[#FF6820]/50 shadow-2xl shadow-orange-500/20"
                    : "glass-card"
                }`}
                style={
                  popular
                    ? {
                        background: "rgba(255,104,32,0.08)",
                        backdropFilter: "blur(20px)",
                      }
                    : {}
                }
              >
                {popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full whitespace-nowrap">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-white font-bold text-xl mb-2">
                    {t(key as "starter" | "growth" | "enterprise")}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {t(
                      `${key}Desc` as
                        | "starterDesc"
                        | "growthDesc"
                        | "enterpriseDesc"
                    )}
                  </p>
                </div>

                <div className="mb-8">
                  <span
                    className={`text-4xl font-bold ${
                      popular ? "gradient-text" : "text-white"
                    }`}
                  >
                    {t(
                      `${key}Price` as
                        | "starterPrice"
                        | "growthPrice"
                        | "enterprisePrice"
                    )}
                  </span>
                  <span className="text-white/40 text-sm ml-1">
                    {t(
                      `${key}Period` as
                        | "starterPeriod"
                        | "growthPeriod"
                        | "enterprisePeriod"
                    )}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3 text-sm">
                      <CheckIcon filled={popular} />
                      <span className="text-white/70">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                 
                  className={`block text-center font-semibold px-6 py-3 rounded-full transition-all ${
                    popular
                      ? "bg-gradient-orange text-white hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
                      : "glass border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {key === "enterprise" ? t("contactSales") : t("getStarted")}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={comparisonTitle} center />
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-white/5 border-b border-white/10">
              <div className="p-4 text-white/40 text-sm font-medium">Feature</div>
              {["Starter", "Growth", "Enterprise"].map((plan, i) => (
                <div
                  key={plan}
                  className={`p-4 text-center text-sm font-bold ${
                    i === 1 ? "text-[#FF6820]" : "text-white"
                  }`}
                >
                  {plan}
                </div>
              ))}
            </div>
            {/* Table rows */}
            {comparisonFeatures.map((row, idx) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 border-b border-white/5 ${
                  idx % 2 === 0 ? "" : "bg-white/[0.02]"
                }`}
              >
                <div className="p-4 text-white/60 text-sm">{row.label}</div>
                {(["starter", "growth", "enterprise"] as const).map((plan) => {
                  const val = row[plan];
                  return (
                    <div key={plan} className="p-4 flex justify-center items-center">
                      {typeof val === "boolean" ? (
                        val ? (
                          <CheckIcon filled={plan === "growth"} />
                        ) : (
                          <CrossIcon />
                        )
                      ) : (
                        <span
                          className={`text-xs text-center leading-snug ${
                            plan === "growth" ? "text-[#FF6820] font-semibold" : "text-white/60"
                          }`}
                        >
                          {val}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader title={t("faqTitle")} center />
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3">
                  {q[locale as "en" | "fr" | "es"] ?? q.en}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {a[locale as "en" | "fr" | "es"] ?? a.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <GlowOrb
          color="#ffffff"
          size={400}
          className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{ctaTitle}</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{ctaSubtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
             
              className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              {tCommon("bookDemo")}
            </Link>
            <Link
              href="/contact"
             
              className="inline-block border-2 border-white/60 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-white/10 hover:-translate-y-1 transition-all"
            >
              {t("contactSales")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
