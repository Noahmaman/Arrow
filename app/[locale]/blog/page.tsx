import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Metadata } from "next";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description: "Expert perspectives on enterprise AI, automation trends, and digital transformation. Guides, case studies, and technical deep dives from the Arrow AI team.",
};

const popularPosts = [
  { title: "How to Build Your Enterprise AI Roadmap in 2025", date: "March 10, 2025", slug: "enterprise-ai-roadmap-2025" },
  { title: "RAG vs Fine-Tuning: The Right Approach for Enterprise AI", date: "February 8, 2025", slug: "rag-vs-fine-tuning" },
  { title: "Multi-Agent Architectures: Future of Enterprise Automation", date: "March 5, 2025", slug: "multi-agent-architectures" },
  { title: "5 AI Implementation Mistakes (And How to Avoid Them)", date: "February 15, 2025", slug: "ai-implementation-mistakes" },
];

const categoryCounts = [
  { name: "AI Strategy", count: 12, color: "#FF6820" },
  { name: "Tech Deep Dive", count: 9, color: "#6366F1" },
  { name: "Case Studies", count: 7, color: "#10B981" },
  { name: "Industry News", count: 5, color: "#F59E0B" },
];

const posts = [
  {
    category: "AI Strategy",
    categoryColor: "#FF6820",
    title: "How to Build Your Enterprise AI Roadmap in 2025",
    excerpt: "A practical guide to identifying the highest-value AI opportunities in your organization and building a realistic implementation plan.",
    date: "March 10, 2025",
    readTime: "8 min",
    author: "Alexandre Martin",
    authorRole: "CEO",
  },
  {
    category: "Tech Deep Dive",
    categoryColor: "#6366F1",
    title: "Multi-Agent Architectures: The Future of Enterprise Automation",
    excerpt: "Why single AI models aren't enough for complex enterprise workflows, and how orchestrated multi-agent systems unlock new possibilities.",
    date: "March 5, 2025",
    readTime: "12 min",
    author: "Sarah Chen",
    authorRole: "CTO",
  },
  {
    category: "Case Studies",
    categoryColor: "#10B981",
    title: "How We Reduced Fraud by 85% at a Top European Bank",
    excerpt: "A deep dive into our AI fraud detection deployment — the technical architecture, challenges, and remarkable results achieved in 6 months.",
    date: "February 28, 2025",
    readTime: "10 min",
    author: "Omar Benali",
    authorRole: "Chief AI Officer",
  },
  {
    category: "Industry News",
    categoryColor: "#F59E0B",
    title: "The State of Healthcare AI: 2025 Trends and Predictions",
    excerpt: "From diagnostic assistance to drug discovery, we analyze the most impactful AI applications reshaping the healthcare industry.",
    date: "February 20, 2025",
    readTime: "7 min",
    author: "Laura Dubois",
    authorRole: "VP Product",
  },
  {
    category: "AI Strategy",
    categoryColor: "#FF6820",
    title: "5 AI Implementation Mistakes (And How to Avoid Them)",
    excerpt: "Based on 200+ enterprise deployments, here are the most common AI implementation pitfalls and how to navigate them successfully.",
    date: "February 15, 2025",
    readTime: "9 min",
    author: "Ana Rodriguez",
    authorRole: "VP Sales",
  },
  {
    category: "Tech Deep Dive",
    categoryColor: "#6366F1",
    title: "RAG vs Fine-Tuning: Choosing the Right Approach for Enterprise AI",
    excerpt: "A technical comparison of retrieval-augmented generation and fine-tuning for enterprise use cases, with guidance on when to use each.",
    date: "February 8, 2025",
    readTime: "15 min",
    author: "James Okafor",
    authorRole: "Head of Engineering",
  },
];

