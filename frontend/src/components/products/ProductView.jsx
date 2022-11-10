import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import axios from "axios";

import ProductTemplate from "@/components/products/ProductTemplate";

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return { ...state, loading: true };
//     case "FETCH_SUCCESS":
//       return { ...state, products: action.payload, loading: false };
//     case "FETCH_FAIL":
//       return { ...state, loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// function ProductRender() {
//   const [{ loading, error, products }, dispatch] = useReducer(reducer, {
//     products: [],
//     loading: true,
//     error: "",
//   });

// const [products, setProducts] = useState([]);

function ProductRender() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:5000/api/products");
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex gap-10 mt-[100px] justify-center">
        {products.map((product, key) => (
          <ProductTemplate
            key={key}
            slug={product.slug}
            discount={product.discount}
            price={product.price}
            name={product.name}
            images={product.image}
            oldPrice={product.priceOld}
          />
        ))}
      </div>
    </>
  );
}

// useEffect(() => {
//   const fetchData = async () => {
//     dispatch({ type: "FETCH_REQUEST" });
//     try {
//       const result = await axios.get("http://localhost:5000/api/products");
//       dispatch({ type: "FETCH_SUCCESS", payload: result.data });
//     } catch (err) {
//       dispatch({ type: "FETCH_FAIL", payload: err.message });
//     }

//     // setProducts(result.data);
//   };
//   fetchData();
// }, []);

// return (
//   <>
//     <div className="container mx-auto px-4  w-full h-full flex flex-row mt-[100px] gap-10">
//       {products.map((product, key) => (
//         <ProductTemplate
//           key={key}
//           slug={product.slug}
//           discount={product.discount}
//           price={product.price}
//           name={product.name}
//           images={product.image}
//           oldPrice={product.priceOld}
//         />
//       ))}
//     </div>
//   </>
// );

export default ProductRender;
