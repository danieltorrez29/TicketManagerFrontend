import React from "react";
import { useLocation } from "react-router-dom";
import ticketImage from './ticket.png';
import "../index.css";

const MyNavbar = ({ role }) => {
  const location = useLocation();
  const baseUrl = location.pathname.includes('/admin') ? '/admin/dashboard' : '/user/dashboard';

  const handleLogout = () => {
    // Lógica para cerrar sesión, como limpiar el token de autenticación, etc.
    // Luego, redirige al usuario a la página de inicio (/)
    window.location.href = "/";
  };

  const handleLogoClick = () => {
    const dashboardUrl = role === 'admin' ? '/admin/dashboard' : '/user/dashboard';
    window.location.href = dashboardUrl;
  };

  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav justify-content-end">
          <div className="navbar-brand" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
            <img src={ticketImage} alt="Inicio" className="navbar-logo" />
          </div>
          {(role === "user") && (
            <>
              <li className="nav-item">
                <a className="nav-link" href={`${baseUrl}/view`}>View Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`${baseUrl}/notifications`}>Notifications</a>
              </li>
            </>
          )}
          {(role === "admin" || role === "user") && (
            <>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={`${baseUrl}/create`}>Create Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={`${baseUrl}/cancel`}>Cancel Ticket</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>Cerrar Sesión</a>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled" tabIndex="-1" aria-disabled="true">Name Lastname</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
