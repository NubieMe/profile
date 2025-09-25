import type { Project } from "~/data/projects"

export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    // 1 per row on mobile, 2 per row on md+ (desktop)
    <div className="w-full md:w-1/2 p-3">
      <div className="bg-[#0b1220] rounded-4xl overflow-hidden shadow-md h-full flex flex-col md:flex-row">
        {/* image left on md+, stacked on mobile */}
        <div className="w-full md:w-1/2 h-48 md:h-auto bg-black/10 flex items-center justify-center overflow-hidden">
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* content */}
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white">{project.title}</h4>
            <p className="mt-2 text-sm text-gray-300 line-clamp-3">{project.description}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2">
              {project.tech.map((t) => (
                <img
                  key={t.name}
                  src={t.src}
                  alt={t.name}
                  className="w-6 h-6 object-contain filter grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => onOpen(project)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded cursor-pointer"
            >
              View
            </button>

            {/* <div className="text-sm text-gray-400">
              {project.github ? "Source" : project.url ? "Live" : ""}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}