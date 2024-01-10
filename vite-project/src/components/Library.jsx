import { useState } from "react";
import { LuLibrary } from "react-icons/lu";
import { PiMusicNotesPlusLight } from "react-icons/pi";
import { GoFileDirectory } from "react-icons/go";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Library() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 group py-5 h-full bg-stone-900 rounded-md">
      <div className="flex flex-wrap justify-between px-5 font-semibold text-stone-400">
        <div className="flex flex-wrap items-center gap-3 hover:text-white hover:cursor-pointer">
          <LuLibrary className="text-2xl" />
          <p className="text-xl">Sua Biblioteca</p>
        </div>
        <div className="relative">
          <button
            className="p-2 rounded-full text-2xl hover:text-white hover:bg-stone-100 hover:bg-opacity-20 active:bg-stone-950"
            onFocus={() => setIsDropDownOpen(true)}
            onBlur={() => setIsDropDownOpen(false)}
          >
            <AiOutlinePlus />
          </button>
          {isDropDownOpen && (
            <div className="absolute right-1 top-11 w-56 p-1 rounded-md text-md bg-stone-700 bg-opacity-80 text-white shadow-lg">
              <div className="drop-down-options">
                <PiMusicNotesPlusLight />
                <p>Criar nova playlist</p>
              </div>
              <div className="drop-down-options">
                <GoFileDirectory />
                <p>Criar pasta de playlists</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-5 px-1 h-48 overflow-auto scrollbar-thin group-hover:scrollbar-thumb-white group-hover:scrollbar-thumb-rounded-full">
        <div className="flex flex-col gap-4 p-4 bg-stone-800 rounded-lg">
          <h3 className="text-white font-bold">Crie sua primeira playlist</h3>
          <p className="text-white">É fácil, vamos te ajudar.</p>
          <button className="bg-white text-black rounded-full px-3 py-2 font-bold hover:scale-105 duration-500">
            Criar Playlist
          </button>
        </div>

        <div className="flex flex-col gap-4 p-4 bg-stone-800 rounded-lg">
          <h3 className="text-white font-bold">Que tal seguir um podcast novo?</h3>
          <p className="text-white">Avisaremos você sobre novos episódios.</p>
          <Link to={"explore-podcasts"}>
            <button className="bg-white text-black rounded-full px-3 py-2 w-full font-bold hover:scale-105 duration-500">
              Explore Podcasts
            </button>
          </Link>
        </div>
      </div>

      <div className="px-5">
        <a href="#" className="text-stone-500 text-sm hover:underline">
          Cookies
        </a>
      </div>

      <div className="px-5">
        <button className="flex gap-1 items-center py-1 px-2 rounded-full bg-black border border-white text-white hover:scale-105 hover:shadow-lg duration-500 ">
          <BsGlobe2 />
          <p>Português do Brasil</p>
        </button>
      </div>
    </div>
  );
}
