import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../src/routes/root";
import "./index.css";
import ItemRoot from "./routes/item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:id",
    element: <Root />,
  },
  {
    path: "/item/:id",
    element: <ItemRoot />,
  },
  {
    path: "/cart",
    element: <div>Hello world!</div>,
  },
  {
    path: "/checkout",
    element: <div>Hello world!</div>,
  },
]);


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAJDv5UhSrzuwBTNRHwSML4TLeNsyYdTg",
  authDomain: "tienda-online-vite.firebaseapp.com",
  projectId: "tienda-online-vite",
  storageBucket: "tienda-online-vite.appspot.com",
  messagingSenderId: "927126580303",
  appId: "1:927126580303:web:87e63455e58863f88bce3a"
};

const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
);