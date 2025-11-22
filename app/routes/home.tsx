import HomePage from "~/sections/home/page";
import type { Route } from "./+types/home";
import { generateMetaTags } from "~/lib/seo";

export function meta({}: Route.MetaArgs) {
  return generateMetaTags({
    title: "SV Green - Leading Industrial Scrap & Waste Management Services",
    description: "GPCB-authorized industrial scrap and waste management partner specializing in plastics, metals, hazardous and complex waste management across Gujarat, Maharashtra and Rajasthan.",
    url: "https://sv-green.vercel.app",
  });
}

export default function Home() {
  return <HomePage />;
}
