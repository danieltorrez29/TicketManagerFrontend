import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import TicketView from "./components/TicketView";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <div className="container supercontainer">
        <div className="col-md-6">
          <TicketView />
      </div>
    </div>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
