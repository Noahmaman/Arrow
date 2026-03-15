"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import GlowOrb from "@/components/GlowOrb";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    { city: "Paris", country: locale === "fr" ? "France" : "France", address: "15 Rue de la Paix, 75001 Paris", phone: "+33 1 23 45 67 89", emoji: "🇫🇷" },
    { city: "Montréal", country: locale === "fr" ? "Canada" : "Canada", address: "1000 Rue De La Gauchetière O", phone: "+1 514 000 0000", emoji: "🇨🇦" },
    { city: "Dubai", country: "UAE", address: "Dubai Internet City, Building 3", phone: "+971 4 000 0000", emoji: "🇦🇪" },
  ];

  return (
    <div className="pt-16 relative overflow-hidden">
      {/* Hero */}
      <section className="py-20 relative" style={{background: "linear-gradient(180deg, #1a0800 0%, #0F1B2D 60%)"}}>
        <GlowOrb color="#FF6820" size={400} className="top-0 left-1/2 -translate-x-1/2 opacity-25" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">{t("title")}</h1>
          <p className="text-white/60 text-xl">{t("subtitle")}</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass-card rounded-3xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#10B981]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-2">{t("successMessage")}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { key: "name", label: t("nameLabel"), type: "text" },
                    { key: "email", label: t("emailLabel"), type: "email" },
                    { key: "company", label: t("companyLabel"), type: "text" },
                  ].map(({ key, label, type }) => (
                    <div key={key}>
                      <label className="block text-white/70 text-sm font-medium mb-2">{label}</label>
                      <input
                        type={type}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm(prev => ({...prev, [key]: e.target.value}))}
                        className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 border border-white/10 focus:border-[#FF6820]/50 focus:outline-none transition-colors bg-transparent"
                        placeholder={label}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">{t("messageLabel")}</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm(prev => ({...prev, message: e.target.value}))}
                      className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/30 border border-white/10 focus:border-[#FF6820]/50 focus:outline-none transition-colors bg-transparent resize-none"
                      placeholder={t("messageLabel")}
                    />
                  </div>
                  <button type="submit" className="w-full bg-gradient-orange text-white font-semibold py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/30 transition-all">
                    {t("submitButton")}
                  </button>
                </form>
              )}
            </div>

            {/* Offices */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">{t("officeTitle")}</h2>
              {offices.map(({ city, country, address, phone, emoji }) => (
                <div key={city} className="glass-card rounded-2xl p-6 flex items-start gap-4">
                  <span className="text-3xl">{emoji}</span>
                  <div>
                    <h3 className="text-white font-semibold">{city}, {country}</h3>
                    <p className="text-white/50 text-sm mt-1">{address}</p>
                    <p className="text-[#FF6820] text-sm mt-1">{phone}</p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="glass-card rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">
                  {locale === "fr" ? "Réseaux sociaux" : locale === "es" ? "Redes sociales" : "Follow Us"}
                </h3>
                <div className="flex gap-4">
                  {[
                    { name: "LinkedIn", icon: "in", href: "#" },
                    { name: "Twitter/X", icon: "𝕏", href: "#" },
                    { name: "GitHub", icon: "⌥", href: "#" },
                  ].map(({ name, icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      className="glass border border-white/10 hover:border-[#FF6820]/40 w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-all text-sm font-bold"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
