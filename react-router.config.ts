import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  async prerender() {
    return [
      "/",
      "/about-us",
      "/contact-us",
      "/clients",
      "industries-we-serve",
      "/faqs",
      "/services/wooden-pallets-scrap-buyer",
      "/services/wooden-scrap-buyer",
      "/services/rubber-scrap-waste-management",
      "/services/plastic-waste-management",
      "/services/hazardous-waste-management",
      "/services/extended-producer-responsibility",
      "/services/industrial-waste-management",
      "/services/organic-waste-management",
      "/services/circular-economy",
      "/services/e-waste-management",
    ];
  },
} satisfies Config;
