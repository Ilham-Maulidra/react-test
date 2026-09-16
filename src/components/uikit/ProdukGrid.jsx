import { Grid } from "@chakra-ui/react";
import { Card } from "../ui/Card";

function ProdukGrid() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={6} ml="50px" maxW="1200px">
      <Card
        urlImages="https://picsum.photos/450/300?grayscale"
        onClick={() => alert("Card clicked!")}
      />
      <Card
        urlImages="https://picsum.photos/seed/picsum/450/300"
        onClick={() => alert("Card clicked!")}
      />
      <Card
        urlImages="https://picsum.photos/450/300"
        onClick={() => alert("Card clicked!")}
      />
      <Card
        urlImages="https://picsum.photos/450/300"
        onClick={() => alert("Card clicked!")}
      />
      <Card
        urlImages="https://picsum.photos/450/300"
        onClick={() => alert("Card clicked!")}
      />
      <Card
        urlImages="https://picsum.photos/450/300"
        onClick={() => alert("Card clicked!")}
      />
    </Grid>
  );
}
export { ProdukGrid };
