import { BsFillPlayFill } from "react-icons/bs";

export default function PlaylistCard({ image, title, description }) {
  return (
    <div className="group w-44 h-72 flex flex-col flex-shrink-0 gap-1 bg-stone-950 px-4 pt-4 pb-6 rounded-md hover:bg-stone-400 hover:bg-opacity-10 hover:cursor-pointer">
      <div className="relative">
        <img
          src={image}
          alt={`Imagem da playlist: ${title}`}
          className="rounded-md w-40 h-36 object-cover object-top group-hover:shadow-lg group-hover:shadow-stone-900"
        />
        <button className="absolute bottom-2 right-2 bg-green-600 rounded-full invisible group-hover:visible hover:scale-105">
          <BsFillPlayFill className="text-5xl p-2" />
        </button>
      </div>
      <h2 className="text-white font-semibold mt-2">{title}</h2>
      <p className="text-stone-400 line-clamp-2 text-ellipsis">{description}</p>
    </div>
  );
}
