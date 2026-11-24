import type { Locale } from "@/lib/site";

// Copy for the /prospecting landing page (AI search engine for B2B prospecting).
// TODO: replace the figures in `stats` and `proof` with your real, verifiable numbers
// before going live — AI answer engines quote them verbatim.

export type ProspectingContent = {
  meta: { title: string; description: string; keywords: string[] };
  breadcrumb: string;
  badge: string;
  h1a: string;
  h1b: string;
  lead: string;
  searchPlaceholder: string;
  searchCta: string;
  examplesLabel: string;
  examples: string[];
  noCard: string;
  stats: { value: string; label: string }[];
  definitionTitle: string;
  definition: string;
  howTag: string;
  howTitle: string;
  howSubtitle: string;
  steps: { title: string; text: string }[];
  featuresTag: string;
  featuresTitle: string;
  features: { icon: string; title: string; text: string }[];
  useCasesTag: string;
  useCasesTitle: string;
  useCases: { role: string; query: string; result: string }[];
  compareTag: string;
  compareTitle: string;
  compareCols: [string, string, string];
  compareRows: [string, string, string][];
  proofTitle: string;
  proof: { quote: string; author: string }[];
  pricingTag: string;
  pricingTitle: string;
  plans: { name: string; price: string; period: string; desc: string; features: string[]; cta: string; featured?: boolean }[];
  faqTag: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
  ctaSecondary: string;
  updated: string;
};

