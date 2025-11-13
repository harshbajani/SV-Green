import ContactUsPage from "~/sections/contact-us/page";
import type { Route } from "./+types/contact-us";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - SV Green" },
    { name: "description", content: "Get in touch with SV Green" },
  ];
}

export default function ContactUs() {
  return <ContactUsPage />;
}
