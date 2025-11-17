import { eWaste } from "../../../constants";
import EWasteManagementPage from "~/sections/services/e-waste-management/page";
import type { Route } from "./+types/e-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "E-Waste Management - SV Green" },
    {
      name: "description",
      content:
        eWaste[0] ??
        "Safe and compliant e-waste management solutions by SV Green.",
    },
  ];
}

const EWasteManagement = () => {
  return <EWasteManagementPage />;
};

export default EWasteManagement;
