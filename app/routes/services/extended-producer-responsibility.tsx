import { extendedProducerResponsibility } from "../../../constants";
import ExtendedProducerResponsibilityPage from "~/sections/services/extended-producer-responsibility/page";
import type { Route } from "./+types/extended-producer-responsibility";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Extended Producer Responsibility (EPR)",
    title: "EPR Compliance & Producer Responsibility Solutions",
    description: extendedProducerResponsibility[0] || "SV Green provides comprehensive EPR compliance services, helping businesses meet their extended producer responsibility obligations for plastic, e-waste, and other regulated waste streams.",
    path: "/services/extended-producer-responsibility",
    additionalKeywords: [
      "EPR compliance services",
      "extended producer responsibility",
      "plastic waste EPR",
      "e-waste management compliance",
      "EPR registration and filing",
      "CPCB EPR authorization"
    ]
  });
}

const ExtendedProducerResponsibility = () => {
  return <ExtendedProducerResponsibilityPage />;
};

export default ExtendedProducerResponsibility;
