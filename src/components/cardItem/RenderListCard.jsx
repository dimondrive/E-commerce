import React, { useState, useRef, createRef } from "react";

//template
import Card from "@/components/cardItem/CardTemplate";

//images
import iphoneImg from "@/assets/images/iphone-product.svg";

// icons
import basketIcon from "@/assets/icons/fa_shopping-basket.svg";

export default function RenderCard() {
  const data = [
    {
      discount: "20",
      description: "Смартфон Samsung Galaxy S21 5G 8GB/128GB",
      images: iphoneImg,
      icon: basketIcon,
      price: "2099",
      priceOld: "2499",
    },
    {
      discount: "30",
      description: "Смартфон Samsung Galaxy S21 5G 8GB/128GB",
      images: iphoneImg,
      icon: basketIcon,
      price: "2099",
      priceOld: "2499",
    },
  ];
  return data.map((item, key) => (
    <Card
      discount={item.discount}
      price={item.price}
      description={item.description}
      key={key}
      images={item.images}
      icon={item.icon}
      oldPrice={item.priceOld}
    />
  ));
}
