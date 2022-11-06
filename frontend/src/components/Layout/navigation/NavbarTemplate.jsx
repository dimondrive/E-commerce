import React from "react";
import ReactDOM from "react-dom/client";

import IconLogo from "@/assets/icons/icon-logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="w-full h-[103px] bg-gray-300/50">
        <div className="container h-full mx-auto px-4">
          <div className=" h-full flex items-center gap-[23px]">
            <a href="/" className="">
              <img className="rounded-full" src={IconLogo} alt="logo" />
            </a>
            <h2 className="text-[21px] font-sans tracking-wide">
              МИР <br /> ЭЛЕКТРОНИКИ
            </h2>
            <a href="/" className="">
              Главная
            </a>
            <a href="/products" className="">
              Товары
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
