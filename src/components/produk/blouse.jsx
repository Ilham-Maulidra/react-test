import { Heading, Wrap, Box } from "@chakra-ui/react";
import { ProdukGrid } from "../uikit/ProdukGrid";

function Blouse() {
  return (
    <Box margin="2rem">
      <Heading textAlign="center">Ini halaman blouse</Heading>
      <Wrap gap="2rem" align="center" marginTop="2rem">
        <ProdukGrid category="jewelery" />
      </Wrap>
    </Box>
  );
}

export { Blouse };
