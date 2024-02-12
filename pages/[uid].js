// import React from "react";
// import * as prismicH from "@prismicio/helpers";
// import Head from "next/head";
// import { SliceZone } from "@prismicio/react";
// import { asText } from "@prismicio/helpers";
// import { createClient, linkResolver } from "../prismicio";
// import { components } from "../slices/index";
// import { Layout } from "../components/Layout";
// import SEO from "../components/SEO";

import React from "react";
import Head from "next/head";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { createClient, linkResolver } from "../prismicio";
import { asText } from "@prismicio/helpers";
import { components } from "../slices/index";
import { Layout } from "../components/common/Layout";


const Page = props => {
  if (props?.error || !props || !props?.page?.lang) {
    return <>{console.error(props, "[uid]")}</>;
  }

  const { page, menu, footer } = props;
  const { lang, type, url } = page;

  const activeDoc = {
    lang,
    type,
    url,
    sitename: process.env.NEXT_PUBLIC_SITENAME || "http://localhost",
  };


  return (
    <Layout
      header={menu || {}}
      footer={footer || {}}
      page={page}
      activeDocMeta={activeDoc}
    >


      <SliceZone slices={page?.data?.slices} components={components} />
    </Layout>
  );
};


export async function getStaticProps({
  previewData,
  params: { uid }, }) {
  try {
    const client = createClient({ previewData });
    let page = {};

    // window.console.log('<<<< uid >>>>>', uid)
    try {
      // page = await client.getSingle("page");
      page = await client.getByUID("page", uid);
      // page = await client.getByUID("page", uid);defaultLocale: locales[0],
    } catch (error) {
      page = await client.getByUID("page", uid);
      // page = await client.getByUID("page", uid);
    }
    let menu = {};;
    try {
      menu = await client.getSingle("menutop");
    } catch (error) {
      menu = await client.getSingle("menutop");
    }
    let footer = {};;
    try {
      footer = await client.getSingle("footermenu");
    } catch (error) {
      footer = await client.getSingle("footermenu");
    }

    return {
      props: {
        page: page || null,
        menu,
        footer,
        uid,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        error: JSON.stringify(error),
      },
    };
  }
}



export async function getStaticPaths(context) {
  const client = createClient({ context });
  const pages = await client.getAllByType("page");
  // const pages = await client.getAllByType("page", { lang: "*" });
  const allPages = [...pages];
  // console.log('---allPages----', allPages)

  return {
    paths: allPages
      .map(page => prismicH.asLink(page, linkResolver)),
    fallback: true,
  };
}

export default Page;
