import { BiHomeAlt2 } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-stone-900 rounded-md flex flex-col gap-4 py-5 px-5">
      <Link to={"/"} className="w-20">
        <img src="./spotify-logo.png" alt="Spotify Logo" />
      </Link>
      <Link to={"/"} className="nav-bar-button">
        <BiHomeAlt2 className="text-2xl" />
        <p className="text-lg">Início</p>
      </Link>
      <Link to={"search"} className="nav-bar-button">
        <CiSearch className="text-2xl" />
        <p className="text-lg">Buscar</p>
      </Link>
    </div>
  );
}
