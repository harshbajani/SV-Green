import ContactUsPage from "~/sections/contact-us/page";
import type { Route } from "./+types/contact-us";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "Contact SV Green - Waste Management Experts | Get a Free Quote",
    description: "Reach out to SV Green for professional waste management services. Our team is ready to assist with recycling, disposal, and compliance solutions. Call, email, or visit us today.",
    url: "https://sv-green.vercel.app/contact-us",
    keywords: [
      "waste management contact",
      "recycling services near me",
      "hazardous waste disposal contact",
      "industrial waste solutions",
      "EPR compliance consultation",
      "sustainable waste management company"
    ]
  });
}

export default function ContactUs() {
  return <ContactUsPage />;
}
