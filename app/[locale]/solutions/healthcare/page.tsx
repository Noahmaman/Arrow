import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI Solutions for Healthcare & Medtech | Arrow AI",
    description:
      "Improve patient outcomes and operational efficiency with Arrow AI — diagnostic assistance with radiologist-level accuracy, patient flow optimization, clinical decision support, and drug discovery acceleration.",
    keywords: [
      "healthcare AI",
      "medical AI",
      "diagnostic AI",
      "HIPAA compliant AI",
      "clinical decision support",
      "patient flow optimization",
      "drug discovery AI",
      "medical imaging AI",
      "healthcare automation",
      "medtech AI",
    ],
    openGraph: {
      title: "AI Solutions for Healthcare & Medtech | Arrow AI",
      description:
        "Diagnostic assistance, patient flow optimization, clinical decision support and drug discovery powered by HIPAA-compliant AI.",
    },
  };
}

export default function HealthcarePage() {
  const t = useTranslations("healthcare");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const color = "#10B981";

  const features = [
    {
      title: t("feature1Title"),
      desc: t("feature1Desc"),
      icon: "🔬",
      stat: "98.2%",
      statLabel:
        locale === "fr"
          ? "précision diagnostique"
          : locale === "es"
          ? "precisión diagnóstica"
          : "diagnostic accuracy",
    },
    {
      title: t("feature2Title"),
      desc: t("feature2Desc"),
      icon: "🏥",
      stat: "40%",
      statLabel:
        locale === "fr"
          ? "réduction des temps d'attente"
          : locale === "es"
          ? "reducción de tiempos de espera"
          : "wait time reduction",
    },
    {
      title: t("feature3Title"),
      desc: t("feature3Desc"),
      icon: "🩺",
      stat: "3x",
      statLabel:
        locale === "fr"
          ? "vitesse de décision clinique"
          : locale === "es"
          ? "velocidad de decisión clínica"
          : "faster clinical decisions",
    },
    {
      title: t("feature4Title"),
      desc: t("feature4Desc"),
      icon: "💊",
      stat: "60%",
      statLabel:
        locale === "fr"
          ? "réduction du temps de R&D"
          : locale === "es"
          ? "reducción del tiempo de I+D"
          : "R&D time reduction",
    },
  ];

  const roiStats = [
    {
      value: "98.2%",
      label:
        locale === "fr"
          ? "Précision diagnostic IA"
          : locale === "es"
          ? "Precisión diagnóstica IA"
          : "AI Diagnostic Accuracy",
    },
    {
      value: "40%",
      label:
        locale === "fr"
          ? "Réduction des temps d'attente"
          : locale === "es"
          ? "Reducción tiempos de espera"
          : "Wait Time Reduction",
    },
    {
      value: "60%",
      label:
        locale === "fr"
          ? "Réduction coûts opérationnels"
          : locale === "es"
          ? "Reducción costos operacionales"
          : "Operational Cost Reduction",
    },
    {
      value: "500+",
      label:
        locale === "fr"
          ? "Établissements de santé"
          : locale === "es"
          ? "Establecimientos de salud"
          : "Healthcare Institutions",
    },
    {
      value: "2x",
      label:
        locale === "fr"
          ? "Vitesse de découverte de médicaments"
          : locale === "es"
          ? "Velocidad de descubrimiento de fármacos"
          : "Drug Discovery Speed",
    },
    {
      value: "99.9%",
      label:
        locale === "fr"
          ? "Disponibilité des systèmes"
          : locale === "es"
          ? "Disponibilidad de sistemas"
          : "System Uptime",
    },
  ];

  const hipaaPoints = [
    {
      icon: "🔐",
      title:
        locale === "fr"
          ? "Chiffrement de bout en bout"
          : locale === "es"
          ? "Cifrado de extremo a extremo"
          : "End-to-End Encryption",
      desc:
        locale === "fr"
          ? "Toutes les données patients sont chiffrées au repos et en transit avec AES-256."
          : locale === "es"
          ? "Todos los datos de pacientes están cifrados en reposo y en tránsito con AES-256."
          : "All patient data is encrypted at rest and in transit using AES-256.",
    },
    {
      icon: "📋",
      title:
        locale === "fr"
          ? "Journaux d'audit complets"
          : locale === "es"
          ? "Registros de auditoría completos"
          : "Complete Audit Logs",
      desc:
        locale === "fr"
          ? "Chaque accès aux données est enregistré et traçable pour les audits de conformité."
          : locale === "es"
          ? "Cada acceso a datos está registrado y es rastreable para auditorías de cumplimiento."
          : "Every data access is logged and traceable for compliance audits.",
    },
    {
      icon: "🏛️",
      title:
        locale === "fr"
          ? "Conformité HIPAA & GDPR"
          : locale === "es"
          ? "Cumplimiento HIPAA y GDPR"
          : "HIPAA & GDPR Compliant",
      desc:
        locale === "fr"
          ? "Architecture conçue nativement pour répondre aux exigences HIPAA, GDPR et HL7 FHIR."
          : locale === "es"
          ? "Arquitectura diseñada nativamente para cumplir con los requisitos de HIPAA, GDPR y HL7 FHIR."
          : "Architecture natively designed to meet HIPAA, GDPR, and HL7 FHIR requirements.",
    },
    {
      icon: "🔒",
      title:
        locale === "fr"
          ? "Contrôle d'accès basé sur les rôles"
          : locale === "es"
          ? "Control de acceso basado en roles"
          : "Role-Based Access Control",
      desc:
        locale === "fr"
          ? "Accès granulaire aux données selon les rôles cliniques et administratifs."
          : locale === "es"
          ? "Acceso granular a datos según roles clínicos y administrativos."
          : "Granular data access based on clinical and administrative roles.",
    },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #021a0e 0%, #0F1B2D 60%)" }}
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
              🏥{" "}
              {locale === "fr"
                ? "Santé & Medtech"
                : locale === "es"
                ? "Salud y Medtech"
                : "Healthcare & Medtech"}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-white/60 text-xl mb-8">{t("heroSubtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
               
                className="text-white font-semibold px-8 py-4 rounded-full transition-all hover:opacity-90"
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
                ? "Des capacités IA pour chaque défi de santé"
                : locale === "es"
                ? "Capacidades de IA para cada reto de salud"
                : "AI Capabilities for Every Healthcare Challenge"}
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              {locale === "fr"
                ? "Du diagnostic à la recherche pharmaceutique, nos modèles couvrent toute la chaîne de soins."
                : locale === "es"
                ? "Desde el diagnóstico hasta la investigación farmacéutica, nuestros modelos cubren toda la cadena de atención."
                : "From diagnostics to pharmaceutical research, our models cover the entire care continuum."}
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

      {/* Results Stats */}
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
                ? "Des résultats cliniques mesurables"
                : locale === "es"
                ? "Resultados clínicos medibles"
                : "Measurable Clinical Outcomes"}
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              {locale === "fr"
                ? "Nos clients en santé constatent des améliorations concrètes dès le déploiement."
                : locale === "es"
                ? "Nuestros clientes de salud ven mejoras concretas desde el despliegue."
                : "Our healthcare clients see concrete improvements from day one of deployment."}
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

      {/* HIPAA Compliance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-10 md:p-14">
            <div className="text-center mb-12">
              <div
                className="inline-flex items-center gap-2 glass text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border"
                style={{ color, borderColor: `${color}44` }}
              >
                🏛️{" "}
                {locale === "fr"
                  ? "Conformité & Sécurité"
                  : locale === "es"
                  ? "Cumplimiento y Seguridad"
                  : "Compliance & Security"}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {locale === "fr"
                  ? "Conçu pour la conformité HIPAA dès la conception"
                  : locale === "es"
                  ? "Diseñado para el cumplimiento HIPAA desde el inicio"
                  : "Built for HIPAA Compliance by Design"}
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                {locale === "fr"
                  ? "La sécurité des données patients n'est pas une option — c'est au cœur de notre architecture. Nos systèmes sont certifiés HIPAA, conformes GDPR et compatibles HL7 FHIR."
                  : locale === "es"
                  ? "La seguridad de los datos de pacientes no es opcional — está en el núcleo de nuestra arquitectura. Nuestros sistemas están certificados HIPAA, conformes con GDPR y compatibles con HL7 FHIR."
                  : "Patient data security is not an afterthought — it is at the core of our architecture. Our systems are HIPAA certified, GDPR compliant, and HL7 FHIR compatible."}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hipaaPoints.map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="glass rounded-2xl p-6 flex gap-4 items-start"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 border"
                    style={{
                      background: `${color}22`,
                      borderColor: `${color}44`,
                    }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              {["HIPAA Certified", "GDPR Compliant", "HL7 FHIR", "SOC 2 Type II", "ISO 27001"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="glass px-4 py-2 rounded-full text-xs font-semibold border"
                    style={{ color, borderColor: `${color}44` }}
                  >
                    {badge}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-8 pb-24">
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
                ? "Arrow AI a transformé notre département de radiologie. Notre IA de diagnostic détecte les anomalies avec une précision supérieure à celle de nos radiologues les plus expérimentés, tout en réduisant les temps de lecture de 70%."
                : locale === "es"
                ? "Arrow AI transformó nuestro departamento de radiología. Nuestra IA de diagnóstico detecta anomalías con mayor precisión que nuestros radiólogos más experimentados, reduciendo los tiempos de lectura en un 70%."
                : "Arrow AI transformed our radiology department. Our diagnostic AI detects anomalies with greater accuracy than our most experienced radiologists, while reducing reading times by 70%."}
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border"
                style={{
                  background: `${color}20`,
                  borderColor: `${color}44`,
                  color,
                }}
              >
                SL
              </div>
              <div className="text-left">
                <div className="text-white font-semibold text-sm">
                  {locale === "fr"
                    ? "Directeur Médical"
                    : locale === "es"
                    ? "Director Médico"
                    : "Chief Medical Officer"}
                </div>
                <div className="text-white/40 text-xs">
                  {locale === "fr"
                    ? "Centre Hospitalier Universitaire"
                    : locale === "es"
                    ? "Hospital Universitario Regional"
                    : "Regional University Hospital"}
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
              ? "Prêt à améliorer les résultats pour vos patients ?"
              : locale === "es"
              ? "¿Listo para mejorar los resultados de tus pacientes?"
              : "Ready to improve outcomes for your patients?"}
          </h2>
          <p className="text-white/60 mb-8">
            {locale === "fr"
              ? "Nos experts en IA médicale sont prêts à construire votre solution conforme et sur mesure."
              : locale === "es"
              ? "Nuestros expertos en IA médica están listos para construir tu solución conforme y personalizada."
              : "Our medical AI experts are ready to build your compliant, custom-tailored solution."}
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
