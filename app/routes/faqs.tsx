import FAQsPage from "~/sections/faqs/page";
import type { Route } from "./+types/faqs";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "FAQs - SV Green Waste Management Solutions",
    description: "Find answers to common questions about our waste management services, recycling processes, environmental compliance, and how SV Green can help your business with sustainable waste solutions.",
    url: "https://sv-green.vercel.app/faqs",
    keywords: [
      "waste management FAQs",
      "recycling questions answered",
      "hazardous waste disposal queries",
      "EPR compliance help",
      "industrial waste solutions",
      "sustainable waste management"
    ]
  });
}

export default function FAQs() {
  return <FAQsPage />;
}
