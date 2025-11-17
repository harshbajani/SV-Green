import HomePage from "~/sections/home/page";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SV Green – Industrial Scrap & Waste Management" },
    {
      name: "description",
      content:
        "GPCB‑authorized industrial scrap and waste management partner for plastics, metals, hazardous and complex waste across Gujarat, Maharashtra and Rajasthan.",
    },
  ];
}

export default function Home() {
  return <HomePage />;
}
