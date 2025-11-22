import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("about-us", "routes/about-us.tsx"),
  route("clients", "routes/clients.tsx"),
  route("industries-we-serve", "routes/industries-we-serve.tsx"),
  route("contact-us", "routes/contact-us.tsx"),
  route("faqs", "routes/faqs.tsx"),

  route("services", "routes/services/layout.tsx", [
    index("routes/services/services.tsx"),
    route(
      "hazardous-waste-management",
      "routes/services/hazardous-waste-management.tsx"
    ),
    route(
      "plastic-waste-management",
      "routes/services/plastic-waste-management.tsx"
    ),
    route(
      "industrial-waste-management",
      "routes/services/industrial-waste-management.tsx"
    ),
    route(
      "extended-producer-responsibility",
      "routes/services/extended-producer-responsibility.tsx"
    ),
    route("circular-economy", "routes/services/circular-economy.tsx"),
    route(
      "organic-waste-management",
      "routes/services/organic-waste-management.tsx"
    ),
    route("e-waste-management", "routes/services/e-waste-management.tsx"),
    route(
      "rubber-scrap-waste-management",
      "routes/services/rubber-scrap-waste-management.tsx"
    ),
    route("wooden-scrap-buyer", "routes/services/wooden-scrap-buyer.tsx"),
    route(
      "wooden-pallets-scrap-buyer",
      "routes/services/wooden-pallets-scrap-buyer.tsx"
    ),
  ]),
] satisfies RouteConfig;
