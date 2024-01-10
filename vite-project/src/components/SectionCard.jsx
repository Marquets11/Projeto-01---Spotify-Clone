export default function SectionCard({ title, image, backgroundColor }) {
  return (
    <div
      className={`relative group flex-shrink-0 w-40 h-40 rounded-lg pt-4 pl-4 overflow-hidden ${backgroundColor} hover:cursor-pointer`}
    >
      <h3 className="font-bold text-white text-xl">{title}</h3>
      <img
        src={image}
        alt={`Imagem de ${title}`}
        className="absolute -bottom-2 -right-4 w-24 h-24 rotate-20 shadow-lg shadow-stone-800 group-hover:scale-110 duration-500"
      />
    </div>
  );
}
