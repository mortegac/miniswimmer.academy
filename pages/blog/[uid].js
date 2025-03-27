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
import Link from 'next/link'
import Image from 'next/image'

import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";
import { asText } from "@prismicio/helpers";

import { generateHtml } from "../../utils/htmlSerializer";

import { createClient } from '../../prismicio'
import { components } from "../../slices/index";

import { LayoutBlog } from "../../components/common/LayoutBlog"
import { Description, Content, Button, ItemsWrapper, Item, Header, Box } from "../../styles/blog/defaultStyles";

export default function BlogPost(props) {
  
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

  if (!page) return <div>Cargando...</div>

  return (
        
        <LayoutBlog
        header={menu || {}}
        footer={footer || {}}
        page={page}
        activeDocMeta={activeDoc}
      >
        
         <Content>          
         <Description>
          {/* <pre style={{width:"300px", color: "red"}}>{JSON.stringify(page.slices, null, 2 )}</pre> */}
          
          <article key={page.id} className="border rounded-lg p-4">
            <Header>
              <div className="imagefull">
              {/* <Image
                    src={page?.data?.image?.url}
                    alt={"Miniswimmer Academy"}
                    width={120}    // Ancho específico
                    height={120}   // Alto específico
                    objectFit="cover"
                  /> */}
                   <Image
                    src={page?.data?.image?.url}
                    alt={"Miniswimmer Academy"}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority
                  /> 
                  
                {/* <Image
                  src={page?.data?.image?.url}
                  alt="Miniswimmer Academy"
                  // width={500} automatically provided
                  // height={500} automatically provided
                  // blurDataURL="data:..." automatically provided
                  // placeholder="blur" // Optional blur-up while loading
                  /> */}
                {/* <img
                  src={page?.data?.image?.url}
                  alt={"item-image"}
                  /> */}
              </div>
            </Header>
            <h2 className="text-2xl font-semibold">
              {page?.data?.title}
            </h2>
            
            <div id="htmlContainer">
              {generateHtml(page?.data?.htmlcontent)}
            </div>
          </article>
          
         {/* <pre style={{width:"300px", color: "red"}}>{JSON.stringify(page?.data?.slices, null, 2 )}</pre> */}
         </Description>
         <SliceZone slices={page?.data?.slices} components={components} />
         </Content>
         
      </LayoutBlog>
 
  )
}


export async function getStaticProps({
  previewData,
  params: { uid }, }) {
  try {
    const client = createClient({ previewData });
    let page = {};

    // window.console.log('<<<< uid >>>>>', uid)
    try {
      // page = await client.getSingle("page");
      page = await client.getByUID("blog", uid);
      // page = await client.getByUID("page", uid);defaultLocale: locales[0],
    } catch (error) {
      page = await client.getByUID("blog", uid);
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



// export async function getStaticPaths(context) {
//   const client = createClient({ context });
//   const pages = await client.getAllByType("page");
//   // const pages = await client.getAllByType("page", { lang: "*" });
//   const allPages = [...pages];
//   // console.log('---allPages----', allPages)

//   return {
//     paths: allPages
//       .map(page => prismicH.asLink(page, linkResolver)),
//     fallback: true,
//   };
// }

export async function getStaticPaths({ previewData }) {
  try {
    const client = createClient({ previewData })
    const posts = await client.getAllByType('blog')
    
    const paths = posts.map((post) => ({
      params: {
        uid: post.uid,
      },
    }))

    console.log('Paths generados:', paths)

    return {
      paths,
      fallback: true
    }
  } catch (error) {
    console.error('Error en getStaticPaths:', error)
    return {
      paths: [],
      fallback: true
    }
  }
}

// export async function getStaticProps({ params }) {
//   try {
//     const client = createClient()
//     const post = await client.getByUID('blog', params.uid)
    
//     if (!post) {
//       return {
//         notFound: true
//       }
//     }

//     let menu = {};;
//     try {
//       menu = await client.getSingle("menutop");
//     } catch (error) {
//       menu = await client.getSingle("menutop");
//     }
//     let footer = {};;
//     try {
//       footer = await client.getSingle("footermenu");
//     } catch (error) {
//       footer = await client.getSingle("footermenu");
//     }
    
//     return {
//       props: {
//         post,
//         menu,
//         footer,
//         uid,
//       },
//       revalidate: 60
//     }
//   } catch (error) {
//     console.error('Error en getStaticProps:', error)
//     return {
//       notFound: true
//     }
//   }
// }

// export default Page;
