import { PiNuclearPlantLight, PiCity } from "react-icons/pi";
import { GoLaw } from "react-icons/go";
import { RiServiceLine } from "react-icons/ri";
import { GiTeamIdea } from "react-icons/gi";
import { FaRecycle } from "react-icons/fa";
import {
  Droplets,
  Hammer,
  FlaskConical,
  FileText,
  Wine,
  PaintBucket,
  Shirt,
  Package,
  Factory,
  Pill,
  Paintbrush,
  Zap,
  Car,
  PackageOpen,
  Building2,
  Wheat,
  Laptop,
} from "lucide-react";

export type NavItem = {
  name: string;
  href?: string;
  children?: Array<{ name: string; href: string }>;
};

export const NavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Wooden Pallets scrap buyer",
        href: "/services/wooden-pallets-scrap-buyer",
      },
      { name: "Wooden scrap buyer", href: "/services/wooden-scrap-buyer" },
      {
        name: "Rubber scrap waste management",
        href: "/services/rubber-scrap-waste-management",
      },
      {
        name: "Plastic waste management",
        href: "/services/plastic-waste-management",
      },
      {
        name: "Hazardous waste management",
        href: "/services/hazardous-waste-management",
      },
      {
        name: "Extended producer responsibility",
        href: "/services/extended-producer-responsibility",
      },
      {
        name: "Industrial waste management",
        href: "/services/industrial-waste-management",
      },
      {
        name: "Organic waste management",
        href: "/services/organic-waste-management",
      },
      { name: "Circular economy", href: "/services/circular-economy" },
      {
        name: "E-waste management services",
        href: "/services/e-waste-management",
      },
    ],
  },
  { name: "Industries We Serve", href: "/industries-we-serve" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact us", href: "/contact-us" },
];

// * Content with image
export const hazardContent = [
  "Hazardous waste poses risks to human health and the environment. We are a trusted hazardous waste recycler in Ahmedabad, Gujarat, providing effective treatment processes tailored to industrial waste handling needs.",
  "SV Green is a GPCB-approved hazardous waste recycler in Ahmedabad, known for dependable services and a highly trained team.",
  "We take the time to understand the needs of businesses, large industries, and government agencies, and we take responsibility for hazardous waste from collection through recycling.",
  "As a hazardous waste management company in Gujarat, we provide a full range of environmental services, including waste collection, recycling compliance, EHS inspections, and internal waste-management solutions.",
  "With our strict regulatory compliance for hazardous waste, you can be confident in the protection of people, infrastructure, and the environment.",
];

export const plasticWasteContent = [
  "According to the Central Pollution Control Board, in 2019–20 approximately 34,69,780 TPA of plastic waste was generated across India’s 35 states and union territories. These figures highlight the urgent need for effective plastic waste management. We operate as a GPCB-authorized plastic waste recycler in Gujarat.",
  "At SV Green, environmental protection guides everything we do; it’s the reason we deliver high-quality plastic waste management services in Ahmedabad.",
  "We design customized plans because every industry has unique needs. As a GPCB-approved recycler, we follow regulatory guidelines to ensure full compliance, fair pricing, and exceptional service.",
  "Our plastic collection teams—trained and drawn from marginalized communities—follow strict safety protocols to provide reliable service. Our recycling facilities comply with PCB standards, so you can trust our quality and accuracy.",
];

export const industrialWasteContent = [
  "Industrial and manufacturing processes produce large volumes of waste at every stage; the waste type varies by process and is often subject to strict regulations, including hazardous-waste rules. As Gujarat’s one-stop industrial waste management company, we deliver comprehensive, strategic solutions.",
  "As a GPCB-authorized industrial waste recycler, we support recycling, diversion, and beneficial reuse. SV Green is a leading industrial scrap buyer in Gujarat, offering end-to-end waste management and disposal services.",
  "Our experts understand chemicals, materials, and products and have deep knowledge of CPCB and GPCB guidelines. Our industrial waste services ensure 100% compliance, helping you offload the burden of waste management.",
];

export const extendedProducerResponsibility = [
  "Extended Producer Responsibility (EPR) assigns producers significant financial and/or operational responsibility for handling or disposing of post-consumer plastic waste. SV Green is a leading SBM and a GPCB-approved EPR agency in Ahmedabad, offering convenient recycling programs for large-scale waste generators and developing tailored, plastic-focused strategies to transfer responsibility back to producers.",
];

export const circularEconomy = [
  "The global economy is only 8.6% circular, meaning 91.4% of materials are lost—according to the Circularity Gap Report 2021. This highlights the need to adopt circular-economy models at scale.",
  "The circular economy replaces the linear take-make-dispose model by reducing waste through reuse, repair, refurbishment, and recycling. At SV Green, a GPCB-authorized recycler, we offer advanced recycling solutions that help businesses meet their responsibilities, create social impact, and drive environmental and economic sustainability.",
];

