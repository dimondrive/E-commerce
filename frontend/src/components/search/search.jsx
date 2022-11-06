import React, { useState, useEffect } from "react";

// import data from "../services/data";
import axios from "axios";

//template

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  return (
    <>
      <div className="flex ">
        <input
          ref={inputRef}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          className=""
          placeholder="Поиск товара.."
        />
        {searchValue && (
          <svg
            onClick={onClickClear}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </div>
    </>
  );
}
