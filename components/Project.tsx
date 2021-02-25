import React from "react";
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { SiFirebase } from "react-icons/si";
import {
  FaPhoenixFramework,
  FaNodeJs,
  FaReact,
  FaAngleRight,
} from "react-icons/fa";
import { ProjectType } from "../types/project";
import AnimateEaseInView from "./AnimateEaseInView";

interface ProjectProps {
  index?: number;
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({
  index = 0,
  project: { title, role, technologies, screenshots, year, siteUrl },
}) => {
  const getTechIcon = (tech: string) => {
    switch (tech) {
      case "react":
      case "react-native":
        return FaReact;
      case "phoenix":
        return FaPhoenixFramework;
      case "firebase":
        return SiFirebase;
      case "nodejs":
        return FaNodeJs;
      default:
        null;
        break;
    }
  };

  return (
    <AnimateEaseInView duration={1.2} x={index % 2 === 0 ? -60 : 60}>
      <Box
        h={{ base: 600, md: 380 }}
        pos="relative"
        overflow="hidden"
        borderRadius={3}
        boxShadow="0 4px 17px rgb(0 0 0 / 18%)"
      >
        <Flex h="100%" wrap={{ base: "wrap", md: "nowrap" }}>
          <Box maxW={380} p={{ base: 8, md: 14 }} flex={1}>
            <Flex h="100%" direction="column" justify="space-between">
              <Box>
                <Text>{year}</Text>
                <Text fontSize="3xl" fontWeight="700">
                  {title}
                </Text>
                <Text mt={5}>{role}</Text>
              </Box>
              <Flex
                mt={8}
                direction={{ base: "column", sm: "row" }}
                justify="space-between"
              >
                <Flex>
                  {technologies.map(({ id, title }, i) => {
                    const icon = getTechIcon(id);
                    return icon ? (
                      <Box key={id} mr={i !== technologies.length ? 3 : 0}>
                        <Tooltip
                          label={title}
                          aria-label={`Tooltip - ${title}`}
                        >
                          <span>
                            <Icon as={icon} boxSize="2.5em" />
                          </span>
                        </Tooltip>
                      </Box>
                    ) : null;
                  })}
                </Flex>
                <Button
                  as="a"
                  href={siteUrl}
                  rel="noopener"
                  mt={{ base: 8, sm: 0 }}
                  ml={{ sm: 14 }}
                  colorScheme="yellow"
                  rightIcon={<Icon as={FaAngleRight} mb="1px" />}
                >
                  Explore
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box
            as="a"
            href={siteUrl}
            target="_blank"
            rel="noopener"
            borderRadius={3}
            boxShadow="0 3.32378px 20.6857px rgb(0 0 0 / 20%)"
            cursor="pointer"
            transition="all .2s ease-in-out"
            _hover={{
              transform: "scale(1.01)",
              filter: "unset",
            }}
            filter="grayscale(75%)"
          >
            <Image alt={title} src={screenshots[0]} ignoreFallback />
          </Box>
        </Flex>
      </Box>
    </AnimateEaseInView>
  );
};

export default Project;