const en: ProspectingContent = {
  meta: {
    title: "AI Prospecting Search Engine — Find B2B Leads in Plain English",
    description:
      "Describe your ideal customer in one sentence. Arrow AI searches the live web, finds matching companies and decision-makers, verifies their emails and exports them to your CRM.",
    keywords: ["AI prospecting", "B2B lead generation", "AI lead search", "find B2B leads", "sales prospecting tool", "verified business emails", "ICP search", "AI SDR"],
  },
  breadcrumb: "AI Prospecting",
  badge: "AI search engine for B2B sales",
  h1a: "Find your next customers",
  h1b: "by simply describing them",
  lead:
    "Arrow AI Prospecting turns a sentence into a qualified lead list. Our agents read the live web — websites, job posts, news, registries — to find companies that truly match, the right people inside them, and verified ways to reach them.",
  searchPlaceholder: "e.g. French SaaS companies hiring SDRs that raised a Series A in the last 12 months",
  searchCta: "Search leads",
  examplesLabel: "Try:",
  examples: [
    "Dental clinics in Lyon with online booking",
    "US logistics companies using Salesforce",
    "Heads of Growth at fintechs in Berlin",
    "E-commerce brands launching in Spain",
  ],
  noCard: "Free trial · No credit card · 50 leads included",
  stats: [
    { value: "60 s", label: "from prompt to lead list" },
    { value: "95%", label: "email deliverability target" },
    { value: "30+", label: "data signals per company" },
    { value: "3", label: "languages: EN · FR · ES" },
  ],
  definitionTitle: "What is AI prospecting?",
  definition:
    "AI prospecting is the use of AI agents to find, qualify and enrich sales leads from a natural-language description of an ideal customer profile (ICP). Instead of filtering a static database by industry and headcount, Arrow AI reads live public sources, checks each company against every criterion you wrote, explains why it matches, and returns decision-makers with verified contact details.",
  howTag: "How it works",
  howTitle: "From one sentence to a pipeline in 3 steps",
  howSubtitle: "No filters to learn, no boolean queries. Write like you would brief a sales assistant.",
  steps: [
    { title: "Describe your ideal customer", text: "Industry, location, tech stack, hiring, funding, growth signals — any criterion, in plain language." },
    { title: "AI agents search and qualify", text: "Agents browse the web in real time, check every criterion company by company and score each match with a written justification." },
    { title: "Reach the right people", text: "Get decision-makers with verified emails and phone numbers, then export to HubSpot, Salesforce, Pipedrive or CSV." },
  ],
  featuresTag: "Features",
  featuresTitle: "Everything you need to fill the pipeline",
  features: [
    { icon: "🔎", title: "Natural-language search", text: "Search with any criterion, even ones no database tracks: “uses Shopify and sells refurbished goods”." },
    { icon: "🌐", title: "Live web data", text: "Results come from fresh public sources, not a list compiled two years ago." },
    { icon: "✅", title: "Explained matches", text: "Each lead comes with the evidence and source links that prove it fits your ICP." },
    { icon: "📧", title: "Verified contacts", text: "Waterfall enrichment and real-time email verification to protect your sender reputation." },
    { icon: "📡", title: "Buying signals", text: "Funding rounds, hiring, new locations, tech changes — get alerted when accounts become ready to buy." },
    { icon: "🔗", title: "CRM sync", text: "One-click export to HubSpot, Salesforce, Pipedrive, Lemlist or CSV, with deduplication." },
  ],
  useCasesTag: "Use cases",
  useCasesTitle: "Built for every revenue team",
  useCases: [
    { role: "Founders", query: "Seed-stage HR tech startups in Europe with fewer than 20 employees", result: "First 100 design partners in an afternoon." },
    { role: "Sales teams (SDR / AE)", query: "Manufacturers in Germany opening a new plant this year", result: "Accounts with an active trigger event, ready for outreach." },
    { role: "Agencies", query: "Restaurants in Paris without online ordering on their website", result: "Prospects who visibly need your service." },
    { role: "Recruiters", query: "Scale-ups hiring 5+ engineers in Barcelona", result: "Companies with open budget and urgent needs." },
  ],
  compareTag: "Comparison",
  compareTitle: "AI search vs. traditional lead databases",
  compareCols: ["", "Arrow AI Prospecting", "Static lead databases"],
  compareRows: [
    ["Search method", "Plain-language description", "Fixed filters (industry, size)"],
    ["Data freshness", "Read live at search time", "Refreshed every few months"],
    ["Niche criteria", "Any criterion found on the web", "Only predefined fields"],
    ["Why it matches", "Evidence and sources per lead", "Not provided"],
    ["Contacts", "Verified in real time", "Often outdated, high bounce rate"],
  ],
  proofTitle: "What teams say",
  proof: [
    { quote: "We replaced three tools and a week of manual research with one search.", author: "Head of Sales, B2B SaaS" },
    { quote: "The match explanations are what convinced our SDRs — they know why they're calling.", author: "Growth Lead, Fintech" },
    { quote: "We finally find niche accounts that no database had listed.", author: "Founder, Marketing agency" },
  ],
  pricingTag: "Pricing",
  pricingTitle: "Start free, scale with your pipeline",
  plans: [
    { name: "Starter", price: "€0", period: "", desc: "To try AI prospecting.", features: ["50 leads included", "Natural-language search", "CSV export"], cta: "Start free" },
    { name: "Growth", price: "€99", period: "/month", desc: "For founders and small sales teams.", features: ["1,000 leads / month", "Verified emails & phones", "CRM integrations", "Buying-signal alerts"], cta: "Start 14-day trial", featured: true },
    { name: "Enterprise", price: "Custom", period: "", desc: "For revenue teams at scale.", features: ["Unlimited searches", "API access & SSO", "Dedicated success manager", "GDPR DPA"], cta: "Talk to sales" },
  ],
  faqTag: "FAQ",
  faqTitle: "Frequently asked questions",
  faq: [
    { q: "What is Arrow AI Prospecting?", a: "Arrow AI Prospecting is an AI search engine for B2B sales. You describe your ideal customer in plain language and AI agents find matching companies, the decision-makers inside them and their verified contact details." },
    { q: "How is it different from Apollo, ZoomInfo or LinkedIn Sales Navigator?", a: "Those tools filter a pre-built database with fixed fields. Arrow AI searches the live web at query time, so it can match any criterion — technologies, website content, hiring, news — and explains with sources why each company fits." },
    { q: "Where does the data come from?", a: "From publicly available sources: company websites, job boards, press releases, public registries and professional profiles, combined with contact-enrichment providers and real-time email verification." },
    { q: "Is it GDPR compliant?", a: "Yes. We only process publicly available professional data under legitimate interest, honor opt-out requests, provide a Data Processing Agreement and host data in the EU." },
    { q: "How accurate are the emails?", a: "Every email is verified in real time before delivery. Invalid or risky addresses are flagged, and you are not charged for leads without a valid contact." },
    { q: "Which CRMs does it integrate with?", a: "HubSpot, Salesforce, Pipedrive, Lemlist, and any tool via CSV or our API." },
    { q: "Can I try it for free?", a: "Yes. The Starter plan includes 50 leads with no credit card required." },
  ],
  ctaTitle: "Your next 100 customers are one sentence away",
  ctaText: "Describe them. We'll find them, qualify them and tell you how to reach them.",
  ctaButton: "Start for free",
  ctaSecondary: "Book a demo",
  updated: "Last updated",
};

