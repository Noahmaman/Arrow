import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Solutions for Retail & E-commerce | Arrow AI",
    description:
      "Boost sales and customer satisfaction with Arrow AI personalization engine, demand forecasting, dynamic pricing, and visual search for retail and e-commerce.",
    keywords: [
      "retail AI",
      "e-commerce AI",
      "personalization engine",
      "demand forecasting AI",
      "dynamic pricing AI",
      "visual search AI",
      "retail automation",
    ],
  };
}

export default function RetailPage() {
  const t = useTranslations("retail");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const color = "#6366F1";

  const features = [
    {
      title: t("feature1Title"),
      desc: t("feature1Desc"),
      icon: "🛍️",
      stat: "+35%",
      statLabel:
        locale === "fr"
          ? "taux de conversion"
          : locale === "es"
          ? "tasa de conversión"
          : "conversion rate",
    },
    {
      title: t("feature2Title"),
      desc: t("feature2Desc"),
      icon: "📦",
      stat: "70%",
      statLabel:
        locale === "fr"
          ? "moins de ruptures"
          : locale === "es"
          ? "menos roturas de stock"
          : "fewer stockouts",
    },
    {
      title: t("feature3Title"),
      desc: t("feature3Desc"),
      icon: "💰",
      stat: "+22%",
      statLabel:
        locale === "fr"
          ? "revenus optimisés"
          : locale === "es"
          ? "ingresos optimizados"
          : "revenue uplift",
    },
    {
      title: t("feature4Title"),
      desc: t("feature4Desc"),
      icon: "🔍",
      stat: "3x",
      statLabel:
        locale === "fr"
          ? "engagement produit"
          : locale === "es"
          ? "engagement de producto"
          : "product engagement",
    },
  ];

  const roiStats = [
    {
      value: "+35%",
      label:
        locale === "fr"
          ? "Augmentation du taux de conversion"
          : locale === "es"
          ? "Aumento en tasa de conversión"
          : "Increase in conversion rate",
    },
    {
      value: "70%",
      label:
        locale === "fr"
          ? "Réduction des ruptures de stock"
          : locale === "es"
          ? "Reducción de roturas de stock"
          : "Reduction in stockouts",
    },
    {
      value: "+22%",
      label:
        locale === "fr"
          ? "Hausse des revenus par visiteur"
          : locale === "es"
          ? "Aumento de ingresos por visitante"
          : "Revenue per visitor uplift",
    },
    {
      value: "3x",
      label:
        locale === "fr"
          ? "Engagement produit amélioré"
          : locale === "es"
          ? "Mejora en engagement de producto"
          : "Improved product engagement",
    },
    {
      value: "4.2x",
      label:
        locale === "fr"
          ? "Retour sur investissement moyen"
          : locale === "es"
          ? "Retorno de inversión promedio"
          : "Average ROI",
    },
    {
      value: "90j",
      label:
        locale === "fr"
          ? "Délai de mise en oeuvre"
          : locale === "es"
          ? "Tiempo de implementación"
          : "Time to go live",
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #080820 0%, #0F1B2D 60%)" }}
      >
        <GlowOrb
          color={color}
          size={500}
          className="top-0 left-1/2 -translate-x-1/2 opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/solutions"
             
              className="inline-flex items-center gap-2 text-sm mb-6 hover:gap-3 transition-all"
              style={{ color }}
            >
              <svg
                className="w-4 h-4 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              {locale === "fr"
                ? "Toutes les solutions"
                : locale === "es"
                ? "Todas las soluciones"
                : "All Solutions"}
            </Link>
            <div
              className="inline-flex items-center gap-2 glass text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ color, border: `1px solid ${color}44` }}
            >
              🛍️{" "}
              {locale === "fr"
                ? "Commerce & E-commerce"
                : locale === "es"
                ? "Comercio y E-commerce"
                : "Retail & E-commerce"}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-white/60 text-xl mb-8">{t("heroSubtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
               
                className="text-white font-semibold px-8 py-4 rounded-full transition-all"
                style={{ background: color }}
              >
                {tCommon("bookDemo")}
              </Link>
              <Link
                href="/case-studies"
               
                className="glass border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-all"
              >
                {locale === "fr"
                  ? "Cas clients"
                  : locale === "es"
                  ? "Casos de éxito"
                  : "Case Studies"}
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
                ? "Des capacités IA pour chaque défi retail"
                : locale === "es"
                ? "Capacidades de IA para cada reto del retail"
                : "AI Capabilities for Every Retail Challenge"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {locale === "fr"
                ? "De la personnalisation à la logistique, nos modèles couvrent toute la chaîne de valeur retail."
                : locale === "es"
                ? "Desde la personalización hasta la logística, nuestros modelos cubren toda la cadena de valor retail."
                : "From personalization to logistics, our models cover the entire retail value chain."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map(({ title, desc, icon, stat, statLabel }) => (
              <div key={title} className="glass-card rounded-3xl p-8">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border"
                  style={{
                    background: `${color}22`,
                    borderColor: `${color}44`,
                  }}
                >
                  {icon}
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{desc}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold" style={{ color }}>
                    {stat}
                  </span>
                  <span className="text-white/40 text-sm">{statLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, ${color}22 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === "fr"
                ? "Un ROI mesurable dès les premiers mois"
                : locale === "es"
                ? "ROI medible desde los primeros meses"
                : "Measurable ROI from Day One"}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {locale === "fr"
                ? "Nos clients retail constatent des résultats concrets rapidement après le déploiement."
                : locale === "es"
                ? "Nuestros clientes retail ven resultados concretos rápidamente tras el despliegue."
                : "Our retail clients see concrete results quickly after deployment."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {roiStats.map(({ value, label }) => (
              <div
                key={label}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color }}
                >
                  {value}
                </div>
                <div className="text-white/50 text-sm leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {locale === "fr"
              ? "Transformez l'expérience de vos clients"
              : locale === "es"
              ? "Transforma la experiencia de tus clientes"
              : "Transform Your Customer Experience"}
          </h2>
          <p className="text-white/60 mb-8">
            {locale === "fr"
              ? "Nos solutions retail IA s'intègrent à votre stack existant en quelques semaines."
              : locale === "es"
              ? "Nuestras soluciones de IA retail se integran con tu stack existente en pocas semanas."
              : "Our retail AI solutions integrate with your existing stack in weeks, not months."}
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
