import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import ProjectCard from "~/components/card/project";
import ArrowDown from "~/components/icons/arrow-down";
import ArrowRight from "~/components/icons/arrow-right";
import ProjectModal from "~/components/modal/project";
import { projects } from "~/data/projects";

export function meta() {
  return [
    { title: 'nubieme | projects' },
    { name: 'Projects', content: 'not something fancy, but hey it works!' },
  ]
}

export default function Projects() {
  const nextRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [active, setActive] = useState<typeof projects[number] | null>(null)

  useEffect(() => {
    if (!nextRef.current) return;
    const el = nextRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            obs.disconnect();
          }
        });
      },
      { root: null, threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const scrollToNext = () => {
    nextRef.current?.scrollIntoView({ behavior: "smooth" });
    setRevealed(true);
  };

  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent animate-fade-in">
        <div className="transform -translate-y-16 md:-translate-y-24">
          <p
            className="text-4xl md:text-6xl font-bold"
            style={{ letterSpacing: "0.5rem" }}
          >
            Projects
          </p>
          <p className="mt-8 text-xl">
            Something that I{" "}<span className="text-blue-400">build</span>
          </p>

          <button
            aria-label="Scroll down"
            onClick={scrollToNext}
            className="mt-16 text-blue-400 cursor-pointer focus:outline-none"
          >
            <ArrowDown />
          </button>
        </div>
      </section>

      <section
        ref={nextRef}
        className={` min-h-screen flex flex-col items-center justify-start pt-24 pb-16 px-6 ${revealed ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="flex flex-wrap">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} onOpen={setActive} />
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact"
            className="text-2xl items-center gap-2 inline-flex animate-bounce"
          >
            Contact <ArrowRight />
          </Link>
        </div>

        <ProjectModal project={active} onClose={() => setActive(null)} />
      </section>
    </div>
  )
}
