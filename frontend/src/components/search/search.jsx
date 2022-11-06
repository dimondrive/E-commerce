import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import debounce from "lodash.debounce";

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
      <div className="flex ">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={onChangeInput}
          type="text"
          placeholder="Поиск товара.."
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </>
  );
}
