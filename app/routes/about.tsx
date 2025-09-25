import { Link } from "react-router";
import ArrowRight from "~/components/icons/arrow-right";

export function meta() {
  return [
    { title: "nubieme | about" },
    { name: "About", content: "idk, hope you like it" },
  ];
}

export default function About() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center animate-fade-in transform -translate-y-16 md:-translate-y-24"
    >
      <p
        className="text-2xl max-w-xl leading-relaxed"
        style={{ letterSpacing: "0.02rem" }}
      >
        I am a Fullstack Developer with a strong passion for building innovative and user-friendly web applications. 
        {/* I enjoy working with technologies such as {" "} */}
        {/* <a
          href="https://react.dev/"
          target="_blank"
          className="inline-flex flex-wrap items-center gap-2 bg-gray-700 text-gray-200 px-2 py-0.5 rounded"
        >
          React
          <img
            src="react.png"
            alt="react"
            className="w-6 h-6 flex-shrink-0"
          />
        </a>
        {" "} for the Front-End and {" "}
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          className="inline-flex flex-wrap items-center gap-2 bg-gray-700 text-gray-200 px-2 py-0.5 rounded"
        >
          Node.js
          <img
            src="nodejs.png"
            alt="nodejs"
            className="w-6 h-6 flex-shrink-0"
          />
        </a>
        {" "} for the Back-End. */}
      </p>

      <button
        className="mt-5 bg-blue-800 hover:bg-blue-700 px-5 py-2 rounded cursor-pointer"
        style={{ letterSpacing: "0.2rem" }}
        onClick={() => window.open("/CV_Fahmi.pdf", "_blank")}
      >
        Download CV
      </button>

      <div className="mt-20">
        <Link
          to="/skill"
          className="text-2xl items-center gap-2 inline-flex animate-bounce"
        >
          Skill <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
