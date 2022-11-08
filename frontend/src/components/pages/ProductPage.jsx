import React from "react";
// import data from "../services/data";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();
  const { slug } = params;
  return (
    <>
      <div className="container mx-auto px-4  w-full h-full flex flex-row mt-[100px] gap-10">
        <h1>{slug}</h1>
      </div>
    </>
  );
}
