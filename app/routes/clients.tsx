import type { Route } from "./+types/about-us";
import ClientPage from "~/sections/clients/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Clients - SV Green" },
    {
      name: "description",
      content: "Clients with whom we have worked with",
    },
  ];
}

export default function Clients() {
  return <ClientPage />;
}