export const organicWaste = [
  "Organic waste is biodegradable, originating from living sources such as plants, animals, and microorganisms. It is highly reusable—for energy, sustainable products, compost, and more.",
  "As a leading organic waste recycler in Gujarat, we use effective processes to collect, process, and recycle organic waste. Our end-to-end services make SV Green a reliable partner for comprehensive organic-waste solutions.",
];

export const eWaste = [
  "Safe disposal of electronic waste (e-waste) is essential, and we act as a GPCB-registered e-waste recycler in Ahmedabad.",
  "E-waste consists of electronic products that have reached the end of their useful life. When sent to landfills, they can release toxic substances that threaten human health and the environment.",
  "Proper e-waste recycling recovers valuable materials and minimizes landfill waste. SV Green is a trusted e-waste recycler in Ahmedabad, offering safe disposal and responsible recycling for environmental and social benefit.",
];

export const rubberWaste = [
  "More than 270 rubber tyres are discarded every year. Tyres are just one of many rubber applications, and much of this material ends up in landfills. At SV Green, we follow a zero-waste-to-landfill policy and work to divert rubber waste from disposal wherever possible.",
  "We collect and recycle 100% of rubber waste using compliant processes and up-to-date environmental controls. As GPCB-authorized recyclers, we operate within enclosed systems to prevent the release of toxic emissions.",
];

export const woodenScrapBuyer = [
  "SV Green is a leading wooden-scrap buyer in Ahmedabad, providing professional recycling services that support sustainability and environmental conservation.",
  "With years of experience and a commitment to eco-friendly practices, SV Green is a trusted partner for individuals and businesses seeking responsible wooden-scrap disposal.",
];

export const woodenPalletsScrapBuyer = [
  "SV Green is the premier wooden-pallets scrap buyer in Ahmedabad, known for sustainable operations and high-quality service. We play a key role in responsibly disposing and recycling wooden pallets to conserve resources and reduce waste.",
  "Wooden pallets are vital for storage and transport but can become significant waste at end of life. SV Green ensures pallets are repurposed or recycled in an environmentally responsible way.",
];

// * Service Grid

export const services = [
  {
    title: "End-to-End Hazardous Waste Management",
    description:
      "We support our clients through every stage of hazardous waste management, including logistics, staff training, and assistance with transboundary movement permits.",
  },
  {
    title: "Comprehensive Waste Management",
    description:
      "As a GPCB-authorized decontamination service provider in Gujarat, we deliver safe, transparent, and fully compliant hazardous waste treatment with precise documentation.",
  },
  {
    title: "Maximum Pollution Reduction",
    description:
      "We work to minimize solid, liquid, and gaseous industrial emissions and offer the most effective technical solutions for pollution control, facility operations, and environmental management.",
  },
  {
    title: "Customized Waste Solutions",
    description:
      "We design tailored waste-recycling solutions based on your needs. As a GPCB-authorized recycler, we efficiently manage pollution generated through hazardous waste recycling.",
  },
];

export const plasticServices = [
  {
    title: "Circular Economy",
    description:
      "Plastic can take up to 1,000 years to decompose. Recycling is the key to creating meaningful, reusable products. Our team actively supports clients in meeting their circular economy goals.",
  },
  {
    title: "Extended Producer Responsibility",
    description:
      "We engage 1,000+ safai sathis to collect millions of metric tons of post-consumer plastic waste from multiple sources and redirect it for recycling. We also assist corporates in fulfilling EPR and PWM compliance requirements.",
  },
  {
    title: "Audit & Consultation",
    description:
      "We provide expert audits and consultation to help you comply with regulations related to resource recovery, circular economy practices, reverse logistics, and other waste-handling processes.",
  },
  {
    title: "Waste Management Services",
    description:
      "As Gujarat’s leading GPCB-authorized plastic waste recycler, we deliver sustainable waste management solutions for bulk waste generators across businesses, industries, and government sectors.",
  },
];

export const industrialServices = [
  {
    title: "Disposal",
    description:
      "We stand by our #ZeroWasteToLandfills commitment. SV Green uses safe and environmentally friendly disposal methods that promote recycling and resource recovery.",
  },
  {
    title: "Logistics",
    description:
      "Our end-to-end waste management includes collection, transportation, sorting, bulking, and recycling—managed seamlessly under a single system.",
  },
  {
    title: "Sourcing",
    description:
      "We source recyclable materials and facilitate their reuse through responsible and compliant processes.",
  },
  {
    title: "Management",
    description:
      "At SV Green, every type of waste is handled differently to ensure safety, precision, and full compliance with regulatory guidelines.",
  },
  {
    title: "Reporting",
    description:
      "We keep you informed through digital receipts and provide detailed monthly reports for complete waste-management analysis.",
  },
  {
    title: "Diversion Certificate",
    description:
      "We issue a Waste Diversion Certificate along with an environmental footprint report to support your compliance and sustainability goals.",
  },
];

