import Link from "next/link";

const Menu = () => {
  return (
    <ul className="flex flex-col items-center w-full gap-4">
      <Link className="flex justify-center text-center w-full" href="/">
        <li className="font-bold shadow-custom max-w-sm w-full py-2 rounded-xl hover:underline hover:decoration-emerald-400 hover:underline-offset-4 hover:decoration-2">
          Home
        </li>
      </Link>
      <Link className="flex justify-center text-center w-full" href="/events">
        <li className="font-bold shadow-custom max-w-sm w-full py-2 rounded-xl hover:underline hover:decoration-emerald-400 hover:underline-offset-4 hover:decoration-2">
          Events
        </li>
      </Link>
    </ul>
  );
};

export default Menu;
