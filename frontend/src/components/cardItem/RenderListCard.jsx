import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import axios from "axios";
//template
import Card from "@/components/cardItem/CardTemplate";

//images
import iphoneImg from "@/assets/images/iphone-product.svg";

// icons
import basketIcon from "@/assets/icons/fa_shopping-basket.svg";

export default function RenderCard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {products.map((product, key) => (
        <Card
          discount={product.discount}
          price={product.price}
          description={product.description}
          key={product.slug}
          images={product.image}
          oldPrice={product.priceOld}
        />
      ))}
    </>
  );
}
