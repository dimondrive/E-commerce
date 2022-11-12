import React, { useEffect, useState } from "react";
import ProductTemplate from "@/components/product/ProductTemplate";
import { fetchState } from "@/store/interceptor";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { productState } from "../../store/atoms";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";

function ProductRender() {
  const params = useParams();
  const { slug } = params;

  const [product, setProduct] = useRecoilState(productState);

  useEffect(() => {
    console.log("useEffect mounts");
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`http://localhost:5000/api/products/slug/${slug}`, {
        cancelToken: cancelToken.token,
      })
      .then((result) => result.data)
      .then((result) => {
        console.log(result);

        setProduct(result);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("cancelled");
        } else {
          //hande error
        }
      });
    fetchState();

    return () => {
      console.log("useEffect unmounts");
      cancelToken.cancel();
    };
  }, [slug]);
  return (
    <>
      <div className="flex gap-10 mt-[100px] justify-center">
        <ProductTemplate
          slug={product.slug}
          discount={product.discount}
          price={product.price}
          name={product.name}
          image={product.image}
          oldPrice={product.priceOld}
        />
      </div>
    </>
  );
}

export default ProductRender;
