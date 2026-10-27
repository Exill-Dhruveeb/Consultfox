import { Language } from "@/context/LanguageContext";

export interface Translations {
  nav: {
    services: string;
    caseStudies: string;
    contact: string;
    viewAllServices: string;
    notSureWhereToStart: string;
  };
  hero: {
    badge: string;
    headline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    supportingStatement?: string;
    checklist: {
      delivery: string;
      noLockIn: string;
      handover: string;
      euHosted: string;
    };
    stats: {
      systems: string;
      systemsSubtitle: string;
      stack: string;
      liveSystem: string;
    };
  };
  whatWeBuild: {
    eyebrow: string;
    title: string;
    description: string;
    viewAllButton: string;
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    description: string;
    steps?: {
      step: string;
      title: string;
      whatHappens: string;
      deliverable: string;
    }[];
    commitments: {
      title: string;
      body: string;
    }[];
  };
  techStackSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    headers: {
      criterion: string;
      consultfox: string;
      typical: string;
    };
    rows: {
      label: string;
      consultfox: string;
      typical: string;
    }[];
  };
  caseStudiesSection: {
    eyebrow: string;
    title: string;
    description: string;
    viewAllButton: string;
    readCaseStudy: string;
    allCaseStudies: string;
    recentEngagements: string;
    pageTitle: string;
    pageSubtitle: string;
    challengeTitle: string;
    challengeSubtitle: string;
    solutionTitle: string;
    solutionSubtitle: string;
    implementationEyebrow: string;
    implementationTitle: string;
    implementationSubtitle: string;
    technologiesDeployed: string;
    otherCaseStudies: string;
    verifiedOutcome: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    description: string;
    exploreService: string;
    talkToEngineer: string;
    seeApproach: string;
    howWeEngageEyebrow: string;
    howWeEngageTitle: string;
    steps: {
      title: string;
      body: string;
    }[];
    relatedEyebrow: string;
    relatedTitlePrefix: string;
    faqEyebrow: string;
    faqTitle: string;
    ctaTitlePrefix: string;
  };
  industriesSection: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      name: string;
      description: string;
    }[];
  };
  faqSection: {
    eyebrow: string;
    title: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  ctaSection: {
    title: string;
    body: string;
    button: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      fullNameError: string;
      mobile: string;
      mobilePlaceholder: string;
      mobileError: string;
      email: string;
      emailPlaceholder: string;
      emailError: string;
      notes: string;
      notesOptional: string;
      notesPlaceholder: string;
      submitButton: string;
      responseNote: string;
      sentNote: string;
    };
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    caseStudiesTitle: string;
    contactTitle: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      caseStudies: "Case Studies",
      contact: "Contact",
      viewAllServices: "View all services",
      notSureWhereToStart: "Not sure where to start?",
    },
    hero: {
      badge: "DATA ENGINEERING · ANALYTICS · AI",
      headline: "Make your data work harder.",
      description:
        "We help businesses build reliable data pipelines, analytics platforms, and AI solutions that turn disconnected information into better decisions.",
      ctaPrimary: "Discuss Your Project",
      ctaSecondary: "Explore Our Work",
      supportingStatement: "Clear architecture. Documented code. A handover your team can own.",
      checklist: {
        delivery: "4-6 wk delivery",
        noLockIn: "Zero lock-in",
        handover: "100% code handover",
        euHosted: "Hosted in the EU",
      },
      stats: {
        systems: "50+ Systems",
        systemsSubtitle: "Delivered in production",
        stack: "Microsoft & Snowflake Stack",
        liveSystem: "Live System",
      },
    },
    whatWeBuild: {
      eyebrow: "Services",
      title: "Core engineering disciplines for scalable data and AI",
      description:
        "We engineer reliable data infrastructure across four primary pillars—from ingestion and warehouse architecture to production AI workflows.",
      viewAllButton: "View full service catalogue (20 services)",
    },
    howWeWork: {
      eyebrow: "Our Process",
      title: "A disciplined, numbered engineering timeline",
      description:
        "Every engagement follows a structured 5-stage lifecycle. No open-ended retainers, no disappearing acts.",
      steps: [
        {
          step: "01",
          title: "Discovery",
          whatHappens:
            "We inspect your existing source systems, reporting bottlenecks, security constraints, and business goals through focused technical interviews.",
          deliverable: "Technical discovery summary and prioritized engagement roadmap.",
        },
        {
          step: "02",
          title: "Assessment",
          whatHappens:
            "Our senior engineers audit schema reliability, compute overhead, pipeline latency, and data quality across your stack.",
          deliverable: "Gap analysis, benchmark audit, and fixed-scope delivery proposal.",
        },
        {
          step: "03",
          title: "Architecture and Planning",
          whatHappens:
            "We formulate the target state data model, select appropriate cloud tooling (Snowflake, Fabric, dbt), and structure modular transformation tiers.",
          deliverable: "Production architecture diagram, schema definitions, and sprint milestones.",
        },
        {
          step: "04",
          title: "Implementation and Testing",
          whatHappens:
            "We engineer resilient pipelines, semantic data marts, or custom AI agents with automated CI/CD validation and unit testing.",
          deliverable: "Tested codebase, automated data quality assertions, and staging deployment.",
        },
        {
          step: "05",
          title: "Deployment and Handover",
          whatHappens:
            "We execute production deployment to your tenant, run interactive handover workshops, and provide complete operational runbooks.",
          deliverable: "100% code ownership, runbooks, and self-sufficient team handover.",
        },
      ],
      commitments: [
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
      ],
    },
    techStackSection: {
      eyebrow: "The Stack We Build On",
      title: "Enterprise-grade tooling, configured for your ecosystem",
      description:
        "We don't force proprietary tooling. We engineer, optimize, and scale the modern data stack your team already knows.",
    },
    comparison: {
      eyebrow: "Why consultfox",
      title: "What we have that others don't",
      description: "Data firms sell promises. We try to sell results.",
      headers: {
        criterion: "Criterion",
        consultfox: "consultfox",
        typical: "Typical Agency",
      },
      rows: [
        {
          label: "Working systems delivered",
          consultfox: "Always: every engagement ends with something your team can open, query, and build on.",
          typical: "Maybe: often a report or roadmap.",
        },
        {
          label: "Use your existing stack",
          consultfox: "Always: Snowflake, Fabric, Databricks, dbt, Power BI, we make what you have work properly.",
          typical: "Rarely: they sell you new tools.",
        },
        {
          label: "Senior engineers on every project",
          consultfox: "Always: handled by people who've solved this problem before.",
          typical: "Pitched by seniors, staffed with juniors.",
        },
        {
          label: "Full documentation and handover",
          consultfox: "Always: every pipeline, every model, every transformation comes with documentation.",
          typical: "Rarely.",
        },
        {
          label: "First delivery in 4-6 weeks",
          consultfox: "~6 weeks: we don't cut corners to get there.",
          typical: "3-6 months typical.",
        },
        {
          label: "Honest about what won't work",
          consultfox: "Always: we'd rather lose a sale than build something weak.",
          typical: "Rarely: they scope to sell.",
        },
        {
          label: "Full knowledge transfer",
          consultfox: "Standard: your team owns everything.",
          typical: "Premium add-on.",
        },
        {
          label: "Founder-led accountability",
          consultfox: "Throughout: you work directly with consultfox's founders.",
          typical: "Kickoff only.",
        },
      ],
    },
    caseStudiesSection: {
      eyebrow: "Proof",
      title: "The work speaks for itself",
      description: "Real systems, real outcomes, across five industries.",
      viewAllButton: "View all case studies",
      readCaseStudy: "Read case study",
      allCaseStudies: "All case studies",
      recentEngagements: "Recent engagements",
      pageTitle: "The work speaks for itself",
      pageSubtitle:
        "Real systems that eliminated manual work, surfaced real-time insights, and helped businesses scale.",
      challengeTitle: "The Challenge",
      challengeSubtitle: "The Operational Bottleneck",
      solutionTitle: "The Architecture",
      solutionSubtitle: "How consultfox Solved It",
      implementationEyebrow: "Implementation",
      implementationTitle: "Core system components",
      implementationSubtitle:
        "Engineered for high reliability, fault tolerance, and seamless handoff to internal teams.",
      technologiesDeployed: "Technologies Deployed",
      otherCaseStudies: "Other case studies",
      verifiedOutcome: "Verified Client Outcome",
    },
    servicesPage: {
      eyebrow: "Services",
      title: "The full data and AI stack",
      description:
        "We work across the full data and AI stack, from raw ingestion to production-ready AI. Pick where you're stuck.",
      exploreService: "Explore service",
      talkToEngineer: "Talk to a engineer",
      seeApproach: "See our approach",
      howWeEngageEyebrow: "How we engage",
      howWeEngageTitle: "A predictable, three-step process",
      steps: [
        {
          title: "Discovery and audit",
          body: "We start with a discovery session, understanding your source systems, current setup, and what downstream teams actually need before recommending anything.",
        },
        {
          title: "Design and build in layers",
          body: "We design the target architecture, agree on conventions, and build in layers, with cost controls, observability, and documentation included from the first commit, not optional.",
        },
        {
          title: "Handover, documented",
          body: "We hand over with full documentation, including runbooks and a clear path for your team to extend what's been built without breaking it.",
        },
      ],
      relatedEyebrow: "Related",
      relatedTitlePrefix: "More from",
      faqEyebrow: "Questions",
      faqTitle: "Questions we hear most",
      ctaTitlePrefix: "Ready to talk about",
    },
    industriesSection: {
      eyebrow: "Industries",
      title: "Industries we've worked in",
      description: "Every engagement shaped by domain knowledge, not just technical skills.",
      items: [
        {
          name: "Retail & E-Commerce",
          description:
            "Customer analytics, inventory forecasting, and analytics engines that reduce churn and increase basket size.",
        },
        {
          name: "Healthcare",
          description:
            "Patient data platforms, clinical reporting, and HIPAA-compliant analytics environments for providers and health-tech.",
        },
        {
          name: "Finance & Banking",
          description:
            "Real-time transaction analytics, fraud detection, regulatory reporting, and risk dashboards.",
        },
        {
          name: "Real Estate & Construction",
          description:
            "Project data consolidation, budget tracking dashboards, and supply chain analytics across multi-site operations.",
        },
        {
          name: "IoT & Technology",
          description:
            "High-volume device data ingestion, stream processing, and analytics platforms for connected product companies.",
        },
        {
          name: "Manufacturing & Industrial",
          description:
            "Operational analytics, quality control monitoring, and supply chain visibility platforms.",
        },
      ],
    },
    faqSection: {
      eyebrow: "Questions",
      title: "Questions we hear most",
      items: [
        {
          q: "What makes consultfox different from a traditional consultancy?",
          a: "We build systems, not slide decks. We don't bill by the hour to tell you what's broken; we engineer and deploy the solution directly into your production environment.",
        },
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
          a: "It depends on scope. A focused data pipeline build might be €15k-€30k. A full warehouse and BI engagement is typically €40k-€80k. We'll give you a clear number after the discovery call, no surprise invoices.",
        },
        {
          q: "What industries do you work in?",
          a: "Financial services, healthcare, cannabis, QSR, retail, IoT, HR, and more. The common thread is mid-market companies ($3M-$75M) with 0-2 in-house data staff who need senior engineering help fast.",
        },
      ],
    },
    ctaSection: {
      title: "Let's solve your data challenge.",
      body: "Tell us what you're trying to build. We'll help you identify the right next step.",
      button: "Discuss Your Project",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "We'd love to hear from you",
      description:
        "Whether you have a project, a data challenge, or just an idea to explore, we're happy to talk. Our team responds within one business day, keeping every conversation focused, honest, and straight to the point.",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      addressLabel: "Address",
      form: {
        fullName: "Full name",
        fullNamePlaceholder: "Your full name",
        fullNameError: "Enter your full name.",
        mobile: "Mobile number",
        mobilePlaceholder: "+49 163 4253066",
        mobileError: "Enter a valid mobile number.",
        email: "Email address",
        emailPlaceholder: "name@company.com",
        emailError: "Enter a valid email address.",
        notes: "Notes",
        notesOptional: "(optional)",
        notesPlaceholder: "What are you trying to fix or build?",
        submitButton: "Send message",
        responseNote: "We respond within one business day.",
        sentNote: "Your email app should open with the message ready to send.",
      },
    },
    footer: {
      tagline:
        "Enterprise Data & AI Consultancy. We build pipelines, lakehouses, dashboards, and custom AI systems that businesses actually use.",
      servicesTitle: "Services",
      caseStudiesTitle: "Case Studies",
      contactTitle: "Contact",
      copyright: "All rights reserved.",
    },
  },
  de: {
    nav: {
      services: "Dienstleistungen",
      caseStudies: "Fallstudien",
      contact: "Kontakt",
      viewAllServices: "Alle Dienstleistungen anzeigen",
      notSureWhereToStart: "Nicht sicher, wo Sie anfangen sollen?",
    },
    hero: {
      badge: "DATEN-ENGINEERING · ANALYTIK · KI",
      headline: "Machen Sie mehr aus Ihren Daten.",
      description:
        "Wir helfen Unternehmen, zuverlässige Datenpipelines, Analyseplattformen und KI-Lösungen aufzubauen, die aus fragmentierten Informationen bessere Entscheidungen machen.",
      ctaPrimary: "Projekt besprechen",
      ctaSecondary: "Unsere Arbeit ansehen",
      supportingStatement: "Klare Architektur. Dokumentierter Code. Eine Übergabe, die Ihr Team selbst betreiben kann.",
      checklist: {
        delivery: "4-6 Wochen Lieferzeit",
        noLockIn: "Kein Vendor Lock-in",
        handover: "100% Code-Übergabe",
        euHosted: "In der EU gehostet",
      },
      stats: {
        systems: "50+ Systeme",
        systemsSubtitle: "Erfolgreich in Produktion",
        stack: "Microsoft & Snowflake Stack",
        liveSystem: "Live-System",
      },
    },
    whatWeBuild: {
      eyebrow: "Dienstleistungen",
      title: "Kernkompetenzen für skalierbare Daten- und KI-Systeme",
      description:
        "Wir entwickeln robuste Dateninfrastrukturen entlang vier zentraler Säulen – von der Datenerfassung und Warehouse-Architektur bis hin zu produktiven KI-Workflows.",
      viewAllButton: "Gesamten Leistungskatalog ansehen (20 Services)",
    },
    howWeWork: {
      eyebrow: "Unser Vorgehen",
      title: "Ein strukturierter, fünfstufiger Engineering-Ablauf",
      description:
        "Jedes Vorhaben folgt einem klaren 5-Phasen-Lebenszyklus. Keine unendlichen Retainer, keine Überraschungen.",
      steps: [
        {
          step: "01",
          title: "Discovery",
          whatHappens:
            "Wir analysieren Ihre Quellsysteme, Berichtsengpässe, Sicherheitsanforderungen und geschäftlichen Ziele in fokussierten technischen Interviews.",
          deliverable: "Technischer Discovery-Bericht und priorisierte Umsetzungs-Roadmap.",
        },
        {
          step: "02",
          title: "Assessment",
          whatHappens:
            "Unsere Senior Engineers prüfen Schemazuverlässigkeit, Rechenkosten, Pipeline-Latenzen und Datenqualität in Ihrem gesamten Stack.",
          deliverable: "Gap-Analyse, Benchmark-Audit und verbindliches Projektangebot mit Festpreis/Scope.",
        },
        {
          step: "03",
          title: "Architektur und Planung",
          whatHappens:
            "Wir entwerfen das Zieldatenmodell, wählen passende Cloud-Tools (Snowflake, Fabric, dbt) und gliedern modulare Transformationsschichten.",
          deliverable: "Produktions-Architekturdiagramm, Schemaspezifikationen und Sprint-Meilensteine.",
        },
        {
          step: "04",
          title: "Implementierung und Testing",
          whatHappens:
            "Wir entwickeln widerstandsfähige Pipelines, Data Marts oder maßgeschneiderte KI-Agenten mit automatisierter CI/CD-Validierung und Regressionstests.",
          deliverable: "Getestete Codebasis, automatische Datenqualitätsprüfungen und Staging-Deployment.",
        },
        {
          step: "05",
          title: "Deployment und Übergabe",
          whatHappens:
            "Wir führen das unterbrechungsfreie Produktions-Deployment in Ihrer Cloud durch, leiten interaktive Workshops und erstellen umfassende Runbooks.",
          deliverable: "100% Code- und Repository-Eigentum, Runbooks und vollständige Autonomie Ihres Teams.",
        },
      ],
      commitments: [
        {
          title: "Verbindliche Lieferung",
          body: "Sobald wir uns verpflichten, liefern wir. Kein Scope Creep, keine Ausflüchte. Jedes Projekt endet mit einem produktiven, funktionierenden System.",
        },
        {
          title: "Solides Engineering",
          body: "Entweder wir bauen es fachgerecht oder gar nicht. Jede Pipeline dokumentiert. Jedes Modell nachvollziehbar. Jede Transformation automatisiert getestet.",
        },
        {
          title: "Keine Zeitverschwendung",
          body: "Wir verschwenden weder Ihre noch unsere Zeit. Die meisten Kunden verfügen innerhalb von 4-6 Wochen über ein lauffähiges System.",
        },
        {
          title: "Keine Blackboxes",
          body: "Sie wissen stets genau, was wir bauen, warum wir es bauen und wie es funktioniert. Bei Abweichungen hören Sie es von uns zuerst.",
        },
        {
          title: "Vollständige Übergabe",
          body: "Wir übergeben nicht einfach ein System und verschwinden. Ihr Team wird vollständig befähigt, die Lösung eigenständig zu betreiben und weiterzuentwickeln.",
        },
        {
          title: "Ehrliche Passgenauigkeit",
          body: "Wir lehnen ein Projekt lieber ab, als zu viel zu versprechen. Wenn etwas nicht passt, sagen wir es Ihnen direkt zu Beginn.",
        },
      ],
    },
    techStackSection: {
      eyebrow: "Unser Technologie-Stack",
      title: "Enterprise-Tooling, optimal auf Ihr Ökosystem abgestimmt",
      description:
        "Wir zwingen Ihnen keine proprietären Tools auf. Wir optimieren, skalieren und integrieren den modernen Daten-Stack, den Ihr Team bereits schätzt.",
    },
    comparison: {
      eyebrow: "Warum consultfox",
      title: "Was uns von anderen unterscheidet",
      description: "Andere Agenturen verkaufen Versprechen. Wir liefern messbare Ergebnisse.",
      headers: {
        criterion: "Kriterium",
        consultfox: "consultfox",
        typical: "Typische Agentur",
      },
      rows: [
        {
          label: "Funktionierende Systeme geliefert",
          consultfox: "Immer: Jedes Projekt endet mit Software, die Ihr Team sofort nutzen und erweitern kann.",
          typical: "Oft nur ein theoretischer Bericht oder eine Roadmap.",
        },
        {
          label: "Nutzung Ihres bestehenden Stacks",
          consultfox: "Immer: Snowflake, Fabric, Databricks, dbt, Power BI - wir bringen Ihre vorhandenen Tools zum Glänzen.",
          typical: "Verkaufen Ihnen ständig neue, teure Lizenzen.",
        },
        {
          label: "Senior Engineers in jedem Projekt",
          consultfox: "Immer: Durchgeführt von erfahrenen Experten, die genau diese Probleme schon gelöst haben.",
          typical: "Von Seniors gepitcht, von Junioren umgesetzt.",
        },
        {
          label: "Dokumentation und Übergabe",
          consultfox: "Immer: Jede Pipeline, jedes Datenmodell und jede Transformation wird detailliert dokumentiert.",
          typical: "Selten oder unvollständig.",
        },
        {
          label: "Erste Lieferung in 4-6 Wochen",
          consultfox: "~6 Wochen: Wir liefern zügig und ohne Kompromisse bei der Qualität.",
          typical: "3-6 Monate typische Vorlaufzeit.",
        },
        {
          label: "Ehrlichkeit bei Schwachstellen",
          consultfox: "Immer: Wir verzichten lieber auf einen Auftrag, als eine schwache Architektur aufzubauen.",
          typical: "Sagen zu allem Ja, nur um den Vertrag abzuschließen.",
        },
        {
          label: "Vollständiger Wissenstransfer",
          consultfox: "Standard: Ihr Team besitzt den gesamten Code und das Know-how.",
          typical: "Oft nur als teures Zusatzpaket erhältlich.",
        },
        {
          label: "Verantwortung durch Gründer",
          consultfox: "Durchgehend: Sie arbeiten direkt mit den Gründern von consultfox.",
          typical: "Gründer sind nur beim Kickoff dabei.",
        },
      ],
    },
    caseStudiesSection: {
      eyebrow: "Erfolge",
      title: "Die Ergebnisse sprechen für sich",
      description: "Echte Systeme, messbare Resultate in fünf Industriezweigen.",
      viewAllButton: "Alle Fallstudien ansehen",
      readCaseStudy: "Fallstudie lesen",
      allCaseStudies: "Alle Fallstudien",
      recentEngagements: "Aktuelle Projekte",
      pageTitle: "Die Ergebnisse sprechen für sich",
      pageSubtitle:
        "Echte Systeme, die manuelle Arbeit eliminierten, Echtzeit-Einblicke schufen und Unternehmen beim Skalieren halfen.",
      challengeTitle: "Die Herausforderung",
      challengeSubtitle: "Der operative Engpass",
      solutionTitle: "Die Architektur",
      solutionSubtitle: "Wie consultfox das Problem löste",
      implementationEyebrow: "Implementierung",
      implementationTitle: "Zentrale Systemkomponenten",
      implementationSubtitle:
        "Entwickelt für maximale Ausfallsicherheit, Fehlertoleranz und nahtlose Übergabe an interne Teams.",
      technologiesDeployed: "Eingesetzte Technologien",
      otherCaseStudies: "Weitere Fallstudien",
      verifiedOutcome: "Verifiziertes Kundenergebnis",
    },
    servicesPage: {
      eyebrow: "Dienstleistungen",
      title: "Der komplette Daten- und KI-Stack",
      description:
        "Wir arbeiten über den gesamten Daten- und KI-Lifecycle hinweg. Wählen Sie den Bereich, in dem Sie Unterstützung benötigen.",
      exploreService: "Dienstleistung entdecken",
      talkToEngineer: "Mit einem Ingenieur sprechen",
      seeApproach: "Unser Vorgehen",
      howWeEngageEyebrow: "Zusammenarbeit",
      howWeEngageTitle: "Ein transparenter 3-Stufen-Prozess",
      steps: [
        {
          title: "Audit & Zieldefinition",
          body: "Wir starten mit einer Analyse Ihrer Quellsysteme und der Anforderungen Ihrer Fachbereiche, bevor wir eine Architektur empfehlen.",
        },
        {
          title: "Schichtenweiser Aufbau",
          body: "Wir entwerfen die Zielarchitektur mit strikten Kostenkontrollen, Monitoring und Dokumentation von Tag eins an.",
        },
        {
          title: "Dokumentierte Übergabe",
          body: "Wir übergeben die Lösung mit Runbooks und Schulungen, sodass Ihr Team das System eigenständig und sicher weiterführen kann.",
        },
      ],
      relatedEyebrow: "Verwandt",
      relatedTitlePrefix: "Mehr aus dem Bereich",
      faqEyebrow: "Häufige Fragen",
      faqTitle: "Fragen, die wir oft hören",
      ctaTitlePrefix: "Bereit für ein Gespräch über",
    },
    industriesSection: {
      eyebrow: "Branchen",
      title: "Branchen, in denen wir tätig sind",
      description: "Jedes Projekt profitiert von fundiertem Domänenwissen und praxiserprobter technischer Exzellenz.",
      items: [
        {
          name: "Handel & E-Commerce",
          description:
            "Kundenanalysen, Bestands- und Absatzprognosen, die Abwanderung verringern und den durchschnittlichen Warenkorb vergrößern.",
        },
        {
          name: "Gesundheitswesen",
          description:
            "Patientendaten-Plattformen, klinische Auswertungen und DSGVO- bzw. HIPAA-konforme Analyseumgebungen für Dienstleister und Health-Tech.",
        },
        {
          name: "Finanz- & Bankenwesen",
          description:
            "Echtzeit-Transaktionsanalysen, Betrugserkennung (Fraud Detection), regulatorische Berichte und Risikomanagement-Dashboards.",
        },
        {
          name: "Immobilien & Bauwirtschaft",
          description:
            "Projektcontrolling, Budget-Tracking-Dashboards und Lieferkettenanalysen für standortübergreifende Unternehmungen.",
        },
        {
          name: "IoT & Technologie",
          description:
            "Hochvolumige Gerätedatenerfassung, Stream-Processing und skalierbare Analyseplattformen für vernetzte Hardware und IoT-Flotten.",
        },
        {
          name: "Fertigung & Industrie",
          description:
            "Betriebsdatenanalyse, Qualitätsüberwachung in Echtzeit und lückenlose Transparenz entlang der gesamten Fertigungskette.",
        },
      ],
    },
    faqSection: {
      eyebrow: "Häufige Fragen",
      title: "Fragen, die wir oft hören",
      items: [
        {
          q: "Was unterscheidet consultfox von traditionellen Beratungsagenturen?",
          a: "Wir entwickeln produktive Systeme statt PowerPoint-Folien. Wir rechnen nicht nach Stunden ab, um Ihnen Probleme aufzuzeigen, sondern bauen und integrieren funktionierende Lösungen direkt in Ihre Infrastruktur.",
        },
        {
          q: "Muss unsere Dateninfrastruktur bereits aufgeräumt sein?",
          a: "Nein. Die meisten Kunden kommen zu uns, weil die Infrastruktur fragmentiert ist. In einem initialen Discovery-Audit analysieren wir die Lage und priorisieren die wichtigsten Schritte.",
        },
        {
          q: "Wie lange dauert ein typisches Projekt?",
          a: "Erste funktionierende Systeme stehen in der Regel nach 4 bis 8 Wochen. Wir kalkulieren transparent und ehrlich: Braucht ein Vorhaben 12 Wochen, erfahren Sie das vor dem Start.",
        },
        {
          q: "Wollen Sie uns eine bestimmte Plattform verkaufen?",
          a: "Nein. Wir sind zertifizierte Microsoft- und Snowflake-Partner, arbeiten jedoch ohne Provisionsdruck. Wir nutzen das, was am besten zu Ihrem Setup und Budget passt.",
        },
        {
          q: "Was erhalten wir am Ende des Projekts?",
          a: "Ein produktives System, lückenlose Dokumentation und eine intensive Übergabe an Ihr Team. Sie besitzen 100% des Codes, der Modelle und Pipelines - ohne jeglichen Vendor Lock-in.",
        },
        {
          q: "Können Sie mit unserem internen Team zusammenarbeiten?",
          a: "Ja, genau das ist unser bevorzugter Modus. Wir unterstützen als spezialisierter Delivery-Partner, bauen komplexe Komponenten und transferieren das Wissen kontinuierlich an Ihr Team.",
        },
        {
          q: "Was kostet eine typische Zusammenarbeit?",
          a: "Das hängt vom Projektumfang ab. Eine gezielte Datenpipeline liegt oft zwischen 15.000 € und 30.000 €. Ein komplettes Data Warehouse samt BI-Architektur liegt typischerweise zwischen 40.000 € und 80.000 €.",
        },
        {
          q: "In welchen Branchen arbeiten Sie?",
          a: "Finanzdienstleistungen, Healthcare, Gastronomie, Handel, IoT, HR und mehr. Typischerweise unterstützen wir mittelständische Unternehmen mit 0 bis 2 internen Daten-Spezialisten.",
        },
      ],
    },
    ctaSection: {
      title: "Lassen Sie uns Ihre Datenherausforderung lösen.",
      body: "Sagen Sie uns, was Sie aufbauen möchten. Wir helfen Ihnen, den richtigen nächsten Schritt zu definieren.",
      button: "Projekt besprechen",
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Wir freuen uns auf den Austausch",
      description:
        "Ob ein konkretes Vorhaben, eine Herausforderung in Ihrer Datenlandschaft oder eine erste Idee: Wir antworten innerhalb eines Werktags - fokussiert, verbindlich und auf den Punkt.",
      phoneLabel: "Telefon / WhatsApp",
      emailLabel: "E-Mail",
      addressLabel: "Standort",
      form: {
        fullName: "Vollständiger Name",
        fullNamePlaceholder: "Ihr vollständiger Name",
        fullNameError: "Bitte geben Sie Ihren vollständigen Namen ein.",
        mobile: "Telefonnummer",
        mobilePlaceholder: "+49 163 4253066",
        mobileError: "Bitte geben Sie eine gültige Telefonnummer ein.",
        email: "E-Mail-Adresse",
        emailPlaceholder: "name@unternehmen.de",
        emailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        notes: "Projektnotizen",
        notesOptional: "(optional)",
        notesPlaceholder: "Welches System möchten Sie optimieren oder aufbauen?",
        submitButton: "Nachricht senden",
        responseNote: "Wir melden uns innerhalb eines Werktags.",
        sentNote: "Ihr E-Mail-Programm öffnet sich mit der vorbereiteten Nachricht.",
      },
    },
    footer: {
      tagline:
        "Enterprise Data- & KI-Beratung. Wir entwickeln Pipelines, Lakehouses, Dashboards und maßgeschneiderte KI-Systeme mit echtem geschäftlichem Mehrwert.",
      servicesTitle: "Dienstleistungen",
      caseStudiesTitle: "Fallstudien",
      contactTitle: "Kontakt",
      copyright: "Alle Rechte vorbehalten.",
    },
  },
};

