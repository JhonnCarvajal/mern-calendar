import React, { useEffect, useState } from "react";
import { NavBar } from "../../ui/NavBar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { messages } from "../../helpers/calendar-messages";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "moment/locale/es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import {
  eventClearActiveEvent,
  eventSetActive,
  eventsStartLoading,
} from "../../actions/events";
import { AddNewFab } from "../../ui/AddNewFab";
import { DeleteEventFab } from "../../ui/DeleteEventFab";
moment.locale("es");
const localizer = momentLocalizer(moment);
export const CalendarScreen = () => {
  const dispatch = useDispatch();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  useEffect(() => {
    dispatch(eventsStartLoading());
  }, [dispatch]);

  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { uid } = useSelector((state) => state.auth);
  const onDoubleClick = (e) => {
    //console.log(e);
    dispatch(uiOpenModal());
  };
  const onSelectEvent = (e) => {
    //console.log(e);
    dispatch(eventSetActive(e));
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    //console.log(e);
    dispatch(eventClearActiveEvent());
  };
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: uid === event.user._id ? "#367CF7" : "#501CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return { style };
  };
  return (
    <div className="calendar-screen">
      <NavBar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        view={lastView}
        selectable={true}
        onSelectSlot={onSelectSlot}
      />
      {activeEvent && <DeleteEventFab />}
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};
