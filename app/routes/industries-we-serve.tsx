import IndustriesWeServePage from "~/sections/industries-we-serve/page";
import type { Route } from "./+types/industries-we-serve";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Industries We Serve - SV Green" },
    {
      name: "description",
      content: "Industries we serve",
    },
  ];
}

export default function IndustriesWeServe() {
  return <IndustriesWeServePage />;
}
