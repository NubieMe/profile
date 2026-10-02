export type Project = {
  title: string
  description: string
  screenshot: string
  tech: { name: string; src: string }[]
  url?: string
  github?: string
}

export const projects: Project[] = [
  {
    title: "Circle",
    description: "Simple web-based social media inspired by X/twitter.",
    screenshot: "/project/circle.png",
    tech: [
      { name: "React", src: "/logo/react.png" },
      { name: "Express", src: "/logo/express.png" },
      { name: "NodeJS", src: "/logo/nodejs.png" },
      { name: "PostgreSQL", src: "/logo/postgresql.png" },
    ],
    url: "https://circle-b51.vercel.app",
    github: "https://github.com/NubieMe/circle-fe",
  },
  {
    title: "Rumah Tahfidz",
    description: "Dashboard application for modernizing student attendance and assessment management.",
    screenshot: "/project/rumah-tahfidz.png",
    tech: [
      { name: "React", src: "/logo/react.png" },
      { name: "Tailwind", src: "/logo/tailwind.png" },
      { name: "Express", src: "/logo/express.png" },
      { name: "MySql", src: "/logo/mysql.png" },
    ],
    url: "https://rumahtahfidzalinayah.my.id/",
    github: "",
  },
  {
    title: "Toma POS",
    description: "Modern POS Solution: Streamlining your sales, inventory, and reporting with a modern touch.",
    screenshot: "/project/toma-pos.png",
    tech: [
      { name: "NextJS", src: "/logo/nextjs.png" },
      { name: "PostgreSQL", src: "/logo/postgresql.png" },
    ],
    url: "https://toma-pos.vercel.app",
    github: "https://github.com/NubieMe/toma-pos",
  },
  {
    title: "Mail Assistant Recruitment",
    description: "Automation mail for recruitment. It analyzes incoming job emails for interview invitations and sends instant, organized notifications to a Telegram bot. ",
    screenshot: "/project/n8n.png",
    tech: [
      { name: "n8n", src: "/logo/n8n.png" },
      { name: "docker", src: "/logo/docker.png" },
    ],
    url: "",
    github: "",
  },
  {
    title: "Arana's Company Profile",
    description: "Arana's Company Profile is a website that showcases the company's services, portfolio, and contact information. It is designed to provide a professional online presence for the company.",
    screenshot: "/project/arana.png",
    tech: [
      { name: "React", src: "/logo/react.png" }
    ],
    url: "https://arananco.com",
    github: "",
  }
]
