import { VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <VStack bg="gray.300" height="90vh" width="150px" p="1rem">
      <Link to="produk/hijab">
        <Text fontSize="lg" fontWeight="bold">
          Hijab
        </Text>
      </Link>
      <Link to="produk/blouse">
        <Text fontSize="lg" fontWeight="bold">
          Blouse
        </Text>
      </Link>
      <Link to="produk/rok">
        <Text fontSize="lg" fontWeight="bold">
          Rok
        </Text>
      </Link>
    </VStack>
  );
}
export { Sidebar };
