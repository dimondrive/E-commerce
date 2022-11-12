import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import { useRecoilValue, useRecoilState } from "recoil";

import ProductsView from "@/components/products/ProductsView";
import { productsState } from "../../store/atoms";

function ProductsPage() {
  return (
    <>
      <ProductsView />
    </>
  );
}

export default ProductsPage;
