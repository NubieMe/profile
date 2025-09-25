import { techs } from "~/data/tech";

export default function TechCard() {
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap items-center justify-center">
          {techs.map((t) => (
            <a
              key={t.name}
              href={t.path}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-2"
              aria-label={t.name}
              title={t.name}
            >
              <span className="pointer-events-none absolute -top-8 left-1/2 transform -translate-x-1/2 min-w-max rounded bg-gray-800 text-white text-xs px-2 py-1 opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0">
                {t.name}
              </span>

              <img
                src={t.src}
                alt={t.name}
                className="w-8 h-8 md:w-16 md:h-16 object-contain filter grayscale transition duration-150 ease-out group-hover:grayscale-0"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
