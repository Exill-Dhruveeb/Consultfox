export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

// Curated subset of the verified testimonials (full set of 12 lives in testimonialsAll)
export const testimonialsFeatured: Testimonial[] = [
  {
    quote:
      "Honestly, this has been an outstanding experience from start to finish. They didn't just understand a very complex real-world operation, they translated it into a functional, well-structured system. This is not just a basic delivery, it's a solid, professional solution.",
    name: "Andres Garrido Assad",
    role: "Latamsa - Lavanderias Tamaulipecas, Mexico",
  },
  {
    quote:
      "Great to work with: quick communication, strong understanding across data engineering, analytics, and BI. They didn't just hand over the finished work, they shared the thinking behind it and best practices along the way. I learned as much as I got delivered.",
    name: "Darcy Patterson",
    role: "Bravas Technology, Founder, Australia",
  },
  {
    quote:
      "Super good explanation, patience and a good sense of indagatory about the data, sources, etc. The solutions suggested were very satisfactory.",
    name: "Héctor Raúl Rodríguez Díaz",
    role: "Fresenius Kabi, Chile",
  },
  {
    quote:
      "We've been working with consultfox for over a year now across data analytics, Power BI, and Tableau. Every deliverable came in on time and the quality was consistently high. No surprises, no chasing.",
    name: "Alvin Santosh",
    role: "Aleddo Technologies, AI Head and Project Manager, UAE",
  },
];

export const testimonialsAll: Testimonial[] = [
  ...testimonialsFeatured,
  {
    quote: "Umair handled my problem timely and efficiently. He is easy to collaborate with and I will be using him again.",
    name: "Travis Wayne Kelley",
    role: "War Room Operations, United States",
  },
  {
    quote: "It is always a pleasure to work with Umair and his team. Rock star service!",
    name: "Alex Bleicker",
    role: "Asygma Ltd, Austria",
  },
  {
    quote:
      "Excellent work as always by Umair and team. Highly recommend, responsive and attention to detail. Umair + consultfox team continue to impress and innovate as business needs evolve.",
    name: "Craig Peters",
    role: "D&K Ventures, United States",
  },
  {
    quote:
      "If you are an Executive, you need a PowerBI dashboard. Great working with the team, many ongoing projects with Umair, great person to work with.",
    name: "Louis Philippe",
    role: "Growloup, Canada",
  },
  {
    quote:
      "These guys are true professionals, they helped me improve the idea of the work I wanted to develop, very kind and prepared. Second project and I'm very satisfied.",
    name: "Jacopo",
    role: "Willybesmart, United States",
  },
  {
    quote: "Thanks for the exceptional work!",
    name: "Hans Gildenhuys",
    role: "Industry MC, United States",
  },
  {
    quote: "It was a great experience.",
    name: "Miguel",
    role: "Truespot, United States",
  },
  {
    quote: "Working with consultfox has been amazing. Bhavisha has gone above and beyond to get us what we need. Very pleased.",
    name: "Sherwin Loudermilk",
    role: "Loudermilk Homes, USA",
  },
  {
    quote:
      "Great working with Umair, fantastic communication and excellent delivery. Deep understanding, quick responsiveness, attention to detail, bug free, exceeded expectations, documentation, professionalism of work.",
    name: "Wasim",
    role: "Visualiste Face Clinic, UK",
  },
  {
    quote:
      "The guys were great to work with, very fast to reply and have a deep understanding of Power BI. This became a learning experience for me as they shared best practices.",
    name: "Darcy",
    role: "Bravas Technology, United Kingdom",
  },
];

export const homeFaqs = [
  {
    q: "Do we need to have our data infrastructure sorted before working with you?",
    a: "No. Most of our clients come to us because their infrastructure isn't sorted, that's the point. We start with a discovery session to understand what you have, what's broken, and what needs to be built first.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Most initial builds take 4-8 weeks depending on scope. We scope honestly: if something is a 12-week project, we'll tell you before we start, not halfway through.",
  },
  {
    q: "Will you try to sell us a specific platform?",
    a: "No. We're Microsoft and Snowflake partners, but we're not commission-driven. We recommend what fits your situation. If you already have a stack, we'll work with it.",
  },
  {
    q: "What do we get at the end of an engagement?",
    a: "A working system, full documentation, and a handover session with your team. You own everything we build: the code, the models, the pipelines. There's no vendor lock-in to consultfox.",
  },
  {
    q: "Can you work alongside our existing internal team?",
    a: "Yes, that's often how we work best. We come in as a specialist delivery partner, build what your team can't yet, and make sure knowledge transfers before we leave.",
  },
  {
    q: "How much does a typical engagement cost?",
    a: "It depends on scope. A focused data pipeline build might be $15k-$30k or €15k-€30k. A full warehouse and BI engagement is typically $40k-$80k or €40k-€80k. We'll give you a clear number after the discovery call, no surprise invoices.",
  },
  {
    q: "What industries do you work in?",
    a: "Financial services, healthcare, cannabis, QSR, retail, IoT, HR, and more. The common thread is mid-market companies ($3M-$75M) with 0-2 in-house data staff who need senior engineering help fast.",
  },
];