export const serviceTranslations: Record<
  string,
  Record<Language, { name: string; pitch: string; intro: string }>
> = {
  "big-data": {
    en: {
      name: "Big Data Development",
      pitch: "High-throughput architectures built to process petabyte-scale data streams without performance bottlenecks.",
      intro:
        "When data volumes spike, brittle pipelines collapse. We engineer robust, distributed processing clusters using Spark and Databricks that maintain sub-second querying as your company scales.",
    },
    de: {
      name: "Big Data Entwicklung",
      pitch: "Hochdurchsatz-Architekturen zur unterbrechungsfreien Verarbeitung von Datenströmen im Petabyte-Bereich.",
      intro:
        "Bei sprunghaft steigenden Datenmengen versagen starre Pipelines. Wir konzipieren verteilte Rechencluster mit Spark und Databricks, die selbst bei rasantem Wachstum schnelle Abfragen garantieren.",
    },
  },
  "data-strategy-consulting": {
    en: {
      name: "Data Strategy Consulting",
      pitch: "Turn disconnected data collection into a prioritized roadmap focused directly on measurable business outcomes.",
      intro:
        "Hoarding data without purpose is expensive and noisy. We audit your existing assets, identify high-impact analytics use cases, and define an actionable engineering roadmap tailored to your executive goals.",
    },
    de: {
      name: "Datenstrategie-Beratung",
      pitch: "Verwandeln Sie zusammenhanglose Datensammlungen in eine priorisierte Roadmap für messbaren Geschäftserfolg.",
      intro:
        "Daten ohne klaren Zweck anzuhäufen ist teuer und ineffizient. Wir prüfen Ihre Bestände, ermitteln wertschöpfende Anwendungsfälle und entwickeln eine praxisnahe Roadmap für Ihre Geschäftsführung.",
    },
  },
  "data-integration": {
    en: {
      name: "Data Integration",
      pitch: "Centralize scattered application data into automated, synchronized pipelines with zero manual export headaches.",
      intro:
        "Eliminate fragile CSV spreadsheets and manual reconciliations. We build automated connectors across your CRMs, ERPs, transactional databases, and third-party APIs into a unified ingestion pipeline.",
    },
    de: {
      name: "Datenintegration",
      pitch: "Konsolidieren Sie fragmentierte Anwendungsdaten in automatisierten, synchronisierten Pipelines ohne manuelle Exporte.",
      intro:
        "Schluss mit fehleranfälligen Tabellen und manuellem Datenabgleich. Wir entwickeln Schnittstellen für Ihre CRM-, ERP- und Transaktionssysteme sowie externe APIs zu einer zentralen Ingestion-Pipeline.",
    },
  },
  "data-warehouse": {
    en: {
      name: "Data Warehouse",
      pitch: "Single source of truth engineered on cloud lakehouses, structured for fast querying and transparent cost control.",
      intro:
        "Stop running heavy analytical queries directly against your operational database. We design and deploy enterprise cloud data warehouses on Snowflake, Microsoft Fabric, BigQuery, and Synapse with modular dbt transformations and strict consumption guardrails.",
    },
    de: {
      name: "Cloud Data Warehouse",
      pitch: "Single Source of Truth auf modernen Cloud-Lakehouses - konzipiert für rasante Abfragen und volle Kostenkontrolle.",
      intro:
        "Belasten Sie Ihre operativen Produktivdatenbanken nicht mit komplexen Analysen. Wir implementieren moderne Cloud Data Warehouses auf Snowflake, Microsoft Fabric, BigQuery und Synapse mit dbt-Transformationen.",
    },
  },
  "data-governance": {
    en: {
      name: "Data Governance",
      pitch: "Role-based access, audited data lineage, and compliance frameworks that protect your company without slowing engineers down.",
      intro:
        "Eliminate ambiguity around data accuracy, stewardship, and regulatory compliance. We implement modern data catalogs, automated schema validation, and granular role-based security across your storage layers.",
    },
    de: {
      name: "Data Governance & Compliance",
      pitch: "Rollenbasierte Zugriffe, lückenlose Data Lineage und Compliance-Strukturen zum Schutz Ihrer Daten.",
      intro:
        "Beseitigen Sie Unsicherheiten bezüglich Datenqualität und DSGVO-Vorgaben. Wir etablieren Datenkataloge, automatische Schemavalidierung und feingranulare Sicherheitsrichtlinien über alle Speicher hinweg.",
    },
  },
  "data-lake": {
    en: {
      name: "Data Lake",
      pitch: "Cost-effective object storage architectures that catalog raw datasets while maintaining instant queryability.",
      intro:
        "Capture unstructured and structured streams in scalable object storage like S3 and ADLS Gen2, organized with open table formats like Delta Lake and Iceberg to prevent your lake from turning into an unsearchable swamp.",
    },
    de: {
      name: "Data Lake Architektur",
      pitch: "Wirtschaftliche Objektspeicher-Architekturen, die Rohdaten strukturiert erfassen und sofort abfragbar halten.",
      intro:
        "Erfassen Sie strukturierte und unstrukturierte Daten in skalierbaren Objektspeichern wie S3 und ADLS Gen2 mit modernen Tabellenformaten wie Delta Lake und Iceberg - für maximale Durchsuchbarkeit.",
    },
  },
  "data-engineering": {
    en: {
      name: "Data Engineering",
      pitch: "Production-hardened ETL/ELT pipelines with automated testing, observability, and self-healing error handling.",
      intro:
        "Data pipelines should be as dependable as production software. We design resilient orchestration workflows using dbt, Airflow, and Prefect with built-in alerting, schema regression tests, and zero downtime.",
    },
    de: {
      name: "Data Engineering & ETL",
      pitch: "Produktionsreife ETL/ELT-Pipelines mit automatisierten Tests, kontinuierlichem Monitoring und robuster Fehlerbehandlung.",
      intro:
        "Datenpipelines müssen so stabil sein wie Kernsoftware. Wir bauen ausfallsichere Workflows mit dbt, Airflow und Prefect mit automatisierter Fehlerüberwachung und ohne Betriebsunterbrechungen.",
    },
  },
  "data-visualization": {
    en: {
      name: "Data Visualization",
      pitch: "Intuitive, decision-driven interfaces that surface high-signal operational indicators at a glance.",
      intro:
        "Dashboards are useless if leaders can't extract immediate answers. We design clean, responsive visualization interfaces that present crucial business drivers without cognitive overload.",
    },
    de: {
      name: "Datenvisualisierung",
      pitch: "Intuitive, entscheidungsorientierte Benutzeroberflächen, die operative Schlüsselkennzahlen auf einen Blick sichtbar machen.",
      intro:
        "Dashboards nützen nichts, wenn Entscheider keine klaren Schlüsse ziehen können. Wir gestalten übersichtliche Visualisierungen, die entscheidende Treiber ohne Überfrachtung auf den Punkt bringen.",
    },
  },
  "power-bi": {
    en: {
      name: "Power BI",
      pitch: "Optimized semantic models, robust DAX calculations, and executive reports engineered for sub-second responses.",
      intro:
        "We build enterprise-grade Power BI environments featuring clean star schemas, high-efficiency DAX formulas, row-level security, and embedded client-facing portals your leadership will reference every morning.",
    },
    de: {
      name: "Power BI Lösungen",
      pitch: "Optimierte semantische Modelle, performante DAX-Formeln und Vorstandsberichte mit Ladezeiten unter einer Sekunde.",
      intro:
        "Wir entwickeln erstklassige Power BI-Umgebungen mit Sternschemata, effizienten Berechnungen, Zeilen-Sicherheit (RLS) und interaktiven Portalen, die Ihr Management täglich nutzt.",
    },
  },
  "data-analytics": {
    en: {
      name: "Data Analytics",
      pitch: "Diagnostic and trend intelligence that uncovers hidden revenue drivers and operational cost leaks.",
      intro:
        "Raw data sitting dormant in databases doesn't grow revenue. We build automated cohort analysis, customer retention modeling, and demand forecasting models that guide tactical resource allocation.",
    },
    de: {
      name: "Datenanalyse & Insights",
      pitch: "Diagnostische Analysen und Trendmodelle, die ungenutzte Ertragspotenziale und verdeckte Kostenfaktoren aufdecken.",
      intro:
        "Ungenutzte Datenbanken schaffen keinen Mehrwert. Wir implementieren automatisierte Kohortenanalysen, Kundenbindungsmodelle und Nachfrageprognosen für zielgerichtete Entscheidungen.",
    },
  },
  "microsoft-fabric": {
    en: {
      name: "Microsoft Fabric Consulting",
      pitch: "Consolidate Synapse, Data Factory, and Power BI into a unified OneLake architecture that lowers total licensing spend.",
      intro:
        "Transition away from fragmented multi-tool licensing into a cohesive Microsoft Fabric setup. We handle OneLake workspace topology, Delta table optimization, and capacity sizing to maximize compute efficiency.",
    },
    de: {
      name: "Microsoft Fabric Beratung",
      pitch: "Konsolidieren Sie Synapse, Data Factory und Power BI in einer OneLake-Architektur und senken Sie Lizenzkosten.",
      intro:
        "Verabschieden Sie sich von unübersichtlichen Tool-Landschaften. Wir übernehmen Workspace-Architektur, Delta-Table-Optimierung und Kapazitätsplanung in Microsoft Fabric für höchste Effizienz.",
    },
  },
  "business-intelligence": {
    en: {
      name: "Business Intelligence",
      pitch: "Self-service business intelligence suites that deliver actionable metrics straight to decision-makers in real time.",
      intro:
        "Empower your business units with trustworthy, governed self-service BI. We eliminate departmental reporting silos by providing curated data marts, automated scheduled alerts, and standardized KPI definitions.",
    },
    de: {
      name: "Business Intelligence (BI)",
      pitch: "Self-Service-BI-Suiten, die operative Kennzahlen in Echtzeit direkt an Entscheider liefern.",
      intro:
        "Befähigen Sie Ihre Fachbereiche mit verlässlichem Self-Service-BI. Wir beseitigen Berichtssilos durch kuratierte Data Marts, automatisierte Alerts und einheitliche KPI-Definitionen.",
    },
  },
  "ai-consulting": {
    en: {
      name: "AI Consulting",
      pitch: "Pragmatic, ROI-validated artificial intelligence roadmaps designed around your existing data readiness.",
      intro:
        "Cut through the noise of generic artificial intelligence marketing. We evaluate your data cleanliness, model viability, and infrastructure costs to engineer production AI systems that deliver tangible bottom-line value.",
    },
    de: {
      name: "KI-Beratung",
      pitch: "Pragmatische, ROI-geprüfte KI-Roadmaps, die auf der tatsächlichen Reife Ihrer Daten aufbauen.",
      intro:
        "Blicken Sie durch den Hype generischer KI-Versprechen hindurch. Wir bewerten Datenqualität, Modelltauglichkeit und Infrastrukturkosten, um produktive KI-Lösungen mit messbarem Ertrag zu schaffen.",
    },
  },
  "ai-agent-development": {
    en: {
      name: "AI Agent Development",
      pitch: "Autonomous software agents capable of executing complex business workflows directly within your production tools.",
      intro:
        "Beyond conversational toys: we build stateful, autonomous AI agents equipped with tool-calling capabilities, vector memory, and deterministic guardrails to automate customer qualification, data entry, and multi-system workflows.",
    },
    de: {
      name: "KI-Agenten-Entwicklung",
      pitch: "Autonome Software-Agenten, die komplexe Unternehmensabläufe direkt in Ihren Produktivwerkzeugen ausführen.",
      intro:
        "Mehr als Spielereien: Wir entwickeln autonome KI-Agenten mit Tool-Integration, Vektorspeicher und sicheren Leitplanken zur Automatisierung von Lead-Qualifizierung und Datenabgleichen.",
    },
  },
  "ai-chatbot-development": {
    en: {
      name: "AI Chatbot Development",
      pitch: "Enterprise RAG conversational engines grounded in your proprietary documentation with strict factual grounding.",
      intro:
        "Deploy enterprise-grade conversational AI that never hallucinates outside your knowledge base. Powered by hybrid semantic vector search, fine-tuned domain embeddings, and real-time citation links.",
    },
    de: {
      name: "KI-Chatbot & RAG Entwicklung",
      pitch: "RAG-basierte Dialogsysteme für Unternehmen, strikt abgesichert durch Ihre internen Dokumente und Wissensdatenbanken.",
      intro:
        "Setzen Sie Enterprise-KI ein, die niemals außerhalb Ihrer Wissensbasis halluziniert. Realisiert durch hybride semantische Vektorsuche und lückenlose Quellennachweise.",
    },
  },
  "platform-strategy": {
    en: {
      name: "Platform Strategy",
      pitch: "Harmonize isolated software platforms and databases into an interoperable, unified architecture.",
      intro:
        "As organizations scale, software tools multiply in silos. We analyze your tech landscape and blueprint a cohesive modern data architecture where CRM, ERP, finance, and marketing tools exchange data seamlessly.",
    },
    de: {
      name: "Plattform-Strategie",
      pitch: "Harmonisieren Sie isolierte Softwareplattformen und Datenbanken in einer interoperablen Gesamtarchitektur.",
      intro:
        "Mit wachsendem Unternehmen vermehren sich Silos. Wir analysieren Ihre Softwarelandschaft und entwerfen eine kohärente Datenarchitektur, in der CRM, ERP und Finanzsysteme reibungslos interagieren.",
    },
  },
  "data-strategy": {
    en: {
      name: "Data Strategy",
      pitch: "Transform passive internal data records into an active competitive asset that drives executive clarity.",
      intro:
        "Every customer interaction and transaction produces valuable telemetry. We build comprehensive enterprise data strategies covering infrastructure roadmaps, talent requirements, and KPI frameworks that drive sustainable growth.",
    },
    de: {
      name: "Datenstrategie",
      pitch: "Verwandeln Sie passive Unternehmensdaten in einen aktiven Wettbewerbsvorteil für strategische Klarheit.",
      intro:
        "Jede Kundeninteraktion erzeugt wertvolle Telemetrie. Wir erstellen fundierte Datenstrategien mit Infrastruktur-Roadmaps und KPI-Systemen für nachhaltiges Wachstum.",
    },
  },
  "ai-strategy": {
    en: {
      name: "AI Strategy",
      pitch: "Clear-eyed strategic blueprints for AI adoption that prioritize high-impact use cases and risk mitigation.",
      intro:
        "Avoid costly AI pilot traps that never reach production. We work directly with leadership to define defensible AI initiatives, evaluate vendor build-versus-buy trade-offs, and establish governance guidelines.",
    },
    de: {
      name: "KI-Strategie",
      pitch: "Fundierte strategische Pläne zur KI-Einführung mit Fokus auf werthaltige Anwendungsfälle und Risikominimierung.",
      intro:
        "Vermeiden Sie teure Pilotprojekte, die nie die Produktionsreife erlangen. Wir definieren belastbare KI-Initiativen, prüfen Make-or-Buy-Optionen und setzen Compliance-Richtlinien um.",
    },
  },
  "ai-operations": {
    en: {
      name: "AIOps",
      pitch: "Continuous model monitoring, drift detection, and automated retraining pipelines for production AI reliability.",
      intro:
        "Machine learning models naturally decay as real-world market dynamics shift. We implement proactive drift detection, latency monitoring, and automated feedback loops to guarantee model inference remains accurate.",
    },
    de: {
      name: "AIOps & Modell-Monitoring",
      pitch: "Kontinuierliches Modell-Monitoring, Data-Drift-Erkennung und automatisierte Nachschulungspipelines.",
      intro:
        "Modelle verlieren an Treffsicherheit, wenn sich Rahmenbedingungen ändern. Wir etablieren proaktive Drift-Erkennung und Feedbackschleifen für dauerhaft präzise KI-Vorhersagen.",
    },
  },
  "devops": {
    en: {
      name: "DevOps",
      pitch: "Predictable CI/CD automation and infrastructure-as-code that eliminate production deployment anxiety.",
      intro:
        "Empower your engineering teams to deploy confidently multiple times a day. We establish automated testing pipelines, staging sandboxes, and immutable infrastructure scripts on Terraform and Kubernetes.",
    },
    de: {
      name: "DevOps & CI/CD Automatisierung",
      pitch: "Vorhersehbare CI/CD-Pipelines und Infrastructure-as-Code für stressfreie Produktiv-Deployments.",
      intro:
        "Ermöglichen Sie Entwicklerteams mehrfache Releases am Tag ohne Risiko. Wir automatisieren Testläufe, Staging-Umgebungen und Infrastructure-as-Code mit Terraform und Kubernetes.",
    },
  },
  "llm-operations": {
    en: {
      name: "LLMOps",
      pitch: "End-to-end LLM lifecycle management: prompt versioning, semantic caching, token cost optimization, and evaluation suites.",
      intro:
        "Moving from an API prototype to enterprise production requires dedicated tooling. We optimize prompt chains, implement semantic vector caching, track token usage budgets, and configure continuous evaluation frameworks.",
    },
    de: {
      name: "LLMOps & Prompt-Engineering",
      pitch: "Ganzheitliches LLM-Lebenszyklus-Management: Prompt-Versionierung, semantisches Caching und Token-Kostenoptimierung.",
      intro:
        "Der Schritt vom Prototyp zum Produktivbetrieb erfordert professionelle Werkzeuge. Wir optimieren Prompt-Ketten, senken Tokenkosten durch semantisches Caching und implementieren Evaluation-Suites.",
    },
  },
  "cloud-operations": {
    en: {
      name: "CloudOps",
      pitch: "Cloud infrastructure governance and cost optimization that right-sizes compute without sacrificing throughput.",
      intro:
        "Gain full visibility into your cloud footprint across AWS, Azure, and GCP. We eliminate orphaned compute instances, configure automated auto-scaling policies, and implement FinOps tagging to reduce monthly cloud expenditure.",
    },
    de: {
      name: "CloudOps & Kostenoptimierung",
      pitch: "Cloud-Governance und Kostenoptimierung, die Rechenkapazitäten passgenau skaliert ohne Durchsatzverluste.",
      intro:
        "Erlangen Sie volle Kostentransparenz über AWS, Azure und GCP. Wir bereinigen verwaiste Ressourcen, automatisieren Auto-Scaling und senken Monatsrechnungen durch FinOps-Praktiken.",
    },
  },
};

