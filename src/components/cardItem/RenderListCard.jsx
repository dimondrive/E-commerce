import React, { useState, useRef, createRef } from "react";
import data from "../services/data";

//template
import Card from "@/components/cardItem/CardTemplate";

//images
import iphoneImg from "@/assets/images/iphone-product.svg";

// icons
import basketIcon from "@/assets/icons/fa_shopping-basket.svg";

export default function RenderCard() {
  return data.products.map((product, key) => (
    <Card
      discount={product.discount}
      price={product.price}
      description={product.description}
      key={product.slug}
      images={product.image}
      oldPrice={product.priceOld}
    />
  ));
}
