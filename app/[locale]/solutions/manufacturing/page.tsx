import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Solutions for Manufacturing & Industry 4.0 | Arrow AI",
    description:
      "Transform your factory floor with Arrow AI predictive maintenance, quality vision inspection, supply chain optimization, and real-time production analytics for Industry 4.0.",
    keywords: [
      "manufacturing AI",
      "Industry 4.0",
      "predictive maintenance AI",
      "quality inspection AI",
      "supply chain optimization",
      "industrial AI",
      "smart factory",
      "production analytics",
    ],
  };
}

export default function ManufacturingPage() {
  const t = useTranslations("manufacturing");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const color = "#F59E0B";

  const features = [
    {
      title: t("feature1Title"),
      desc: t("feature1Desc"),
      icon: "⚙️",
      stat: "87%",
      statLabel:
        locale === "fr"
          ? "précision de prédiction"
          : locale === "es"
          ? "precisión de predicción"
          : "prediction accuracy",
    },
    {
      title: t("feature2Title"),
      desc: t("feature2Desc"),
      icon: "👁️",
      stat: "99.4%",
      statLabel:
        locale === "fr"
          ? "taux de détection défauts"
          : locale === "es"
          ? "tasa de detección de defectos"
          : "defect detection rate",
    },
    {
      title: t("feature3Title"),
      desc: t("feature3Desc"),
      icon: "🔗",
      stat: "-18%",
      statLabel:
        locale === "fr"
          ? "coûts logistiques"
          : locale === "es"
          ? "costes logísticos"
          : "logistics costs",
    },
    {
      title: t("feature4Title"),
      desc: t("feature4Desc"),
      icon: "📊",
      stat: "+30%",
      statLabel:
        locale === "fr"
          ? "efficacité opérationnelle"
          : locale === "es"
          ? "eficiencia operacional"
          : "operational efficiency",
    },
  ];

  const industry40Pillars = [
    {
      icon: "🤖",
      title:
        locale === "fr"
          ? "Automatisation intelligente"
          : locale === "es"
          ? "Automatización inteligente"
          : "Intelligent Automation",
      desc:
        locale === "fr"
          ? "Des robots et systèmes autonomes pilotés par des modèles d'IA qui s'adaptent en temps réel aux conditions de production."
          : locale === "es"
          ? "Robots y sistemas autónomos guiados por modelos de IA que se adaptan en tiempo real a las condiciones de producción."
          : "Autonomous robots and systems guided by AI models that adapt in real time to production conditions.",
    },
    {
      icon: "📡",
      title:
        locale === "fr"
          ? "IoT & données en temps réel"
          : locale === "es"
          ? "IoT y datos en tiempo real"
          : "IoT & Real-Time Data",
      desc:
        locale === "fr"
          ? "Connectez vos machines et capteurs pour alimenter nos modèles avec un flux continu de données de terrain."
          : locale === "es"
          ? "Conecta tus máquinas y sensores para alimentar nuestros modelos con un flujo continuo de datos de planta."
          : "Connect your machines and sensors to feed our models with a continuous stream of floor-level data.",
    },
    {
      icon: "🏭",
      title:
        locale === "fr"
          ? "Jumeaux numériques"
          : locale === "es"
          ? "Gemelos digitales"
          : "Digital Twins",
      desc:
        locale === "fr"
          ? "Créez des répliques virtuelles de vos lignes de production pour simuler, optimiser et tester sans arrêter la chaîne."
          : locale === "es"
          ? "Crea réplicas virtuales de tus líneas de producción para simular, optimizar y probar sin parar la cadena."
          : "Build virtual replicas of your production lines to simulate, optimize, and test without stopping the line.",
    },
  ];

  const roiStats = [
    {
      value: "87%",
      label:
        locale === "fr"
          ? "Précision maintenance prédictive"
          : locale === "es"
          ? "Precisión mantenimiento predictivo"
          : "Predictive maintenance accuracy",
    },
    {
      value: "45%",
      label:
        locale === "fr"
          ? "Réduction des temps d'arrêt"
          : locale === "es"
          ? "Reducción de tiempos de parada"
          : "Reduction in downtime",
    },
    {
      value: "99.4%",
      label:
        locale === "fr"
          ? "Détection de défauts qualité"
          : locale === "es"
          ? "Detección de defectos de calidad"
          : "Quality defect detection",
    },
    {
      value: "-18%",
      label:
        locale === "fr"
          ? "Réduction des coûts logistiques"
          : locale === "es"
          ? "Reducción de costes logísticos"
          : "Logistics cost reduction",
    },
    {
      value: "+30%",
      label:
        locale === "fr"
          ? "Gain d'efficacité opérationnelle"
          : locale === "es"
          ? "Ganancia en eficiencia operacional"
          : "Operational efficiency gain",
    },
    {
      value: "3.8x",
      label:
        locale === "fr"
          ? "ROI moyen sur 24 mois"
          : locale === "es"
          ? "ROI promedio en 24 meses"
          : "Average ROI over 24 months",
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #0D0A00 0%, #0F1B2D 60%)" }}
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
              ⚙️{" "}
              {locale === "fr"
                ? "Industrie & Fabrication"
                : locale === "es"
                ? "Industria y Fabricación"
                : "Manufacturing & Industry"}
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
                ? "L'IA qui optimise chaque étape de votre production"
                : locale === "es"
                ? "La IA que optimiza cada etapa de tu producción"
                : "AI That Optimizes Every Stage of Your Production"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {locale === "fr"
                ? "De la maintenance prédictive au contrôle qualité, nos solutions couvrent l'ensemble de la chaîne industrielle."
                : locale === "es"
                ? "Desde el mantenimiento predictivo al control de calidad, nuestras soluciones cubren toda la cadena industrial."
                : "From predictive maintenance to quality control, our solutions cover the entire industrial chain."}
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

      {/* Industry 4.0 Section */}
      <section className="py-24 relative">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${color}33 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 glass text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ color, border: `1px solid ${color}44` }}
            >
              {locale === "fr"
                ? "Industrie 4.0"
                : locale === "es"
                ? "Industria 4.0"
                : "Industry 4.0"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === "fr"
                ? "La quatrième révolution industrielle est en marche"
                : locale === "es"
                ? "La cuarta revolución industrial está en marcha"
                : "The Fourth Industrial Revolution Is Here"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {locale === "fr"
                ? "Arrow AI vous accompagne dans votre transformation Industrie 4.0 grâce à trois piliers technologiques fondamentaux."
                : locale === "es"
                ? "Arrow AI te acompaña en tu transformación Industria 4.0 gracias a tres pilares tecnológicos fundamentales."
                : "Arrow AI guides your Industry 4.0 transformation through three fundamental technology pillars."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry40Pillars.map(({ icon, title, desc }) => (
              <div key={title} className="glass-strong rounded-3xl p-8 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto border"
                  style={{
                    background: `${color}22`,
                    borderColor: `${color}44`,
                  }}
                >
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{title}</h3>
                <p className="text-white/55 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Stats */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === "fr"
                ? "Des résultats industriels concrets"
                : locale === "es"
                ? "Resultados industriales concretos"
                : "Concrete Industrial Results"}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {locale === "fr"
                ? "Nos clients industriels mesurent l'impact de l'IA sur chaque KPI de leur activité."
                : locale === "es"
                ? "Nuestros clientes industriales miden el impacto de la IA en cada KPI de su actividad."
                : "Our industrial clients measure the AI impact across every KPI in their operations."}
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
              ? "Modernisez votre outil industriel avec l'IA"
              : locale === "es"
              ? "Moderniza tu planta industrial con IA"
              : "Modernize Your Factory Floor with AI"}
          </h2>
          <p className="text-white/60 mb-8">
            {locale === "fr"
              ? "Nos ingénieurs spécialisés en IA industrielle vous accompagnent de la preuve de concept au déploiement à grande échelle."
              : locale === "es"
              ? "Nuestros ingenieros especializados en IA industrial te acompañan desde la prueba de concepto hasta el despliegue a gran escala."
              : "Our industrial AI engineers guide you from proof of concept to large-scale deployment."}
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
