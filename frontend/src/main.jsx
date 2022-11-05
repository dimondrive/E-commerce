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
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/card",
        element: <RenderCard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
);
