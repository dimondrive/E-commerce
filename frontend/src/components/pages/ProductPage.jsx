import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, product: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductPage() {
  const params = useParams();
  const { slug } = params;

  const [{ loading, error, product }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get(
          `http://localhost:5000/api/products/slug/${slug}`
        );
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      {loading ? (
        <div> Загрузка... </div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <>
          <div>
            <img
              className="product-image block m-auto pb-[20px]  align-cetner"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div>{product.images}</div>
        </>
      )}
    </>
  );
}

export default ProductPage;
