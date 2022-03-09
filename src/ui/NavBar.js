import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogOut } from "../actions/auth";
import { eventLogout } from "../actions/events";

export const NavBar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(startLogOut());
    dispatch(eventLogout());
  };
  return (
    <div className="navbar navbar-dark bg-dark mb-4">
      <span className="navbar-brand">{name}</span>
      <button className="btn btn-outline-danger" onClick={handleLogOut}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
};
