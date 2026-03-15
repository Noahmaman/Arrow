import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Case Studies | Arrow AI",
  description: "Real results from enterprise AI deployments — see how Arrow AI transformed operations for BNP Paribas, Sanofi, Carrefour, Airbus, and other industry leaders.",
};

const cases = [
  {
    company: "BNP Paribas",
    sector: "Finance",
    sectorColor: "#FF6820",
    challenge: "Fraud detection across 50M+ daily transactions with too many false positives disrupting customer experience.",
    solution: "Custom real-time AI fraud detection engine with adaptive learning and explainable decisions.",
    results: [{ metric: "85%", label: "Fraud Reduction" }, { metric: "99.7%", label: "Accuracy" }, { metric: "60%", label: "False Positives ↓" }],
    logo: "BNP",
  },
  {
    company: "Sanofi",
    sector: "Healthcare",
    sectorColor: "#10B981",
    challenge: "Drug candidate screening taking 18+ months, with high cost and low success rates in early R&D.",
    solution: "AI molecular screening platform that predicts drug-target interactions and candidate viability.",
    results: [{ metric: "60%", label: "Faster Screening" }, { metric: "40%", label: "Cost Reduction" }, { metric: "3x", label: "Hit Rate" }],
    logo: "SA",
  },
  {
    company: "Carrefour",
    sector: "Retail",
    sectorColor: "#6366F1",
    challenge: "Inventory imbalances causing €200M/year in stockouts and overstock across 1,400 European stores.",
    solution: "AI demand forecasting and automated replenishment system integrated with existing ERP.",
    results: [{ metric: "70%", label: "Stockouts ↓" }, { metric: "50%", label: "Overstock ↓" }, { metric: "€80M", label: "Annual Savings" }],
    logo: "CA",
  },
  {
    company: "Airbus",
    sector: "Manufacturing",
    sectorColor: "#F59E0B",
    challenge: "Unplanned equipment downtime on assembly lines costing €5M+ per incident in delays.",
    solution: "IoT-connected predictive maintenance AI monitoring 10,000+ sensors across assembly facilities.",
    results: [{ metric: "45%", label: "Downtime ↓" }, { metric: "99.9%", label: "Defect Detection" }, { metric: "€120M", label: "Savings/Year" }],
    logo: "AB",
  },
  {
    company: "Linklaters LLP",
    sector: "Legal",
    sectorColor: "#8B5CF6",
    challenge: "M&A due diligence reviews requiring 1,000+ manual attorney hours per transaction.",
    solution: "AI contract analysis and due diligence platform handling document review and risk flagging.",
    results: [{ metric: "80%", label: "Time Saved" }, { metric: "3 days", label: "vs. 3 weeks" }, { metric: "99%", label: "Accuracy" }],
    logo: "LL",
  },
  {
    company: "SNCF",
    sector: "Logistics",
    sectorColor: "#06B6D4",
    challenge: "Train scheduling optimization and maintenance planning across 30,000km of rail network.",
    solution: "Multi-objective AI optimization system for scheduling, maintenance planning, and disruption management.",
    results: [{ metric: "30%", label: "On-time ↑" }, { metric: "25%", label: "Maintenance Cost ↓" }, { metric: "15M", label: "Passengers Impacted" }],
    logo: "SN",
  },
];

export default function CaseStudiesPage() {
  const t = useTranslations("caseStudies");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      <section className="py-24 relative" style={{background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)"}}>
        <GlowOrb color="#FF6820" size={400} className="top-0 left-1/2 -translate-x-1/2 opacity-25" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            {locale === "fr" ? "Résultats prouvés" : locale === "es" ? "Resultados probados" : "Proven Results"}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t("title")}</h1>
          <p className="text-white/60 text-xl">{t("subtitle")}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map(({ company, sector, sectorColor, challenge, solution, results, logo }) => (
              <div key={company} className="glass-card rounded-3xl p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold" style={{background: sectorColor}}>
                      {logo}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{company}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{background: `${sectorColor}22`, color: sectorColor}}>{sector}</span>
                    </div>
                  </div>
                </div>

                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-[#FF6820] text-xs font-semibold uppercase tracking-widest mb-1">{locale === "fr" ? "Défi" : locale === "es" ? "Desafío" : "Challenge"}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <p className="text-[#FF6820] text-xs font-semibold uppercase tracking-widest mb-1">{locale === "fr" ? "Solution" : locale === "es" ? "Solución" : "Solution"}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{solution}</p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {results.map(({ metric, label }) => (
                    <div key={label} className="text-center">
                      <div className="text-xl font-bold" style={{color: sectorColor}}>{metric}</div>
                      <div className="text-white/40 text-xs">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {locale === "fr" ? "Votre success story commence ici" : locale === "es" ? "Tu historia de éxito comienza aquí" : "Your Success Story Starts Here"}
          </h2>
          <p className="text-white/80 mb-8">
            {locale === "fr" ? "Rejoignez 200+ entreprises qui ont transformé leurs opérations avec Arrow AI." : locale === "es" ? "Únete a más de 200 empresas que han transformado sus operaciones con Arrow AI." : "Join 200+ companies that have transformed their operations with Arrow AI."}
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all">
            {tCommon("bookDemo")}
          </Link>
        </div>
      </section>
    </div>
  );
}
