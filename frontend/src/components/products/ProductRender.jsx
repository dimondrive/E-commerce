import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import axios from "axios";
//template
import ProductTemplate from "@/components/products/ProductTemplate";

export default function ProductRender() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4  w-full h-full flex flex-row mt-[100px] gap-10">
        {products.map((product, key) => (
          <ProductTemplate
            discount={product.discount}
            price={product.price}
            description={product.description}
            key={product.slug}
            images={product.image}
            oldPrice={product.priceOld}
          />
        ))}
      </div>
    </>
  );
}
