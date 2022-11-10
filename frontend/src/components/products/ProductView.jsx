import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import { useRecoilValue, selector } from "recoil";
import axios from "axios";

import ProductTemplate from "@/components/products/ProductTemplate";

const productsQuery = selector({
  key: "Products", //Должен быть уникальный
  get: async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/products");
      return result.data || [];
    } catch (error) {
      console.log(`Error: ${error}`);
      return [];
    }
  },
});

function ProductRender() {
  // Получение продукт листа из Recoil стейта
  const products = useRecoilValue(productsQuery);
  return (
    <>
      <div className="flex gap-10 mt-[100px] justify-center">
        {products.map((product, key) => (
          <ProductTemplate
            key={key}
            slug={product.slug}
            discount={product.discount}
            price={product.price}
            name={product.name}
            images={product.image}
            oldPrice={product.priceOld}
          />
        ))}
      </div>
    </>
  );
}

export default ProductRender;
