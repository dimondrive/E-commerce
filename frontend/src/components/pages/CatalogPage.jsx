import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CatalogRender from "../catalog/CatalogView";

function CatalogPage() {
  return (
    <>
      <CatalogRender />
    </>
  );
}

export default CatalogPage;
