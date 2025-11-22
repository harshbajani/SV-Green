interface MetaTags {
  title: string;
  description: string;
  url: string;
  image?: string;
  keywords?: string[];
}

export function generateMetaTags({
  title,
  description,
  url,
  image = "https://sv-green.vercel.app/images/og-image.jpg",
  keywords = [],
}: MetaTags) {
  const siteName = "SV Green";
  const defaultKeywords = [
    "industrial waste management",
    "scrap management",
    "hazardous waste disposal",
    "GPCB authorized waste management",
    "plastic waste recycling",
    "metal scrap recycling",
    "waste management Gujarat",
    "sustainable waste solutions",
    "industrial waste disposal",
    "environmental services",
    ...keywords,
  ];

  return [
    { title },
    { name: "description", content: description },
    { name: "keywords", content: defaultKeywords.join(", ") },
    { name: "author", content: siteName },
    { name: "robots", content: "index, follow" },
    {
      name: "googlebot",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    {
      name: "bingbot",
      content:
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
    
    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:site_name", content: siteName },
    { property: "og:image", content: image },
    { property: "og:locale", content: "en_IN" },
    
    // Twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: url },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
    
    // Canonical URL
    { rel: "canonical", href: url },
    
    // Additional Meta Tags
    { name: "theme-color", content: "#10B981" },
    { name: "application-name", content: siteName },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    { name: "apple-mobile-web-app-title", content: siteName },
    { name: "format-detection", content: "telephone=yes" },
    { name: "mobile-web-app-capable", content: "yes" },
    
    // Geo and Business Information
    { name: "geo.region", content: "IN-GJ" },
    { name: "geo.placename", content: "Gujarat" },
    { name: "geo.position", content: "23.2156,72.6369" },
    { name: "ICBM", content: "23.2156, 72.6369" },
    
    // Verification
    {
      name: "google-site-verification",
      content: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    },
    { 
      name: "msvalidate.01", 
      content: "YOUR_BING_WEBMASTER_VERIFICATION_CODE" 
    },
  ];
}

// Common meta tags that can be reused across pages
export const commonMeta = {
  siteName: "SV Green",
  baseUrl: "https://sv-green.vercel.app",
  defaultImage: "https://sv-green.vercel.app/images/og-image.jpg",
  defaultKeywords: [
    "industrial waste management",
    "scrap management",
    "hazardous waste disposal",
    "GPCB authorized waste management",
    "plastic waste recycling",
    "metal scrap recycling",
    "waste management Gujarat",
    "sustainable waste solutions",
    "industrial waste disposal",
    "environmental services",
  ],
};
