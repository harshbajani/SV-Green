export type NavItem = {
  name: string;
  href?: string;
  children?: Array<{ name: string; href: string }>;
};

export const PHONE_NUMBER = ""; // e.g. "+1-555-123-4567" (set to show Call button)

export const NavItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  {
    name: "Services",
    href: "/services",
    children: [
      {
        name: "Hazardous waste management",
        href: "/services/hazardous-waste-management",
      },
      {
        name: "Plastic waste management",
        href: "/services/plastic-waste-management",
      },
      {
        name: "Industrial waste management",
        href: "/services/industrial-waste-management",
      },
      {
        name: "Extended producer responsibility",
        href: "/services/extended-producer-responsibility",
      },
      { name: "Circular economy", href: "/services/circular-economy" },
      {
        name: "Organic waste management",
        href: "/services/organic-waste-management",
      },
      {
        name: "E-waste management services",
        href: "/services/e-waste-management",
      },
      {
        name: "Rubber scrap waste management",
        href: "/services/rubber-scrap-waste-management",
      },
      { name: "Wooden scrap buyer", href: "/services/wooden-scrap-buyer" },
      {
        name: "Wooden Pallets scrap buyer",
        href: "/services/wooden-pallets-scrap-buyer",
      },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact us", href: "/contact-us" },
];

export const benefits = [
  {
    title: "Excellent Service",
    description:
      "We are here to take the weight off your shoulders by providing at par hazardous waste management services.",
  },
  {
    title: "Value Addition",
    description:
      "We provide excellent prices and even more incredible value addition to our clients. We adhere to safety protocols for hazardous management.",
  },
  {
    title: "Compliance & Service",
    description:
      "Known for compliance in the hazardous waste management business, we keep you fully compliant with all.",
  },
  {
    title: "Speed & Timeliness",
    description:
      "Timely collection, processing and reporting of our services and processes are what we follow at Recycling Hub.",
  },
  {
    title: "Safety Measures",
    description:
      "We take care of safety first. We take proper precautions to protect the environment, equipment and facilities.",
  },
  {
    title: "Document Retention",
    description:
      "We have copies of your profiles, certificates of destruction, manifests, and other documents that we retain for futuristic retrieval needs.",
  },
];

export const expertise = [
  "Hazardous Waste Profiling",
  "Hazardous Waste Collection",
  "Hazardous Waste Treatment and Recycling",
  "Online access to account and waste information",
  "Analysing Hazardous waste removal",
];

export const services = [
  {
    title: "End-to-End Hazardous Waste Management",
    description:
      "We help our clients throughout all the hazardous waste management phases, including logistics, training, and management of transboundary movement permits.",
  },
  {
    title: "Comprehensive Waste Management",
    description:
      "We are a GPCB authorized decontamination service provider in Gujarat, offering the safest and most transparent hazardous waste treatment with accurate reports.",
  },
  {
    title: "Maximum Pollution Reduction",
    description:
      "We work to reduce all solid, liquid and gaseous industrial emissions and offer the best technical solution in pollution control, management and facility operations.",
  },
  {
    title: "Customized Waste Solutions",
    description:
      "We create dedicated waste recycling solutions based on your needs. As a GPCB authorized recycler, we tackle pollution generated through hazardous waste recycling.",
  },
];
