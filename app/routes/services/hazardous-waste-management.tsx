import { hazardContent } from "../../../constants";
import HazardousWastePage from "~/sections/services/hazardous-waste-management/page";
import type { Route } from "./+types/hazardous-waste-management";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Hazardous Waste Management",
    title: "Safe & Compliant Hazardous Waste Solutions",
    description: hazardContent[0] || "SV Green provides comprehensive hazardous waste management services, ensuring safe handling, treatment, and disposal of hazardous materials in compliance with GPCB and CPCB regulations.",
    path: "/services/hazardous-waste-management",
    additionalKeywords: [
      "hazardous waste disposal",
      "toxic waste management",
      "industrial hazardous waste",
      "GPCB compliant waste disposal",
      "hazardous waste transportation",
      "chemical waste management"
    ]
  });
}

export default function HazardousWasteManagement() {
  return <HazardousWastePage />;
}
