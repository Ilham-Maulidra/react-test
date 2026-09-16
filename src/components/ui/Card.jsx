import { Box, Heading, Text } from "@chakra-ui/react";
import { Button } from "./Button/Button";

function Card({ urlImages, onClick }) {
  return (
    <Box
      bg="white"
      boxShadow="md"
      rounded="lg"
      p="1rem"
      height="100%"
      width="15rem"
    >
      <img src={urlImages} alt="Product Image" />
      <Heading>Nama Produk</Heading>
      <Text>Description</Text>
      <Button label="Buy Now" variant="secondary" onClick={onClick} />
    </Box>
  );
}
export { Card };
