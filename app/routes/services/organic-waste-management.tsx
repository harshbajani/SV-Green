import { organicWaste } from "../../../constants";
import OrganicWasteManagementPage from "~/sections/services/organic-waste-management/page";
import type { Route } from "./+types/organic-waste-management";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Organic Waste Management",
    title: "Sustainable Organic Waste Solutions & Composting",
    description: organicWaste[0] || "SV Green provides efficient organic waste management services, converting food waste and other organic materials into valuable compost and biogas through sustainable practices.",
    path: "/services/organic-waste-management",
    additionalKeywords: [
      "organic waste recycling",
      "food waste management",
      "composting services",
      "biogas production",
      "sustainable waste solutions",
      "organic waste to energy"
    ]
  });
}

const OrganicWasteManagement = () => {
  return <OrganicWasteManagementPage />;
};

export default OrganicWasteManagement;
