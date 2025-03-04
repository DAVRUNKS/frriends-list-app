import React, { useState, useEffect } from "react";
import { Container, Stack, Text, Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import UserGrid from "./components/UserGrid"; // ✅ Fixed import

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://127.0.0.1:5000/api" : "/api";

function App() {
  const [users, setUsers] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Function to update the clock every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString();
  };

  return (
    <Stack minH={"100vh"}>
      <Navbar setUsers={setUsers} />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50px" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text as={"span"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgClip={"text"}>
            My Besties
          </Text>
          🚀
        </Text>

        <UserGrid users={users} setUsers={setUsers} />
      </Container>

      {/* Footer */}
      <Box as="footer" textAlign="center" py={4} bg="gray.800" color="white">
        <Flex justify="center" align="center" direction="column">
          <Text fontSize="lg" fontWeight="500">
          </Text>
          <Text fontSize="sm" mt={2} color="cyan.400">&copy; {new Date().getFullYear()} @dev</Text>

          {/* Display current time */}
          <Text fontSize="md" mt={2}>
            {formatTime(currentTime)}
          </Text>
        </Flex>
      </Box>
    </Stack>
  );
}

export default App;

