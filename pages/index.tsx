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
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </Box>
      </Center>
    </Layout>
  );
};

export default Home;
