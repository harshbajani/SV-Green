import { industrialWasteContent } from "../../../constants";
import IndustrialWasteManagementPage from "~/sections/services/industrial-waste-management/page";
import type { Route } from "./+types/industrial-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Industrial Waste Management - SV Green" },
    {
      name: "description",
      content:
        industrialWasteContent[0] ??
        "Industrial waste recycling and compliance services by SV Green.",
    },
  ];
}

const IndustrialWasteManagement = () => {
  return <IndustrialWasteManagementPage />;
};

export default IndustrialWasteManagement;
