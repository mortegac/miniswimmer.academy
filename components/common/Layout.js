import Head from "next/head";
import styled from "styled-components";

import { PageContainer } from "../common/Containers";
import { Header as Navbar } from "../common/Header";
import Footer from "../common/footer";
import { linkResolver } from "../../prismicio";
import { getMetaTags } from "../../utils/seo";
/**
 * The default layout for all pages.
 */


export const Body = styled.body`
  background-color:${(props) => props.theme.colors.secondary};
`;

export const Layout = (props) => {
  const { children, header, footer, page, activeDocMeta } = props;

  const title = page?.data?.seotitle || "miniswimmer.academy";
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
        <PageContainer>
          <Navbar
            header={header}
            pagename={page ? (page.uid ? page.uid : page.slugs[0]) : "Home"}
            lang={page.lang || "en-us"}
            activeDocMeta={activeDocMeta}
          />
          {children}
          {/* <pre>footer{JSON.stringify(footer, 2, null)}</pre> */}
          <Footer items={footer} />
        </PageContainer>
      </Body>
    </>
  );
};
