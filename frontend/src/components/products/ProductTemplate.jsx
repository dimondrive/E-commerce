import React, { useState, useRef, createRef } from "react";
import axios from "axios";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import IconBasket from "@/assets/icons/icon-basket.svg";
import "@/components/products/card.scss";
import "@/components/products/cardMedia.scss";

//images
import ProductView from "@/components/products/ProductView";
//

export default function Product({
  discount,
  slug,
  id,
  images,
  price,
  oldPrice,
  name,
}) {
  const [allProducts, setAllProducts] = useState([]);

  return (
    <>
      <ul key={slug}>
        <li className="product-container">
          <div className="discount-label">
            <span>{discount}%</span>
          </div>
          <div className="product">
            <Link to={`/product/${slug}`}>
              <img className="product-image" src={images} alt={name} />
            </Link>
            <Link to={`/product/${slug}`}>
              <p
                className="cart-descr
              font-sans text-sm text-left font-medium
              
              "
              >
                {name}
              </p>
            </Link>
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
                duration-100 hover:outline outline-offset outline-2  focus:outline-pink-500/50 hover:outline-pink-500/50 active:bg-red-700/50 active:text-white focus:outline-none 
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
                    src={IconBasket}
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
