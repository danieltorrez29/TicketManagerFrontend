import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./components/SignUp";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <SignUp />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
