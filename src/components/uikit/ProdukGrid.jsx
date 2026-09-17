import { Grid } from "@chakra-ui/react";
import { Card } from "../ui/Card";
import { useState, useEffect } from "react";
import axios from "axios";

function ProdukGrid({ category }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products?limit=10",
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
    <Grid templateColumns="repeat(4, 1fr)" gap={6} ml="50px" maxW="1200px">
      {data
        .filter((card) => card.category === category)
        .map((card) => (
          <Card
            key={card.id}
            urlImages={card.image}
            title={card.title}
            desc={card.description}
            onClick={() => console.log(card)}
          />
        ))}
    </Grid>
  );
}
export { ProdukGrid };
