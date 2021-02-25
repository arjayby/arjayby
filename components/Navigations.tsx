import React from "react";
import { Button, Grid, useColorModeValue } from "@chakra-ui/react";
import { HeaderProps } from "./Header";
import { links } from "../utils/links";
import AnimateEaseInView from "./AnimateEaseInView";

const Navigations: React.FC<HeaderProps> = ({
  onScrollIntoProjectsView,
  onScrollIntoContactView,
}) => {
  const navTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <AnimateEaseInView duration={0.3} x={60}>
      <Grid templateColumns="1fr 1fr auto" gap={5}>
        <Button
          variant="ghost"
          color={navTextColor}
          onClick={onScrollIntoProjectsView}
        >
          Recent work
        </Button>
        <Button
          variant="ghost"
          color={navTextColor}
          onClick={onScrollIntoContactView}
        >
          Get in touch
        </Button>
        <Button
          pl={4}
          pr={4}
          as="a"
          href={links.medium}
          variant="ghost"
          color={navTextColor}
        >
          Blog
        </Button>
      </Grid>
    </AnimateEaseInView>
  );
};

export default Navigations;
