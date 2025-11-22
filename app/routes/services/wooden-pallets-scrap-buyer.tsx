import { woodenPalletsScrapBuyer } from "../../../constants";
import WoodenPalletsScrapBuyerPage from "~/sections/services/wooden-pallets-scrap-buyer/page";
import type { Route } from "./+types/wooden-pallets-scrap-buyer";
import { generateServiceMeta } from "~/lib/serviceSeo";

export function meta({}: Route.MetaArgs) {
  return generateServiceMeta({
    serviceName: "Wooden Pallets Scrap Buyer",
    title: "Professional Wooden Pallets Recycling & Disposal Services",
    description: woodenPalletsScrapBuyer[0] || "SV Green offers efficient wooden pallets scrap buying and recycling services, helping businesses dispose of used pallets in an environmentally responsible manner.",
    path: "/services/wooden-pallets-scrap-buyer",
    additionalKeywords: [
      "wooden pallets buyer near me",
      "used pallets recycling",
      "wood pallet disposal service",
      "industrial pallet waste management",
      "sustainable pallet recycling",
      "GPCB approved wood waste solutions"
    ]
  });
}

const WoodenPalletsScrapBuyer = () => {
  return <WoodenPalletsScrapBuyerPage />;
};

export default WoodenPalletsScrapBuyer;
