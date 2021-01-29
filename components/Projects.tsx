import React, { forwardRef } from "react";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import Project from "./Project";
import { projects } from "../utils/projects";

const Projects = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box as="section" ref={ref}>
      <Heading size="3xl" mb="3rem">
        Projects
      </Heading>
      <SimpleGrid spacing={8}>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Box>
  );
});

export default Projects;