export const eprServices = [
  {
    title: "Waste Reporting",
    description:
      "We use IoT technology to track the collection and disposal of plastic waste, ensuring complete transparency with digital reporting.",
  },
  {
    title: "Expert Assistance",
    description:
      "Our skilled team—including engineers and legal experts—provides comprehensive support to help you meet all compliance requirements.",
  },
  {
    title: "Measuring Impact",
    description:
      "We understand your need for accurate compliance records and provide quarterly social and environmental impact reports alongside EPR updates.",
  },
  {
    title: "Plastic Waste Stream",
    description:
      "We collaborate with multiple waste streams to collect PET, MLP, HDPE, LDPE, PP, and other plastic types for responsible recycling and disposal.",
  },
];

export const circularEconomyServices = [
  {
    title: "Economic Benefits",
    description:
      "A circular economy for plastics delivers long-term economic advantages—many of which have far-reaching impacts on global value chains.",
  },
  {
    title: "Environmental Benefits",
    description:
      "Circular practices can reduce greenhouse gas emissions by up to 39% and help restore biodiversity affected by rising pollution.",
  },
  {
    title: "System Benefits",
    description:
      "Circular systems reduce dependence on primary materials, enhance production efficiency, and support the development of new profit-generating business models.",
  },
  {
    title: "Company Benefits",
    description:
      "Businesses can reduce costs, unlock new value streams, and improve product analysis—especially for fast-moving consumer goods—through circular economy practices.",
  },
];

export const organicWasteServices = [
  {
    title: "More Sanitary than Traditional Waste",
    description:
      "Food leftovers attract pests and cause contamination. Proper organic waste disposal is essential for sanitation. SV Green provides safe and efficient food waste management for industries.",
  },
  {
    title: "Turn Waste into Resources",
    description:
      "Organic waste can be converted into nutrient-rich manure, supporting agriculture and reducing landfill emissions. We purchase and manage organic waste as per government guidelines.",
  },
  {
    title: "Makes Financial Sense",
    description:
      "Efficient organic waste management reduces waste-handling costs and avoids unnecessary dumping expenses. SV Green helps businesses achieve measurable financial benefits.",
  },
  {
    title: "Sustains Communities",
    description:
      "We support local farmers by supplying properly recycled organic manure, promoting soil fertility and encouraging healthier agricultural practices.",
  },
];

export const eWasteServices = [
  {
    title: "Conserves Natural Resources",
    description:
      "E-waste recycling improves the availability of raw materials by recovering metals, components, and reusable electronic parts, reducing manufacturing costs.",
  },
  {
    title: "Reflects Business Credibility",
    description:
      "Responsible recycling demonstrates your company's commitment to environmental and social responsibility. We provide certifications to validate your green initiatives.",
  },
  {
    title: "Supports the Community",
    description:
      "Donate old computers or mobile phones and help bridge the digital divide. As an e-waste recycler in Gujarat, we support access to refurbished technology for communities.",
  },
  {
    title: "Protects Health & Environment",
    description:
      "Electronics contain hazardous substances. We ensure safe recycling that prevents toxic materials from harming people or ecosystems.",
  },
];

export const rubberWasteServices = [
  {
    title: "Conserve Landfill Space",
    description:
      "Tyres occupy excessive landfill space due to their size and volume. We provide efficient tyre recycling solutions to reduce landfill burden and improve sustainability.",
  },
  {
    title: "Create Beneficial Products",
    description:
      "Recycled tyres can be transformed into fuel, rubberized asphalt, flooring, railroad ties, and other valuable products. We offer transparent and certified tyre recycling services.",
  },
  {
    title: "Prevents the Spread of Disease",
    description:
      "Old tyres attract rodents and mosquitos, leading to serious health risks. We eliminate tyre waste responsibly to help prevent the spread of such diseases.",
  },
  {
    title: "Produce Useful Raw Materials",
    description:
      "Recycled tyres produce secondary raw materials that are durable, lightweight, crack-resistant, and excellent for sound absorption. Our GPCB-authorized processes ensure safe recycling.",
  },
];

