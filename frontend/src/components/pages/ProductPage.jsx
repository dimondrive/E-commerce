import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductRender from "@/components/product/ProductView";

function ProductPage() {
  return (
    <>
      <h1>Text from product Page</h1>
      <ProductRender />
    </>
  );
}

export default ProductPage;