const fr: ProspectingContent = {
  meta: {
    title: "Moteur de recherche IA de prospection B2B — Trouvez vos leads en une phrase",
    description:
      "Décrivez votre client idéal en une phrase. Arrow AI parcourt le web en temps réel, trouve les entreprises et décideurs correspondants, vérifie leurs emails et les exporte dans votre CRM.",
    keywords: ["prospection IA", "génération de leads B2B", "recherche de leads IA", "trouver des prospects B2B", "outil de prospection commerciale", "emails professionnels vérifiés", "ICP", "SDR IA"],
  },
  breadcrumb: "Prospection IA",
  badge: "Moteur de recherche IA pour la vente B2B",
  h1a: "Trouvez vos prochains clients",
  h1b: "simplement en les décrivant",
  lead:
    "Arrow AI Prospection transforme une phrase en liste de leads qualifiés. Nos agents lisent le web en direct — sites, offres d'emploi, actualités, registres — pour trouver les entreprises qui correspondent vraiment, les bonnes personnes et des coordonnées vérifiées.",
  searchPlaceholder: "ex. SaaS français qui recrutent des SDR et ont levé une Série A ces 12 derniers mois",
  searchCta: "Trouver des leads",
  examplesLabel: "Essayez :",
  examples: [
    "Cabinets dentaires à Lyon avec prise de RDV en ligne",
    "Entreprises de logistique utilisant Salesforce",
    "Head of Growth de fintechs à Paris",
    "Marques e-commerce qui se lancent en Espagne",
  ],
  noCard: "Essai gratuit · Sans carte bancaire · 50 leads offerts",
  stats: [
    { value: "60 s", label: "de la requête à la liste de leads" },
    { value: "95 %", label: "objectif de délivrabilité email" },
    { value: "30+", label: "signaux analysés par entreprise" },
    { value: "3", label: "langues : FR · EN · ES" },
  ],
  definitionTitle: "Qu'est-ce que la prospection par IA ?",
  definition:
    "La prospection par IA consiste à utiliser des agents d'intelligence artificielle pour trouver, qualifier et enrichir des leads commerciaux à partir d'une description en langage naturel de votre profil client idéal (ICP). Au lieu de filtrer une base de données figée par secteur et effectif, Arrow AI lit des sources publiques en temps réel, vérifie chaque critère entreprise par entreprise, explique pourquoi elle correspond et fournit les décideurs avec des coordonnées vérifiées.",
  howTag: "Fonctionnement",
  howTitle: "D'une phrase à un pipeline en 3 étapes",
  howSubtitle: "Aucun filtre à apprendre, aucune requête booléenne. Écrivez comme si vous briefiez un assistant commercial.",
  steps: [
    { title: "Décrivez votre client idéal", text: "Secteur, localisation, stack technique, recrutements, levées de fonds, signaux de croissance — n'importe quel critère, en langage naturel." },
    { title: "Les agents IA cherchent et qualifient", text: "Les agents parcourent le web en temps réel, vérifient chaque critère et notent chaque correspondance avec une justification écrite." },
    { title: "Contactez les bonnes personnes", text: "Récupérez les décideurs avec emails et téléphones vérifiés, puis exportez vers HubSpot, Salesforce, Pipedrive ou CSV." },
  ],
  featuresTag: "Fonctionnalités",
  featuresTitle: "Tout pour remplir votre pipeline",
  features: [
    { icon: "🔎", title: "Recherche en langage naturel", text: "Cherchez avec n'importe quel critère, même ceux qu'aucune base ne suit : « utilise Shopify et vend du reconditionné »." },
    { icon: "🌐", title: "Données web en direct", text: "Les résultats proviennent de sources publiques fraîches, pas d'une liste compilée il y a deux ans." },
    { icon: "✅", title: "Correspondances expliquées", text: "Chaque lead est accompagné des preuves et des liens sources qui démontrent qu'il correspond à votre ICP." },
    { icon: "📧", title: "Contacts vérifiés", text: "Enrichissement en cascade et vérification des emails en temps réel pour protéger votre réputation d'expéditeur." },
    { icon: "📡", title: "Signaux d'achat", text: "Levées de fonds, recrutements, nouveaux sites, changements d'outils — soyez alerté quand un compte devient mûr." },
    { icon: "🔗", title: "Synchronisation CRM", text: "Export en un clic vers HubSpot, Salesforce, Pipedrive, Lemlist ou CSV, avec dédoublonnage." },
  ],
  useCasesTag: "Cas d'usage",
  useCasesTitle: "Pensé pour toutes les équipes revenue",
  useCases: [
    { role: "Fondateurs", query: "Startups RH en seed en Europe de moins de 20 salariés", result: "Vos 100 premiers design partners en un après-midi." },
    { role: "Équipes commerciales (SDR / AE)", query: "Industriels en Allemagne qui ouvrent une nouvelle usine cette année", result: "Des comptes avec un événement déclencheur actif, prêts à être contactés." },
    { role: "Agences", query: "Restaurants à Paris sans commande en ligne sur leur site", result: "Des prospects qui ont visiblement besoin de votre service." },
    { role: "Recruteurs", query: "Scale-ups qui recrutent 5+ ingénieurs à Barcelone", result: "Des entreprises avec un budget ouvert et un besoin urgent." },
  ],
  compareTag: "Comparatif",
  compareTitle: "Recherche IA vs bases de leads traditionnelles",
  compareCols: ["", "Arrow AI Prospection", "Bases de leads statiques"],
  compareRows: [
    ["Méthode de recherche", "Description en langage naturel", "Filtres fixes (secteur, taille)"],
    ["Fraîcheur des données", "Lues en direct à chaque recherche", "Mises à jour tous les quelques mois"],
    ["Critères de niche", "Tout critère trouvable sur le web", "Uniquement des champs prédéfinis"],
    ["Pourquoi ça correspond", "Preuves et sources pour chaque lead", "Non fourni"],
    ["Contacts", "Vérifiés en temps réel", "Souvent obsolètes, fort taux de rebond"],
  ],
  proofTitle: "Ce qu'en disent les équipes",
  proof: [
    { quote: "Nous avons remplacé trois outils et une semaine de recherche manuelle par une seule requête.", author: "Head of Sales, SaaS B2B" },
    { quote: "Les explications de correspondance ont convaincu nos SDR : ils savent pourquoi ils appellent.", author: "Growth Lead, Fintech" },
    { quote: "On trouve enfin des comptes de niche qu'aucune base ne référençait.", author: "Fondateur, agence marketing" },
  ],
  pricingTag: "Tarifs",
  pricingTitle: "Commencez gratuitement, évoluez avec votre pipeline",
  plans: [
    { name: "Starter", price: "0 €", period: "", desc: "Pour tester la prospection IA.", features: ["50 leads offerts", "Recherche en langage naturel", "Export CSV"], cta: "Commencer gratuitement" },
    { name: "Growth", price: "99 €", period: "/mois", desc: "Pour les fondateurs et petites équipes sales.", features: ["1 000 leads / mois", "Emails et téléphones vérifiés", "Intégrations CRM", "Alertes signaux d'achat"], cta: "Essai gratuit 14 jours", featured: true },
    { name: "Enterprise", price: "Sur mesure", period: "", desc: "Pour les équipes revenue à grande échelle.", features: ["Recherches illimitées", "API & SSO", "Customer success dédié", "DPA RGPD"], cta: "Contacter l'équipe" },
  ],
  faqTag: "FAQ",
  faqTitle: "Questions fréquentes",
  faq: [
    { q: "Qu'est-ce qu'Arrow AI Prospection ?", a: "Arrow AI Prospection est un moteur de recherche IA pour la vente B2B. Vous décrivez votre client idéal en langage naturel et des agents IA trouvent les entreprises correspondantes, leurs décideurs et leurs coordonnées vérifiées." },
    { q: "Quelle différence avec Apollo, ZoomInfo ou LinkedIn Sales Navigator ?", a: "Ces outils filtrent une base de données préconstruite avec des champs fixes. Arrow AI cherche sur le web en direct au moment de la requête : il peut donc vérifier n'importe quel critère — technologies, contenu du site, recrutements, actualités — et explique, sources à l'appui, pourquoi chaque entreprise correspond." },
    { q: "D'où viennent les données ?", a: "De sources publiques : sites d'entreprises, sites d'emploi, communiqués de presse, registres officiels et profils professionnels, combinés à des fournisseurs d'enrichissement et à une vérification des emails en temps réel." },
    { q: "Est-ce conforme au RGPD ?", a: "Oui. Nous traitons uniquement des données professionnelles publiques sur la base de l'intérêt légitime, respectons les demandes d'opposition, fournissons un DPA et hébergeons les données dans l'UE." },
    { q: "Quelle est la fiabilité des emails ?", a: "Chaque email est vérifié en temps réel avant livraison. Les adresses invalides ou risquées sont signalées et les leads sans contact valide ne sont pas facturés." },
    { q: "Avec quels CRM s'intègre-t-il ?", a: "HubSpot, Salesforce, Pipedrive, Lemlist, et tout outil via CSV ou notre API." },
    { q: "Puis-je l'essayer gratuitement ?", a: "Oui. L'offre Starter inclut 50 leads sans carte bancaire." },
  ],
  ctaTitle: "Vos 100 prochains clients sont à une phrase",
  ctaText: "Décrivez-les. Nous les trouvons, les qualifions et vous disons comment les joindre.",
  ctaButton: "Commencer gratuitement",
  ctaSecondary: "Réserver une démo",
  updated: "Dernière mise à jour",
};

