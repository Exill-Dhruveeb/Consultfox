export type ServiceGroup =
  | "Data Services"
  | "Analytics and BI"
  | "Advanced AI"
  | "Strategy and Consulting"
  | "Operationalize and Scale";

export interface Service {
  slug: string;
  name: string;
  group: ServiceGroup;
  pitch: string;
  intro: string;
  image: string;
  verified: boolean;
}

export const services: Service[] = [
  // Data Services
  {
    slug: "big-data",
    name: "Big Data Development",
    group: "Data Services",
    pitch: "High-throughput architectures built to process petabyte-scale data streams without performance bottlenecks.",
    intro:
      "When data volumes spike, brittle pipelines collapse. We engineer robust, distributed processing clusters using Spark and Databricks that maintain sub-second querying as your company scales.",
    image: "/images/data-consulting.png",
    verified: true,
  },
  {
    slug: "data-strategy-consulting",
    name: "Data Strategy Consulting",
    group: "Data Services",
    pitch: "Turn disconnected data collection into a prioritized roadmap focused directly on measurable business outcomes.",
    intro:
      "Hoarding data without purpose is expensive and noisy. We audit your existing assets, identify high-impact analytics use cases, and define an actionable engineering roadmap tailored to your executive goals.",
    image: "/images/data-strategy.png",
    verified: true,
  },
  {
    slug: "data-integration",
    name: "Data Integration",
    group: "Data Services",
    pitch: "Centralize scattered application data into automated, synchronized pipelines with zero manual export headaches.",
    intro:
      "Eliminate fragile CSV spreadsheets and manual reconciliations. We build automated connectors across your CRMs, ERPs, transactional databases, and third-party APIs into a unified ingestion pipeline.",
    image: "/images/data-integration-1.png",
    verified: true,
  },
  {
    slug: "data-warehouse",
    name: "Data Warehouse",
    group: "Data Services",
    pitch: "Single source of truth engineered on cloud lakehouses, structured for fast querying and transparent cost control.",
    intro:
      "Stop running heavy analytical queries directly against your operational database. We design and deploy enterprise cloud data warehouses on Snowflake, Microsoft Fabric, BigQuery, and Synapse with modular dbt transformations and strict consumption guardrails.",
    image: "/images/data-warehouse.png",
    verified: true,
  },
  {
    slug: "data-governance",
    name: "Data Governance",
    group: "Data Services",
    pitch: "Role-based access, audited data lineage, and compliance frameworks that protect your company without slowing engineers down.",
    intro:
      "Eliminate ambiguity around data accuracy, stewardship, and regulatory compliance. We implement modern data catalogs, automated schema validation, and granular role-based security across your storage layers.",
    image: "/images/data-gov.png",
    verified: true,
  },
  {
    slug: "data-lake",
    name: "Data Lake",
    group: "Data Services",
    pitch: "Cost-effective object storage architectures that catalog raw datasets while maintaining instant queryability.",
    intro:
      "Capture unstructured and structured streams in scalable object storage like S3 and ADLS Gen2, organized with open table formats like Delta Lake and Iceberg to prevent your lake from turning into an unsearchable swamp.",
    image: "/images/datalake-service.png",
    verified: true,
  },
  {
    slug: "data-engineering",
    name: "Data Engineering",
    group: "Data Services",
    pitch: "Production-hardened ETL/ELT pipelines with automated testing, observability, and self-healing error handling.",
    intro:
      "Data pipelines should be as dependable as production software. We design resilient orchestration workflows using dbt, Airflow, and Prefect with built-in alerting, schema regression tests, and zero downtime.",
    image: "/images/data-engineering-1.png",
    verified: true,
  },

  // Analytics and BI
  {
    slug: "data-visualization",
    name: "Data Visualization",
    group: "Analytics and BI",
    pitch: "Intuitive, decision-driven interfaces that surface high-signal operational indicators at a glance.",
    intro:
      "Dashboards are useless if leaders can't extract immediate answers. We design clean, responsive visualization interfaces that present crucial business drivers without cognitive overload.",
    image: "/images/data-visualization-1.png",
    verified: true,
  },
  {
    slug: "power-bi",
    name: "Power BI",
    group: "Analytics and BI",
    pitch: "Optimized semantic models, robust DAX calculations, and executive reports engineered for sub-second responses.",
    intro:
      "We build enterprise-grade Power BI environments featuring clean star schemas, high-efficiency DAX formulas, row-level security, and embedded client-facing portals your leadership will reference every morning.",
    image: "/images/power-bi-1.png",
    verified: true,
  },
  {
    slug: "data-analytics",
    name: "Data Analytics",
    group: "Analytics and BI",
    pitch: "Diagnostic and trend intelligence that uncovers hidden revenue drivers and operational cost leaks.",
    intro:
      "Raw data sitting dormant in databases doesn't grow revenue. We build automated cohort analysis, customer retention modeling, and demand forecasting models that guide tactical resource allocation.",
    image: "/images/data-analytics.png",
    verified: true,
  },
  {
    slug: "microsoft-fabric",
    name: "Microsoft Fabric Consulting",
    group: "Analytics and BI",
    pitch: "Consolidate Synapse, Data Factory, and Power BI into a unified OneLake architecture that lowers total licensing spend.",
    intro:
      "Transition away from fragmented multi-tool licensing into a cohesive Microsoft Fabric setup. We handle OneLake workspace topology, Delta table optimization, and capacity sizing to maximize compute efficiency.",
    image: "/images/microsoft-fabric.png",
    verified: true,
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    group: "Analytics and BI",
    pitch: "Self-service business intelligence suites that deliver actionable metrics straight to decision-makers in real time.",
    intro:
      "Empower your business units with trustworthy, governed self-service BI. We eliminate departmental reporting silos by providing curated data marts, automated scheduled alerts, and standardized KPI definitions.",
    image: "/images/business-intelligence-1.png",
    verified: true,
  },

  // Advanced AI
  {
    slug: "ai-consulting",
    name: "AI Consulting",
    group: "Advanced AI",
    pitch: "Pragmatic, ROI-validated artificial intelligence roadmaps designed around your existing data readiness.",
    intro:
      "Cut through the noise of generic artificial intelligence marketing. We evaluate your data cleanliness, model viability, and infrastructure costs to engineer production AI systems that deliver tangible bottom-line value.",
    image: "/images/ai-consulting.png",
    verified: true,
  },
  {
    slug: "ai-agent-development",
    name: "AI Agent Development",
    group: "Advanced AI",
    pitch: "Autonomous software agents capable of executing complex business workflows directly within your production tools.",
    intro:
      "Beyond conversational toys: we build stateful, autonomous AI agents equipped with tool-calling capabilities, vector memory, and deterministic guardrails to automate customer qualification, data entry, and multi-system workflows.",
    image: "/images/ai-agent-development-2.png",
    verified: true,
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    group: "Advanced AI",
    pitch: "Enterprise RAG conversational engines grounded in your proprietary documentation with strict factual grounding.",
    intro:
      "Deploy enterprise-grade conversational AI that never hallucinates outside your knowledge base. Powered by hybrid semantic vector search, fine-tuned domain embeddings, and real-time citation links.",
    image: "/images/chatbot-development.png",
    verified: true,
  },

  // Strategy and Consulting
  {
    slug: "platform-strategy",
    name: "Platform Strategy",
    group: "Strategy and Consulting",
    pitch: "Harmonize isolated software platforms and databases into an interoperable, unified architecture.",
    intro:
      "As organizations scale, software tools multiply in silos. We analyze your tech landscape and blueprint a cohesive modern data architecture where CRM, ERP, finance, and marketing tools exchange data seamlessly.",
    image: "/images/platform-strategy.png",
    verified: true,
  },
  {
    slug: "data-strategy",
    name: "Data Strategy",
    group: "Strategy and Consulting",
    pitch: "Transform passive internal data records into an active competitive asset that drives executive clarity.",
    intro:
      "Every customer interaction and transaction produces valuable telemetry. We build comprehensive enterprise data strategies covering infrastructure roadmaps, talent requirements, and KPI frameworks that drive sustainable growth.",
    image: "/images/data-strategy.png",
    verified: true,
  },
  {
    slug: "ai-strategy",
    name: "AI Strategy",
    group: "Strategy and Consulting",
    pitch: "Clear-eyed strategic blueprints for AI adoption that prioritize high-impact use cases and risk mitigation.",
    intro:
      "Avoid costly AI pilot traps that never reach production. We work directly with leadership to define defensible AI initiatives, evaluate vendor build-versus-buy trade-offs, and establish governance guidelines.",
    image: "/images/ai-strategy.png",
    verified: true,
  },

  // Operationalize and Scale
  {
    slug: "ai-operations",
    name: "AIOps",
    group: "Operationalize and Scale",
    pitch: "Continuous model monitoring, drift detection, and automated retraining pipelines for production AI reliability.",
    intro:
      "Machine learning models naturally decay as real-world market dynamics shift. We implement proactive drift detection, latency monitoring, and automated feedback loops to guarantee model inference remains accurate.",
    image: "/images/LLMOps.png",
    verified: true,
  },
  {
    slug: "devops",
    name: "DevOps",
    group: "Operationalize and Scale",
    pitch: "Predictable CI/CD automation and infrastructure-as-code that eliminate production deployment anxiety.",
    intro:
      "Empower your engineering teams to deploy confidently multiple times a day. We establish automated testing pipelines, staging sandboxes, and immutable infrastructure scripts on Terraform and Kubernetes.",
    image: "/images/DEVOps.png",
    verified: true,
  },
  {
    slug: "llm-operations",
    name: "LLMOps",
    group: "Operationalize and Scale",
    pitch: "End-to-end LLM lifecycle management: prompt versioning, semantic caching, token cost optimization, and evaluation suites.",
    intro:
      "Moving from an API prototype to enterprise production requires dedicated tooling. We optimize prompt chains, implement semantic vector caching, track token usage budgets, and configure continuous evaluation frameworks.",
    image: "/images/LLMOps.png",
    verified: true,
  },
  {
    slug: "cloud-operations",
    name: "CloudOps",
    group: "Operationalize and Scale",
    pitch: "Cloud infrastructure governance and cost optimization that right-sizes compute without sacrificing throughput.",
    intro:
      "Gain full visibility into your cloud footprint across AWS, Azure, and GCP. We eliminate orphaned compute instances, configure automated auto-scaling policies, and implement FinOps tagging to reduce monthly cloud expenditure.",
    image: "/images/cloudops.png",
    verified: true,
  },
];

export const serviceGroups: ServiceGroup[] = [
  "Data Services",
  "Analytics and BI",
  "Advanced AI",
  "Strategy and Consulting",
  "Operationalize and Scale",
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
