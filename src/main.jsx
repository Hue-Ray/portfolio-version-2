import React from "react";
import App from './App';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Resume from "./pages/Resume";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);