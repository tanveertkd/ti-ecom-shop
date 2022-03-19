import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { CategoryProvider } from "./contexts/categoriesContext";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./contexts/product-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <CategoryProvider>
      <ProductProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductProvider>
    </CategoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
