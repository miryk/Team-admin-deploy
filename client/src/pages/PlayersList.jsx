import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const PlayersList = () => {
  return (
    <div className="bg-body-tertiary px-5">
      <div className="container-fluid border border-dark bg-white py-2">
        <nav className="navbar navbar-nav navbar-expand-lg">
          <div className="container-fluid justify-content-start">
            <NavLink to="/players/list"className="nav-link me-1">List</NavLink> |
            <NavLink to="/players/addplayer" className="nav-link ms-1">Add Player</NavLink>
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default PlayersList;