export const woodenScrapBuyerServices = [
  {
    title: "Reuse",
    description:
      "Wooden pallets, old fences, and cabins can often be repaired and reused for new projects. We are Gujarat’s most trusted wooden pallet buyers.",
  },
  {
    title: "Recycle",
    description:
      "Damaged pallets are sent for recycling and repurposed as fencing, barriers, bridges, or erosion-control materials. We ensure proper recycling for every item.",
  },
  {
    title: "Processing Bulk",
    description:
      "Industries generate large quantities of pallet waste. As responsible wood-waste recyclers, we help prevent this waste from reaching landfills.",
  },
  {
    title: "Biomass",
    description:
      "Wood waste can be converted into biomass—an efficient energy source used for electricity or steam generation.",
  },
];

export const woodenPalletsScrapBuyerServices = [
  {
    title: "Reuse",
    description:
      "Wooden pallets and dismantled wooden structures can be repaired and reused. We are leading wooden pallet buyers across Gujarat.",
  },
  {
    title: "Recycling",
    description:
      "When pallets cannot be reused, they are recycled into materials such as fences, barriers, bridges, and erosion-control structures.",
  },
  {
    title: "Processing Bulk",
    description:
      "Industries produce large volumes of pallet waste. Our recycling processes help divert this waste from landfills, promoting sustainability.",
  },
  {
    title: "Biomass",
    description:
      "Wood waste is an excellent biomass source used for producing electricity or steam, making it a highly effective modern waste-management solution.",
  },
];

// * Expertise section

export const expertise = [
  "Comprehensive Hazardous Waste Profiling for All Industries",
  "Safe and Compliant Hazardous Waste Collection Services",
  "Advanced Treatment, Recycling & Disposal of Hazardous Waste",
  "Secure Online Access to Waste Records, Manifests & Compliance Data",
  "End-to-End Analysis and Optimization of Hazardous Waste Removal",
];

export const PlasticWasteServices = [
  "Significantly Reduce Environmental Pollution through Responsible Recycling",
  "100% Compliance with Local and State Pollution Control Board (PCB) Guidelines",
  "Fast-Track Approvals for Plastic Waste Management (PWM) Registration",
  "Expert Support for Implementing Circular Economy Practices",
  "Create Sustainable Livelihood Opportunities for Local Waste Pickers",
  "Receive Verified Waste Diversion & Recycling Certificates",
  "Online Manifest Tracking for Transparent Plastic Waste Recycling",
];

export const IndustrialWasteServices = [
  "Reduce Industrial Pollution with Responsible Waste Handling",
  "Promote Long-Term Environmental and Economic Sustainability",
  "Fully Compliant with Pollution Control Board (PCB) Regulations",
  "Quick Approvals for PWM & Industrial Waste Management Requirements",
  "Guidance on Circular Economy and Resource Optimization",
  "Support Sustainable Employment for Waste Collection Communities",
  "Receive Certified Documentation for Industrial Waste Diversion",
];

export const EPRServices = [
  "Government & SBM-Approved Extended Producer Responsibility (EPR) Agency",
  "Complete End-to-End EPR Management for Producers, Importers & Brand Owners",
  "Strong Social Impact Through Responsible Waste Collection Programs",
  "Full Transparency with Real-Time EPR Reporting & Documentation",
];

export const circularEconomyService = [
  "Adoption of Modern, Improved Waste Management Technologies",
  "State-of-the-Art Composting and Bio-Waste Conversion Facilities",
  "Significant Environmental Benefits with Reduced Carbon Footprint",
  "Cost Savings with Efficient & Sustainable Resource Utilization",
  "High-Quality Recycled Goods Supporting Green Manufacturing",
  "Expert Team with Deep Experience in Circular Economy Solutions",
];

export const rubberWasteService = [
  "Environmentally Responsible Recycling of Rubber Waste",
  "Minimize Illegal Dumping Through Proper Rubber Waste Handling",
  "Ethical and Transparent Waste Management Practices",
  "Maximize Reuse Through Multiple Rubber Recycling Processes",
  "Clear, Traceable and Auditable Recycling Documentation",
  "Inclusive and Community-Focused Waste Management Approach",
];

export const woodenScrapBuyerService = [
  "Conserve Natural Resources with Responsible Wood Recycling",
  "Prevent Landfills from Overflowing by Diverting Wood Waste",
  "Reduce Energy Usage with Eco-Friendly Recycling Methods",
  "Lower Greenhouse Gas Emissions Through Sustainable Disposal",
  "Boost Local Employment Through Recycling Operations",
  "Support a Strong Circular Economy with Recycled Wood Materials",
];

