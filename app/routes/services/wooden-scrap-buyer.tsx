import { woodenScrapBuyer } from "../../../constants";
import WoodenScrapBuyerPage from "~/sections/services/wooden-scrap-buyer/page";
import type { Route } from "./+types/wooden-scrap-buyer";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Wooden Scrap Buyer",
    title: "Top Wooden Scrap Collection & Recycling Services",
    description: woodenScrapBuyer[0] || "SV Green is a leading wooden scrap buyer in Gujarat, offering professional collection, recycling, and disposal services for all types of wooden waste materials.",
    path: "/services/wooden-scrap-buyer",
    additionalKeywords: [
      "wooden scrap buyer near me",
      "wood waste recycling",
      "scrap wood collection",
      "industrial wood waste disposal",
      "sustainable wood recycling",
      "GPCB approved wood waste management"
    ]
  });
}

const WoodenScrapBuyer = () => {
  return <WoodenScrapBuyerPage />;
};

export default WoodenScrapBuyer;
