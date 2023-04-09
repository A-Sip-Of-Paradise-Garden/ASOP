import { useUser } from "@auth0/nextjs-auth0/client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const Events = () => {
  const { user } = useUser();

  const events = []

  const onClickHandler = () => {}

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      headerToolbar={{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      }}
      events={events}
      initialView="dayGridMonth"
      dateClick={onClickHandler}
    />
  );
};

export default Events;