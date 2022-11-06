import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
import axios from "axios";
import Search from "../../search/search";
// image
import IconLogo from "@/assets/icons/icon-logo.svg";

export default function Navbar({}) {
  return (
    <>
      <nav className="w-full h-[90px] bg-gray-200/50">
        <div className="container h-full mx-auto px-4">
          <div className=" h-full flex items-center justify-between">
            <div className="flex gap-[23px] items-center">
              <a href="/" className="">
                <img className="rounded-full" src={IconLogo} alt="logo" />
              </a>
              <a
                href="/"
                className="text-[21px] font-sans tracking-wide font-bold uppercase leading-5"
              >
                Мир <br /> Электроники
              </a>
            </div>

            <div>
              <Search />
            </div>

            <div className="flex gap-[56px]">
              <a href="/" className="text-[15px] font-sans font-normal">
                Главная
              </a>
              <a href="/products" className="text-[15px] font-sans font-normal">
                Акции
              </a>

              <a href="/products" className="text-[15px] font-sans font-normal">
                Каталог
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
