import React, { useState, useRef, createRef, useEffect } from "react";
import CatalogTemplate from "@/components/catalog/CatalogTemplate";

// import data from "../services/data";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";
import { CatalogState } from "../../store/atoms";

function CatalogRender() {
  const [category, setCategory] = useRecoilState(CatalogState);
  const requireProducts = () => {
    axios
      .get("http://localhost:5000/api/catalog")
      .then((result) => result.data)
      .then((result) => {
        console.log(result);
        setCategory(result);
      });
  };

  useEffect(() => {
    requireProducts();
  }, []);

  return (
    <>
      {category.map((item, key) => (
        <CatalogTemplate
          key={key}
          section={item.section}
          category={item.category}
        />
      ))}
    </>
  );
}
export default CatalogRender;