export const woodenPalletsScrapBuyerService = [
  "Promote Natural Resource Conservation Through Pallet Recycling",
  "Reduce Landfill Waste by Efficiently Repurposing Wooden Pallets",
  "Save Energy with Low-Impact Recycling Solutions",
  "Help Reduce Overall Greenhouse Gas Emissions",
  "Support Community Job Growth in Recycling & Upcycling",
  "Strengthen the Circular Economy with Recycled Pallet Materials",
];

// * Benefits Stepper

export const benefits = [
  {
    title: "Excellent Service",
    description:
      "We deliver hassle-free and reliable hazardous waste management services designed to reduce your workload and ensure complete environmental safety.",
  },
  {
    title: "Value Addition",
    description:
      "We offer competitive pricing along with exceptional value. Our team follows strict safety and compliance protocols to manage hazardous waste responsibly.",
  },
  {
    title: "Compliance & Service",
    description:
      "With deep expertise in hazardous waste regulations, we ensure your business stays fully compliant with all legal and environmental standards.",
  },
  {
    title: "Speed & Timeliness",
    description:
      "From quick waste collection to efficient processing and timely reporting, we maintain punctuality across all our waste management services.",
  },
  {
    title: "Safety Measures",
    description:
      "Safety is our highest priority. We strictly follow environmental, equipment, and facility protection guidelines while handling hazardous waste.",
  },
  {
    title: "Document Retention",
    description:
      "We securely store your profiles, destruction certificates, manifests, and other documents for easy future retrieval and compliance checks.",
  },
];

export const PlasticWasteProcess = [
  {
    title: "Collection",
    description:
      "We collect plastic waste from bulk generators and households in partnership with urban local bodies. Trained staff and local safai saathis ensure smooth and efficient collection, which is transported to our facility for further processing.",
  },
  {
    title: "Sorting",
    description:
      "Our team carefully separates mixed plastic waste into categories using manual expertise and mechanical equipment. Every type of plastic is segregated to ensure proper downstream processing and maximum recyclability.",
  },
  {
    title: "Size Reduction",
    description:
      "Using crushers and shredders, we reduce the plastic waste into smaller, manageable pieces. This step enables a consistent and efficient recycling workflow throughout the plastic waste management cycle.",
  },
  {
    title: "Recycling",
    description:
      "After size reduction, the plastic goes through advanced recycling processes to produce reusable materials. As an industry-leading waste management company, we ensure a smooth, high-efficiency recycling system.",
  },
];

export const IndustrialWasteProcess = [
  {
    title: "Technology-Driven Process",
    description:
      "We use advanced, technology-based industrial waste disposal solutions that improve accuracy, safety, and efficiency in managing waste streams.",
  },
  {
    title: "Addressing Environmental Concerns",
    description:
      "Our scientific recycling and disposal methods reduce environmental impact and support long-term waste diversion goals.",
  },
  {
    title: "Improved Waste Flow Efficiencies",
    description:
      "We conduct continuous site and waste stream analysis to optimize cost, ensure efficiency, and maintain seamless industrial waste processing.",
  },
  {
    title: "Compliance Management & Regulatory Support",
    description:
      "We ensure 100% compliance with pollution control regulations, helping industries meet legal standards without operational disruptions.",
  },
  {
    title: "Save Environment & Money",
    description:
      "With our eco-friendly and affordable industrial waste solutions, you reduce environmental impact while cutting operational costs.",
  },
];

export const EPRProcess = [
  {
    title: "Reverse Logistics",
    description:
      "With a structured reverse supply chain, we ensure smooth plastic waste collection and transport. As a GPCB-authorized scrap buyer, we manage post-consumer waste efficiently and responsibly.",
  },
  {
    title: "Social Inclusion",
    description:
      "We empower safai saathis by offering sustainable livelihood opportunities and support systems. As an approved EPR agency, we prioritize dignity and inclusion across all operations.",
  },
  {
    title: "Public Awareness",
    description:
      "We run awareness drives, corporate events, and social media campaigns to educate communities on segregation, recycling, and reducing plastic pollution.",
  },
];

export const circularEconomyProcess = [
  {
    title: "Waste & Pollution Reduction",
    description:
      "Our circular economy approach minimizes waste generation and reduces environmental pollution including greenhouse gases, air contaminants, and hazardous substance discharge.",
  },
  {
    title: "Keeping Materials in Use",
    description:
      "We promote reuse, durability, remanufacturing, and recycling of materials, preserving the value of resources. As authorized recyclers, we help industries reduce contamination and improve sustainability.",
  },
  {
    title: "Regeneration of Natural Systems",
    description:
      "We avoid non-renewable inputs and focus on regenerating natural resources. Our recycling methods help return nutrients to the soil and support renewable energy usage.",
  },
];

