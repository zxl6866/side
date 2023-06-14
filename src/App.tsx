import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Home } from "./pages/Home";
import { Canvas } from "./components/Canvas/canvas";
import "./assets/css/animate.min.css";
import "./App.css";
import "antd/dist/antd.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ChakraProvider>
      <Canvas />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
