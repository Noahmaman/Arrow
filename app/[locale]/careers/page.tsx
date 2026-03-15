import { useTranslations } from "next-intl";
import GlowOrb from "@/components/GlowOrb";

const jobs = [
  {
    title: "AI Engineer",
    location: "Paris",
    type: "Full-time",
    department: "Engineering",
    description:
      "Design and deploy production-grade AI systems and LLM pipelines for enterprise clients across EMEA.",
  },
  {
    title: "ML Researcher",
    location: "Remote",
    type: "Full-time",
    department: "Research",
    description:
      "Advance our core machine learning capabilities with a focus on NLP, retrieval-augmented generation, and fine-tuning.",
  },
  {
    title: "Sales Executive",
    location: "Dubai",
    type: "Full-time",
    department: "Sales",
    description:
      "Drive new business across the Middle East and GCC region, building relationships with C-suite enterprise buyers.",
  },
  {
    title: "Product Manager",
    location: "Paris",
    type: "Full-time",
    department: "Product",
    description:
      "Own the roadmap for our AI platform suite, collaborating with engineering and design to ship impactful features.",
  },
  {
    title: "Data Engineer",
    location: "Montréal",
    type: "Full-time",
    department: "Engineering",
    description:
      "Build and maintain scalable data infrastructure and pipelines that power Arrow's AI products.",
  },
  {
    title: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    department: "Engineering",
    description:
      "Craft beautiful, performant interfaces for our AI platform using Next.js, TypeScript, and modern design systems.",
  },
];

const benefits = [
  {
    icon: "🌍",
    title: "Remote Work",
    description: "Work from anywhere with flexible remote and hybrid options across all our offices.",
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description: "Comprehensive health, dental, and vision coverage for you and your family.",
  },
  {
    icon: "📚",
    title: "Learning Budget",
    description: "€2,000 annual budget for courses, conferences, and professional development.",
  },
  {
    icon: "📈",
    title: "Stock Options",
    description: "Competitive equity packages so you share in Arrow's long-term success.",
  },
  {
    icon: "⏰",
    title: "Flexible Hours",
    description: "Async-first culture with flexible schedules built around your productivity.",
  },
  {
    icon: "✈️",
    title: "Team Retreats",
    description: "Twice-yearly company retreats to connect with the global Arrow team in person.",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-16 relative overflow-hidden" style={{ background: "#0F1B2D" }}>
      {/* Hero */}
      <section
        className="py-24 relative"
        style={{ background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 65%)" }}
      >
        <GlowOrb color="#FF6820" size={500} className="top-0 left-1/2 -translate-x-1/2 opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#FF6820] border border-[#FF6820]/30 bg-[#FF6820]/10 mb-6">
            We&apos;re Hiring
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Build the future of{" "}
            <span className="gradient-text">enterprise AI</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed">
            Join a world-class team working at the intersection of cutting-edge AI research and
            real-world enterprise impact.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Open Positions</h2>
            <p className="text-white/50">Find your next role at Arrow AI</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:border-[#FF6820]/30 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-medium text-[#FF6820] uppercase tracking-wider">
                      {job.department}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-1 group-hover:text-[#FF6820] transition-colors">
                      {job.title}
                    </h3>
                  </div>
                  <span className="glass border border-white/10 rounded-full px-3 py-1 text-xs text-white/60">
                    {job.type}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{job.description}</p>
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex items-center gap-1.5 text-white/50 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {job.location}
                  </div>
                  <button className="text-[#FF6820] text-sm font-medium hover:underline">
                    Apply &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ background: "rgba(255,104,32,0.03)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Why Arrow</h2>
            <p className="text-white/50">Benefits designed for a world-class, global team</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="glass-card rounded-2xl p-6 flex gap-4 items-start">
                <span className="text-3xl">{benefit.icon}</span>
                <div>
                  <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA – Send CV */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            <GlowOrb color="#FF6820" size={300} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don&apos;t see the right role?
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We&apos;re always looking for exceptional talent. Send us your CV and we&apos;ll reach
                out when something fits.
              </p>
              <a
                href="mailto:careers@arrowai.com"
                className="inline-block bg-gradient-orange text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all"
              >
                Send Your CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
