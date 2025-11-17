import { hazardContent } from "../../../constants";
import HazardousWastePage from "~/sections/services/hazardous-waste-management/page";
import type { Route } from "./+types/hazardous-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hazardous Waste Management - SV Green" },
    {
      name: "description",
      content:
        hazardContent[0] ??
        "End-to-end hazardous waste management services by SV Green.",
    },
  ];
}

export default function HazardousWasteManagement() {
  return <HazardousWastePage />;
}