export const organicWasteProcess = [
  {
    title: "Collection",
    description:
      "Our team collects organic waste directly from the source with uninterrupted service, ensuring safe, hygienic, and efficient collection operations.",
  },
  {
    title: "Inert Separation",
    description:
      "Using a blend of manual and machine-based separation, we remove non-organic contaminants like glass, bricks, and plastic to ensure clean material for composting.",
  },
  {
    title: "Preparation",
    description:
      "Organic waste is then prepared through shredding, composting, and stabilizing techniques to make it suitable for recycling or composting systems.",
  },
  {
    title: "Recycling Process",
    description:
      "We utilize advanced recycling technologies such as thermophilic digesters to convert organic waste into valuable end products safely and efficiently.",
  },
  {
    title: "Screening & Grading",
    description:
      "The compost is screened into various grades depending on use. This ensures high-quality, application-ready organic material for agriculture, landscaping, and other industries.",
  },
];

export const eWasteProcess = [
  {
    title: "Dismantling",
    description:
      "E-waste is carefully dismantled into smaller components to prevent contamination and ensure safe handling of hazardous elements.",
  },
  {
    title: "Processing",
    description:
      "Using specialized equipment such as shredders, eddy current separators, and air separation units, we process e-waste to extract recyclable materials.",
  },
  {
    title: "Refining",
    description:
      "Refined raw materials are recovered with minimal environmental impact, ensuring they can be reused as secondary raw materials or properly disposed of.",
  },
];

export const rubberWasteProcess = [
  {
    title: "Storage of Waste",
    description:
      "End-of-Life Tyres (ELT) are collected, weighed, and stored before being sent for advanced material recovery treatments.",
  },
  {
    title: "First Shredding",
    description:
      "Tyres are shredded into 5–40 cm pieces, preparing them for further material separation and energy recovery processes.",
  },
  {
    title: "Second Shredding",
    description:
      "The rubber is further broken down to separate it from steel and textile fibers, producing granules and rubber powder for new products.",
  },
  {
    title: "Material Recovery",
    description:
      "Recovered rubber, steel, and fibers are processed into reusable raw materials, supporting a sustainable recycling ecosystem.",
  },
];

export const woodenScrapBuyerProcess = [
  {
    title: "Environmental Impact",
    description:
      "Recycling wood helps prevent deforestation and supports a sustainable environment by reducing the need for freshly cut timber.",
  },
  {
    title: "Reduction of Energy Costs",
    description:
      "Recycled wood products require significantly less energy to produce, reducing dependency on fossil fuels.",
  },
  {
    title: "Reduced Fire Risk",
    description:
      "By clearing accumulated wood waste, we reduce the chances of fire hazards near industrial or commercial sites.",
  },
  {
    title: "New & Better Opportunities",
    description:
      "Recycling wood opens opportunities for new products, supporting industries with cost-effective and eco-friendly material alternatives.",
  },
];

// * why recycle
export const whyRecycle = [
  {
    title: "Technology Driven Service",
    Icon: PiNuclearPlantLight,
  },
  {
    title: "Present in Wide Range of Cities",
    Icon: PiCity,
  },
  {
    title: "Integrity and Work Ethics",
    Icon: GoLaw,
  },
  {
    title: "Excellent Service",
    Icon: RiServiceLine,
  },
  {
    title: "Excellent Service",
    Icon: GiTeamIdea,
  },
  {
    title: "Waste Management Solution",
    Icon: FaRecycle,
  },
];

// * home page services
export const homeservices = [
  {
    id: 1,
    title: "Plastics & Polymers",
    icon: Droplets,
    description:
      "PET, HDPE, LDPE, PP, PVC and multilayer plastics from production lines and packaging waste.",
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    id: 2,
    title: "Metals & Iron",
    icon: Hammer,
    description:
      "Ferrous and non-ferrous scrap, production offcuts, equipment dismantling and metal dust.",
    color: "#3a5a40",
    lightColor: "#588157",
  },
  {
    id: 3,
    title: "Chemical Waste",
    icon: FlaskConical,
    description:
      "Hazardous and scheduled waste streams with full PCB compliance and manifest documentation.",
    color: "#344e41",
    lightColor: "#3a5a40",
  },
  {
    id: 4,
    title: "Paper & Cardboard",
    icon: FileText,
    description:
      "Industrial kraft paper, corrugated boxes, production rejects and office paper waste.",
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    id: 5,
    title: "Glass & Empty Barrels",
    icon: Wine,
    description:
      "Industrial glass, containers, drums, IBCs and bulk packaging requiring cleaning or disposal.",
    color: "#3a5a40",
    lightColor: "#588157",
  },
  {
    id: 6,
    title: "Paints & Coatings",
    icon: PaintBucket,
    description:
      "Expired paints, solvents, coating residues and contaminated containers from manufacturing.",
    color: "#344e41",
    lightColor: "#3a5a40",
  },
  {
    id: 7,
    title: "Cloth & Textile Waste",
    icon: Shirt,
    description:
      "Cotton waste, synthetic fibers, production offcuts and rejected fabric rolls.",
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    id: 8,
    title: "Custom Industrial Waste",
    icon: Package,
    description:
      "Bespoke solutions for rubber, wood, e-waste, batteries and other complex waste streams.",
    color: "#3a5a40",
    lightColor: "#588157",
  },
];

