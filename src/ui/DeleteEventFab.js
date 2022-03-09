import React from "react";
import { useDispatch } from "react-redux";
import { eventStartDelete } from "../actions/events";

export const DeleteEventFab = () => {
  const dispatch = useDispatch();
  const hanldeDelete = () => {
    dispatch(eventStartDelete());
  };
  return (
    <button className="btn btn-danger fab-danger" onClick={hanldeDelete}>
      <i className="fas fa-trash">
        <span> Borrar evento</span>
      </i>
    </button>
  );
};
