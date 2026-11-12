import { SimpleGrid } from "@chakra-ui/react";
import { Card } from "../ui/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function ProdukGrid({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/product/get-all",
        );
        const jsonData = res.data;
        setData(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <SimpleGrid columns={{ base:1, sm: 2, md: 3, lg: 4}} gap={6} p={6}>
      {data.map((card) => (
          <Card
            key={card.id}
            urlImages={card.image_url}
            name={card.name}
            stock={card.stock}
            price={card.price}
            description={card.description}
            onClick={() => console.log(card)}
          />
        ))}
    </SimpleGrid>
  );
}
export { ProdukGrid };
