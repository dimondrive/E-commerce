import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import ProductsTemplate from "@/components/products/ProductsTemplate";
import { productsState } from "../../store/atoms";

import { getProducts } from "../../api";

function ProductRender() {
  const products = useRecoilValue(productsState);

  useEffect(() => {
    getProducts();
  }, []);
  console.log("Products", products);

  return (
    <>
      <div className="flex gap-10 mt-[100px] justify-center">
        {products.map((product, key) => (
          <ProductsTemplate
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