export default function BlogPage() {
  const t = useTranslations("blog");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <div className="pt-16 relative overflow-hidden">
      <section className="py-24 relative" style={{background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)"}}>
        <GlowOrb color="#FF6820" size={400} className="top-0 left-1/2 -translate-x-1/2 opacity-25" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6 border border-[#FF6820]/30">
            {locale === "fr" ? "Insights & Ressources" : locale === "es" ? "Insights y Recursos" : "Insights & Resources"}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{t("title")}</h1>
          <p className="text-white/60 text-xl leading-relaxed">{t("subtitle")}</p>
        </div>
      </section>

      {/* Category filter */}
      <div className="border-b border-white/10 sticky top-16 z-40 glass-strong">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
            {[
              { label: t("all"), active: true },
              { label: t("aiStrategy"), active: false },
              { label: t("techDeep"), active: false },
              { label: t("caseStudies"), active: false },
              { label: t("industry"), active: false },
            ].map(({ label, active }) => (
              <button key={label} className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${active ? "bg-[#FF6820] text-white" : "glass text-white/60 hover:text-white border border-white/10"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

            {/* Post grid — spans 2 cols */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {posts.map(({ category, categoryColor, title, excerpt, date, readTime, author, authorRole }) => (
                <article key={title} className="glass-card rounded-3xl overflow-hidden flex flex-col group hover:border-white/20 transition-all">
                  {/* Color bar */}
                  <div className="h-1 w-full" style={{background: categoryColor}} />
                  <div className="p-6 flex flex-col flex-1 gap-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: `${categoryColor}22`, color: categoryColor, border: `1px solid ${categoryColor}44` }}
                      >
                        {category}
                      </span>
                      <span className="text-white/30 text-xs">{readTime} read</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-[#FF8C42] transition-colors line-clamp-3">{title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed line-clamp-4">{excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{background: categoryColor}}>
                          {author.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                          <div className="text-white/70 text-xs font-semibold">{author}</div>
                          <div className="text-white/30 text-xs">{authorRole} · {date}</div>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-[#FF6820] text-xs font-semibold">
                        {locale === "fr" ? "Lire" : locale === "es" ? "Leer" : "Read"}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-40">

              {/* Popular posts */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="text-white font-bold text-base mb-5 pb-3 border-b border-white/10">
                  {locale === "fr" ? "Articles populaires" : locale === "es" ? "Artículos populares" : "Popular Posts"}
                </h3>
                <div className="space-y-4">
                  {popularPosts.map(({ title, date, slug }, i) => (
                    <Link key={slug} href={`/blog/${slug}`} className="flex gap-3 items-start group">
                      <span className="text-[#FF6820] font-bold text-sm shrink-0 w-5 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-white/70 text-sm font-medium leading-snug group-hover:text-white transition-colors line-clamp-2">{title}</p>
                        <p className="text-white/30 text-xs mt-0.5">{date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="glass-card rounded-3xl p-6">
                <h3 className="text-white font-bold text-base mb-5 pb-3 border-b border-white/10">
                  {locale === "fr" ? "Catégories" : locale === "es" ? "Categorías" : "Categories"}
                </h3>
                <div className="space-y-1">
                  {categoryCounts.map(({ name, count, color }) => (
                    <button key={name} className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-white/5 transition-colors group">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                        <span className="text-white/60 text-sm group-hover:text-white transition-colors">{name}</span>
                      </div>
                      <span className="text-white/30 text-xs">{count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="rounded-3xl p-6" style={{ background: "rgba(255,104,32,0.08)", border: "1px solid rgba(255,104,32,0.25)" }}>
                <div className="w-10 h-10 bg-gradient-orange rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-base mb-2">
                  {locale === "fr" ? "Restez informé" : locale === "es" ? "Mantente informado" : "Stay Informed"}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {locale === "fr"
                    ? "Recevez nos derniers insights IA dans votre boîte mail. Pas de spam."
                    : locale === "es"
                    ? "Recibe nuestros últimos insights de IA en tu correo. Sin spam."
                    : "Get our latest AI insights delivered to your inbox. No spam."}
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder={locale === "fr" ? "votre@email.com" : locale === "es" ? "tu@email.com" : "your@email.com"}
                    className="w-full glass border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#FF6820]/50 transition-colors bg-transparent"
                  />
                  <button className="w-full bg-gradient-orange text-white text-sm font-semibold py-2.5 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                    {locale === "fr" ? "S'abonner" : locale === "es" ? "Suscribirse" : "Subscribe"}
                  </button>
                </div>
              </div>

            </aside>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-orange opacity-90" />
        <GlowOrb color="#ffffff" size={400} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {locale === "fr" ? "Prêt à passer à l'action ?" : locale === "es" ? "¿Listo para pasar a la acción?" : "Ready to Take Action?"}
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            {locale === "fr"
              ? "Mettez en pratique ce que vous avez appris. Parlez à un expert Arrow AI dès aujourd'hui."
              : locale === "es"
              ? "Pon en práctica lo que has aprendido. Habla con un experto de Arrow AI hoy."
              : "Put what you've learned into practice. Speak with an Arrow AI expert today."}
          </p>
          <Link href="/contact" className="inline-block bg-white text-[#FF6820] font-bold px-10 py-4 rounded-full text-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
            {tCommon("bookDemo")}
          </Link>
        </div>
      </section>
    </div>
  );
}
