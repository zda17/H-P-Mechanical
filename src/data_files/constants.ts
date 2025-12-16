import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "H & P Heating and Air Conditioning",
  tagline: "Top-quality Heating, Air Conditioning and Ventilation Services",
  description: "H & P Heating and Air Conditioning is a family owned heating, air conditioning and ventilation company. We offer top-tier heating, air conditioning and ventilation services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "H & P Heating and Air Conditioning is a family owned heating, air conditioning and ventilation company. We offer top-tier heating, air conditioning and ventilation services to meet all your project needs.",
  url: "https://kelchtotalcomfort.com",
  author: "Zach Alvstad",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}`,
  description: "H & P Heating and Air Conditioning is a family owned heating, air conditioning and ventilation company. We offer top-tier heating, air conditioning and ventilation services to meet all your project needs.",
  image: ogImageSrc,
};
