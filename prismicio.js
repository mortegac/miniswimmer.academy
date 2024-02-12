import * as prismic from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";
import sm from "./sm.json";

/**
 * The project's Prismic repository name.
 */
export const endpoint = sm.apiEndpoint;
export const accessToken = sm.apiAccessToken;
export const defaultLanguage = "en-us";
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

/**
 * The project's Prismic Link Resolver. This function determines the URL for a given Prismic document.
 *
 * @type {prismicH.LinkResolverFunction}
 */
export const linkResolver = doc => {
  const properties = doc?._meta || doc;

  // if (properties.type === "homepage") {
  //   return properties.lang === defaultLanguage
  //     ? "/en-us/"
  //     : `/${properties.lang}`;
  // }
  if (properties.type === "homepage") {
    return `/`;
  }
  if (properties.type === "page") {
    return `/${properties.uid}`;
  }

  return "/";
};

export let repository = {};
export let locales = [];
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - A configuration object to
 */

// Additional helper function for Next/Link component
export const hrefResolver = doc => {
  if (doc.type === "homepage") {
    return `/`;
  }
  if (doc.type === 'page') {
    return `/${doc.uid}`;
  }
  return "/";
};