export const caseStudyTranslations: Record<
  string,
  Record<
    Language,
    {
      title: string;
      industry: string;
      summary: string;
      challenge: string;
      solution: string;
      metrics: { value: string; label: string; detail: string }[];
      architectureDetails: { title: string; description: string }[];
    }
  >
> = {
  "knowledge-management-system-kms": {
    en: {
      title: "Enterprise Knowledge Intelligence and Document Retrieval Engine",
      industry: "HR & Business Consulting",
      summary:
        "An enterprise AI search and RAG engine indexing thousands of institutional documents, delivering verified answers in sub-seconds with exact paragraph citations.",
      challenge:
        "Over decades of strategic advisory engagements, the firm accumulated tens of thousands of bespoke frameworks, legal compliance templates, client deliverables, and compensation benchmarks dispersed across fragmented cloud storage and email threads. Senior partners and consultants spent upwards of 8 hours every week hunting down past work or redundantly recreating existing artifacts, slowing project turnarounds and increasing overhead.",
      solution:
        "consultfox architected a role-governed, private Retrieval-Augmented Generation (RAG) platform. We engineered continuous document ingestion pipelines that parse and index complex PDFs, spreadsheets, and slide decks, converting unstructured knowledge into high-dimensional vector embeddings. The system employs hybrid semantic and lexical retrieval coupled with strict source citation guardrails, ensuring consultants receive factual, audit-ready answers backed by direct document citations.",
      metrics: [
        {
          value: "75%",
          label: "Research Time Saved",
          detail: "Consultants locate precedents and verified frameworks in seconds rather than hours.",
        },
        {
          value: "100%",
          label: "Citation Traceability",
          detail: "Every synthesized insight links directly to verifiable source pages and paragraphs.",
        },
        {
          value: "15,000+",
          label: "Artifacts Indexed",
          detail: "Unified historical knowledge base continuously updated without manual tagging.",
        },
      ],
      architectureDetails: [
        {
          title: "Multi-Format Document Parsing Pipeline",
          description:
            "Automated OCR and semantic chunking preserving table hierarchies, footnotes, and slide layouts across PDF, DOCX, and PPTX archives.",
        },
        {
          title: "Hybrid Vector and Keyword Indexing",
          description:
            "Dual-retrieval pipeline combining dense vector embeddings with BM25 keyword matching for both conceptual queries and exact regulatory clauses.",
        },
        {
          title: "Role-Based Access Control and Auditing",
          description:
            "Granular permissions model mapping client confidentiality tiers, ensuring sensitive executive compensation data remains restricted to authorized partners.",
        },
      ],
    },
    de: {
      title: "Enterprise Knowledge Intelligence & Dokumenten-Retrieval-Engine",
      industry: "HR & Unternehmensberatung",
      summary:
        "Eine unternehmensweite KI-Such- und RAG-Engine, die zehntausende Dokumente indexiert und in Sekundenschnelle verifizierte Antworten mit exakten Quellenbelegen liefert.",
      challenge:
        "Über Jahrzehnte strategischer Beratungsaufträge sammelten sich zehntausende Frameworks, Compliance-Vorlagen und Kundenberichte verstreut in verschiedenen Clouds und E-Mails an. Berater verbrachten wöchentlich über 8 Stunden mit der manuellen Suche nach früheren Arbeitsergebnissen oder bauten bestehende Vorlagen aufwendig nach.",
      solution:
        "consultfox entwickelte eine rollenbasierte, private RAG-Plattform. Wir implementierten Ingestion-Pipelines für komplexe PDFs, Tabellen und Präsentationen mit hybrider Vektor- und Stichwortsuche und strikten Quellenverweisen, sodass Berater faktenbasierte und sofort zitierfähige Antworten erhalten.",
      metrics: [
        {
          value: "75%",
          label: "Zeitersparnis bei Recherche",
          detail: "Berater finden bewährte Frameworks in Sekunden statt Stunden.",
        },
        {
          value: "100%",
          label: "Quellennachweis-Garantie",
          detail: "Jede generierte Antwort verweist direkt auf die verifizierte Dokumentenseite.",
        },
        {
          value: "15.000+",
          label: "Indexierte Dokumente",
          detail: "Zentralisierte historische Wissensbasis, die sich ohne manuelles Tagging aktualisiert.",
        },
      ],
      architectureDetails: [
        {
          title: "Multi-Format Parsing-Pipeline",
          description:
            "Automatisiertes OCR und semantisches Chunking unter Beibehaltung von Tabellen, Fußnoten und Folienstrukturen.",
        },
        {
          title: "Hybride Vektor- und Stichwort-Indexierung",
          description:
            "Kombinierte Suche aus dichten Vektor-Embeddings und BM25 für konzeptionelle sowie wortgenaue Klauselsuchen.",
        },
        {
          title: "Rollenbasierte Zugriffssteuerung & Audit",
          description:
            "Granulares Rechtemodell, das vertrauliche Vergütungsdaten strikt auf berechtigte Partner begrenzt.",
        },
      ],
    },
  },
  "business-intelligence-end-to-end-solution": {
    en: {
      title: "Autonomous Outbound Voice and Lead Qualification Engine",
      industry: "B2B Eyewear Optical Distribution",
      summary:
        "An automated, low-latency conversational voice agent conducting 200+ intelligent outbound discovery calls daily, qualifying optical practices and syncing directly with Close CRM.",
      challenge:
        "Madison Specs faced a bottleneck common to high-volume B2B distributors: their commercial growth required reaching thousands of independent optometrists and optical boutiques nationwide. Relying solely on manual outbound SDR dialing resulted in low contact rates (under 40 dials per rep per day), high turnover, frequent CRM data entry omissions, and qualified leads slipping through the cracks.",
      solution:
        "consultfox engineered a production-grade autonomous outbound voice pipeline. Combining conversational speech-to-text, low-latency LLM reasoning tailored to optical product catalogs, and hyper-realistic neural voice synthesis, the agent engages practice managers naturally, handles objection flows, confirms decision-maker availability, and schedules qualified product demonstrations in real time while synchronizing every call log and transcription into Close CRM.",
      metrics: [
        {
          value: "200+",
          label: "Daily Discovery Calls",
          detail: "Scalable automated outreach operating consistently without rep fatigue.",
        },
        {
          value: "3.8x",
          label: "Qualified Booking Rate",
          detail: "Higher conversion through instantaneous objection handling and immediate calendar locking.",
        },
        {
          value: "0",
          label: "Manual Dialing Hours",
          detail: "Sales executives shift 100% of their focus from cold outreach to closing qualified demos.",
        },
      ],
      architectureDetails: [
        {
          title: "Sub-500ms Voice Pipeline",
          description:
            "Optimized bidirectional streaming audio architecture minimizing conversational latency for human-grade conversational cadence.",
        },
        {
          title: "Dynamic Objection and Discovery Trees",
          description:
            "Domain-tailored dialogue states navigating wholesale volume discounts, brand exclusivity, and frame consignment inquiries.",
        },
        {
          title: "Bidirectional Close CRM Sync",
          description:
            "Event-driven webhooks automatically updating prospect statuses, appending audio recordings, and triggering calendar invites.",
        },
      ],
    },
    de: {
      title: "Autonome Voice-KI & Lead-Qualifizierungs-Engine",
      industry: "B2B Brillen- & Optikgroßhandel",
      summary:
        "Ein automatisierter, latenzarmer Voice-KI-Agent, der täglich 200+ qualifizierte Outbound-Telefonate führt und Termine direkt in Close CRM bucht.",
      challenge:
        "Madison Specs stand vor der Herausforderung, tausende unabhängige Optikerbetriebe bundesweit zu kontaktieren. Manuelle Kaltakquise führte zu geringen Anrufraten (unter 40 Anrufe pro Vertriebler/Tag), hohen Ausfällen und unvollständigen CRM-Daten.",
      solution:
        "consultfox entwickelte eine autonome Telefonie-Pipeline. Durch die Kombination von latenzarmer Spracherkennung, branchenspezifischer LLM-Dialogführung und natürlicher Sprachsynthese führt der Agent authentische Vorgespräche, entkräftet Einwände und bucht direkt Vorführungstermine.",
      metrics: [
        {
          value: "200+",
          label: "Tägliche Erstgespräche",
          detail: "Skalierbare Akquise, die ermüdungsfrei und konstant Ergebnisse liefert.",
        },
        {
          value: "3.8x",
          label: "Mehr Demo-Termine",
          detail: "Höhere Erfolgsquote durch unmittelbare Einwandbehandlung und direkte Kalendersynchronisation.",
        },
        {
          value: "0",
          label: "Manuelle Wählstunden",
          detail: "Vertriebsleiter konzentrieren sich vollständig auf qualifizierte Termine statt Kaltakquise.",
        },
      ],
      architectureDetails: [
        {
          title: "Audio-Pipeline unter 500ms",
          description:
            "Optimierte bidirektionale Streaming-Architektur für natürliche, flüssige Gesprächspausen.",
        },
        {
          title: "Dynamische Einwandbehandlung",
          description:
            "Branchenspezifische Dialogbäume für Mengenrabatte, Exklusivität und Kommissionsmodelle.",
        },
        {
          title: "Bidirektionaler CRM-Abgleich",
          description:
            "Ereignisgesteuerte Webhooks, die Kundenstatus, Transkripte und Termine in Close CRM aktualisieren.",
        },
      ],
    },
  },
  "implementing-cloud-data-warehouse": {
    en: {
      title: "Multi-Facility Supply Chain Synchronization and Automated Compliance",
      industry: "Cannabis Manufacturing & Retail",
      summary:
        "An automated data pipeline processing 20,000+ monthly retail and wholesale transactions, eliminating 8+ hours of weekly manual reporting and ensuring continuous regulatory compliance.",
      challenge:
        "Operating across multiple cultivation facilities, processing plants, and dispensaries in Michigan, the client struggled with severe data fragmentation. Inventory systems, Point-of-Sale (POS) terminals, and state compliance databases (Metrc) were disconnected. Managers spent over 8 hours each week copying data between spreadsheets to balance seed-to-sale inventory, leaving the enterprise vulnerable to inventory spoilage, stockouts, and costly state regulatory fines.",
      solution:
        "consultfox built an enterprise cloud data warehouse on Snowflake, orchestrated via Apache Airflow and modeled through dbt. We engineered resilient connectors that continuously ingest transactional data from POS terminals, inventory ERPs, and state compliance APIs. With automated reconciliation checks and near-real-time anomaly alerts, the enterprise achieved automated compliance reporting and complete end-to-end visibility across cultivation, production, and retail shelves.",
      metrics: [
        {
          value: "20,000+",
          label: "Monthly Transactions",
          detail: "Processed continuously without manual intervention or batch failures.",
        },
        {
          value: "8+ Hours",
          label: "Weekly Labor Reclaimed",
          detail: "Operations managers redirected time from spreadsheet reconciliations to strategic growth.",
        },
        {
          value: "99.9%",
          label: "Inventory Reconciliation",
          detail: "Near elimination of compliance audit penalties and unrecorded stock variances.",
        },
      ],
      architectureDetails: [
        {
          title: "Automated Seed-to-Sale Ingestion",
          description:
            "Scheduled and event-driven connectors streaming harvest logs, batch testing results, and POS sales.",
        },
        {
          title: "dbt Modular Transformation Layer",
          description:
            "Version-controlled data models transforming raw telemetry into clean dimensional models with automated schema validation.",
        },
        {
          title: "Discrepancy and Regulatory Alerts",
          description:
            "Automated reconciliation comparing physical inventory against Metrc state declarations, flagging discrepancies instantly.",
        },
      ],
    },
    de: {
      title: "Standortübergreifende Lieferkettensynchronisation & Automatisierte Compliance",
      industry: "Produktion & Fachhandel",
      summary:
        "Eine automatisierte Datenpipeline für 20.000+ monatliche Transaktionen, die 8+ Stunden manuelle Arbeit pro Woche einspart und lückenlose Behörden-Compliance gewährleistet.",
      challenge:
        "Über mehrere Produktionsstätten und Filialen hinweg führten getrennte Kassensysteme, Warenwirtschaften und behördliche Prüfdatenbanken zu erheblichem Mehraufwand. Betriebsleiter verbrachten wöchentlich über 8 Stunden mit manuellem Tabellenabgleich.",
      solution:
        "consultfox implementierte ein modernes Cloud Data Warehouse auf Snowflake, orchestriert mit Apache Airflow und modelliert mit dbt. Automatisierte Schnittstellen führen Kassen-, Lager- und Konformitätsdaten zusammen und warnen sofort bei Bestandsabweichungen.",
      metrics: [
        {
          value: "20.000+",
          label: "Monatliche Transaktionen",
          detail: "Vollautomatisch verarbeitet ohne manuelle Eingriffe oder Ausfälle.",
        },
        {
          value: "8+ Std.",
          label: "Wöchentliche Arbeitsersparnis",
          detail: "Betriebsleiter widmen sich dem Geschäftsaufbau statt Tabellenabgleichen.",
        },
        {
          value: "99.9%",
          label: "Bestandsabgleich-Genauigkeit",
          detail: "Beseitigung von Audit-Strafen und unbemerkten Lagerdifferenzen.",
        },
      ],
      architectureDetails: [
        {
          title: "Automatisierte Ingestion",
          description:
            "Zeitgesteuerte und ereignisbasierte Konnektoren zur kontinuierlichen Erfassung von Chargen- und Verkaufsdaten.",
        },
        {
          title: "Modulare dbt-Schicht",
          description:
            "Versionskontrollierte Modelle, die Rohdaten mit automatischer Schemavalidierung in saubere Dimensionen überführen.",
        },
        {
          title: "Echtzeit-Warnmeldungen",
          description:
            "Automatischer Abgleich physischer Bestände mit behördlichen Meldungen für sofortige Korrekturen.",
        },
      ],
    },
  },
  "ai-powered-vehicle-sales-projections": {
    en: {
      title: "Multi-Unit Restaurant Marketing Attribution and Workforce Analytics",
      industry: "Restaurant & QSR",
      summary:
        "Unified analytics platform consolidating 150+ restaurant locations, fixing a 15% revenue attribution mismatch and accelerating executive dashboard performance from 5 minutes to 30 seconds.",
      challenge:
        "Operating over 150 franchise and corporate locations across multiple states, the client faced significant reporting delays and conflicting numbers. Point-of-sale data, third-party delivery services (UberEats, DoorDash), labor scheduling software, and digital marketing spend lived in separate silos. Executive reports suffered from a 15% data error rate, and dashboards took over 5 minutes to load, making same-day labor adjustments and campaign optimizations impossible.",
      solution:
        "consultfox engineered a unified cloud data platform that standardizes store-level POS streams, delivery platform commissions, labor logs, and omni-channel ad spend. We optimized indexing and pre-aggregated analytical marts, slashing report refresh times from 5 minutes to under 30 seconds. Leadership and general managers gained two dedicated dashboards: one for real-time campaign ROI attribution and another for predictive labor-to-sales scheduling.",
      metrics: [
        {
          value: "<30s",
          label: "Dashboard Refresh Latency",
          detail: "Reduced query latency by 90%, down from 5+ minutes of frustrating load times.",
        },
        {
          value: "<0.1%",
          label: "Data Discrepancy Rate",
          detail: "Resolved the 15% reporting mismatch across multi-state POS systems.",
        },
        {
          value: "$240K+",
          label: "Annual Labor Savings",
          detail: "Optimized hourly scheduling aligned dynamically with projected hourly traffic.",
        },
      ],
      architectureDetails: [
        {
          title: "Multi-Source Transaction Consolidation",
          description:
            "Automated ingestion pipelines reconciling in-store POS, kiosk orders, and third-party delivery aggregators.",
        },
        {
          title: "Attribution Modeling Engine",
          description:
            "Algorithmic correlation linking localized digital ad spend to in-store POS tickets and promotional redemption.",
        },
        {
          title: "Optimized Analytical Data Marts",
          description:
            "Aggregated star-schema architecture designed for instantaneous multi-location rollups and drill-downs.",
        },
      ],
    },
    de: {
      title: "Marketing-Attribution & Workforce-Analytics für Gastronomieketten",
      industry: "Gastronomie & Systemgastronomie",
      summary:
        "Zentrale Analyseplattform für über 150 Restaurantstandorte: Beseitigung einer 15%-igen Attributionslücke und Beschleunigung der Dashboard-Ladezeiten von 5 Minuten auf unter 30 Sekunden.",
      challenge:
        "Mit über 150 Standorten kämpfte der Kunde mit fragmentierten Daten aus Kassensystemen, Lieferdiensten, Schichtplanern und Werbekampagnen. Berichte wiesen eine Fehlerquote von 15% auf, und Dashboards luden über 5 Minuten lang.",
      solution:
        "consultfox entwickelte eine einheitliche Cloud-Plattform, die Kassenströme, Lieferprovisionen und Werbeausgaben synchronisiert. Durch Voraggregation sanken Ladezeiten auf unter 30 Sekunden für zielgenaue Personaleinsatz- und Werbeplanung.",
      metrics: [
        {
          value: "<30s",
          label: "Dashboard-Ladezeit",
          detail: "Ladezeiten um 90% reduziert - von 5 Minuten auf wenige Sekunden.",
        },
        {
          value: "<0.1%",
          label: "Datenabweichung",
          detail: "Beseitigung der vorherigen 15%-Diskrepanz über alle Standorte hinweg.",
        },
        {
          value: "240.000 €+",
          label: "Jährliche Personalkosteneinsparung",
          detail: "Optimierte Dienstplanung basierend auf prognostizierten Spitzenzeiten.",
        },
      ],
      architectureDetails: [
        {
          title: "Transaktionskonsolidierung",
          description:
            "Automatisierte Pipelines zum Abgleich von Filialkassen, SB-Terminals und externen Lieferplattformen.",
        },
        {
          title: "Attributionsmodellierung",
          description:
            "Algorithmen, die lokale Marketingausgaben direkt mit Kassenbons und Gutscheineinlösungen verknüpfen.",
        },
        {
          title: "Optimierte Data Marts",
          description:
            "Performante Sternschemata für sofortige standortübergreifende Drill-Down-Analysen.",
        },
      ],
    },
  },
  "truespot-connected-asset-analytics": {
    en: {
      title: "Connected IoT Telemetry and Real-Time Asset Tracking",
      industry: "IoT & Connected Asset Management",
      summary:
        "High-throughput streaming telemetry infrastructure processing millions of daily sensor events, enabling instant location tracking for automotive keys and vehicles across large-scale dealership campuses.",
      challenge:
        "Truespot provides wireless IoT tracking technology to dealerships and fleet managers managing vast outdoor lots with thousands of moving assets. As dealership adoption surged, high-frequency Bluetooth and RF beacon pings created database ingestion bottlenecks, pipeline lag, and delayed location coordinates. Dealership staff frequently wasted 20 to 45 minutes searching for misplaced vehicle key fobs, delaying test drives and impacting sales.",
      solution:
        "consultfox re-architected the underlying telemetry ingestion pipeline into an event-driven, distributed streaming backbone. We deployed scalable message queues, partitioned time-series storage, and geofencing calculation engines that process millions of location pings with sub-second latency. We built automated health-monitoring for sensor signal degradation and intuitive real-time tracking dashboards that locate missing vehicles and keys instantly.",
      metrics: [
        {
          value: "Millions",
          label: "Daily Pings Ingested",
          detail: "Continuous sub-second telemetry processing with zero data loss during peak lot activity.",
        },
        {
          value: "90%",
          label: "Search Time Saved",
          detail: "Reduced key and vehicle search times from 30+ minutes to under 2 minutes.",
        },
        {
          value: "99.99%",
          label: "Pipeline Reliability",
          detail: "Fault-tolerant architecture providing continuous visibility for automotive dealership lots nationwide.",
        },
      ],
      architectureDetails: [
        {
          title: "Event-Driven Streaming Ingestion",
          description:
            "High-throughput message brokers handling volatile telemetry spikes without message loss or queue congestion.",
        },
        {
          title: "Spatial Indexing and Geofencing Engine",
          description:
            "Sub-second geospatial boundary checks detecting lot exits, unauthorized vehicle movement, and transit zones.",
        },
        {
          title: "Telemetry Health and Anomaly Detection",
          description:
            "Automated telemetry diagnostics identifying low-battery beacons, signal degradation, and gateway dropouts.",
        },
      ],
    },
    de: {
      title: "Vernetzte IoT-Telemetrie & Echtzeit-Asset-Tracking",
      industry: "IoT & Vernetztes Flottenmanagement",
      summary:
        "Hochdurchsatz-Streaming-Infrastruktur zur Verarbeitung von Millionen täglicher Sensorereignisse zur sekundenschnellen Ortung von Schlüsseln und Fahrzeugen auf weitläufigen Autohaus-Arealen.",
      challenge:
        "Truespot vernetzt tausende bewegliche Assets auf großen Händlerflächen. Hohe Ping-Frequenzen führten zu Datenbankstaus und Verzögerungen bei Ortskoordinaten. Mitarbeiter verloren wertvolle Zeit bei der Schlüsselsuche vor Probefahrten.",
      solution:
        "consultfox restrukturierte die Ingestion-Pipeline in ein verteiltes Streaming-Rückgrat mit Message Brokern, partitionierten Zeitreihenspeichern und Geofencing-Berechnungen unter einer Sekunde Latenz.",
      metrics: [
        {
          value: "Millionen",
          label: "Tägliche Sensor-Pings",
          detail: "Echtzeit-Telemetrieverarbeitung ohne Datenverlust auch in Spitzenzeiten.",
        },
        {
          value: "90%",
          label: "Kürzere Suchzeiten",
          detail: "Verkürzung der Suchzeiten von über 30 Minuten auf unter 2 Minuten.",
        },
        {
          value: "99.99%",
          label: "Pipeline-Verfügbarkeit",
          detail: "Ausfallsichere Architektur für lückenlose Transparenz auf landesweiten Händlerarealen.",
        },
      ],
      architectureDetails: [
        {
          title: "Event-Driven Streaming",
          description:
            "Skalierbare Message Broker, die Spitzenlasten ohne Datenstau bewältigen.",
        },
        {
          title: "Räumliche Indizierung & Geofencing",
          description:
            "Geopräzise Bereichsüberwachung zur sofortigen Erkennung von Arealverlassen und unbefugten Bewegungen.",
        },
        {
          title: "Telemetrie-Gesundheitsdiagnose",
          description:
            "Automatische Fehlererkennung bei schwachen Senderbatterien, Signalverlust und Gateway-Ausfällen.",
        },
      ],
    },
  },
};
