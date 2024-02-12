import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'
import Head from 'next/head'
import Link from "next/link";
import { PrismicProvider } from "@prismicio/react";
import { PrismicPreview } from "@prismicio/next";
import { ThemeProvider } from "styled-components";

import { repositoryName, linkResolver } from "../prismicio";
import { GlobalStyle, Theme } from "../components/styles";
import * as gtag from '../utils/gtag'

const internalLinkComponent = ({ href, children, ...props }) => (
  <Link href={href}>
    <a {...props}>{children}</a>
  </Link>
);

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Quicksand:wght@300;600&display=swap" rel="stylesheet"></link>

        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
        page_path: window.location.pathname,
        });
        `,
          }}
        />
      </Head>
      <PrismicProvider
        linkResolver={linkResolver}
        internalLinkComponent={internalLinkComponent}
      >
        <PrismicPreview repositoryName={repositoryName}>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />

          <ThemeProvider theme={Theme}>
            <GlobalStyle theme={Theme} />
            <Component {...pageProps} />
          </ThemeProvider>
        </PrismicPreview>

      </PrismicProvider>
    </>
  );
}
