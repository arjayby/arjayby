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
    <Center
      as="article"
      minH={{
        base: "calc(100vh - (200px + 1rem))",
        sm: "calc(100vh - (280px + 1rem))",
      }}
      mb="calc(140px + 1rem)"
    >
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
            mb={{ base: 5, md: 10 }}
          >
            a software engineer.
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
          mt={{ base: 10, lg: 0 }}
          ml={{ lg: 10 }}
          display="flex"
          flexDirection="column"
          fontSize="2xl"
          fontWeight={400}
        >
          <Text mb={5}>
            Specialized in building astounding websites and applications. I have
            both worked from startup clients to medium enterprise with 2+ years
            of experience.
          </Text>
          <Box display="flex" flexWrap="wrap">
            <Text>Experienced in&nbsp;</Text>
            <Text fontSize="1.5rem" fontWeight={700}>
              React
            </Text>
            <Text>,&nbsp;</Text>
            <Text fontSize="1.5rem" fontWeight={700}>
              Node.js&nbsp;
            </Text>
            <Text>and&nbsp;</Text>
            <Text fontSize="1.5rem" fontWeight={700}>
              Phoenix Elixir.
            </Text>
          </Box>
        </Box>
      </Grid>
    </Center>
  );
};

export default Hero;
