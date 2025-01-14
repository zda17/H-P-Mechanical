import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "Kelch Total Comfort LLC",
  tagline: "Top-quality Heating, Air Conditioning and Ventilation Services",
  description: "Kelch Total Comfort LLC is a family owned heating, air conditioning and ventilation company based in Henryetta, Oklahoma. We offer top-tier heating, air conditioning and ventilation services to meet all your project needs. Start exploring and contact our sales team for superior quality and reliability.",
  description_short: "Kelch Total Comfort LLC is a family owned heating, air conditioning and ventilation company based in Henryetta, Oklahoma. We offer top-tier heating, air conditioning and ventilation services to meet all your project needs.",
  url: "https://kelchtotalcomfort.com",
  author: "Emil Gulamov",
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
  title: `${SITE.title}: : Kelch Total Comfort LLC`,
  description: "Kelch Total Comfort LLC is a family owned heating, air conditioning and ventilation company based in Henryetta, Oklahoma. We offer top-tier heating, air conditioning and ventilation services to meet all your project needs.",
  image: ogImageSrc,
};
