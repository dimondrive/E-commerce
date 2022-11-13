import React, { useState, useRef, createRef, useEffect } from "react";

import CatalogTemplate from "@/components/catalog/CatalogTemplate";

import { catalogState } from "../../store/atoms";
import { getCatalog } from "../../api";

import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";

function CatalogRender() {
  const category = useRecoilValue(catalogState);

  useEffect(() => {
    getCatalog();
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
