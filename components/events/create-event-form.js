import { useRef } from "react";

const CreateEventForm = (props) => {
  const { setShowModal } = props;
  const titleRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const newEvent = {
      title: titleRef.current.value,
      date: dateRef.current.value,
      time: timeRef.current.value,
      description: descriptionRef.current.value,
    };

    await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    setShowModal(false);
  };

  return (
    <form className="flex flex-col" onSubmit={submitHandler}>
      <label
        className="underline decoration-emerald-400 underline-offset-4 decoration-2 mb-2"
        for="title"
      >
        Title
      </label>
      <input
        className="border border-black rounded-md mb-4 p-2"
        id="title"
        type="text"
        ref={titleRef}
        required
      />
      <label
        className="underline decoration-emerald-400 underline-offset-4 decoration-2 mb-2"
        for="date"
      >
        Date
      </label>
      <input
        className="border border-black rounded-md mb-4 p-2"
        id="date"
        type="date"
        ref={dateRef}
        required
      />
      <label
        className="underline decoration-emerald-400 underline-offset-4 decoration-2 mb-2"
        for="time"
      >
        Time
      </label>
      <input
        className="border border-black rounded-md mb-4 p-2"
        id="time"
        type="time"
        ref={timeRef}
        required
      />
      <label
        className="underline decoration-emerald-400 underline-offset-4 decoration-2 mb-2"
        for="description"
      >
        Description
      </label>
      <textarea
        className="border border-black rounded-md mb-4 p-2"
        id="description"
        ref={descriptionRef}
        required
      />
      <div className="flex justify-center">
        <button
          className="bg-emerald-400 hover:bg-emerald-500 text-whitepx-4 py-2 px-4 rounded-3xl w-fit"
          type="submit"
        >
          Create Event
        </button>
      </div>
    </form>
  );
};

export default CreateEventForm;
