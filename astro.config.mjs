import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://htchvac.com",
  image: {
    domains: ["images.unsplash.com"],
  },
  routing: {
    prefixDefaultLocale: true,
  },
  prefetch: true,
  integrations: [
    tailwind(),
    sitemap({
      
    
      sidebar: [
        {
          autogenerate: { directory: "guides" },
        },
        {
          label: "Tools & Equipment",
          items: [
            { label: "Tool Guides", link: "tools/tool-guides/" },
            { label: "Equipment Care", link: "tools/equipment-care/" },
          ],
        },
        {
          label: "Construction Services",
          autogenerate: { directory: "construction" },
        },
        {
          label: "Advanced Topics",
          autogenerate: { directory: "advanced" },
        },
      ],
      social: {
        github: "",
      },
      disable404Route: true,
      customCss: ["./src/assets/styles/starlight.css"],
      favicon: "/favicon.ico",
      
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://ktchvac.com",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "twitter:image",
            content: "https://ktchvac.com",
          },
        },
      ],
    }),
    compressor({
      gzip: false,
      brotli: true,
    }),
  ],
  experimental: {
    clientPrerender: true,
  },
});
