/** @type {import('next').NextConfig} */

const prismic = require("@prismicio/client");
const sm = require("./sm.json");

const nextConfig = async () => {
  const client = prismic.createClient(sm.apiEndpoint);
  const repository = await client.getRepository();
  // const locales = repository.languages.map((lang) => lang.id);

  return {
    // trailingSlash: true,
    target: "serverless",
    // i18n: {
    //   locales,
    //   defaultLocale: locales[0],
    // },
    // locales,
    // defaultLocale: locales[0],
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
      removeConsole: true,
      styledComponents: true,
    },
    images: {
      domains: ["images.prismic.io", "images.unsplash.com"],
      loader: "akamai",
      path: "",
    },
    experimental: {
      // Defaults to 50MB
      isrMemoryCacheSize: 0,
      forceSwcTransforms: true,
      runtime: "edge",
    },
  };
};

module.exports = nextConfig;
