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
  description = "Arjay Bayona is a software engineer specialized in building astounding websites and applications.",
  onScrollIntoProjectsView,
  onScrollIntoContactView,
  children,
}) => {
  return (
    <Box
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
        <meta
          name="keywords"
          content="Arjay Bayona, Software Engineer, Web Developer, React, Node, Javascript, Phoenix Framework, Elixir"
        />

        {/* <!-- Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="⚡ Arjay Bayona" />
        <meta
          name="twitter:description"
          content="Arjay Bayona is a software engineer specialized in building astounding websites and applications."
        />
        <meta name="twitter:site" content="@arjayby" />
        <meta name="twitter:creator" content="@arjayby" />
        <meta
          name="twitter:image"
          content="https://repository-images.githubusercontent.com/332572184/f7061680-775c-11eb-917f-913ba9c023b9"
        />

        {/* <!-- Open Graph general (Facebook, Pinterest)--> */}
        <meta property="og:title" content="⚡ Arjay Bayona" />
        <meta
          property="og:description"
          content="Arjay Bayona is a software engineer specialized in building astounding websites and applications."
        />
        <meta property="og:url" content="https://arjayby.com" />
        <meta property="og:site_name" content="arjayby.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/332572184/f7061680-775c-11eb-917f-913ba9c023b9"
        />
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
