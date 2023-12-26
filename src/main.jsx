import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "normalize.css";
import ErrorPage from "./components/ErrorPage/componentes/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
]);

createRoot(document.querySelector("#root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
