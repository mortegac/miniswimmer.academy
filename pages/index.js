import React from "react";
import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import { motion } from 'framer-motion'

import { createClient } from "../prismicio";
import { asText } from "@prismicio/helpers";
import { components } from "../slices/index";
import { Layout } from "../components/common/Layout";


const Home = (props) => {
  if (props.error) {
    return <>{console.error(props, "index")}</>;
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
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Layout
        header={menu || {}}
        footer={footer || {}}
        page={page}
        activeDocMeta={activeDoc}
      >
        <SliceZone slices={page?.data?.slices} components={components} />
      </Layout>
    </motion.div>
  );
};

export async function getStaticProps({ previewData }) {
  try {
    const client = createClient({ previewData });
    let page;
    try {
      page = await client.getSingle("homepage");
    } catch (error) {
      page = await client.getSingle("homepage");
    }
    let menu;
    try {
      menu = await client.getSingle("menutop");
    } catch (error) {
      menu = await client.getSingle("menutop");
    }

    let footer;
    try {
      footer = await client.getSingle("footermenu");
    } catch (error) {
      footer = await client.getSingle("footermenu");
    }

    return {
      props: {
        page,
        menu,
        footer
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

export default Home;
