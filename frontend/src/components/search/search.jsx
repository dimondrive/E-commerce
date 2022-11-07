import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom/client";
import debounce from "lodash.debounce";
import App from "@/components/App";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");

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
