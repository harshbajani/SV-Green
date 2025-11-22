import ServicesPage from "~/sections/services/page";
import type { Route } from "../+types/about-us";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "Waste Management Services | SV Green - Comprehensive Solutions",
    description: "Explore SV Green's comprehensive waste management services including industrial, hazardous, plastic, and e-waste management. GPCB-authorized services across Gujarat, Maharashtra, and Rajasthan.",
    url: "https://sv-green.vercel.app/services",
    keywords: [
      "waste management services",
      "industrial waste management",
      "hazardous waste disposal",
      "plastic waste recycling",
      "e-waste management",
      "GPCB authorized services",
      "waste management solutions",
      "sustainable waste management"
    ]
  });
}

export default function Services() {
  return <ServicesPage />;
}
