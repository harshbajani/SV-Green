import { plasticWasteContent } from "../../../constants";
import PlasticWasteManagementPage from "~/sections/services/plastic-waste-management/page";
import type { Route } from "./+types/plastic-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Plastic Waste Management - SV Green" },
    {
      name: "description",
      content:
        plasticWasteContent[0] ??
        "Plastic waste recycling and compliance support by SV Green.",
    },
  ];
}

const PlasticWasteManagement = () => {
  return <PlasticWasteManagementPage />;
};

export default PlasticWasteManagement;
