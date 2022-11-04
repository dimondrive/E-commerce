import React, { useState, useRef, createRef } from "react";

import Card from "@/components/cardItem/Card";

export default function RenderCard() {
  const data = [
    {
      discount: "20",
      description: "Смартфон Samsung Galaxy S21 5G 8GB/128GB",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <Card
          discount={item.discount}
          description={item.description}
          key={index}
        />
      ))}
    </>
  );
}
