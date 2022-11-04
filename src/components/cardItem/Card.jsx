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
  descr: ["Смартфон Samsung Galaxy S21 5G 8GB/128GB"],
};

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

export default function Card() {
  const image = props.images;
  const discount = props.discount;
  const descr = props.descr;

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
        </div>

        {descr.map((item) => (
          <p className="product-descr">{item}</p>
        ))}

        <div>
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
