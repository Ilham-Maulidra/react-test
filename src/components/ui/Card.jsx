import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "./Button/Button";

function Card({ urlImages, onClick, title, desc }) {
  return (
    <Box
      bg="white"
      boxShadow="md"
      rounded="lg"
      p="1rem"
      height="100%"
      width="15rem"
    >
      <img src={urlImages} alt="Product Image" width={80} height={100} />
      <Heading fontSize={10}>{title}</Heading>
      <Text>{desc.length > 20 ? desc.slice(0, 20) + "..." : desc}</Text>
      <Button label="Buy Now" variant="secondary" onClick={onClick} />
    </Box>
  );
}
export { Card };
