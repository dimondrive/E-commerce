import React, { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "@/assets/scss/styles.js";
import "./index.css";
import Navbar from "./components/Layout/navigation/NavbarTemplate";

export default function App() {
  const [searchValue, setSearchValue] = React.useState();
  return (
    <>
      <Navbar />
    </>
  );
}
