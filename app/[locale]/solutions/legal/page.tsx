import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Solutions for Legal & Law Firms | Arrow AI",
    description:
      "Accelerate legal work with Arrow AI — contract review, legal research, due diligence automation, and compliance monitoring. Save 80% of review time with 99% accuracy.",
    keywords: [
      "legal AI",
      "contract review AI",
      "legal research AI",
      "due diligence automation",
      "legal document analysis",
      "compliance AI",
      "law firm AI",
      "legaltech AI",
      "contract analysis software",
      "AI for lawyers",
    ],
    openGraph: {
      title: "AI Solutions for Legal & Law Firms | Arrow AI",
      description:
        "Contract review, legal research, due diligence, and compliance monitoring — powered by AI with 99% accuracy and 80% time savings.",
    },
  };
}

export default function LegalPage() {
  const t = useTranslations("legal");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const color = "#8B5CF6";

  const features = [
    {
      title: t("feature1Title"),
      desc: t("feature1Desc"),
      icon: "📄",
      stat: "80%",
      statLabel:
        locale === "fr"
          ? "temps d'analyse économisé"
          : locale === "es"
          ? "tiempo de análisis ahorrado"
          : "review time saved",
    },
    {
      title: t("feature2Title"),
      desc: t("feature2Desc"),
      icon: "🔍",
      stat: "10x",
      statLabel:
        locale === "fr"
          ? "recherches juridiques plus rapides"
          : locale === "es"
          ? "búsquedas legales más rápidas"
          : "faster legal research",
    },
    {
      title: t("feature3Title"),
      desc: t("feature3Desc"),
      icon: "⚖️",
      stat: "99%",
      statLabel:
        locale === "fr"
          ? "précision de conformité"
          : locale === "es"
          ? "precisión de cumplimiento"
          : "compliance accuracy",
    },
    {
      title: t("feature4Title"),
      desc: t("feature4Desc"),
      icon: "📋",
      stat: "-65%",
      statLabel:
        locale === "fr"
          ? "coûts de due diligence"
          : locale === "es"
          ? "costes de due diligence"
          : "due diligence costs",
    },
  ];

  const roiStats = [
    {
      value: "80%",
      label:
        locale === "fr"
          ? "Réduction du temps de révision des contrats"
          : locale === "es"
          ? "Reducción del tiempo de revisión de contratos"
          : "Contract review time reduction",
    },
    {
      value: "99%",
      label:
        locale === "fr"
          ? "Précision de l'analyse documentaire"
          : locale === "es"
          ? "Precisión del análisis documental"
          : "Document analysis accuracy",
    },
    {
      value: "10x",
      label:
        locale === "fr"
          ? "Accélération de la recherche juridique"
          : locale === "es"
          ? "Aceleración de la investigación legal"
          : "Legal research acceleration",
    },
    {
      value: "-65%",
      label:
        locale === "fr"
          ? "Réduction des coûts de due diligence"
          : locale === "es"
          ? "Reducción de costes de due diligence"
          : "Due diligence cost reduction",
    },
    {
      value: "500+",
      label:
        locale === "fr"
          ? "Types de clauses contractuelles analysées"
          : locale === "es"
          ? "Tipos de cláusulas contractuales analizadas"
          : "Contract clause types analyzed",
    },
    {
      value: "4.5x",
      label:
        locale === "fr"
          ? "ROI moyen sur 18 mois"
          : locale === "es"
          ? "ROI promedio en 18 meses"
          : "Average ROI over 18 months",
    },
  ];

  const useCases = [
    {
      icon: "🏢",
      title:
        locale === "fr"
          ? "Cabinets d'avocats"
          : locale === "es"
          ? "Despachos de abogados"
          : "Law Firms",
      desc:
        locale === "fr"
          ? "Automatisez la revue de contrats, la recherche de jurisprudence et la rédaction de mémos juridiques pour permettre à vos avocats de se concentrer sur des tâches à haute valeur ajoutée."
          : locale === "es"
          ? "Automatiza la revisión de contratos, la investigación de jurisprudencia y la redacción de memorandos legales para que tus abogados puedan centrarse en tareas de alto valor añadido."
          : "Automate contract review, case law research, and legal memo drafting so your lawyers focus on high-value work.",
    },
    {
      icon: "🏛️",
      title:
        locale === "fr"
          ? "Directions juridiques"
          : locale === "es"
          ? "Departamentos jurídicos"
          : "In-House Legal Teams",
      desc:
        locale === "fr"
          ? "Réduisez la dépendance aux cabinets externes grâce à l'IA qui gère l'analyse contractuelle, le suivi des obligations et la veille réglementaire en temps réel."
          : locale === "es"
          ? "Reduce la dependencia de despachos externos con IA que gestiona el análisis contractual, el seguimiento de obligaciones y la vigilancia regulatoria en tiempo real."
          : "Reduce reliance on outside counsel with AI that handles contract analysis, obligation tracking, and real-time regulatory monitoring.",
    },
    {
      icon: "📑",
      title:
        locale === "fr"
          ? "Fusions & Acquisitions"
          : locale === "es"
          ? "Fusiones y Adquisiciones"
          : "M&A & Due Diligence",
      desc:
        locale === "fr"
          ? "Accélérez vos opérations de due diligence grâce à l'analyse automatique de milliers de documents, l'identification des risques et la génération de rapports structurés."
          : locale === "es"
          ? "Acelera tus operaciones de due diligence con análisis automático de miles de documentos, identificación de riesgos y generación de informes estructurados."
          : "Accelerate due diligence operations with automated analysis of thousands of documents, risk identification, and structured report generation.",
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #0D0818 0%, #0F1B2D 60%)" }}
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
              ⚖️{" "}
              {locale === "fr"
                ? "Juridique & Conformité"
                : locale === "es"
                ? "Legal y Cumplimiento"
                : "Legal & Compliance"}
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
                ? "L'IA qui transforme la pratique du droit"
                : locale === "es"
                ? "La IA que transforma la práctica del derecho"
                : "AI That Transforms Legal Practice"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {locale === "fr"
                ? "De l'analyse contractuelle à la conformité réglementaire, nos modèles couvrent l'ensemble du spectre juridique."
                : locale === "es"
                ? "Desde el análisis contractual hasta la conformidad regulatoria, nuestros modelos cubren todo el espectro jurídico."
                : "From contract analysis to regulatory compliance, our models cover the full spectrum of legal work."}
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
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(ellipse at center, ${color}33 0%, transparent 70%)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === "fr"
                ? "Des gains de productivité mesurables"
                : locale === "es"
                ? "Ganancias de productividad medibles"
                : "Measurable Productivity Gains"}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {locale === "fr"
                ? "Nos clients juridiques mesurent un impact direct sur leur efficacité opérationnelle et leur rentabilité."
                : locale === "es"
                ? "Nuestros clientes jurídicos miden un impacto directo en su eficiencia operacional y rentabilidad."
                : "Our legal clients measure a direct impact on operational efficiency and profitability."}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {roiStats.map(({ value, label }) => (
              <div key={label} className="glass-card rounded-2xl p-6 text-center">
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

      {/* Use Cases Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 glass text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6"
              style={{ color, border: `1px solid ${color}44` }}
            >
              {locale === "fr"
                ? "Cas d'usage"
                : locale === "es"
                ? "Casos de uso"
                : "Use Cases"}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {locale === "fr"
                ? "Conçu pour chaque acteur du secteur juridique"
                : locale === "es"
                ? "Diseñado para cada actor del sector legal"
                : "Built for Every Legal Stakeholder"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {locale === "fr"
                ? "Que vous soyez cabinet d'avocats, direction juridique ou spécialisé en M&A, Arrow AI s'adapte à votre métier."
                : locale === "es"
                ? "Tanto si eres un despacho de abogados, departamento jurídico o especialista en M&A, Arrow AI se adapta a tu actividad."
                : "Whether you're a law firm, in-house legal team, or M&A specialist, Arrow AI adapts to your practice."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map(({ icon, title, desc }) => (
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

      {/* Testimonial */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-10 text-center relative">
            <div
              className="text-5xl font-serif leading-none mb-6"
              style={{ color: `${color}66` }}
            >
              "
            </div>
            <blockquote className="text-white/80 text-xl leading-relaxed mb-8 italic">
              {locale === "fr"
                ? "Arrow AI a réduit notre temps de revue contractuelle de 80%. Ce qui prenait trois jours à une équipe de cinq juristes se fait maintenant en quelques heures avec une précision encore supérieure."
                : locale === "es"
                ? "Arrow AI redujo nuestro tiempo de revisión contractual en un 80%. Lo que tardaba tres días con un equipo de cinco juristas ahora se hace en pocas horas con una precisión aún mayor."
                : "Arrow AI cut our contract review time by 80%. What used to take a team of five lawyers three days now takes a few hours — with even greater accuracy."}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold"
                style={{
                  background: `${color}22`,
                  borderColor: `${color}44`,
                  color,
                }}
              >
                SL
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">
                  {locale === "fr"
                    ? "Directrice Juridique"
                    : locale === "es"
                    ? "Directora Jurídica"
                    : "General Counsel"}
                </div>
                <div className="text-white/40 text-xs">
                  {locale === "fr"
                    ? "Groupe industriel international"
                    : locale === "es"
                    ? "Grupo industrial internacional"
                    : "International Industrial Group"}
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
              ? "Donnez à votre équipe juridique la puissance de l'IA"
              : locale === "es"
              ? "Dale a tu equipo jurídico el poder de la IA"
              : "Give Your Legal Team the Power of AI"}
          </h2>
          <p className="text-white/60 mb-8">
            {locale === "fr"
              ? "Nos experts en IA juridique vous accompagnent du pilote au déploiement complet, en respectant vos exigences de confidentialité et de conformité."
              : locale === "es"
              ? "Nuestros expertos en IA legal te acompañan del piloto al despliegue completo, respetando tus requisitos de confidencialidad y cumplimiento."
              : "Our legal AI experts guide you from pilot to full deployment, respecting your confidentiality and compliance requirements."}
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