export const categories = [
  "All",
  "Services",
  "Compliance",
  "Operations",
  "About Us",
];

export const faqs = [
  {
    question: "What types of waste do you manage?",
    answer:
      "We manage various types of waste including hazardous waste, plastic waste, industrial waste, e-waste, organic waste, rubber scrap, and wooden scrap. We also provide extended producer responsibility services and support circular economy initiatives.",
    category: "Services",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "Getting started is easy! Simply contact us through our contact form or call us directly. Our team will assess your needs and provide a customized waste management solution for your business.",
    category: "Getting Started",
  },
  {
    question: "Are your services compliant with environmental regulations?",
    answer:
      "Yes, all our services are fully compliant with local and national environmental regulations. We ensure that all waste handling, transportation, and disposal processes meet the highest environmental standards.",
    category: "Compliance",
  },
  {
    question: "Do you provide services for residential customers?",
    answer:
      "Our primary focus is on businesses and industrial clients. However, we do offer some services for residential customers. Please contact us to discuss your specific needs.",
    category: "Services",
  },
  {
    question: "What is Extended Producer Responsibility (EPR)?",
    answer:
      "Extended Producer Responsibility is an environmental policy approach where producers are given significant responsibility for the treatment or disposal of post-consumer products. We help businesses comply with EPR regulations and manage their product lifecycle responsibilities.",
    category: "Compliance",
  },
  {
    question: "Do You Also Collect Waste From The Household?",
    answer: "No, currently we are limited to the bulk waste generators only.",
    category: "Services",
  },
  {
    question: "How do you serve the larger cause of waste management?",
    answer:
      "While ensure safe recycling of all types of waste materials, we also ensure to create massive awareness among the common public regarding the waste segregation and recycling. Our team keeps on conducting multiple IEC activities every month to strengthen our core values.",
    category: "About Us",
  },
  {
    question:
      "Do you accept online manifest for collection of hazardous waste?",
    answer: "Yes, we accept online manifest for all types of hazardous waste",
    category: "Operations",
  },
  {
    question:
      "Do you use any technology to track and monitor the movement of waste and end of life cycle?",
    answer:
      "Yes, we have our own ERP, which tracks all the details meticulously so that we can present all the data as and when needed.",
    category: "Operations",
  },
  {
    question: "Are your vehicles GPS enabled?",
    answer:
      "Yes, all our vehicles are AIS-140 certified GPS enabled vehicles. We also ensure 100% hazardous waste movements are done with GPS mounted vehicles only.",
    category: "Operations",
  },
  {
    question: "Do you also help in meeting our EPR goals?",
    answer:
      "Yes, we are helping brand owners and producers in meeting their EPR goals. We are an SBM approved EPR agency.",
    category: "Compliance",
  },
  {
    question:
      "Do you have PWM registration certificate for recycling plastic waste?",
    answer:
      "Yes, since we are a pollution control board-approved plastic waste recycler, we own the PWM registration certificate. We also ensure our clients get manifest for the disposal of plastic waste.",
    category: "Compliance",
  },
  {
    question: "Are you a recycler or a scrap trader?",
    answer:
      "We are a GPCB authorized recycler and a leading waste management company in India. We ensure 100% of the scrap materials get diverted towards recycling only.",
    category: "About Us",
  },
  {
    question: `Why should I change from local scrap vendor to "SV Green?`,
    answer:
      "If 100% Compliance, Excellent service and environmental support are essential parameters for your organization then you should choose SV Green.",
    category: "About Us",
  },
  {
    question: "Which all location you serve?",
    answer:
      "We are serving the bulk waste generators across Gujarat, Rajasthan, Maharashtra and in few other major industrial areas across India.",
    category: "Services",
  },
  {
    question: "Do you buy all types of industrial waste?",
    answer:
      "Yes, we buy all kinds of industrial waste which are recyclable. It includes all types of plastic scrap, paper scrap, wooden scrap, metal scrap, hazardous waste for decontamination, used oil for re-refining, E-waste for recycling, etc.",
    category: "Services",
  },
];

