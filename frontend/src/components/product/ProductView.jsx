import React, { useEffect, useState } from "react";
import ProductTemplate from "@/components/product/ProductTemplate";
import { fetchState } from "@/store/interceptor";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

function ProductRender() {
  useEffect(() => {
    fetchState();
  }, []);
  return (
    <>
      <div className="flex gap-10 mt-[100px] justify-center">{}</div>
    </>
  );
}

export default ProductRender;
