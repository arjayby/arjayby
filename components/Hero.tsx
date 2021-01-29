import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Grid,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const Hero: React.FC = () => {
  const navTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Center as="article" minH="75vh">
      <Grid templateColumns={{ lg: "auto auto 1fr", xl: "auto 1fr auto" }}>
        <Box as="section" mr={{ lg: 8 }}>
          <Heading as="h1" size="lg" mb={5}>
            Hi, 👋!
          </Heading>
          <Heading as="h1" size="3xl" mb={3}>
            I'm Arjay Bayona,
          </Heading>
          <Heading
            as="h1"
            size="xl"
            color={navTextColor}
            fontWeight={600}
            mb={10}
          >
            a web developer.
          </Heading>
          <Button
            as="a"
            href="mailto:arjayby1@gmail.com"
            colorScheme="yellow"
            size="lg"
          >
            Say Hello
          </Button>
        </Box>

        <Divider orientation="vertical" />

        <Box
          as="section"
          mt={{ base: 8, lg: 0 }}
          ml={{ lg: 10 }}
          display="flex"
          flexWrap="wrap"
          alignItems="flex-end"
          fontSize="2xl"
          fontWeight={400}
        >
          <Text mb={5}>
            I'm a full stack web developer based in Iloilo, PH. Working with
            various start-up companies for over 2 years.
          </Text>
          Experienced in&nbsp;
          <Text fontSize="1.5rem" fontWeight={700}>
            React JS
          </Text>
          ,&nbsp;
          <Text fontSize="1.5rem" fontWeight={700}>
            Node JS
          </Text>
          &nbsp;and&nbsp;
          <Text fontSize="1.5rem" fontWeight={700}>
            Phoenix Elixir.
          </Text>
        </Box>
      </Grid>
    </Center>
  );
};

export default Hero;
