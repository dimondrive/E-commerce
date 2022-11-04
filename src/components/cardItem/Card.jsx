import React, { useState, useRef, createRef } from "react";

import "@/components/cardItem/card.scss";
import "@/components/cardItem/cardMedia.scss";

//images
import iphoneImg from "@/assets/images/iphone-product.svg";
//

const props = {
  //simulation props
  discount: [20],
  images: iphoneImg,
};

export default function Card() {
  function DiscountLabel(props) {
    return (
      <div className="discount-label">
        <span>-{props.value}%</span>
      </div>
    );
  }

  const discount = props.discount;
  const discountItem = discount.map((number) => (
    <DiscountLabel key={number.toString()} value={number} />
  ));

  return (
    <>
      <li className="product-container">{discountItem}</li>
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