export const industries = [
  {
    name: "Retail & E-Commerce",
    description: "Customer analytics, inventory forecasting, and analytics engines that reduce churn and increase basket size.",
  },
  {
    name: "Healthcare",
    description: "Patient data platforms, clinical reporting, and HIPAA-compliant analytics environments for providers and health-tech.",
  },
  {
    name: "Finance & Banking",
    description: "Real-time transaction analytics, fraud detection, regulatory reporting, and risk dashboards.",
  },
  {
    name: "Real Estate & Construction",
    description: "Project data consolidation, budget tracking dashboards, and supply chain analytics across multi-site operations.",
  },
  {
    name: "IoT & Technology",
    description: "High-volume device data ingestion, stream processing, and analytics platforms for connected product companies.",
  },
  {
    name: "Manufacturing & Industrial",
    description: "Operational analytics, quality control monitoring, and supply chain visibility platforms.",
  },
];

export const credentials = [
  { value: "50+", label: "Combined years of experience", detail: "Data engineering, AI systems, and analytics across enterprise and mid-market." },
  { value: "50+", label: "Data and AI systems delivered", detail: "Pipelines, warehouses, dashboards, and AI models in production." },
  { value: "15+", label: "Industries served", detail: "From regulated healthcare to fast-moving retail." },
  { value: "4-6 wk", label: "Average first delivery", detail: "Working system from kickoff, not a slide deck." },
  { value: "US · UK · EU · ME", label: "Active client regions", detail: "Delivery teams aligned to your timezone and compliance needs." },
  { value: "MS · Snowflake", label: "Preferred partner stack", detail: "Direct technical support, vetted engineering standards." },
];

export const commitments = [
  {
    title: "Work committed",
    body: "Once we commit, we deliver it. No scope creep. No disappearing acts. Every engagement ends with a working system in production.",
  },
  {
    title: "Built properly",
    body: "Either we build it properly or we don't build it at all. Every pipeline documented. Every model explainable. Every transformation tested.",
  },
  {
    title: "No wasted time",
    body: "We don't waste your time or ours. Most clients have a working system within 4-6 weeks of kickoff. We've just done this enough times to move without wasting cycles.",
  },
  {
    title: "No black boxes",
    body: "You always know what we're building, why we're building it, and how it works. If something isn't going as planned, you hear it from us first, not last.",
  },
  {
    title: "Full handover",
    body: "We don't just hand over a system and disappear. Every engagement ends with your team fully equipped to own, extend, and operate what we've built.",
  },
  {
    title: "Honest fit",
    body: "We'd rather turn down a project than overpromise on one. If something isn't the right fit, we'll tell you before we start, not after you've paid for three months of meetings.",
  },
];

export const comparisonRows = [
  { label: "Working systems delivered", consultfox: "Always: every engagement ends with something your team can open, query, and build on.", typical: "Maybe: often a report or roadmap." },
  { label: "Use your existing stack", consultfox: "Always: Snowflake, Fabric, Databricks, dbt, Power BI, we make what you have work properly.", typical: "Rarely: they sell you new tools." },
  { label: "Senior engineers on every project", consultfox: "Always: handled by people who've solved this problem before.", typical: "Pitched by seniors, staffed with juniors." },
  { label: "Full documentation and handover", consultfox: "Always: every pipeline, every model, every transformation comes with documentation.", typical: "Rarely." },
  { label: "First delivery in 4-6 weeks", consultfox: "~6 weeks: we don't cut corners to get there.", typical: "3-6 months typical." },
  { label: "Honest about what won't work", consultfox: "Always: we'd rather lose a sale than build something weak.", typical: "Rarely: they scope to sell." },
  { label: "Full knowledge transfer", consultfox: "Standard: your team owns everything.", typical: "Premium add-on." },
  { label: "Founder-led accountability", consultfox: "Throughout: you work directly with consultfox's founders.", typical: "Kickoff only." },
];

