import { Image, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Box
      as="header"
      position="relative"
      top="0"
      display="flex"
      alignItems="center"
      p="1rem"
      bg="gray.300"
    >
      <Link to="/">
        <Image src="/Logo.png" alt="Logo" w={150} ml={10} />
      </Link>

      <Flex
        position="absolute"
        left="50%"
        transform="translateX(-50%)"
        gap="5rem"
        align="center"
      >
        <Box fontSize="1.2rem" fontWeight="bold">
          <Link to="/">Home</Link>
        </Box>
        <Box fontSize="1.2rem" fontWeight="bold">
          <Link to="/about">About</Link>
        </Box>
        <Box fontSize="1.2rem" fontWeight="bold">
          <Link to="/contact">Contact</Link>
        </Box>
      </Flex>
    </Box>
  );
}

export { Header };
