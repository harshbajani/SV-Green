import type { Route } from "./+types/faqs";
import FAQsPage from "../../sections/faqs/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "FAQs - SV Green" },
    {
      name: "description",
      content: "Frequently asked questions about SV Green",
    },
  ];
}

export default function FAQs() {
  return <FAQsPage />;
}
