import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';

const userRole = "admin"; 

const App = () => (
  <BrowserRouter>
    <MyNavbar role={userRole} />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);