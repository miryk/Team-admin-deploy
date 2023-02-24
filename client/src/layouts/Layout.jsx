
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <header className="px-5 navbar navbar-nav navbar-expand-lg bg-body-tertiary">
        <nav className="container-fluid justify-content-start">
          <NavLink className="nav-link me-2 text-primary" to="/players/list">Manage Players</NavLink> |
          <NavLink className="nav-link ms-2 text-primary" to="/status/game/1">Manage Players Status</NavLink>
          </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;