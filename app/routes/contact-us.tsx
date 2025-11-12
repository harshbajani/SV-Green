import type { Route } from "./+types/contact-us";
import ContactUsPage from "../../sections/contact-us/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact Us - SV Green" },
    { name: "description", content: "Get in touch with SV Green" },
  ];
}

export default function ContactUs() {
  return <ContactUsPage />;
}
