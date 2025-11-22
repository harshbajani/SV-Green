import { rubberWaste } from "../../../constants";
import RubberScrapWasteManagementPage from "~/sections/services/rubber-scrap-waste-management/page";
import type { Route } from "./+types/rubber-scrap-waste-management";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Rubber Scrap Waste Management",
    title: "Eco-Friendly Rubber & Tyre Recycling Solutions",
    description: rubberWaste[0] || "SV Green provides sustainable rubber scrap and tyre waste management services, transforming waste into reusable materials through advanced recycling technologies.",
    path: "/services/rubber-scrap-waste-management",
    additionalKeywords: [
      "rubber scrap recycling",
      "tyre waste management",
      "rubber waste disposal",
      "used tyre collection",
      "sustainable rubber solutions",
      "GPCB approved rubber recycling"
    ]
  });
}

const RubberScrapWasteManagement = () => {
  return <RubberScrapWasteManagementPage />;
};

export default RubberScrapWasteManagement;
