import { woodenPalletsScrapBuyer } from "../../../constants";
import WoodenPalletsScrapBuyerPage from "~/sections/services/wooden-pallets-scrap-buyer/page";
import type { Route } from "./+types/wooden-pallets-scrap-buyer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wooden Pallets Scrap Buyer - SV Green" },
    {
      name: "description",
      content:
        woodenPalletsScrapBuyer[0] ??
        "Responsible wooden pallets scrap recycling by SV Green.",
    },
  ];
}

const WoodenPalletsScrapBuyer = () => {
  return <WoodenPalletsScrapBuyerPage />;
};

export default WoodenPalletsScrapBuyer;
