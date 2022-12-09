import React, { Component } from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
// const root = ReactDOM.createRoot(document.getElementById("root"))
const root = createRoot(document.getElementById("app"));

//Esto lo iremos moviendo a archivos independientes a medida que cresca
class App extends Component {
  render() {
    return <h1>Hello World mundo</h1>;
  }
}

// alert("react goes here");

// Creamos un componente App y luego lo mostramos en id app
root.render(<App />);
