import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About Arrow AI",
  description:
    "Learn about Arrow AI — our mission, team, and vision to democratize artificial intelligence for every enterprise.",
};

const team = [
  { name: "Alexandre Martin", role: "CEO & Co-founder", bg: "#FF6820" },
  { name: "Sarah Chen", role: "CTO & Co-founder", bg: "#6366F1" },
  { name: "Omar Benali", role: "Chief AI Officer", bg: "#10B981" },
  { name: "Laura Dubois", role: "VP of Product", bg: "#F59E0B" },
  { name: "James Okafor", role: "Head of Engineering", bg: "#8B5CF6" },
  { name: "Ana Rodriguez", role: "VP of Sales", bg: "#06B6D4" },
];

const timeline = [
  {
    year: "2020",
    event: "Arrow AI founded in Paris",
    detail:
      "Alexandre and Sarah launch Arrow with a mission to make enterprise AI accessible.",
  },
  {
    year: "2021",
    event: "First enterprise clients",
    detail:
      "Deployed first fraud detection system for a top-10 European bank.",
  },
  {
    year: "2022",
    event: "Series A — €12M",
    detail:
      "Raised €12M to accelerate product development and expand to new sectors.",
  },
  {
    year: "2023",
    event: "100+ enterprise clients",
    detail:
      "Reached 100 enterprise clients across 6 countries and 5 industries.",
  },
  {
    year: "2024",
    event: "Launch of AI Agent Platform",
    detail:
      "Released our flagship multi-agent orchestration platform for enterprises.",
  },
  {
    year: "2025",
    event: "Series B — €45M",
    detail:
      "Closed Series B to accelerate international expansion and R&D.",
  },
];

export default function AboutPage() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{
          background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)",
        }}
      >
        <GlowOrb
          color="#FF6820"
          size={500}
          className="top-0 left-1/2 -translate-x-1/2 opacity-25"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            {locale === "fr"
              ? "À propos"
              : locale === "es"
              ? "Nosotros"
              : "About Us"}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">{t("title")}</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t("missionTitle"),
                text: t("missionText"),
                icon: "🎯",
                color: "#FF6820",
              },
              {
                title: t("visionTitle"),
                text: t("visionText"),
                icon: "🔭",
                color: "#6366F1",
              },
              {
                title: t("valuesTitle"),
                text: `${t("value1Title")}: ${t("value1Text")} · ${t(
                  "value2Title"
                )}: ${t("value2Text")} · ${t("value3Title")}: ${t(
                  "value3Text"
                )}`,
                icon: "💡",
                color: "#10B981",
              },
            ].map(({ title, text, icon, color }) => (
              <div key={title} className="glass-card rounded-3xl p-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6"
                  style={{
                    background: `${color}22`,
                    border: `1px solid ${color}44`,
                  }}
                >
                  {icon}
                </div>
                <h3 className="text-white font-bold text-2xl mb-4">{title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section
        className="py-16"
        style={{
          background: "rgba(255,104,32,0.05)",
          borderTop: "1px solid rgba(255,104,32,0.1)",
          borderBottom: "1px solid rgba(255,104,32,0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              {
                v: "200+",
                l:
                  locale === "fr"
                    ? "Clients entreprises"
                    : locale === "es"
                    ? "Clientes empresariales"
                    : "Enterprise Clients",
              },
              {
                v: "60+",
                l:
                  locale === "fr"
                    ? "Experts IA"
                    : locale === "es"
                    ? "Expertos IA"
                    : "AI Experts",
              },
              {
                v: "6",
                l:
                  locale === "fr"
                    ? "Pays"
                    : locale === "es"
                    ? "Países"
                    : "Countries",
              },
              {
                v: "€57M",
                l:
                  locale === "fr"
                    ? "Levée de fonds totale"
                    : locale === "es"
                    ? "Financiación total"
                    : "Total Funding",
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

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("teamTitle")} center />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map(({ name, role, bg }) => (
              <div key={name} className="glass-card rounded-2xl p-6 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3"
                  style={{ background: bg }}
                >
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="text-white font-semibold text-sm">{name}</div>
                <div className="text-white/40 text-xs mt-1">{role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="py-24"
        style={{ background: "rgba(15,27,45,0.8)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title={t("historyTitle")} center />
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF6820] to-transparent opacity-30" />
            {timeline.map(({ year, event, detail }, i) => (
              <div
                key={year}
                className={`flex items-start gap-8 mb-10 ${
                  i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    i % 2 === 0 ? "text-right pr-4" : "text-left pl-4"
                  }`}
                >
                  <span className="text-[#FF6820] font-bold text-lg">
                    {year}
                  </span>
                  <h4 className="text-white font-semibold mt-1">{event}</h4>
                  <p className="text-white/40 text-sm mt-1">{detail}</p>
                </div>
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#FF6820] border-2 border-white/20 z-10" />
                </div>
                <div className="w-1/2" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {locale === "fr"
              ? "Prêt à transformer votre entreprise ?"
              : locale === "es"
              ? "¿Listo para transformar tu empresa?"
              : "Ready to transform your business?"}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Nos experts analysent vos besoins et construisent une feuille de route IA sur mesure."
              : locale === "es"
              ? "Nuestros expertos analizarán tus necesidades y construirán una hoja de ruta de IA personalizada."
              : "Our experts will analyze your needs and build a customized AI roadmap for your company."}
          </p>
          <Link
            href="/contact"
           
            className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            {locale === "fr"
              ? "Réserver une démo"
              : locale === "es"
              ? "Reservar una demo"
              : "Book a Free Demo"}
          </Link>
        </div>
      </section>
    </div>
  );
}
