import type { Route } from "./+types/about-us";
import ClientPage from "~/sections/clients/page";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "Our Valued Clients | SV Green Waste Management Solutions",
    description: "Discover the businesses and organizations that trust SV Green for their waste management and recycling needs. We partner with industries across Gujarat, Maharashtra, and Rajasthan.",
    url: "https://sv-green.vercel.app/clients",
    keywords: [
      "waste management clients",
      "SV Green customers",
      "industrial waste management partners",
      "recycling service providers",
      "GPCB approved waste solutions",
      "sustainable business partnerships"
    ]
  });
}

export default function Clients() {
  return <ClientPage />;
}
