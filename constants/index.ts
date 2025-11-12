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
