import React from "react";
import { useLocation } from "react-router-dom";
import MyNavbar from "mf_navbar/MyNavbar";
import TicketTable from "mf_ticket_table/TicketTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const tableData = [
  {
    id: 1,
    Ticket: "ABC123",
    Date: "2023-03-22",
    Time: "10:00 AM",
    Outbuilding: "Building A",
  },
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
  {
    id: 3,
    Ticket: "ABC125",
    Date: "2023-03-24",
    Time: "12:00 PM",
    Outbuilding: "Building C",
  },
  ,
  {
    id: 2,
    Ticket: "ABC124",
    Date: "2023-03-23",
    Time: "11:00 AM",
    Outbuilding: "Building B",
  },
];

const UserDashboard = () => {
  const location = useLocation();
  const role = location.pathname.split("/")[1];

  return (
    <div className="navbar-container">
      <MyNavbar role={role} />
      <div className="content">
        <TicketTable
          data={tableData}
          columns={["id", "Ticket", "Date", "Time", "Outbuilding"]}
        />
      </div>
    </div>
  );
};

export default UserDashboard;
