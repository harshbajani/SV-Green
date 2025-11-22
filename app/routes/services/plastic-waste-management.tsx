import { plasticWasteContent } from "../../../constants";
import PlasticWasteManagementPage from "~/sections/services/plastic-waste-management/page";
import type { Route } from "./+types/plastic-waste-management";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Plastic Waste Management",
    title: "Comprehensive Plastic Recycling & EPR Solutions",
    description: plasticWasteContent[0] || "SV Green offers end-to-end plastic waste management services, including collection, segregation, recycling, and EPR compliance for businesses across industries.",
    path: "/services/plastic-waste-management",
    additionalKeywords: [
      "plastic waste recycling",
      "EPR compliance for plastic",
      "plastic waste collection",
      "sustainable packaging solutions",
      "plastic waste to energy",
      "GPCB approved plastic recycling"
    ]
  });
}

const PlasticWasteManagement = () => {
  return <PlasticWasteManagementPage />;
};

export default PlasticWasteManagement;
