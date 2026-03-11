/* ───────────────────────────────────────────────
   AssetLab — Content Data Store
   All copy is sourced from the existing site.
   ─────────────────────────────────────────────── */

// ── Types ──────────────────────────────────────

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string[];
  bullets: string[];
  cta: string;
  icon: string; // Lucide icon name
  caseStudy?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  phone: string;
  intro: string;
  vision: string;
  background: string;
  skills: string[];
  strengths: string[];
}

export interface Project {
  title: string;
  category: string;
  slug: string;
  image?: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

// ── Company Info ───────────────────────────────

export const COMPANY = {
  name: "Asset Lab",
  legalName: "Asset Lab Pty. Ltd.",
  phone: "(03) 5242 8683",
  phoneTel: "tel:0352428683",
  email: "info@assetlab.net.au",
  address: "79 Hodder Street, Brighton East, VIC – 3187",
  mapUrl: "https://goo.gl/maps/NQegH4W1CzqNqvC77",
  hours: "Mon – Fri: 8:00 am – 5:00 pm",
  established: 2019,
  mission:
    "Our mission is to achieve meaningful results through leadership, partnership, and knowledge.",
  philosophy:
    "Our philosophy is that a true partnership is a two-way street — ideas and information flow openly and regularly, based on a foundation of mutual trust and respect for one another's expertise.",
  tagline: "Asset Management and Data Specialists",
  heroLine: "Asset Lab helps organisations with assets make good decisions.",
  heroSub:
    "From collecting data in the field, transforming this data into knowledge, and using this knowledge to inform strategy and planning, we specialise in providing asset management solutions that span across the entire asset lifecycle.",
  aboutIntro:
    "Established in 2019, Asset Lab is a Melbourne and Geelong-based engineering consultancy with extensive experience and specialist skills in the management of infrastructure and assets. We have over 30 years\u2019 combined experience and a wealth of knowledge in asset management spanning both local government and private sectors.",
  aboutPride:
    "We pride ourselves on our relationships with our clients and the communities in which we work.",
  aboutSolutions:
    "Our solutions-orientated approach means we invest ourselves in every project to deliver the best possible outcome every time. Our flexibility allows us to fill any gap and tailor solutions to our clients\u2019 needs.",
  aboutWhatP1:
    "We understand the importance of good asset management. More than expert practitioners, we strive to be leaders, bringing a deep-rooted understanding of the integral role asset management plays in how well an organisation, or community, functions. We know what good quality asset data looks like. We know how to collect it, analyse it and present it. And we know how to turn it into clear and meaningful information that you can use to make a positive difference in peoples\u2019 lives.",
  aboutWhatP2:
    "We help organisations establish confidence in making informed decisions. We do this by helping establish mature asset management processes to enable evidence based decisions that create maximum value and benefit. We see asset management as being able to provide the right assets in the right place at the right time.",
  aboutWhatP3:
    "We care. We always ask and always listen so we can understand exactly what our clients\u2019 needs are in order to provide personalised solutions. We are committed to achieving great results every time. Ultimately, we are about making a difference for our clients and the people they serve.",
  businessModel:
    "Our business model means that we are responsive, agile and able to tailor our solutions to meet our clients\u2019 specific needs without compromising the quality of our work. We are dedicated to achieving best results for our clients. Given our structure, we are unencumbered by hierarchal decision-making processes that larger organisations may encounter meaning that we are responsive and adaptable to our client\u2019s needs.",
  copyright: `Asset Lab Pty. Ltd. \u00A9 ${new Date().getFullYear()}`,
} as const;

// ── Stats ──────────────────────────────────────

export const STATS = [
  { value: 30, suffix: "+", label: "Years Combined Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "", label: "Core Service Areas" },
  { value: 2019, suffix: "", label: "Established" },
] as const;

// ── Services ───────────────────────────────────

export const SERVICES: Service[] = [
  {
    slug: "strategic-asset-management",
    title: "Strategic Asset Management",
    tagline:
      "Asset Lab has helped many organisations clearly define value and then design and implement appropriate asset management processes.",
    description: [
      "Strategic asset management is at the core of how an organisation\u2019s assets support achieving value.",
      "Asset Lab has helped many organisations clearly define value and then design and implement appropriate asset management processes.",
      "Our team has significant experience with the National Asset Management Assessment Framework (NAMAF), the Asset Management Accountability Framework (AMAF), and the ISO 55001 series of Standards. Our collaborators hold Certified Asset Management Assessor (CAMA) status for ISO 55001.",
    ],
    bullets: [
      "Maturity assessment and gap analysis",
      "Improvement plans",
      "Asset management policy",
      "Asset management strategy",
      "Asset management leadership and culture",
      "Mentoring to enhance internal capability",
    ],
    cta: "Contact us to see how we can assist you realise the downstream benefits of excellent and expert asset management that extend to community, asset users, and the environment.",
    icon: "Target",
  },
  {
    slug: "asset-inspections-and-data-capture",
    title: "Asset Inspections & Data Capture",
    tagline:
      "We can design, develop, and implement a solution that benefits your organisation\u2019s data requirements and assures your asset data is captured accurately and efficiently.",
    description: [
      "Asset Lab offers a variety of results orientated asset inspection and data collection services across a broad range of asset types. We can design, develop, and implement a solution that benefits your organisation\u2019s data requirements and assures your asset data is captured accurately and efficiently.",
      "We place an emphasis on developing clear, useful mapping and database outputs that can be readily integrated into your asset management information systems.",
    ],
    bullets: [
      "Inventory and attribute collection",
      "Condition assessments",
      "Spatial mapping",
      "Maintenance inspections, including Road Management Plan inspections",
      "Data health check and improvement strategy",
    ],
    cta: "Get in touch and see how we can help you gain greater insight of your assets and their performance.",
    icon: "ClipboardCheck",
    caseStudy: "/projects",
  },
  {
    slug: "asset-lifecycle-planning",
    title: "Asset Lifecycle Planning",
    tagline:
      "Asset Lab has asset renewal and life cycle planning tools covering a wide range of asset types.",
    description: [
      "At Asset Lab, we understand that asset managers are under pressure to do more with less, while enhancing services and improving asset quality.",
      "This is why we are passionate about asset management planning that is innovative, integrated, and practical.",
      "Our experience means that we understand important decision-making criteria to inform planning and the evidence needed to support these decisions. We also work with asset owners to create asset management plans that convey important messages in clear ways.",
      "Asset Lab has asset renewal and life cycle planning tools covering a wide range of asset types. These can generate outputs that can be displayed in a variety of formats depending on our clients\u2019 needs.",
    ],
    bullets: [
      "Asset management plans",
      "Renewal forecasting",
      "Service level determination, monitoring, and costing",
      "Lifecycle financial modelling",
      "Asset lifecycle decision-making",
      "Risk management and criticality",
    ],
    cta: "Contact us to find out how we can help you effectively plan your assets.",
    icon: "TrendingUp",
  },
  {
    slug: "asset-management-practice",
    title: "Asset Management Practice",
    tagline:
      "Our team brings specialised skills and experience that cover a wide range of asset management functions.",
    description: [
      "Our team brings specialised skills and experience that cover a wide range of asset management functions \u2013 from writing a procedure through to reviewing your asset data classification structure and more.",
      "At Asset Lab, we aim to offer an integrated approach to what we deliver and are always responsive to what our clients need in the end to end management of their assets.",
      "Our approach is independent, and \u2018systems agnostic\u2019 and we are able to work with a variety of asset management information systems and GIS platforms. If required, we have in-house capability to develop our own custom applications and analytical tools to achieve successful outcomes for our clients.",
    ],
    bullets: [
      "Asset management information system advice",
      "Asset data classification or hierarchy review",
      "Asset register restructure",
      "Reviewing and updating of asset registers",
      "Data entry",
      "GIS mapping and data visualisation",
      "Capitalisation of new and contributed assets",
      "Asset financial reporting",
      "Asset valuations and revaluation methodology",
      "Process mapping and procedure writing",
      "Report writing and presentation",
      "Asset risk and criticality evaluation and application",
    ],
    cta: "Get in touch to see how our hands-on experience can be of benefit to you.",
    icon: "Settings",
    caseStudy: "/projects",
  },
];

// ── Team ───────────────────────────────────────

export const TEAM: TeamMember[] = [
  {
    slug: "adam-lehmann",
    name: "Adam Lehmann",
    role: "Director",
    phone: "(03) 5242 8683",
    intro:
      "Adam has over 25 years\u2019 experience working in local government infrastructure management. He has held roles with primary accountability for providing expert advice to organisations on asset management governance, process, performance, and budgeting.",
    vision:
      "Adam sees the bigger picture. A strategic thinker, he is able to respond intuitively to client\u2019s needs and turn complex information into simple meaningful messages.",
    background:
      "Adam brings expert skills in strategic asset management. This includes asset management systems (policies, strategies and plans), capital, operational, and renewal planning, business process auditing and improvement, data analysis and predictive modelling, forecasting asset lifecycle cashflows and regulatory compliance reporting and auditing.",
    skills: [
      "Asset Management systems (Policies, Strategies and Plans)",
      "Capital, operational, and renewal planning",
      "Business process auditing and improvement",
      "Data analysis and predictive modelling",
      "Forecasting asset lifecycle cashflows",
      "Regulatory compliance reporting and auditing",
    ],
    strengths: [
      "Respond intuitively to client\u2019s needs",
      "Think strategically \u2013 sees the bigger picture",
      "Wants to understand the core of the issue",
      "Solution orientated",
      "Able to convey simple messages from complex information",
    ],
  },
  {
    slug: "edita-galovic",
    name: "Edita Galovi\u0107",
    role: "Director",
    phone: "(03) 5242 8683",
    intro:
      "Edita brings specialist skills and knowledge in data collection, analysis and maintenance, data classification and structure, asset systems (Authority, IPS, TechOne, etc), GIS and project management.",
    vision:
      "Edita is driven by her commitment to help clients to make evidence-based decisions using high quality information. Backed by her focus, her attention to detail, and ability to think analytically.",
    background:
      "Edita sees opportunities that others overlook. She has an unwavering focus on maintaining open communication.",
    skills: [
      "Data collection, analysis, and maintenance",
      "Data classification and structure",
      "Asset systems (Authority, IPS, TechOne, etc)",
      "GIS",
      "Project management",
    ],
    strengths: [
      "Dedication to achieving the best outcomes",
      "Focus and attention to detail",
      "Analytical thinking",
      "Wants to understand the core of the issue",
      "Solutions orientated",
    ],
  },
];

// ── Projects ───────────────────────────────────

export const PROJECT_CATEGORIES = [
  "All",
  "Asset Data Collection",
  "Asset Register Review",
  "Condition Audits",
  "Maintenance Inspections",
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Road Management Plan Inspections",
    category: "Maintenance Inspections",
    slug: "road-management-plan-inspections",
    image: "/images/ROAD-MANAGEMENT-PLAN-INSPECTIONS.jpg",
  },
  {
    title: "Open Space Data Collection",
    category: "Asset Data Collection",
    slug: "open-space-data-collection",
    image: "/images/OPEN-SPACE-DATA-COLLECTION.jpg",
  },
  {
    title: "Asset Register Review",
    category: "Asset Register Review",
    slug: "asset-register-review",
    image: "/images/Arial-Photo6-Asset-Lab.jpg",
  },
  {
    title: "Street Furniture Data Collection",
    category: "Asset Data Collection",
    slug: "street-furniture-data-collection",
    image: "/images/STREET-FURNITURE-DATA-COLLECTION.jpg",
  },
  {
    title: "Road, Footpath and Carpark Data Collection",
    category: "Asset Data Collection",
    slug: "road-footpath-and-carpark-data-collection",
    image: "/images/ROAD-FOOTPATH-AND-CAR-PARK-DATA-COLLECTION.png",
  },
  {
    title: "Footpath Condition Audit",
    category: "Condition Audits",
    slug: "footpath-condition-audit",
    image: "/images/FOOTPATH-CONDITION-AUDIT.jpg",
  },
];

// ── Values ─────────────────────────────────────

export const VALUES: Value[] = [
  {
    title: "Commitment",
    description:
      "We are committed to creating innovative and practical solutions and place the utmost importance on cultivating positive relationships.",
    icon: "Heart",
  },
  {
    title: "Quality",
    description:
      "We provide an exceptional quality of service that delivers premium value to our clients, which in turn enables us to succeed together.",
    icon: "Award",
  },
  {
    title: "Communication",
    description:
      "We begin every project by carefully listening to our clients to understand their needs and to ensure the most effective solutions are implemented.",
    icon: "MessageSquare",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest standards in all that we do and promote honest and ethical conduct which makes us a reliable partner.",
    icon: "Shield",
  },
  {
    title: "Strategic Thinking",
    description:
      "We strive to lead by example and understand that effective delivery requires knowledge of the broader issues and the need for integrated approaches.",
    icon: "Lightbulb",
  },
  {
    title: "Safety",
    description:
      "We are committed to providing and maintaining a safe and healthy workplace and promote the health and well-being of our staff.",
    icon: "HardHat",
  },
  {
    title: "Experience",
    description:
      "Our collective experience in asset management means that we have extensive skills and expertise to offer effective solutions to our clients.",
    icon: "Briefcase",
  },
  {
    title: "Sustainability",
    description:
      "We seek to create a culture in which minimising our impact on the environment is at front of mind and part of everyday business.",
    icon: "Leaf",
  },
];

// ── Navigation ─────────────────────────────────

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
] as const;

// ── Referral sources for contact form ──────────

export const REFERRAL_SOURCES = [
  "Word-of-mouth",
  "Search engines (Google, Bing, etc.)",
  "Social media (Facebook, Instagram, etc.)",
  "Other",
] as const;
