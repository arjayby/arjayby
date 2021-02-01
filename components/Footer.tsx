import React from "react";
import {
  Box,
  Icon,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedinIn, FaMediumM, FaTwitter } from "react-icons/fa";
import { links } from "../utils/links";

const Footer: React.FC = () => {
  const footerTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box
      as="footer"
      py={{ base: 5, sm: 10 }}
      display="flex"
      justifyContent={{ base: "center", sm: "space-between" }}
      alignItems="center"
      flexWrap="wrap"
    >
      <Text py={2} color={footerTextColor}>
        Arjay Bayona @ arjayby.com
      </Text>
      <Box py={2}>
        <IconButton
          as="a"
          href={links.linkedIn}
          aria-label="LinkedIn"
          variant="ghost"
          icon={<Icon as={FaLinkedinIn} />}
        />
        <IconButton
          as="a"
          href={links.github}
          aria-label="Github"
          variant="ghost"
          icon={<Icon as={FaGithub} />}
        />
        <IconButton
          as="a"
          href={links.medium}
          aria-label="Medium"
          variant="ghost"
          icon={<Icon as={FaMediumM} />}
        />
        <IconButton
          as="a"
          href={links.twitter}
          aria-label="Twitter"
          variant="ghost"
          icon={<Icon as={FaTwitter} />}
        />
      </Box>
    </Box>
  );
};

export default Footer;
