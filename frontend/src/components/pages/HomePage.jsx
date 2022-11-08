import React, { useState, useEffect } from "react";
import { Outlet, Link, BrowserRouter, Routes } from "react-router-dom";
import Timer from "@/components/Layout/Timer/Timer";
import ProductView from "@/components/products/ProductView";

export default function Root() {
  return (
    <>
      <div className="container mx-auto px-4 pt-[100px]">
        До конца Акции <Timer /> fix ebanogo push-a
      </div>
    </>
  );
}
