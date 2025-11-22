import IndustriesWeServePage from "~/sections/industries-we-serve/page";
import type { Route } from "./+types/industries-we-serve";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "Industries We Serve | SV Green - Waste Management Solutions",
    description: "SV Green provides specialized waste management solutions for various industries including manufacturing, pharmaceuticals, textiles, and more across Gujarat, Maharashtra, and Rajasthan.",
    url: "https://sv-green.vercel.app/industries-we-serve",
    keywords: [
      "industries we serve",
      "industrial waste management",
      "pharmaceutical waste disposal",
      "manufacturing waste solutions",
      "textile industry waste management",
      "GPCB compliant waste disposal",
      "hazardous waste management by industry"
    ]
  });
}

export default function IndustriesWeServe() {
  return <IndustriesWeServePage />;
}
