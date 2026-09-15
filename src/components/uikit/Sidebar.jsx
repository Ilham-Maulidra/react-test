import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Box bg="gray.300" height="100vh" width="200px" p="1rem">
      <Link to="/produk/hijab">Hijab</Link>
      <Link to="/produk/blouse">Blouse</Link>
      <Link to="/produk/rok">Rok</Link>
    </Box>
  );
}
export { Sidebar };
