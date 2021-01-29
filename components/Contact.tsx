import React, { forwardRef } from "react";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

const Contact = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Center as="section" ref={ref} minH="75vh" justifyContent="flex-start">
      <Box>
        <Heading size="3xl" mb="3rem">
          Contact
        </Heading>
        <Text>
          My inbox is always open 😉. Whether you have a question or just want
          to say hi, I will try my best to get back to you!
        </Text>
        <Button
          mt="2rem"
          as="a"
          href="mailto:arjayby1@gmail.com"
          colorScheme="yellow"
        >
          Get in touch
        </Button>
      </Box>
    </Center>
  );
});

export default Contact;
