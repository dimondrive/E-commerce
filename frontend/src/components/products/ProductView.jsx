import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import { useRecoilValue, selector, useRecoilState } from "recoil";
import axios from "axios";

import ProductTemplate from "@/components/products/ProductTemplate";
import { productsState } from "../../store/atoms";

function ProductRender() {
  const [products, setProducts] = useRecoilState(productsState);
  const requireProducts = () => {
    axios
      .get("http://localhost:5000/api/products")
      .then((result) => result.data)
      .then((result) => {
        setProducts((products) => result);
      });
  };

  useEffect(() => {
    requireProducts();
  }, []);
  console.log("Products", products);

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
