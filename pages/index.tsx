import React, { useRef } from "react";
import { Box, Center } from "@chakra-ui/react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>();
  const contactRef = useRef<HTMLDivElement>();

  const handleScrollToProjectsView = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToContactView = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout
      onScrollIntoProjectsView={handleScrollToProjectsView}
      onScrollIntoContactView={handleScrollToContactView}
    >
      <Center>
        <Box maxW={1200}>
          <Hero />
          <Box h="10vh" />
          <Projects ref={projectsRef} />
          <Box h="10vh" />
          <Contact ref={contactRef} />
        </Box>
      </Center>
    </Layout>
  );
};

export default Home;
