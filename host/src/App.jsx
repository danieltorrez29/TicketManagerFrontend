// App.js
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/Loader";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";

const LogInPage = lazy(() => import("./pages/LogInPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const CreateTicketPage = lazy(() => import("./pages/Createpage"));
const CancelTicketPage = lazy(() => import("./pages/Cancelpage"));
const ViewTicketPage = lazy(() => import("./pages/Viewpage"));
const NotificationsPage = lazy(() => import("./pages/NotificationsPage"));

const App = () => (
  <div className="app-background">
    <Router>

      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <LogInPage />
              </Suspense>
            }
          />
          <Route
            path="/signup"
            element={
              <Suspense fallback={<Loader />}>
                <SignUpPage />
              </Suspense>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <Suspense fallback={<Loader />}>
                <AdminDashboard />
              </Suspense>
            }
          />
          <Route
            path="/user/dashboard"
            element={
              <Suspense fallback={<Loader />}>
                <UserDashboard />
              </Suspense>
            }
          />
          <Route
            path="/user/dashboard/create"
            element={
              <Suspense fallback={<Loader />}>
                <CreateTicketPage />
              </Suspense>
            }
          />
          <Route
            path="/admin/dashboard/create"
            element={
              <Suspense fallback={<Loader />}>
                <CreateTicketPage />
              </Suspense>
            }
          />
          <Route
            path="/user/dashboard/cancel"
            element={
              <Suspense fallback={<Loader />}>
                <CancelTicketPage />
              </Suspense>
            }
          />
          <Route
            path="/admin/dashboard/cancel"
            element={
              <Suspense fallback={<Loader />}>
                <CancelTicketPage />
              </Suspense>
            }
          />
          <Route
            path="/user/dashboard/view"
            element={
              <Suspense fallback={<Loader />}>
                <ViewTicketPage />
              </Suspense>
            }
          />
          <Route
            path="/user/dashboard/notifications"
            element={
              <Suspense fallback={<Loader />}>
                <NotificationsPage />
              </Suspense>
            }
          />
        </Routes>
      </AuthProvider>

    </Router>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);