import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import GlowOrb from "@/components/GlowOrb";
import SectionHeader from "@/components/SectionHeader";
import { prospectingContent, PROSPECTING_UPDATED } from "@/content/prospecting";
import { SITE_URL, SITE_NAME, LOCALES, OG_LOCALE, alternates, type Locale } from "@/lib/site";

const PATH = "/prospecting";

type Props = { params: Promise<{ locale: string }> };

function getLocale(raw: string): Locale {
  if (!LOCALES.includes(raw as Locale)) notFound();
  return raw as Locale;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = getLocale((await params).locale);
  const c = prospectingContent[locale];
  const url = `${SITE_URL}/${locale}${PATH}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: alternates(locale, PATH),
    robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      title: c.meta.title,
      description: c.meta.description,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
    },
    twitter: { card: "summary_large_image", title: c.meta.title, description: c.meta.description },
  };
}

/** JSON-LD graph: read by Google rich results and by AI answer engines (GEO). */
function structuredData(locale: Locale) {
  const c = prospectingContent[locale];
  const url = `${SITE_URL}/${locale}${PATH}`;
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/favicon.ico`,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: c.meta.title,
        description: c.meta.description,
        inLanguage: locale,
        isPartOf: { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: SITE_NAME, url: SITE_URL },
        about: { "@id": `${url}#software` },
        dateModified: PROSPECTING_UPDATED,
        breadcrumb: { "@id": `${url}#breadcrumb` },
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#definition", "#faq"] },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${SITE_URL}/${locale}` },
          { "@type": "ListItem", position: 2, name: c.breadcrumb, item: url },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}#software`,
        name: `${SITE_NAME} — ${c.breadcrumb}`,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Sales prospecting / lead generation",
        operatingSystem: "Web",
        description: c.definition,
        url,
        publisher: { "@id": orgId },
        featureList: c.features.map((f) => f.title),
        offers: c.plans
          .filter((p) => /\d/.test(p.price))
          .map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: p.price.replace(/[^\d]/g, ""),
            priceCurrency: "EUR",
            description: p.desc,
          })),
      },
      {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: c.howTitle,
        description: c.howSubtitle,
        step: c.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: c.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
}

