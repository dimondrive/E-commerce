import React, { useState, useRef, createRef } from "react";

import "@/components/cardItem/card.scss";
import "@/components/cardItem/cardMedia.scss";

//images
import RenderCard from "@/components/cardItem/RenderListCard";
//

export default function Card({ discount }) {
  return (
    <>
      <ul>
        <li className="product-container">
          <div className="discount-label">
            <span>-{discount}%</span>
          </div>
        </li>
      </ul>
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

/* <div>
<div className="product-price">
  <p className="price"></p>
  <p className="price-old"></p>
</div>

<div className="cart">
  <button className="cart-btn">
    <p className="cart-descr">В корзину</p>
  </button>
  <img className="cart-img" src="" alt="" />
</div>
</div> */
