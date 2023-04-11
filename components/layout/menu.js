import Link from "next/link";

const Menu = (props) => {
  const { setShowModal } = props;

  return (
    <ul className="flex flex-col items-center w-full gap-4">
      <Link className="flex justify-center text-center w-full" href="/">
        <li className="shadow-custom max-w-sm w-full py-2 rounded-xl">
          <button className="font-bold hover:underline hover:decoration-emerald-400 hover:underline-offset-4 hover:decoration-2" type="button" onClick={() => setShowModal(false)}>
            Home
          </button>
        </li>
      </Link>
      <Link className="flex justify-center text-center w-full" href="/events">
        <li className="shadow-custom max-w-sm w-full py-2 rounded-xl">
          <button className="font-bold hover:underline hover:decoration-emerald-400 hover:underline-offset-4 hover:decoration-2" type="button" onClick={() => setShowModal(false)}>
            Events
          </button>
        </li>
      </Link>
    </ul>
  );
};

export default Menu;
