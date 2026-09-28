export interface CaseStudyMetric {
  value: string;
  label: string;
  detail: string;
}

export interface ArchitecturePillar {
  title: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  summary: string;
  coverImage: string;
  challenge: string;
  solution: string;
  architectureDetails: ArchitecturePillar[];
  metrics: CaseStudyMetric[];
  techStack: string[];
  detailVerified: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "knowledge-management-system-kms",
    title: "Enterprise Knowledge Intelligence and Document Retrieval Engine",
    client: "Strategic HR and Advisory Firm",
    industry: "HR & Business Consulting",
    summary:
      "An enterprise AI search and RAG engine indexing thousands of institutional documents, delivering verified answers in sub-seconds with exact paragraph citations.",
    coverImage: "/images/chatbot-development.png",
    challenge:
      "Over decades of strategic advisory engagements, the firm accumulated tens of thousands of bespoke frameworks, legal compliance templates, client deliverables, and compensation benchmarks dispersed across fragmented cloud storage and email threads. Senior partners and consultants spent upwards of 8 hours every week hunting down past work or redundantly recreating existing artifacts, slowing project turnarounds and increasing overhead.",
    solution:
      "consultfox architected a role-governed, private Retrieval-Augmented Generation (RAG) platform. We engineered continuous document ingestion pipelines that parse and index complex PDFs, spreadsheets, and slide decks, converting unstructured knowledge into high-dimensional vector embeddings. The system employs hybrid semantic and lexical retrieval coupled with strict source citation guardrails, ensuring consultants receive factual, audit-ready answers backed by direct document citations.",
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
    techStack: ["Python", "FastAPI", "Pinecone Vector DB", "Claude / OpenAI LLMs", "LangChain", "Azure Blob Storage", "React"],
    detailVerified: true,
  },
  {
    slug: "business-intelligence-end-to-end-solution",
    title: "Autonomous Outbound Voice and Lead Qualification Engine",
    client: "Madison Specs",
    industry: "B2B Eyewear Optical Distribution",
    summary:
      "An automated, low-latency conversational voice agent conducting 200+ intelligent outbound discovery calls daily, qualifying optical practices and syncing directly with Close CRM.",
    coverImage: "/images/ai-powered-cold-calling.png",
    challenge:
      "Madison Specs faced a bottleneck common to high-volume B2B distributors: their commercial growth required reaching thousands of independent optometrists and optical boutiques nationwide. Relying solely on manual outbound SDR dialing resulted in low contact rates (under 40 dials per rep per day), high turnover, frequent CRM data entry omissions, and qualified leads slipping through the cracks.",
    solution:
      "consultfox engineered a production-grade autonomous outbound voice pipeline. Combining conversational speech-to-text, low-latency LLM reasoning tailored to optical product catalogs, and hyper-realistic neural voice synthesis, the agent engages practice managers naturally, handles objection flows, confirms decision-maker availability, and schedules qualified product demonstrations in real time while synchronizing every call log and transcription into Close CRM.",
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
    techStack: ["Python", "WebSockets", "Deepgram STT", "ElevenLabs Neural Audio", "Close CRM API", "Calendly API", "Docker", "AWS ECS"],
    detailVerified: true,
  },
  {
    slug: "implementing-cloud-data-warehouse",
    title: "Multi-Facility Supply Chain Synchronization and Automated Compliance",
    client: "Cannabis Manufacturing and Retail Enterprise",
    industry: "Cannabis Manufacturing & Retail",
    summary:
      "An automated data pipeline processing 20,000+ monthly retail and wholesale transactions, eliminating 8+ hours of weekly manual reporting and ensuring continuous regulatory compliance.",
    coverImage: "/images/Automated-Supply-Chain-Data-Pipeline.png",
    challenge:
      "Operating across multiple cultivation facilities, processing plants, and dispensaries in Michigan, the client struggled with severe data fragmentation. Inventory systems, Point-of-Sale (POS) terminals, and state compliance databases (Metrc) were disconnected. Managers spent over 8 hours each week copying data between spreadsheets to balance seed-to-sale inventory, leaving the enterprise vulnerable to inventory spoilage, stockouts, and costly state regulatory fines.",
    solution:
      "consultfox built an enterprise cloud data warehouse on Snowflake, orchestrated via Apache Airflow and modeled through dbt. We engineered resilient connectors that continuously ingest transactional data from POS terminals, inventory ERPs, and state compliance APIs. With automated reconciliation checks and near-real-time anomaly alerts, the enterprise achieved automated compliance reporting and complete end-to-end visibility across cultivation, production, and retail shelves.",
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
    techStack: ["Snowflake", "dbt Core", "Apache Airflow", "Python", "Metrc API", "PostgreSQL", "Power BI", "AWS S3"],
    detailVerified: true,
  },
  {
    slug: "ai-powered-vehicle-sales-projections",
    title: "Multi-Unit Restaurant Marketing Attribution and Workforce Analytics",
    client: "National Multi-Unit Restaurant Group (150+ Locations)",
    industry: "Restaurant & QSR",
    summary:
      "Unified analytics platform consolidating 150+ restaurant locations, fixing a 15% revenue attribution mismatch and accelerating executive dashboard performance from 5 minutes to 30 seconds.",
    coverImage: "/images/resytaurant-comoaign.png",
    challenge:
      "Operating over 150 franchise and corporate locations across multiple states, the client faced significant reporting delays and conflicting numbers. Point-of-sale data, third-party delivery services (UberEats, DoorDash), labor scheduling software, and digital marketing spend lived in separate silos. Executive reports suffered from a 15% data error rate, and dashboards took over 5 minutes to load, making same-day labor adjustments and campaign optimizations impossible.",
    solution:
      "consultfox engineered a unified cloud data platform that standardizes store-level POS streams, delivery platform commissions, labor logs, and omni-channel ad spend. We optimized indexing and pre-aggregated analytical marts, slashing report refresh times from 5 minutes to under 30 seconds. Leadership and general managers gained two dedicated dashboards: one for real-time campaign ROI attribution and another for predictive labor-to-sales scheduling.",
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
    techStack: ["Microsoft Fabric", "Power BI", "Azure Synapse", "dbt", "Python", "Toast POS API", "Google & Meta Ads APIs"],
    detailVerified: true,
  },
  {
    slug: "truespot-connected-asset-analytics",
    title: "Connected IoT Telemetry and Real-Time Asset Tracking",
    client: "Truespot",
    industry: "IoT & Connected Asset Management",
    summary:
      "High-throughput streaming telemetry infrastructure processing millions of daily sensor events, enabling instant location tracking for automotive keys and vehicles across large-scale dealership campuses.",
    coverImage: "/images/true-spot.png",
    challenge:
      "Truespot provides wireless IoT tracking technology to dealerships and fleet managers managing vast outdoor lots with thousands of moving assets. As dealership adoption surged, high-frequency Bluetooth and RF beacon pings created database ingestion bottlenecks, pipeline lag, and delayed location coordinates. Dealership staff frequently wasted 20 to 45 minutes searching for misplaced vehicle key fobs, delaying test drives and impacting sales.",
    solution:
      "consultfox re-architected the underlying telemetry ingestion pipeline into an event-driven, distributed streaming backbone. We deployed scalable message queues, partitioned time-series storage, and geofencing calculation engines that process millions of location pings with sub-second latency. We built automated health-monitoring for sensor signal degradation and intuitive real-time tracking dashboards that locate missing vehicles and keys instantly.",
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
    techStack: ["Apache Kafka", "PostgreSQL / PostGIS", "Python", "Docker", "AWS IoT Core", "TimescaleDB", "Next.js", "Tailwind CSS"],
    detailVerified: true,
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseStudyIndustries = [
  "All",
  "B2B Eyewear Optical Distribution",
  "Cannabis Manufacturing & Retail",
  "HR & Business Consulting",
  "IoT & Connected Asset Management",
  "Restaurant & QSR",
] as const;
