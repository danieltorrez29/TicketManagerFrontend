import React from "react";
import ReactDOM from "react-dom";
import TicketCancel from "./components/TicketCancel"

import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; 

const App = () => (
  <BrowserRouter>
    <TicketCancel />
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
