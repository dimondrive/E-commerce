import React from "react";
import ReactDOM from "react-dom/client";
import Root from "@/components/routes/root";
import ErrorPage from "@/components/routes/error-page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import RenderCard from "./components/cardItem/RenderListCard";

import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/card",
    element: <RenderCard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/api/products",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
