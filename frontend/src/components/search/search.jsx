import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import debounce from "lodash.debounce";
import { fetchState } from "../../store/interceptor";
// import { productSearch } from "../../store/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { atom } from "recoil";
import { selector } from "recoil";
import axios from "axios";

const requireProducts = async () => {
  await axios
    .get("http://localhost:5000/api/products")
    .then((result) => result.data)
    .then((result) => {});
};

const productSearch = atom({
  key: "Prod",
  default: "",
});

export const searchProductSelector = selector({
  key: "searchSelector",
  get: async ({ get }) => {
    const products = get(productSearch);

    console.log(requireProducts(products));
    return requireProducts(products);
  },
});

// useEffect(() => {
//   requireProducts(products);
// }, []);

export default function Search() {
  const [searchValue, setSearchValue] = useRecoilState(productSearch);

  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="sm:flex hidden   max-w-xs lg:w-80 items-center">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={onChangeInput}
          placeholder="Поиск товаров.."
          type="text"
          className="flex p-2 pl-4 w-full text-gray-900 bg-gray-50  rounded-l-lg  border border-gray-300 placeholder:italic placeholder:text-slate-400 placeholder:text-[15px] text-xs font-medium text-sans focus:outline-none focus:border-gray-500/50 "
        />

        {searchValue && (
          <div className="h-[42px] ">
            <svg
              onClick={onClickClear}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-full p-2 border bg-white  border-gray-300  rounded-r-lg hover:text-gray-500 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
    </>
  );
}
