import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { FormularioProvider } from "./context/ContextoFormulario";

ReactDOM.render(
  <React.StrictMode>
    <FormularioProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FormularioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);