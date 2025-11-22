import { industrialWasteContent } from "../../../constants";
import IndustrialWasteManagementPage from "~/sections/services/industrial-waste-management/page";
import type { Route } from "./+types/industrial-waste-management";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Industrial Waste Management",
    title: "Comprehensive Industrial Waste Solutions",
    description: industrialWasteContent[0] || "SV Green offers end-to-end industrial waste management services, helping businesses manage, recycle, and dispose of industrial waste in an environmentally responsible and compliant manner.",
    path: "/services/industrial-waste-management",
    additionalKeywords: [
      "industrial waste disposal",
      "factory waste management",
      "manufacturing waste solutions",
      "GPCB compliance services",
      "hazardous industrial waste",
      "waste minimization strategies"
    ]
  });
}

const IndustrialWasteManagement = () => {
  return <IndustrialWasteManagementPage />;
};

export default IndustrialWasteManagement;
