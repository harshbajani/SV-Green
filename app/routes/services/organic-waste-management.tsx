import { organicWaste } from "../../../constants";
import OrganicWasteManagementPage from "~/sections/services/organic-waste-management/page";
import type { Route } from "./+types/organic-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Organic Waste Management - SV Green" },
    {
      name: "description",
      content:
        organicWaste[0] ??
        "Organic waste recycling and composting services by SV Green.",
    },
  ];
}

const OrganicWasteManagement = () => {
  return <OrganicWasteManagementPage />;
};

export default OrganicWasteManagement;
