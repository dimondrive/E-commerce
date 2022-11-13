import React, { useState, useRef, createRef, useEffect } from "react";
// import data from "../services/data";
import axios from "axios";
//template
import NavbarTemplate from "@/components/Layout/navigation/NavbarTemplate";

export default function NavbarRender() {
  return (
    <>
      <div className="container mx-auto px-4  w-full h-full flex flex-row mt-[100px] gap-10">
        <NavbarTemplate />
      </div>
    </>
  );
}
