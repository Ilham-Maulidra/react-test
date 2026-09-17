import { Heading, Wrap, Box } from "@chakra-ui/react";
import { ProdukGrid } from "../uikit/ProdukGrid";

function Hijab() {
  return (
    <Box margin="2rem">
      <Heading textAlign="center">Ini halaman hijab</Heading>
      <Wrap gap="2rem" align="center" marginTop="2rem">
        <ProdukGrid category="men's clothing" />
      </Wrap>
    </Box>
  );
}

export { Hijab };
