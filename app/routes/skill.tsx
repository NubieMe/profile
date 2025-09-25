import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import ArrowRight from "~/components/icons/arrow-right";
import TechCard from "~/components/card/tech-card";
import ArrowDown from "~/components/icons/arrow-down";

export function meta() {
  return [
    { title: "nubieme | skill" },
    { name: "Skill", content: "Not perfect, but I'm still learning" },
  ]
}

export default function Skill() {
  const nextRef = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

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
            Skill
          </p>
          <p className="mt-4 text-xl text-gray-300">
            Tech <span className="text-blue-400">&amp;</span> Stack
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
        className={` min-h-screen flex flex-col items-center justify-start pt-24 pb-16 md:pt-60 px-6 ${revealed ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className={`max-w-3xl text-center`}>
          <p className="text-lg text-gray-200">
            Currently, here are some of the main tools I use when developing apps (though of course, not limited to these):
          </p>
        </div>

        <div className={`w-full mt-10 transition-opacity ${revealed ? "animate-fade-in" : "opacity-0"}`}>
          <TechCard />
        </div>

        <div className={`mt-12 ${revealed ? "animate-fade-in" : "opacity-0"}`}>
          <Link
            to="/projects"
            className="text-2xl items-center gap-2 inline-flex animate-bounce"
          >
            Projects <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}