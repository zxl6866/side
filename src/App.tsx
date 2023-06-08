import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/css/animate.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
