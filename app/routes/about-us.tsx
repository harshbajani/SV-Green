import type { Route } from "./+types/about-us";
import AboutUsPage from "../../sections/about-us/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Us - SV Green" },
    {
      name: "description",
      content: "Learn more about SV Green and our mission",
    },
  ];
}

export default function AboutUs() {
  return <AboutUsPage />;
}
