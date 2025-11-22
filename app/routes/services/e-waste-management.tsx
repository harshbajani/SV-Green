import { eWaste } from "../../../constants";
import EWasteManagementPage from "~/sections/services/e-waste-management/page";
import type { Route } from "./+types/e-waste-management";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "E-Waste Management",
    title: "Secure Electronics Recycling & Disposal Services",
    description: eWaste[0] || "SV Green provides secure, compliant e-waste management solutions, ensuring safe disposal and recycling of electronic waste while protecting data and the environment.",
    path: "/services/e-waste-management",
    additionalKeywords: [
      "electronic waste recycling",
      "IT asset disposal",
      "e-waste disposal services",
      "secure data destruction",
      "CPCB approved e-waste recycler",
      "corporate e-waste management"
    ]
  });
}

const EWasteManagement = () => {
  return <EWasteManagementPage />;
};

export default EWasteManagement;