export default async function ProspectingPage({ params }: Props) {
  const locale = getLocale((await params).locale);
  const c = prospectingContent[locale];

  return (
    <div className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(locale)).replace(/</g, "\\u003c") }}
      />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20"
        style={{ background: "linear-gradient(180deg, #2D0A00 0%, #1a0800 25%, #0F1B2D 70%)" }}
        aria-labelledby="hero-title"
      >
        <GlowOrb color="#FF6820" size={640} className="top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 opacity-40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/40">
            <ol className="flex justify-center gap-2">
              <li><Link href="/" className="hover:text-white/70">{SITE_NAME}</Link></li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white/60">{c.breadcrumb}</li>
            </ol>
          </nav>

          <p className="inline-flex items-center gap-2 glass text-[#FF6820] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 border border-[#FF6820]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6820] animate-pulse" />
            {c.badge}
          </p>

          <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
            {c.h1a}
            <br />
            <span className="gradient-text">{c.h1b}</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">{c.lead}</p>

          {/* Search-style CTA (works without JS: GET to contact with the query) */}
          <form action={`/${locale}/contact`} method="get" role="search" className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto shadow-2xl shadow-orange-500/10">
            <label htmlFor="icp" className="sr-only">{c.searchPlaceholder}</label>
            <input
              id="icp"
              name="q"
              type="text"
              placeholder={c.searchPlaceholder}
              className="flex-1 bg-transparent px-4 py-4 text-white placeholder:text-white/35 outline-none text-base"
            />
            <button type="submit" className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-7 py-4 rounded-xl transition-colors whitespace-nowrap">
              {c.searchCta} →
            </button>
          </form>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
            <span className="text-white/40">{c.examplesLabel}</span>
            {c.examples.map((ex) => (
              <a
                key={ex}
                href={`/${locale}/contact?q=${encodeURIComponent(ex)}`}
                className="glass rounded-full px-3 py-1.5 text-white/70 hover:text-white hover:border-[#FF6820]/40 transition-colors"
              >
                {ex}
              </a>
            ))}
          </div>
          <p className="mt-6 text-white/40 text-sm">{c.noCard}</p>

          <dl className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-14">
            {c.stats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl md:text-3xl font-bold gradient-text">{s.value}</dd>
                <dd className="text-white/50 text-xs mt-1">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Definition block — concise, quotable answer for AI engines */}
      <section id="definition" className="py-16 border-y border-white/5" aria-labelledby="definition-title">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="definition-title" className="text-2xl md:text-3xl font-bold text-white mb-4">{c.definitionTitle}</h2>
          <p className="text-white/70 text-lg leading-relaxed">{c.definition}</p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24 relative">
        <GlowOrb color="#FF6820" size={500} className="top-1/3 -left-64 opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={c.howTag} title={c.howTitle} subtitle={c.howSubtitle} />
          <ol className="grid md:grid-cols-3 gap-6">
            {c.steps.map((s, i) => (
              <li key={s.title} className="glass-card rounded-3xl p-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-orange flex items-center justify-center text-white font-bold text-lg mb-6">{i + 1}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-white/60 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={c.featuresTag} title={c.featuresTitle} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.features.map((f) => (
              <article key={f.title} className="glass-card rounded-3xl p-8">
                <div className="text-3xl mb-4" aria-hidden>{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-white/60 leading-relaxed">{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="py-24 relative">
        <GlowOrb color="#FF8C42" size={500} className="top-1/4 -right-64 opacity-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={c.useCasesTag} title={c.useCasesTitle} />
          <div className="grid md:grid-cols-2 gap-6">
            {c.useCases.map((u) => (
              <article key={u.role} className="glass-card rounded-3xl p-8">
                <h3 className="text-[#FF6820] text-sm font-semibold uppercase tracking-wider mb-4">{u.role}</h3>
                <p className="font-mono text-sm text-white/80 bg-black/30 border border-white/10 rounded-xl px-4 py-3 mb-4">“{u.query}”</p>
                <p className="text-white/60">→ {u.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table — tables are easy for LLMs to extract */}
      <section id="comparison" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={c.compareTag} title={c.compareTitle} />
          <div className="glass rounded-3xl overflow-x-auto">
            <table className="w-full text-left text-sm md:text-base">
              <caption className="sr-only">{c.compareTitle}</caption>
              <thead>
                <tr className="border-b border-white/10">
                  {c.compareCols.map((col, i) => (
                    <th key={i} scope="col" className={`px-5 py-4 font-semibold ${i === 1 ? "text-[#FF6820]" : "text-white/60"}`}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.compareRows.map(([label, ours, theirs]) => (
                  <tr key={label} className="border-b border-white/5 last:border-0">
                    <th scope="row" className="px-5 py-4 font-medium text-white/80">{label}</th>
                    <td className="px-5 py-4 text-white">✓ {ours}</td>
                    <td className="px-5 py-4 text-white/45">{theirs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 border-y border-white/5" aria-labelledby="proof-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="proof-title" className="text-center text-white/40 text-sm uppercase tracking-widest mb-10">{c.proofTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.proof.map((p) => (
              <figure key={p.author} className="glass-card rounded-3xl p-8">
                <blockquote className="text-white/80 leading-relaxed mb-4">“{p.quote}”</blockquote>
                <figcaption className="text-white/40 text-sm">— {p.author}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={c.pricingTag} title={c.pricingTitle} />
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {c.plans.map((p) => (
              <article
                key={p.name}
                className={`rounded-3xl p-8 flex flex-col ${p.featured ? "glass-strong border-[#FF6820]/50 shadow-2xl shadow-orange-500/20" : "glass-card"}`}
              >
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <p className="mt-4 mb-2">
                  <span className="text-4xl font-bold text-white">{p.price}</span>
                  <span className="text-white/50">{p.period}</span>
                </p>
                <p className="text-white/50 text-sm mb-6">{p.desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="text-white/75 text-sm flex gap-2"><span className="text-[#FF6820]">✓</span>{f}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center font-semibold px-6 py-3 rounded-full transition-all ${p.featured ? "bg-[#FF6820] hover:bg-[#FF8C42] text-white" : "glass hover:bg-white/10 text-white border border-white/20"}`}
                >
                  {p.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ — native <details>, zero JS, content always in the HTML */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader tag={c.faqTag} title={c.faqTitle} />
          <div className="space-y-3">
            {c.faq.map((f, i) => (
              <details key={f.q} className="glass rounded-2xl group" open={i === 0}>
                <summary className="cursor-pointer list-none px-6 py-5 flex justify-between items-center gap-4 text-white font-medium">
                  <h3 className="text-base">{f.q}</h3>
                  <span className="text-[#FF6820] text-xl transition-transform group-open:rotate-45" aria-hidden>+</span>
                </summary>
                <p className="px-6 pb-5 text-white/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-white/30 text-xs">
            {c.updated}: <time dateTime={PROSPECTING_UPDATED}>{new Date(PROSPECTING_UPDATED).toLocaleDateString(locale, { dateStyle: "long" })}</time>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <GlowOrb color="#FF6820" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{c.ctaTitle}</h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">{c.ctaText}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-[#FF6820] hover:bg-[#FF8C42] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-orange-500/25">
                {c.ctaButton}
              </Link>
              <Link href="/contact" className="glass hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-full transition-all border border-white/20">
                {c.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
