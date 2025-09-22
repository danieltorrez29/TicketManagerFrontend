import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LogIn from "./components/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <LogIn />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
