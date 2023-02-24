
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <div className="container-fluid pb-4 bg-body-tertiary">
      <header className="px-5 navbar navbar-nav navbar-expand-lg">
        <nav className="container-fluid justify-content-start">
          <NavLink className="nav-link me-2 text-primary" to="/players/list">Manage Players</NavLink> |
          <NavLink className="nav-link ms-2 text-primary" to="/status/game/1">Manage Players Status</NavLink>
          </nav>
      </header>
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Layout;