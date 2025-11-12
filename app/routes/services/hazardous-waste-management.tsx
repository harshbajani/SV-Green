import HazardousWastePage from "sections/services/hazardous-waste-management/page";
import type { Route } from "./+types/hazardous-waste-management";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Hazardous Waste Management - SV Green" },
    {
      name: "description",
      content: "Expert hazardous waste management services",
    },
  ];
}

export default function HazardousWasteManagement() {
  return <HazardousWastePage />;
}
