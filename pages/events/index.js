import { useRef, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import CreateEventForm from "@/components/events/create-event-form";
import { getEvents } from "@/lib/mongodb/events";
import Modal from "@/components/layout/modal";

const Events = (props) => {
  const calendarRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const { user } = useUser();
  const { events } = props;

  const onDateClickHandler = () => {
    // TODO: add the functionality to this onDateClickHandler to open a new page with all the events listed,
    // something like /events/:date
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        {user && (
          <button
            type="button"
            className="bg-emerald-400 hover:bg-emerald-500 px-4 py-2 rounded-3xl font-bold w-fit"
            onClick={() => {
              setShowModal(true);
            }}
          >
            New Event
          </button>
        )}
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next",
            right: "title",
          }}
          events={events}
          eventColor="#34D399"
          eventTextColor="#000000"
          initialView="dayGridMonth"
          dateClick={onDateClickHandler}
        />
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          title="New Event"
        >
          <CreateEventForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export async function getStaticProps() {
  try {
    const { events, error } = await getEvents();
    const finalEvents = events.map((event) => ({
      title: event.title,
      date: event.date,
    }));
    if (error || !events) return { notFound: true };
    return { props: { events: finalEvents }, revalidate: 1 };
  } catch (e) {
    return { notFound: true };
  }
}

export default Events;
