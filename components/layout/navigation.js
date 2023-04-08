import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  return (
    <nav className="flex items-center h-16 justify-center px-2 border-b-2 border-emerald-400 mb-4">
      <div className="flex justify-between items-center w-full max-w-[1440px] px-8">
        <Link href="/">
          <h1 className="text-2xl">ASOP</h1>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/">
            <button
              type="button"
              className="bg-emerald-400 hover:bg-emerald-500 px-4 py-2 rounded-3xl font-bold"
            >
              Login
            </button>
          </Link>
          <button
            type="button"
            className="hover:bg-neutral-400/50 px-2 py-2 rounded-xl pointer cursor-pointer"
          >
            <AiOutlineMenu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
