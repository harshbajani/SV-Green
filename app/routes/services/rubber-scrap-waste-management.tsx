import { rubberWaste } from "../../../constants";
import RubberScrapWasteManagementPage from "~/sections/services/rubber-scrap-waste-management/page";
import type { Route } from "./+types/rubber-scrap-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rubber Scrap Waste Management - SV Green" },
    {
      name: "description",
      content:
        rubberWaste[0] ??
        "Rubber scrap recycling and tyre waste management by SV Green.",
    },
  ];
}

const RubberScrapWasteManagement = () => {
  return <RubberScrapWasteManagementPage />;
};

export default RubberScrapWasteManagement;
