import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "@/components/pages/HomePage";
import ErrorPage from "@/components/routes/error-page";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import ProductView from "@/components/products/ProductView";

import App from "@/components/App";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function Main() {
  return (
    <React.StrictMode>
      <App />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
