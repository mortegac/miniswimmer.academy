import Head from "next/head";
import styled from "styled-components";

import { PageContainer, SectionContainer, SliceContainer, Slice } from "./Containers";
import { Header as Navbar } from "./Header";
import Footer from "./footer";
import { linkResolver } from "../../prismicio";
import { getMetaTags } from "../../utils/seo";
/**
 * The default layout for all pages.
 */


export const Body = styled.body`
  background-color:${(props) => props.theme.colors.secondary};
`;

export const LayoutBlog = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;

  const title = page?.data?.seoTitle || "miniswimmer.academy";
  const description = page?.data?.seodescription || "-";

  return (
    <>
 
      
      
      <Head>
      <title>{title}</title>
        
        <link
          rel="canonical"
          href={`${activeDocMeta.sitename}${linkResolver(page)}`}
        />
        {getMetaTags(
          {
            description,
            title,
          }
        )}
      </Head>
      <Body>
          {/* <pre>{JSON.stringify(page, null, 2)}</pre> */}
        <PageContainer>
          <Navbar
            header={header}
            pagename={page ? (page?.uid ? page?.uid : page?.slugs) : "Home"}
            lang={page?.lang || "en-us"}
            activeDocMeta={activeDocMeta}
          />
          
          
          <SectionContainer>
        <SliceContainer>
          {/* <Slice> */}
            {children}
            
          {/* </Slice> */}
        </SliceContainer>
      </SectionContainer>
          {/* <pre>footer{JSON.stringify(footer, 2, null)}</pre> */}
          <Footer items={footer} />
        </PageContainer>
      </Body>
    </>
  );
};
