import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import type { Project } from "~/data/projects"

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
    }
  }, [onClose])

  if (!project || !mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" role="dialog" aria-modal="true">
      {/* full-screen overlay */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal box */}
      <div className="relative z-10 max-w-4xl w-full mx-4 bg-[#0b1220] rounded-lg overflow-hidden shadow-xl">
        {/* image on top with close button overlapping */}
        <div className="relative w-full">
          <img
            src={project.screenshot}
            alt={project.title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover"
          />

          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/60 text-white rounded-full p-2 shadow-md focus:outline-none cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* content below image */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

          <p className="mt-3 text-gray-300">{project.description}</p>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            {project.tech.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2 bg-gray-800/50 px-2 py-1 rounded"
              >
                <img src={t.src} alt={t.name} className="w-6 h-6 object-contain" />
                <span className="text-sm text-gray-200">{t.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
              >
                Open
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gray-600 text-gray-200 px-4 py-2 rounded hover:border-gray-400"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}
