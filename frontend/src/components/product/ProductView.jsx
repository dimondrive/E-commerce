import React, { useEffect, useState } from "react";
import ProductTemplate from "@/components/product/ProductTemplate";
import { fetchState } from "@/store/interceptor";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { productState } from "../../store/atoms";
import axios from "axios";
import { Routes, Route, useParams } from "react-router-dom";


import { getProduct } from "../../api";

function ProductRender() {
  const params = useParams();
  const { slug } = params;

  const product = useRecoilValue(productState);

  useEffect(() => {
		getProduct(slug);
  }, [slug]);
	
	if(!product) return (<></>); //Some state for loading
	
  return (
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
  );
}

export default ProductRender;
