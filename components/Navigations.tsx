import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { HeaderProps } from "./Header";
import { links } from "../utils/links";

const Navigations: React.FC<HeaderProps> = ({
  onScrollIntoProjectsView,
  onScrollIntoContactView,
}) => {
  const navTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <>
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
    </>
  );
};

export default Navigations;
