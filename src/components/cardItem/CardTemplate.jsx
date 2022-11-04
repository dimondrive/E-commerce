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
  description,
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
            <p
              className="cart-descr
             font-sans text-sm text-left font-medium
             
             "
            >
              {description}
            </p>
          </div>

          <div className="flex items-end pb-4">
            <div
              className="product-price
              flex flex-col  w-[100%] pt-2"
            >
              <p
                className="price font-sans font-semibold text-sm

            "
              >
                {price}.00 BYN
              </p>
              <p
                className="price-old font-sans font-light  text-sm
            
            "
              >
                {oldPrice}
              </p>
            </div>

            <div
              className="cart flex
          w-full justify-end h-full 
          "
            >
              <div className="flex  w-[100px] h-[25px] ">
                <button
                  className="cart-btn flex items-center  justify-between p-2
                border rounded-full border-rose-600/50 hover:border-rose-600 bg-white 
                hover:outline outline-offset outline-2 outline-pink-500/50
               "
                >
                  <p
                    className="cart-descr text-[10px] font-sans font-semibold

                    "
                  >
                    В корзину
                  </p>
                  <img
                    className="cart-img w-[12px]

                    "
                    src={icon}
                    alt=""
                  />
                </button>
              </div>
            </div>
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
