import { useSelector } from "react-redux";
import SectionCard from "../components/SectionCard";

export default function SearchPage() {
  const { sections } = useSelector((rootReducer) => rootReducer.sectionReducer);

  return (
    <div className="flex flex-col gap-6 h-full pt-44 sm:pt-32 md:pt-44 lg:pt-20 pb-3 px-6 rounded-md bg-stone-900">
      <div>
        <h2 className="text-white font-bold text-2xl">Navegar por todas as seções</h2>
      </div>

      <div className="flex sm:flex-wrap gap-4 max-sm:overflow-auto scrollbar-none">
        {sections &&
          sections.map((section) => (
            <SectionCard
              title={section.title}
              image={section.image}
              backgroundColor={section.backgroundColor}
            />
          ))}
      </div>
    </div>
  );
}
