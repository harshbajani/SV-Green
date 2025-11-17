import { woodenScrapBuyer } from "../../../constants";
import WoodenScrapBuyerPage from "~/sections/services/wooden-scrap-buyer/page";
import type { Route } from "./+types/wooden-scrap-buyer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Wooden Scrap Buyer - SV Green" },
    {
      name: "description",
      content:
        woodenScrapBuyer[0] ??
        "Trusted wooden scrap recycling partner in Gujarat.",
    },
  ];
}

const WoodenScrapBuyer = () => {
  return <WoodenScrapBuyerPage />;
};

export default WoodenScrapBuyer;
