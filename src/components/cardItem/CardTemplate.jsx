import React, { useState, useRef, createRef } from "react";

import iphoneImg from "@/assets/images/iphone-product.svg";
import "@/components/cardItem/card.scss";
import "@/components/cardItem/cardMedia.scss";

//images
import RenderCard from "@/components/cardItem/RenderListCard";
//

export default function Card({
  discount,
  index,
  images,
  icon,
  price,
  oldPrice,
}) {
  return (
    <>
      <ul>
        <li className="product-container">
          <div className="discount-label">
            <span>-{discount}%</span>
          </div>
          <div className="product">
            <img className="product-image" src={images} alt="" />
            <p className="cart-descr"></p>

            <div className="product-price">
              <p className="price">{price}</p>
              <p className="price-old">{oldPrice}</p>
            </div>
          </div>

          <div className="cart">
            <button className="cart-btn">
              <p className="cart-descr">В корзину</p>
            </button>
            <img className="cart-img" src={icon} alt="" />
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
