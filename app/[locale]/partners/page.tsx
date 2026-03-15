import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Partners & Integrations | Arrow AI",
  description: "Arrow AI partners with leading technology providers — OpenAI, Anthropic, Google Cloud, AWS, Azure, Salesforce, and 200+ integrations to deliver seamless enterprise AI.",
};

const techPartners = [
  { name: "Anthropic", logo: "AN", color: "#FF6820" },
  { name: "OpenAI", logo: "OA", color: "#10B981" },
  { name: "Google DeepMind", logo: "GD", color: "#4285F4" },
  { name: "Mistral AI", logo: "MI", color: "#FF4444" },
  { name: "Hugging Face", logo: "HF", color: "#FF9D00" },
  { name: "LangChain", logo: "LC", color: "#6366F1" },
];

const cloudPartners = [
  { name: "AWS", logo: "AWS", color: "#FF9900" },
  { name: "Google Cloud", logo: "GC", color: "#4285F4" },
  { name: "Microsoft Azure", logo: "AZ", color: "#0078D4" },
  { name: "OVHcloud", logo: "OV", color: "#123F6D" },
];

const integrations = [
  { name: "Salesforce", logo: "SF", color: "#00A1E0" },
  { name: "SAP", logo: "SAP", color: "#0070CD" },
  { name: "HubSpot", logo: "HS", color: "#FF7A59" },
  { name: "Slack", logo: "SL", color: "#4A154B" },
  { name: "Microsoft Teams", logo: "MS", color: "#6264A7" },
  { name: "Jira", logo: "JR", color: "#0052CC" },
  { name: "ServiceNow", logo: "SN", color: "#81B5A1" },
  { name: "Workday", logo: "WD", color: "#FF5A00" },
];

export default function PartnersPage() {
  const t = useTranslations("partners");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      <section className="py-24 relative" style={{background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)"}}>
        <GlowOrb color="#FF6820" size={400} className="top-0 left-1/2 -translate-x-1/2 opacity-25" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{t("title")}</h1>
          <p className="text-white/60 text-xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={locale === "fr" ? "IA & Modèles" : locale === "es" ? "IA y Modelos" : "AI & Models"} title={t("techPartners")} />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techPartners.map(({ name, logo, color }) => (
              <div key={name} className="glass-card rounded-2xl p-6 text-center group">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-3" style={{background: color}}>
                  {logo}
                </div>
                <p className="text-white/60 text-sm font-medium group-hover:text-white transition-colors">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Partners */}
      <section className="py-16" style={{background: "rgba(255,104,32,0.03)", borderTop: "1px solid rgba(255,104,32,0.1)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={locale === "fr" ? "Infrastructure" : locale === "es" ? "Infraestructura" : "Infrastructure"} title={t("cloudPartners")} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cloudPartners.map(({ name, logo, color }) => (
              <div key={name} className="glass-card rounded-2xl p-6 text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold mx-auto mb-3" style={{background: color}}>
                  {logo}
                </div>
                <p className="text-white/60 text-sm font-medium group-hover:text-white transition-colors">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={locale === "fr" ? "200+ Intégrations" : locale === "es" ? "200+ Integraciones" : "200+ Integrations"} title={locale === "fr" ? "S'intègre à votre stack" : locale === "es" ? "Se integra con tu stack" : "Integrates With Your Stack"} />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {integrations.map(({ name, logo, color }) => (
              <div key={name} className="glass-card rounded-xl p-4 text-center group">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xs mx-auto mb-2" style={{background: color}}>
                  {logo}
                </div>
                <p className="text-white/50 text-xs group-hover:text-white transition-colors">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">{t("bePartner")}</h2>
          <p className="text-white/80 mb-8">{t("bePartnerDesc")}</p>
          <Link href="/contact" className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all">
            {tCommon("getStarted")}
          </Link>
        </div>
      </section>
    </div>
  );
}
