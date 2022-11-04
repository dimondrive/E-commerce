import React, { useState, useRef, createRef } from "react";

import "@/components/cardItem/card.scss";
import "@/components/cardItem/cardMedia.scss";

//images
import iphoneImg from "@/assets/images/iphone-product.svg";
//

const props = {
  //simulation props
  discount: [20],
  images: [iphoneImg],
};

export default function Card() {
  function DiscountLabel(props) {
    return (
      <div className="discount-label">
        <span>-{props.value}%</span>
      </div>
    );
  }

  function ProductImage(props) {
    return <img className="product-image" src={props.value} alt="" />;
  }

  const image = props.images;
  const discount = props.discount;

  return (
    <>
      <li className="product-container">
        {discount.map((number) => (
          <DiscountLabel key={number.toString()} value={number} />
        ))}
        <div className="product">
          {image.map((item) => (
            <ProductImage key={item.toString()} value={item} />
          ))}
          <p></p>
          <button></button>
        </div>
      </li>
    </>
  );
}

//   <li className="product-container">
//   <div className="discount-label">
//     <span>-{discount}%</span>
//   </div>
//   <div className="product">
//     <img className="product-image" src={images.iphoneImg} alt="" />
//     <p></p>
//     <button></button>
//   </div>
// </li>
