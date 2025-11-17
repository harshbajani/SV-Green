import { extendedProducerResponsibility } from "../../../constants";
import ExtendedProducerResponsibilityPage from "~/sections/services/extended-producer-responsibility/page";
import type { Route } from "./+types/extended-producer-responsibility";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Extended Producer Responsibility - SV Green" },
    {
      name: "description",
      content:
        extendedProducerResponsibility[0] ??
        "Comprehensive EPR compliance support by SV Green.",
    },
  ];
}

const ExtendedProducerResponsibility = () => {
  return <ExtendedProducerResponsibilityPage />;
};

export default ExtendedProducerResponsibility;
