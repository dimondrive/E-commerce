import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import axios from "axios";
import Search from "../../search/search";
// image
import IconLogo from "@/assets/icons/icon-logo.svg";
// import { Route } from "react-router-dom";
// import ProductRender from "../../products/ProductRender";
// import PageMain from "../../pages/pageMaim";

export default function Navbar({ searchValue, setSearchValue }) {
  return (
    <>
      <nav className="w-full h-[90px] bg-gray-200/50">
        <div className="container h-full mx-auto px-4">
          <div className=" h-full flex items-center justify-between">
            <div className="flex gap-5  md:gap-[23px] items-center ">
              <a href="/" className="">
                <img
                  className="rounded-full w-[45px] md:w-[60px] lg:min-w-[66px]"
                  src={IconLogo}
                  alt="logo"
                />
              </a>
              <a
                href="/"
                className="  text-[12px] sm:text-[15px]  md:text-[15px] lg:text-[21px]  font-sans tracking-wide font-bold uppercase leading-5"
              >
                Мир <br /> Электроники
              </a>
            </div>

            <div className="hidden md:block">
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
            </div>

            <div className="hidden gap-[20px] md:flex lg:gap-[56px]">
              <a
                href="/"
                // element={<PageMain />}
                className="text-[15px] font-sans font-normal"
              >
                Главная
              </a>
              <a
                href="/products"
                // element={<ProductRender />}
                className="text-[15px] font-sans font-normal"
              >
                Акции
              </a>

              <a
                href="/catalog"
                // element={<ProductRender />}
                className="text-[15px] font-sans font-normal"
              >
                Каталог
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
