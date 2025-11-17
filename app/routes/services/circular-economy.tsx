import { circularEconomy } from "../../../constants";
import CircularEconomyPage from "~/sections/services/circular-economy/page";
import type { Route } from "./+types/circular-economy";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Circular Economy - SV Green" },
    {
      name: "description",
      content:
        circularEconomy[0] ??
        "Circular economy consulting and recycling by SV Green.",
    },
  ];
}

const CircularEconomy = () => {
  return <CircularEconomyPage />;
};

export default CircularEconomy;
