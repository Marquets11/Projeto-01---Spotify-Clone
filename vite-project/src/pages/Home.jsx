import { useSelector } from "react-redux";
import PlaylistCard from "../components/PlaylistCard";

export default function Home() {
  const { playlists } = useSelector((rootReducer) => rootReducer.playlistReducer);

  return (
    <div className="flex flex-col rounded-md bg-stone-900 pt-28 sm:pt-24 lg:pt-20 px-6 pb-3 h-full">
      <div className="flex justify-between items-end">
        <h2 className="text-white font-bold text-2xl text-center hover:cursor-pointer hover:underline">
          Playlists do Spotify
        </h2>
        <p className="text-sm text-stone-400 text-center font-bold hover:underline hover:cursor-pointer">
          Mostrar tudo
        </p>
      </div>
      <div className="flex gap-4 mt-6 overflow-x-auto scrollbar-none">
        {playlists &&
          playlists.map((playlist) => (
            <>
              <PlaylistCard
                title={playlist.title}
                image={playlist.image}
                description={playlist.description}
              />
            </>
          ))}
      </div>
    </div>
  );
}