const es: ProspectingContent = {
  meta: {
    title: "Buscador IA de prospección B2B — Encuentra leads describiéndolos",
    description:
      "Describe a tu cliente ideal en una frase. Arrow AI busca en la web en tiempo real, encuentra empresas y responsables que encajan, verifica sus emails y los exporta a tu CRM.",
    keywords: ["prospección con IA", "generación de leads B2B", "búsqueda de leads con IA", "encontrar clientes B2B", "herramienta de prospección", "emails verificados", "ICP", "SDR IA"],
  },
  breadcrumb: "Prospección IA",
  badge: "Buscador IA para ventas B2B",
  h1a: "Encuentra tus próximos clientes",
  h1b: "con solo describirlos",
  lead:
    "Arrow AI Prospección convierte una frase en una lista de leads cualificados. Nuestros agentes leen la web en directo — webs, ofertas de empleo, noticias, registros — para encontrar las empresas que encajan de verdad, las personas adecuadas y datos de contacto verificados.",
  searchPlaceholder: "ej. SaaS españoles que contratan SDR y levantaron una Serie A en los últimos 12 meses",
  searchCta: "Buscar leads",
  examplesLabel: "Prueba:",
  examples: [
    "Clínicas dentales en Madrid con reserva online",
    "Empresas de logística que usan Salesforce",
    "Heads of Growth de fintechs en Barcelona",
    "Marcas e-commerce que llegan a Francia",
  ],
  noCard: "Prueba gratis · Sin tarjeta · 50 leads incluidos",
  stats: [
    { value: "60 s", label: "de la consulta a la lista" },
    { value: "95 %", label: "objetivo de entregabilidad" },
    { value: "30+", label: "señales por empresa" },
    { value: "3", label: "idiomas: ES · EN · FR" },
  ],
  definitionTitle: "¿Qué es la prospección con IA?",
  definition:
    "La prospección con IA es el uso de agentes de inteligencia artificial para encontrar, cualificar y enriquecer leads comerciales a partir de una descripción en lenguaje natural de tu perfil de cliente ideal (ICP). En lugar de filtrar una base de datos estática por sector y tamaño, Arrow AI lee fuentes públicas en tiempo real, comprueba cada criterio empresa por empresa, explica por qué encaja y entrega a los responsables con datos de contacto verificados.",
  howTag: "Cómo funciona",
  howTitle: "De una frase a un pipeline en 3 pasos",
  howSubtitle: "Sin filtros que aprender ni consultas booleanas. Escribe como si dieras instrucciones a un asistente comercial.",
  steps: [
    { title: "Describe a tu cliente ideal", text: "Sector, ubicación, tecnologías, contrataciones, rondas de financiación, señales de crecimiento — cualquier criterio, en lenguaje natural." },
    { title: "Los agentes IA buscan y cualifican", text: "Los agentes recorren la web en tiempo real, comprueban cada criterio y puntúan cada coincidencia con una justificación escrita." },
    { title: "Contacta a las personas adecuadas", text: "Obtén responsables con emails y teléfonos verificados y expórtalos a HubSpot, Salesforce, Pipedrive o CSV." },
  ],
  featuresTag: "Funcionalidades",
  featuresTitle: "Todo lo necesario para llenar tu pipeline",
  features: [
    { icon: "🔎", title: "Búsqueda en lenguaje natural", text: "Busca con cualquier criterio, incluso los que ninguna base registra: «usa Shopify y vende reacondicionado»." },
    { icon: "🌐", title: "Datos web en directo", text: "Los resultados vienen de fuentes públicas actuales, no de una lista de hace dos años." },
    { icon: "✅", title: "Coincidencias explicadas", text: "Cada lead incluye pruebas y enlaces a las fuentes que demuestran que encaja con tu ICP." },
    { icon: "📧", title: "Contactos verificados", text: "Enriquecimiento en cascada y verificación de emails en tiempo real para proteger tu reputación." },
    { icon: "📡", title: "Señales de compra", text: "Rondas, contrataciones, nuevas sedes, cambios tecnológicos — recibe alertas cuando una cuenta está lista." },
    { icon: "🔗", title: "Sincronización CRM", text: "Exporta en un clic a HubSpot, Salesforce, Pipedrive, Lemlist o CSV, sin duplicados." },
  ],
  useCasesTag: "Casos de uso",
  useCasesTitle: "Pensado para todos los equipos de ingresos",
  useCases: [
    { role: "Fundadores", query: "Startups HR tech en fase seed en Europa con menos de 20 empleados", result: "Tus primeros 100 design partners en una tarde." },
    { role: "Equipos de ventas (SDR / AE)", query: "Fabricantes en Alemania que abren una nueva planta este año", result: "Cuentas con un evento desencadenante activo, listas para contactar." },
    { role: "Agencias", query: "Restaurantes en Madrid sin pedidos online en su web", result: "Prospectos que claramente necesitan tu servicio." },
    { role: "Reclutadores", query: "Scale-ups que contratan 5+ ingenieros en Barcelona", result: "Empresas con presupuesto abierto y necesidad urgente." },
  ],
  compareTag: "Comparativa",
  compareTitle: "Búsqueda IA vs bases de leads tradicionales",
  compareCols: ["", "Arrow AI Prospección", "Bases de leads estáticas"],
  compareRows: [
    ["Método de búsqueda", "Descripción en lenguaje natural", "Filtros fijos (sector, tamaño)"],
    ["Frescura de los datos", "Leídos en directo en cada búsqueda", "Actualizados cada pocos meses"],
    ["Criterios de nicho", "Cualquier criterio presente en la web", "Solo campos predefinidos"],
    ["Por qué encaja", "Pruebas y fuentes por lead", "No disponible"],
    ["Contactos", "Verificados en tiempo real", "A menudo desactualizados, alto rebote"],
  ],
  proofTitle: "Lo que dicen los equipos",
  proof: [
    { quote: "Sustituimos tres herramientas y una semana de investigación manual por una sola búsqueda.", author: "Head of Sales, SaaS B2B" },
    { quote: "Las explicaciones convencieron a nuestros SDR: saben por qué llaman.", author: "Growth Lead, Fintech" },
    { quote: "Por fin encontramos cuentas de nicho que ninguna base tenía.", author: "Fundador, agencia de marketing" },
  ],
  pricingTag: "Precios",
  pricingTitle: "Empieza gratis, crece con tu pipeline",
  plans: [
    { name: "Starter", price: "0 €", period: "", desc: "Para probar la prospección con IA.", features: ["50 leads incluidos", "Búsqueda en lenguaje natural", "Exportación CSV"], cta: "Empezar gratis" },
    { name: "Growth", price: "99 €", period: "/mes", desc: "Para fundadores y equipos pequeños.", features: ["1.000 leads / mes", "Emails y teléfonos verificados", "Integraciones CRM", "Alertas de señales de compra"], cta: "Prueba de 14 días", featured: true },
    { name: "Enterprise", price: "A medida", period: "", desc: "Para equipos de ingresos a escala.", features: ["Búsquedas ilimitadas", "API y SSO", "Customer success dedicado", "DPA RGPD"], cta: "Hablar con ventas" },
  ],
  faqTag: "FAQ",
  faqTitle: "Preguntas frecuentes",
  faq: [
    { q: "¿Qué es Arrow AI Prospección?", a: "Arrow AI Prospección es un buscador con IA para ventas B2B. Describes a tu cliente ideal en lenguaje natural y agentes de IA encuentran las empresas que encajan, sus responsables y sus datos de contacto verificados." },
    { q: "¿En qué se diferencia de Apollo, ZoomInfo o LinkedIn Sales Navigator?", a: "Esas herramientas filtran una base de datos preconstruida con campos fijos. Arrow AI busca en la web en directo en el momento de la consulta, así que puede comprobar cualquier criterio — tecnologías, contenido web, contrataciones, noticias — y explica con fuentes por qué encaja cada empresa." },
    { q: "¿De dónde vienen los datos?", a: "De fuentes públicas: webs corporativas, portales de empleo, notas de prensa, registros oficiales y perfiles profesionales, combinadas con proveedores de enriquecimiento y verificación de emails en tiempo real." },
    { q: "¿Cumple con el RGPD?", a: "Sí. Solo tratamos datos profesionales públicos bajo interés legítimo, respetamos las solicitudes de oposición, ofrecemos un DPA y alojamos los datos en la UE." },
    { q: "¿Qué fiabilidad tienen los emails?", a: "Cada email se verifica en tiempo real antes de entregarlo. Las direcciones inválidas o de riesgo se marcan y no se cobran los leads sin contacto válido." },
    { q: "¿Con qué CRM se integra?", a: "HubSpot, Salesforce, Pipedrive, Lemlist y cualquier herramienta vía CSV o nuestra API." },
    { q: "¿Puedo probarlo gratis?", a: "Sí. El plan Starter incluye 50 leads sin tarjeta de crédito." },
  ],
  ctaTitle: "Tus próximos 100 clientes están a una frase",
  ctaText: "Descríbelos. Nosotros los encontramos, los cualificamos y te decimos cómo contactarlos.",
  ctaButton: "Empezar gratis",
  ctaSecondary: "Reservar una demo",
  updated: "Última actualización",
};

export const prospectingContent: Record<Locale, ProspectingContent> = { en, fr, es };

/** ISO date shown on the page and used as dateModified in structured data. */
export const PROSPECTING_UPDATED = "2026-11-24";
