import Head from "next/head";
import { PrismicLink } from "@prismicio/react";

const NotFoundPage = (props) => {

  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div style={{ padding: 120 }}>
        <h1 style={{ fontFamily: "Quicksand,sans-serif" }}>Page Not Found</h1>
        <p>
          <PrismicLink href="/">Go to the homepage &rarr;</PrismicLink>
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
