import React from "react";
import { Box } from "@chakra-ui/react";

import Head from "next/head";
import Header, { HeaderProps } from "../components/Header";
import Footer from "../components/Footer";

interface LayoutProps {
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps & HeaderProps> = ({
  title = "Arjay Bayona",
  description = "Arjay Bayona | Web Developer | Portfolio",
  onScrollIntoProjectsView,
  onScrollIntoContactView,
  children,
}) => {
  return (
    <Box
      minW={280}
      h="100vh"
      px={{ base: "2rem", lg: "4rem" }}
      display="grid"
      gridTemplateRows="auto 1fr auto"
    >
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{title}</title>
        <meta name="author" content="Arjay Bayona" />
        <meta name="description" content={description} />
        <meta name="keywords" content="arjayby, portfolio" />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="⚡ Arjay Bayona" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@arjayby" />
        <meta name="twitter:creator" content="@arjayby" />
        <meta name="twitter:image" content="" />

        {/* <!-- Open Graph general (Facebook, Pinterest)--> */}
        <meta property="og:title" content="⚡ Arjay Bayona" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://arjayby.com" />
        <meta property="og:site_name" content="arjayby.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
      </Head>
      <Header
        onScrollIntoProjectsView={onScrollIntoProjectsView}
        onScrollIntoContactView={onScrollIntoContactView}
      />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
