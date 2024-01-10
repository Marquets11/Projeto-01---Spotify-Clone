import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";

export default function Header() {
  const history = useNavigate();
  const currentUrl = useLocation().pathname;

  return (
    <div className="absolute flex flex-wrap justify-center sm:justify-between items-center gap-4 py-2 px-6 w-full rounded-t-md bg-stone-950 bg-opacity-70">
      <div className="flex flex-wrap justify-center gap-4 items-center">
        <div className="flex flex-wrap gap-5 text-xl">
          <button
            className="bg-black rounded-full text-white p-2"
            onClick={() => {
              history(-1);
            }}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="bg-black rounded-full text-white p-2"
            onClick={() => history(+1)}
          >
            <AiOutlineRight />
          </button>
        </div>

        <div className={`relative ${currentUrl.match(/search/gi) ? "" : "hidden"}`}>
          <BiSearch className="absolute top-4 left-3 text-white text-xl" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="O que você deseja ouvir?"
            autoFocus
            autoComplete="off"
            className={
              "bg-stone-800 text-white text-sm w-52 sm:w-80 h-12 py-3 pl-10 rounded-full"
            }
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button className="bg-transparent text-stone-400 text-lg font-semibold hover:text-white">
          Inscrever-se
        </button>
        <button className="ml-2 py-3 px-7 rounded-full font-bold bg-white text-black hover:scale-105 duration-500">
          Entrar
        </button>
      </div>
    </div>
  );
}
