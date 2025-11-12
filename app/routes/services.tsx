import type { Route } from "./+types/services";
import ServicesPage from "../../sections/services/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Services - SV Green" },
    { name: "description", content: "Explore our waste management services" },
  ];
}

export default function Services() {
  return <ServicesPage />;
}
