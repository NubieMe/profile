import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import { useState } from "react";
import NavItem, { navItems } from "./components/nav-item";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#111827]">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const yearNow = new Date().getFullYear();
  const yearMade = 2025;

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex flex-col items-end w-full pt-3 pr-3">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white focus:outline-none cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <nav
          id="mobile-nav"
          className="flex flex-col items-end md:flex-row md:items-center md:gap-9 absolute top-16 right-0 w-full p-4 md:static md:w-auto md:p-0 overflow-hidden animate-fade-in z-10"
          aria-hidden={!open}
        >
          {navItems.map((item, i) => {
            const delayOpen = `${i * 70}ms`;
            const delayClose = `${(navItems.length - 1 - i) * 70}ms`;
            return (
              <div
                key={item.to}
                className={`w-full flex justify-end transform transition-opacity duration-150 ease-out mb-2 md:mb-0 ${
                  open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0"
                }`}
                style={{
                  transitionDelay: open ? delayOpen : delayClose,
                  willChange: "opacity, transform",
                }}
              >
                <NavItem name={item.name} to={item.to} />
              </div>
            );
          })}
        </nav>
      </header>

      <main className="flex items-center justify-center z-0">
        <Outlet />
      </main>

      <footer className="fixed bottom-0 left-0 p-4 text-blue-400">
        <p>&copy; {yearNow === yearMade ? yearMade : `${yearMade}-${yearNow}`} nubieme.</p>
      </footer>
    </div>
  );;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
