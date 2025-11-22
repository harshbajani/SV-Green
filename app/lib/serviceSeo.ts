import { generateMetaTags } from "./seo";

interface ServiceSeoParams {
  title: string;
  description: string;
  serviceName: string;
  path: string;
  additionalKeywords?: string[];
}

export function generateServiceMeta({
  title,
  description,
  serviceName,
  path,
  additionalKeywords = [],
}: ServiceSeoParams) {
  const baseUrl = "https://sv-green.vercel.app";
  const url = `${baseUrl}${path}`;
  
  const defaultKeywords = [
    `${serviceName} services`,
    `${serviceName} in Gujarat`,
    `GPCB authorized ${serviceName.toLowerCase()}`,
    `sustainable ${serviceName.toLowerCase()} solutions`,
    `professional ${serviceName.toLowerCase()} company`,
    ...additionalKeywords
  ];

  return generateMetaTags({
    title: `${serviceName} Services | SV Green - ${title}`,
    description,
    url,
    keywords: defaultKeywords,
  });
}
