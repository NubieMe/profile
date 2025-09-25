import { Link } from "react-router";
import ArrowRight from "~/components/icons/arrow-right";

export function meta() {
  return [
    { title: "nubieme" },
    { name: "Profile", content: "idk, hope you like it" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 text-center animate-fade-in">
      <p className="font-bold" style={{ letterSpacing: "1rem", fontSize: "3rem" }}>
        <span className="text-blue-400">
          {" "}FAHMI
        </span>
        {" "}ABDUL HADI
      </p>
      <div className="mt-4">
        <p className="text-2xl" style={{ letterSpacing: "0.3rem" }}>
          Fullstack
          <span className="text-blue-400">
            {" "}Developer
          </span>
        </p>
      </div>
      <div className="mt-20 w-5">
        <Link to="/about">
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}
