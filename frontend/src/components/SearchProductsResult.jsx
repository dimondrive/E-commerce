import React from "react";
import { useRecoilValue } from "recoil";
import { searchProductSelector } from "./search/search";

export default function ProductsList() {
  const searchProduct = useRecoilValue(searchProductSelector);
  return <div>products: {searchProduct}</div>;
}
