import { Box, Heading, Text, Stack, Badge, Image, Button } from "@chakra-ui/react";
// import { Button } from "./Button/Button";

const BASE_URL = "http://localhost:8080"

function Card({ urlImages, onClick, name, description, price, stock }) {
  const desc = description ?? ""
  const shortDesc = desc.length > 60 ? desc.Slice(0, 60) + "..." : desc
  const inStock = Number(stock) > 0

  return (
    <Box
      bg="white"
      rounded="xl"
      overflow="hidden"
      shadow="md"
      transition="all 0.2s"
      _hover={{ shadow: "xl", transform: "TranslateY(-4px)"}}
      display="flex"
      flexDirection="column"
      h="100%"
    >
      <Box position="relative" bg="gray.100" h="200px" w="100%" overflow="hidden">
        <Image src={`${BASE_URL}${urlImages}`} alt="name" w="100%" h="100%" objectFit="contain" bg="gray.100"/>
        <Badge position="absolute" top={3} right={3} colorPalette={inStock ? "green" : "red"} variant="solid">
          {inStock ? `Stok ${stock}` : "Habis"}
        </Badge>
      </Box>
      <Stack p={4} gap={2} flex="1">
        <Heading size="sm" color="gray.800" lineClamp={2}>
          {name}
        </Heading>
        <Text fontSize="lg" fontWeight="bold" color="blue.600">
          Rp {Number(price).toLocaleString("id-ID")}
        </Text>
        <Text fontSize="sm" color="gray.600" flex={1}>
          {shortDesc || "Tidak ada deskripsi"}
        </Text>
        <Button size="sm" onClick={onClick} disabled={!inStock} mt={2} bg="blue.300" color="white" _hover={{bg: "blue.700"}} w="100%">
          {inStock ? "Beli Sekarang" : "Stock Habis"}
        </Button>
      </Stack>
    </Box>
  );
}
export { Card };