export const techStack = [
  { category: "Cloud data warehouses", tools: ["Snowflake", "Microsoft Fabric", "BigQuery", "Databricks", "Azure Synapse"] },
  { category: "Data pipelines", tools: ["dbt", "Apache Spark", "Azure Data Factory", "n8n", "Fivetran"] },
  { category: "BI & visualisation", tools: ["Power BI", "Tableau", "Looker"] },
  { category: "AI & automation", tools: ["OpenAI", "Bland AI", "Qdrant", "LangChain", "Cohere"] },
  { category: "Cloud infrastructure", tools: ["Azure", "AWS", "GCP"] },
  { category: "Governance & cataloguing", tools: ["Alation", "Collibra", "Microsoft Purview"] },
  { category: "Storage & formats", tools: ["Azure Blob Storage", "Parquet", "Delta Lake"] },
];

// TBD: rendered as "0" on the live About page (likely an unfired JS counter), flagged, not invented.
// Replace with real figures once confirmed.
export const aboutStatsPending = [
  { label: "Countries served", value: "TBD" },
  { label: "Y-o-Y delivery growth", value: "TBD" },
  { label: "Team members", value: "40+" }, // confirmed separately via /career/ page copy
  { label: "Employee retention", value: "TBD" },
  { label: "Growth since 2023", value: "TBD" },
  { label: "Client retention rate", value: "TBD" },
];

export const clientLogos = [
  "Kenvue",
  "Isuzu",
  "Truespot",
  "Harley-Davidson",
  "Fresenius Kabi",
  "D&K Ventures",
  "Amlak",
  "Bravas Technology",
  "Omega",
  "Enhance",
  "Industry MC",
  "Loudermilk Custom Homes",
];

export const founders = [
  {
    name: "Umair Mansuri",
    role: "Co-founder",
    bio: "Operations erudite. Makes sure any delays in the project are addressed and issues are resolved in a timely fashion.",
  },
  {
    name: "Pranav Nair",
    role: "Co-founder",
    bio: "Handles clients, vision expert. Sits down with the client to understand the true intentions behind a project so the team executes the right strategy.",
  },
];

export const teamMembers = [
  { name: "Saiyed Mohammad", role: "Operations and Logistics Manager" },
  { name: "Akshat Shah", role: "Senior BI Developer" },
  { name: "Nishant Narayanan", role: "Senior BI Developer" },
  { name: "Rajveer Singh", role: "Business Development Manager" },
  { name: "Janvi Gupta", role: "Senior AI Engineer" },
  { name: "Yash Dodiya", role: "Senior Data Engineer" },
  { name: "Dhruvi Acharya", role: "Senior Data Engineer" },
  { name: "Bhavisha Chotrani", role: "Senior AI Engineer" },
  { name: "Nitin Meena", role: "Senior Data Engineer" },
  { name: "Naeem Saiyed", role: "Finance and Operations Manager" },
];

export const companyValues = [
  { title: "Adamant ownership", body: "Committing to a cause implies owning the outcome. And we take responsibility for it." },
  { title: "Value-driven results", body: "Delivering clearer decision-making through insightful data to businesses is our goal." },
  { title: "Quality assurance", body: "Exceptional outcome for others must be the bare minimum for us." },
  { title: "Collaborative approach", body: "Rome wasn't built in a day. Neither can data dashboards without all hands on board." },
  { title: "Evolve and execute", body: "Stay curious and a lifelong student of technology to bring more innovative ideas to the table." },
];

export const openRoles = [
  { slug: "devops-engineer", title: "DevOps Engineer", experience: "2+ Years" },
  { slug: "upwork-bde", title: "Upwork BDE", experience: "2+ Years" },
  { slug: "bi-developer", title: "BI Developer", experience: "2+ Years" },
  { slug: "data-engineer", title: "Data Engineer", experience: "2+ Years" },
  { slug: "ai-ml-developer", title: "AI/ML Developer", experience: "2+ Years" },
  { slug: "marketing-manager", title: "Marketing Manager", experience: "4+ Years" },
  { slug: "lead-generator-sdr", title: "Lead Generator / SDR", experience: "2+ Years" },
];

export const companyInfo = {
  phone: "+49 1634253066",
  phoneHref: "tel:+491634253066",
  whatsapp: "https://wa.me/491634253066",
  email: "info@consultfox.de",
  address: "Wilmersdorfer str. 60, 10627 Berlin",
  mapsUrl: "https://maps.google.com/?q=Wilmersdorfer+str.+60,+10627+Berlin",
  socials: {
    twitter: "https://x.com/consultfox",
    linkedin: "https://www.linkedin.com/company/consultfox/",
    instagram: "https://www.instagram.com/consultfox/",
    youtube: "https://youtube.com/@consultfox",
  },
};
