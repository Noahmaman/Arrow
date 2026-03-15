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
      <section
        className="py-32 relative min-h-[70vh] flex items-center"
        style={{ background: "linear-gradient(135deg, #1a0800 0%, #0a0a1a 50%, #0F1B2D 100%)" }}
      >
        <GlowOrb color="#FF6820" size={700} className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 opacity-35" />
        <GlowOrb color="#6366F1" size={400} className="bottom-0 right-0 opacity-20" />
        <GlowOrb color="#FF6820" size={200} className="top-1/3 left-0 opacity-15" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#FF6820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6820] animate-pulse" />
            {locale === "fr" ? "Agents IA Autonomes" : locale === "es" ? "Agentes IA Autónomos" : "Autonomous AI Agents"}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
            {locale === "fr" ? "Agents IA" : locale === "es" ? "Agentes IA" : "Autonomous"}
            <br />
            <span className="gradient-text">
              {locale === "fr" ? "Autonomes" : locale === "es" ? "Autónomos" : "AI Agents"}
            </span>
          </h1>
          <p className="text-white/60 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-4">
            {t("subtitle")}
          </p>
          <p className="text-white/35 text-base max-w-2xl mx-auto mb-12">
            {locale === "fr"
              ? "Construits sur notre plateforme d'orchestration multi-agents, chaque agent est conçu pour votre secteur."
              : locale === "es"
              ? "Construidos sobre nuestra plataforma multi-agente, cada agente está diseñado para tu sector."
              : "Built on our multi-agent orchestration platform, each agent is industry-tuned and integrated with your existing systems."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <Link
              href="/contact"
              className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 text-base"
            >
              {tCommon("bookDemo")}
            </Link>
            <Link
              href="/solutions"
              className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/20 text-base"
            >
              {locale === "fr" ? "Voir les solutions" : locale === "es" ? "Ver soluciones" : "View Solutions"}
            </Link>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { v: "200+", l: locale === "fr" ? "Agents déployés" : locale === "es" ? "Agentes desplegados" : "Agents Deployed" },
              { v: "24/7", l: locale === "fr" ? "Disponibilité" : locale === "es" ? "Disponibilidad" : "Availability" },
              { v: "92%", l: locale === "fr" ? "Taux d'automatisation" : locale === "es" ? "Tasa de automatización" : "Automation Rate" },
              { v: "<4w", l: locale === "fr" ? "Délai de déploiement" : locale === "es" ? "Tiempo de despliegue" : "Time to Deploy" },
            ].map(({ v, l }) => (
              <div key={l} className="glass-card rounded-2xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{v}</div>
                <div className="text-white/50 text-xs mt-1">{l}</div>
              </div>
            ))}
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
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map(({ icon, titleKey, descKey, color, caps, metric }) => (
              <div
                key={titleKey}
                className="glass-card rounded-3xl p-8 group hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${color}22`, border: `1px solid ${color}44` }}
                  >
                    {icon}
                  </div>
                  <div
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}30` }}
                  >
                    {metric}
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-3">
                  {t(titleKey as "agent1Title" | "agent2Title" | "agent3Title" | "agent4Title" | "agent5Title" | "agent6Title")}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-grow">
                  {t(descKey as "agent1Desc" | "agent2Desc" | "agent3Desc" | "agent4Desc" | "agent5Desc" | "agent6Desc")}
                </p>
                <ul className="space-y-2 mb-6">
                  {caps.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-white/50 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
                      {cap}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all"
                  style={{ color }}
                >
                  {locale === "fr" ? "Déployer cet agent" : locale === "es" ? "Desplegar agente" : "Deploy This Agent"}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #0a1520 0%, #0F1B2D 100%)" }}
      >
        <GlowOrb color="#FF6820" size={500} className="top-1/2 right-0 -translate-y-1/2 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Processus" : locale === "es" ? "Proceso" : "How It Works"}
            title={t("howTitle")}
            subtitle={
              locale === "fr"
                ? "Nos agents suivent une boucle Percevoir–Planifier–Agir–Apprendre qui les rend plus efficaces au fil du temps."
                : locale === "es"
                ? "Nuestros agentes siguen un ciclo Percibir–Planificar–Actuar–Aprender que los hace más eficaces con el tiempo."
                : "Our agents follow a Perceive–Plan–Act–Learn loop that makes them increasingly effective over time."
            }
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(["howStep1", "howStep2", "howStep3", "howStep4"] as const).map((key, i) => (
              <div key={key} className="glass-card rounded-3xl p-8 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4"
                  style={{ background: ["#FF6820", "#6366F1", "#10B981", "#F59E0B"][i] + "22", border: `2px solid ${["#FF6820", "#6366F1", "#10B981", "#F59E0B"][i]}44` }}
                >
                  {howItWorksIcons[i]}
                </div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-2"
                  style={{ color: ["#FF6820", "#6366F1", "#10B981", "#F59E0B"][i] }}
                >
                  Step 0{i + 1}
                </div>
                <p className="text-white font-semibold mb-3 text-sm">{t(key)}</p>
                <p className="text-white/40 text-xs leading-relaxed">{howItWorksDetails[i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag={locale === "fr" ? "Capacités" : locale === "es" ? "Capacidades" : "Capabilities"}
            title={locale === "fr" ? "Ce que peuvent faire nos agents" : locale === "es" ? "Lo que pueden hacer nuestros agentes" : "What Our Agents Can Do"}
            subtitle={
              locale === "fr"
                ? "Bien plus que du chatbot — nos agents agissent sur vos systèmes et s'améliorent en continu."
                : locale === "es"
                ? "Mucho más que un chatbot — nuestros agentes actúan sobre tus sistemas y mejoran continuamente."
                : "Far beyond chatbots — our agents act on your systems and continuously improve."
            }
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon, color, title, desc }) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-6 flex gap-5 items-start border border-white/5 hover:border-white/10 transition-colors"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${color}22`, border: `1px solid ${color}44` }}
                >
                  {icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-base mb-2">{title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a0800 0%, #0a0a1a 100%)" }} />
        <GlowOrb color="#FF6820" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#FF6820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6820] animate-pulse" />
            {locale === "fr" ? "Démonstration live" : locale === "es" ? "Demostración en vivo" : "Live Demo"}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {locale === "fr" ? "Déployez votre premier agent" : locale === "es" ? "Despliega tu primer agente" : "Deploy Your First Agent"}
            <br />
            <span className="gradient-text">
              {locale === "fr" ? "en 30 jours" : locale === "es" ? "en 30 días" : "in 30 Days"}
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            {locale === "fr"
              ? "Notre équipe vous accompagne de la conception au déploiement. Réservez une session de 30 minutes — nous vous montrerons un agent sur vos données réelles."
              : locale === "es"
              ? "Nuestro equipo te acompaña desde el diseño hasta el despliegue. Reserva una sesión de 30 minutos — te mostraremos un agente con tus datos reales."
              : "Our team guides you from design to deployment. Book a 30-minute session — we'll show you an agent working on your actual data and workflows."}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-1"
            >
              {tCommon("bookDemo")}
            </Link>
            <Link
              href="/services"
              className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/20 text-base"
            >
              {locale === "fr" ? "Explorer nos services" : locale === "es" ? "Explorar servicios" : "Explore Services"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
