import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ContextProvider } from "./context/Context.jsx";
import { ModalProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <ChakraProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ChakraProvider>
  </ContextProvider>
);