export const industries = [
  {
    icon: Pill,
    title: "Pharmaceutical & Healthcare",
    description:
      "Comprehensive waste management for expired medicines, lab waste, hazardous chemicals, and packaging materials with strict PCB compliance.",
    services: [
      "Hazardous chemical waste disposal",
      "Expired medication recycling",
      "Laboratory waste management",
      "Medical packaging waste",
    ],
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    icon: Shirt,
    title: "Textile & Garment",
    description:
      "Cotton waste, synthetic fibers, fabric offcuts, dye waste and packaging materials recycled responsibly with zero-landfill commitment.",
    services: [
      "Fabric scraps & offcuts",
      "Cotton & synthetic waste",
      "Dye & chemical waste",
      "Packaging materials",
    ],
    color: "#3a5a40",
    lightColor: "#588157",
  },
  {
    icon: Paintbrush,
    title: "Paint & Coating",
    description:
      "Safe handling of expired paints, solvents, coating residues, contaminated containers and hazardous waste streams.",
    services: [
      "Expired paint disposal",
      "Solvent recycling",
      "Coating residue management",
      "Contaminated drum cleaning",
    ],
    color: "#344e41",
    lightColor: "#3a5a40",
  },
  {
    icon: Zap,
    title: "Electronics & Electrical",
    description:
      "E-waste recycling, component recovery, battery disposal and dismantling services for manufacturing units and assembly plants.",
    services: [
      "E-waste recycling",
      "Battery disposal",
      "Component recovery",
      "Production line waste",
    ],
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    icon: Car,
    title: "Automotive & Manufacturing",
    description:
      "Metal scrap, rubber waste, production offcuts, oil & lubricant disposal with optimized logistics for high-volume generators.",
    services: [
      "Metal scrap recycling",
      "Rubber & tyre waste",
      "Used oil re-refining",
      "Production line scrap",
    ],
    color: "#3a5a40",
    lightColor: "#588157",
  },
  {
    icon: PackageOpen,
    title: "FMCG & Packaging",
    description:
      "Plastic packaging, multilayer plastics, EPR compliance, cardboard waste and bulk material handling for production facilities.",
    services: [
      "Plastic packaging waste",
      "EPR compliance support",
      "Cardboard & paper waste",
      "Production rejects",
    ],
    color: "#344e41",
    lightColor: "#3a5a40",
  },
  {
    icon: Wine,
    title: "Food & Beverage",
    description:
      "Organic waste composting, glass & bottle recycling, packaging materials and industrial kitchen waste management solutions.",
    services: [
      "Organic waste composting",
      "Glass & bottle recycling",
      "Food packaging waste",
      "Industrial kitchen waste",
    ],
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    icon: FlaskConical,
    title: "Chemical & Petrochemical",
    description:
      "Hazardous chemical disposal, contaminated materials, scheduled waste management and full manifest documentation.",
    services: [
      "Hazardous chemical waste",
      "Contaminated materials",
      "Scheduled waste handling",
      "Drum & IBC cleaning",
    ],
    color: "#3a5a40",
    lightColor: "#588157",
  },
  {
    icon: Factory,
    title: "Steel & Metal Processing",
    description:
      "Ferrous & non-ferrous scrap, metal dust, slag, production offcuts and equipment dismantling with competitive pricing.",
    services: [
      "Metal scrap buying",
      "Production offcuts",
      "Metal dust & slag",
      "Equipment dismantling",
    ],
    color: "#344e41",
    lightColor: "#3a5a40",
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure",
    description:
      "Wooden pallets, construction debris, metal structures, plastic waste and bulk demolition waste recycling.",
    services: [
      "Wooden pallet recycling",
      "Construction debris",
      "Metal structure scrap",
      "Bulk waste handling",
    ],
    color: "#588157",
    lightColor: "#a3b18a",
  },
  {
    icon: Wheat,
    title: "Agriculture & Agro-Processing",
    description:
      "Organic waste composting, plastic mulch, agricultural packaging, wooden crates and farm waste management.",
    services: [
      "Organic waste recycling",
      "Plastic mulch disposal",
      "Agricultural packaging",
      "Wooden crate buying",
    ],
    color: "#3a5a40",
    lightColor: "#588157",
  },
  {
    icon: Laptop,
    title: "IT & Technology Parks",
    description:
      "E-waste from offices, battery disposal, paper & cardboard recycling, and comprehensive waste audit services.",
    services: [
      "Office e-waste recycling",
      "Battery disposal",
      "Paper waste management",
      "Waste audits & consulting",
    ],
    color: "#344e41",
    lightColor: "#3a5a40",
  },
];
