import React from "react";
import MyNavbar from "mf_navbar/MyNavbar";
import { useAuth } from "../context/AuthContext";

const Layout = ({ children }) => {
    const { user } = useAuth();

    return (
        <div className="app-layout">
            {user && <MyNavbar role={user.role} />}
            <div className="content-container">
                {children}
            </div>
        </div>
    );
};

export default Layout;