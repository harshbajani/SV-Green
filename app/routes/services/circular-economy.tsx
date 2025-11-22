import { circularEconomy } from "../../../constants";
import CircularEconomyPage from "~/sections/services/circular-economy/page";
import type { Route } from "./+types/circular-economy";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Circular Economy",
    title: "Sustainable Resource Management & Waste Reduction",
    description: circularEconomy[0] || "SV Green offers comprehensive circular economy solutions to help businesses transform waste into valuable resources while reducing environmental impact and achieving sustainability goals.",
    path: "/services/circular-economy",
    additionalKeywords: [
      "circular economy solutions",
      "waste to resources",
      "sustainable business practices",
      "closed-loop recycling",
      "resource efficiency",
      "GPCB compliant recycling"
    ]
  });
}

const CircularEconomy = () => {
  return <CircularEconomyPage />;
};

export default CircularEconomy;
