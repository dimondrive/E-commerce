import React, { useState, useRef, createRef } from "react";

import "@/components/cardItem/card.scss";
import "@/components/cardItem/cardMedia.scss";

//images
import iphoneImg from "@/assets/images/iphone-product.svg";

export default function Card() {
  //script
  const [discount, setDiscount] = useState(20);
  const images = {
    iphoneImg,
  };

  //template
  return (
    <>
      <ul className="products clearfix">
        <li className="product-container">
          <div className="discount-label">
            <span>-{discount}%</span>
          </div>
          <div className="product">
            <img className="product-image" src={images.iphoneImg} alt="" />
            <p></p>
            <button></button>
          </div>
        </li>
      </ul>
    </>
  );
}
