import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "AI Agents | Arrow AI",
  description: "Deploy autonomous AI agents that work 24/7 — customer service, sales prospecting, data analysis, operations, HR, and financial reporting agents built for enterprise.",
  keywords: ["AI agents", "autonomous agents", "enterprise AI agents", "customer service AI", "sales AI agent", "AI automation", "multi-agent AI"],
};

const agents = [
  {
    icon: "💬",
    titleKey: "agent1Title",
    descKey: "agent1Desc",
    color: "#FF6820",
    caps: ["Multi-channel (chat, email, voice)", "Sentiment detection", "CRM auto-update", "Escalation routing"],
    metric: "80% ticket deflection",
  },
  {
    icon: "🎯",
    titleKey: "agent2Title",
    descKey: "agent2Desc",
    color: "#6366F1",
    caps: ["LinkedIn & web research", "Personalized email drafting", "ICP scoring", "Calendar integration"],
    metric: "3× pipeline velocity",
  },
  {
    icon: "📊",
    titleKey: "agent3Title",
    descKey: "agent3Desc",
    color: "#10B981",
    caps: ["SQL & Python execution", "Chart generation", "Anomaly detection", "Scheduled reporting"],
    metric: "10h/week saved per analyst",
  },
  {
    icon: "⚙️",
    titleKey: "agent4Title",
    descKey: "agent4Desc",
    color: "#F59E0B",
    caps: ["KPI monitoring", "Alert & escalation", "Cross-system orchestration", "Workflow automation"],
    metric: "60% fewer incidents",
  },
  {
    icon: "👥",
    titleKey: "agent5Title",
    descKey: "agent5Desc",
    color: "#8B5CF6",
    caps: ["CV parsing & scoring", "Interview scheduling", "Candidate comms", "ATS integration"],
    metric: "5× faster time-to-hire",
  },
  {
    icon: "💰",
    titleKey: "agent6Title",
    descKey: "agent6Desc",
    color: "#06B6D4",
    caps: ["ERP data extraction", "Automated reconciliation", "Variance analysis", "PDF report generation"],
    metric: "90% faster month-close",
  },
];

const howItWorksIcons = ["🧠", "📋", "⚡", "🔄"];
const howItWorksDetails = [
  "The agent continuously monitors connected data sources — emails, databases, APIs, and internal systems — to detect events that require action.",
  "Using a reasoning engine, the agent decomposes the objective into sub-tasks, selects the right tools, and sequences actions to achieve the goal.",
  "The agent executes tasks autonomously — calling APIs, writing to databases, sending communications, and coordinating with other agents.",
  "Every interaction updates the agent's memory. Human feedback is incorporated to continuously improve accuracy and decision quality.",
];

const capabilities = [
  {
    icon: "🗃️",
    color: "#FF6820",
    title: "Read & Understand Data",
    desc: "Connect to databases, documents, emails, PDFs, and APIs — extracting structured insights from unstructured sources.",
  },
  {
    icon: "🛠️",
    color: "#6366F1",
    title: "Take Real Actions",
    desc: "Beyond answering questions, agents write to systems, send messages, update records, and trigger workflows in the real world.",
  },
  {
    icon: "🧬",
    color: "#10B981",
    title: "Learn & Improve",
    desc: "With reinforcement learning from human feedback and memory systems, agents get measurably better over time.",
  },
  {
    icon: "📡",
    color: "#F59E0B",
    title: "Report & Explain",
    desc: "Every decision is logged and explainable. Agents proactively surface insights and anomalies to the right stakeholders.",
  },
  {
    icon: "🤝",
    color: "#8B5CF6",
    title: "Collaborate with Humans",
    desc: "Human-in-the-loop controls allow agents to pause, request approval, or escalate when confidence is below threshold.",
  },
  {
    icon: "🔒",
    color: "#06B6D4",
    title: "Stay Secure & Compliant",
    desc: "Role-based access, audit logs, PII masking, and GDPR-compliant data handling built into every agent deployment.",
  },
];

export default function AgentsPage() {
  const t = useTranslations("agents");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section className="py-24 relative" style={{background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)"}}>
        <GlowOrb color="#FF6820" size={600} className="top-0 left-1/2 -translate-x-1/2 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6820] animate-pulse" />
            {locale === "fr" ? "Agents IA Autonomes" : locale === "es" ? "Agentes IA Autónomos" : "Autonomous AI Agents"}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-10">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-orange-500/25">
              {tCommon("bookDemo")}
            </Link>
            <Link href="/solutions" className="glass border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/5 transition-all">
              {locale === "fr" ? "Voir les solutions" : locale === "es" ? "Ver soluciones" : "View Solutions"}
            </Link>
          </div>
        </div>
      </section>

      {/* Agent Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Nos Agents" : locale === "es" ? "Nuestros Agentes" : "Our Agents"}
            title={locale === "fr" ? "Un agent pour chaque fonction" : locale === "es" ? "Un agente para cada función" : "An Agent for Every Function"}
            subtitle={locale === "fr" ? "Chaque agent est spécialisé, entraîné et déployé pour votre contexte métier spécifique." : locale === "es" ? "Cada agente está especializado, entrenado y desplegado para tu contexto empresarial específico." : "Each agent is specialized, trained, and deployed for your specific business context."}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map(({ icon, titleKey, descKey, color }) => (
              <div key={titleKey} className="glass-card rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 border" style={{background: `${color}22`, borderColor: `${color}44`}}>
                  {icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{t(titleKey as "agent1Title" | "agent2Title" | "agent3Title" | "agent4Title" | "agent5Title" | "agent6Title")}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{t(descKey as "agent1Desc" | "agent2Desc" | "agent3Desc" | "agent4Desc" | "agent5Desc" | "agent6Desc")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24" style={{background: "rgba(255,104,32,0.03)", borderTop: "1px solid rgba(255,104,32,0.1)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Capacités" : locale === "es" ? "Capacidades" : "Capabilities"}
            title={locale === "fr" ? "Ce que peuvent faire nos agents" : locale === "es" ? "Lo que pueden hacer nuestros agentes" : "What Our Agents Can Do"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/50 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={locale === "fr" ? "Processus" : locale === "es" ? "Proceso" : "Process"} title={t("howTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["howStep1", "howStep2", "howStep3", "howStep4"] as const).map((key, i) => (
              <div key={key} className="glass-card rounded-2xl p-6">
                <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold mb-4 shadow-lg shadow-orange-500/30">
                  {i + 1}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            {locale === "fr" ? "Déployez votre premier agent en 30 jours" : locale === "es" ? "Despliega tu primer agente en 30 días" : "Deploy Your First Agent in 30 Days"}
          </h2>
          <p className="text-white/80 mb-8">
            {locale === "fr" ? "Notre équipe vous accompagne de la conception au déploiement, avec un résultat garanti." : locale === "es" ? "Nuestro equipo te acompaña desde el diseño hasta el despliegue, con resultados garantizados." : "Our team guides you from design to deployment, with guaranteed results."}
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all">
            {tCommon("bookDemo")}
          </Link>
        </div>
      </section>
    </div>
  );
}
