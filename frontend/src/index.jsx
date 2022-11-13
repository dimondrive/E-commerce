import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

import HomePage from "@/components/pages/HomePage";
import ProductPage from "@/components/pages/ProductPage";
import ProductsPage from "@/components/pages/ProductsPage";
import CatalogPage from "@/components/pages/CatalogPage";

import ErrorPage from "@/components/routes/error-page";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router,
  Routes,
} from "react-router-dom";

import ProductView from "@/components/products/ProductsView";

import App from "./App";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/product/:slug",
    element: <ProductPage />,
  },
  {
    path: "/catalog",
    element: <CatalogPage />,
  },
]);

function Main() {
  return (
    <React.StrictMode>
      <RecoilRoot>
        <RecoilNexus />
        <App />
        <RouterProvider router={router} />
      </RecoilRoot>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
