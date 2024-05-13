import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: `url('/background.png')`,

        backgroundSize: "cover", // Ajusta para cobrir todo o fundo mantendo a proporção da imagem
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Evita que a imagem se repita
        minHeight: "100vh", // Garante que o corpo tenha altura mínima igual à altura da viewport
        margin: 0, // Remove margens
        padding: 0, // Remove preenchimentos
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
