import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"))
const root = createRoot(document.getElementById("app"));
import App from "./App";
//Esto lo iremos moviendo a archivos independientes a medida que cresca

// Creamos un componente App y luego lo mostramos en id app
root.render(<App />);
