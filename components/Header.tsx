import React, { useRef } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Grid,
  Icon,
  IconButton,
  Image,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny, IoMdMenu } from "react-icons/io";
import Navigations from "./Navigations";
import AnimateEaseInView from "./AnimateEaseInView";

export interface HeaderProps {
  onScrollIntoProjectsView?: () => void;
  onScrollIntoContactView?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onScrollIntoProjectsView,
  onScrollIntoContactView,
}) => {
  const navTextColor = useColorModeValue("gray.600", "gray.400");
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const drawerRef = useRef();

  const isDarkMode = colorMode === "dark";

  return (
    <Flex
      as="header"
      h={{ base: "100px", sm: "140px" }}
      mb={4}
      justify="space-between"
      align="center"
    >
      <Box as="a" href="/" cursor="pointer">
        <AnimateEaseInView duration={0.3}>
          <Image
            alt="arjayby"
            src={
              isDarkMode
                ? "/images/logo-monochrome-white.svg"
                : "/images/logo-monochrome-black.svg"
            }
            height="60px"
            width="150px"
            ignoreFallback
          />
        </AnimateEaseInView>
      </Box>
      <Flex as="nav" display={{ base: "none", lg: "flex" }} align="center">
        <AnimateEaseInView duration={0.3} x={30}>
          <Grid templateColumns="1fr 1fr auto" gap={5}>
            <Navigations
              onScrollIntoProjectsView={onScrollIntoProjectsView}
              onScrollIntoContactView={onScrollIntoContactView}
            />
          </Grid>
        </AnimateEaseInView>
        <AnimateEaseInView duration={0.3}>
          <IconButton
            ml={20}
            aria-label="Toggle theme"
            variant="ghost"
            onClick={toggleColorMode}
            icon={isDarkMode ? <Icon as={IoMdSunny} /> : <Icon as={IoMdMoon} />}
          />
        </AnimateEaseInView>
      </Flex>
      <Box as="nav" display={{ base: "unset", lg: "none" }}>
        <AnimateEaseInView duration={0.3}>
          <IconButton
            ref={drawerRef}
            aria-label="Navigation menu"
            size="lg"
            variant="ghost"
            icon={<Icon as={IoMdMenu} />}
            onClick={onOpen}
          />
        </AnimateEaseInView>
        <Drawer
          finalFocusRef={drawerRef}
          isOpen={isOpen}
          onClose={onClose}
          placement="top"
          trapFocus={false}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerBody>
                <Flex direction="column">
                  <Navigations
                    onScrollIntoProjectsView={() => {
                      onScrollIntoProjectsView();
                      onClose();
                    }}
                    onScrollIntoContactView={() => {
                      onScrollIntoContactView();
                      onClose();
                    }}
                  />
                  <Divider />
                  <Button
                    variant="ghost"
                    color={navTextColor}
                    onClick={toggleColorMode}
                  >
                    {isDarkMode ? "Light mode" : "Bravo six, going dark 🕶"}
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Box>
    </Flex>
  );
};

export default Header;
