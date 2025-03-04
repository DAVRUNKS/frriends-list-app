import React from "react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModal from "../components/CreateUserModal";
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

const Navbar = ({ setUsers }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  // Set dynamic text color based on color mode (light/dark)
  const textColor = useColorModeValue("black", "white"); // Black for light mode, white for dark mode

  return (
    <Container maxW="100%" px={0} position="relative">
      <Box
        px={4}
        my={0}
        borderRadius={0}
        bg={useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(0, 0, 0, 0.8)")} // Slightly visible background
        position="fixed" // Fixed navbar at the top
        top={0} // Align at the top
        left={0} // Align at the left
        width="100%" // Full width
        zIndex={999} // Keep it on top
        backdropFilter="blur(5px)" // Optional: Adds blur effect to the background
        boxShadow="md" // Add shadow for better visibility
      >
        <Flex
          h="16" // Adjust the height of the navbar
          alignItems="center"
          justifyContent="space-between"
          px={{ base: 4, md: 8 }} // Padding for mobile and desktop
          direction={{ base: "column", md: "row" }} // Stack items on mobile, row on desktop
        >
          {/* Left side with 'MIGOS' */}
          <Flex
            alignItems="center"
            gap={3}
            justifyContent="center" // Center the text on mobile, left on desktop
            flex={1} // Take up space on the left side
          >
            <Text
              fontSize={{ base: "md", md: "lg" }} // Responsive font size
              fontWeight={500}
              color={textColor} // Apply dynamic color based on color mode
              justifyContent="flex-start"
              padding={""}
              fontFamily={"sans"}
            >
              MIGOS
            </Text>
          </Flex>

          {/* Right side with icons and modal */}
          <Flex
            alignItems="center"
            gap={3}
            justifyContent="flex-end" // Align items to the right
            flex={1} // Take up space on the right side
          >
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
            <CreateUserModal setUsers={setUsers} />
          </Flex>
        </Flex>
      </Box>
      <br />
      <br />
    </Container>
  );
};

export default Navbar;
