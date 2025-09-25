import { contacts } from "~/data/contact";

export function meta() {
  return [
    { title: "nubieme | contact" },
    { name: "Contact", content: "send me an email or something, if you interested!" },
  ];
}

export default function Contact() {
  return (
    <div>
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent animate-fade-in">
        <div className="transform -translate-y-24 md:-translate-y-24">
          <p
            className="text-4xl font-bold"
          >
            Every great product starts with an idea. <span className="text-blue-400">Ready to make yours a reality?</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-300">Send me an email</p>
            <div
              role="button"
              onClick={() => window.open("mailto:fahmi.ah98@gmail.com")}
              className="mt-2 text-blue-400 hover:text-cyan-400 flex flex-row text-2xl cursor-pointer"
            >
              <img src="/logo/mail.png" alt="email" className="w-8 h-8 mr-3 animate-pulse" />
              fahmi.ah98@gmail.com
            </div>
          </div>

          <div className="text-gray-500 font-medium">or</div>

          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-300">Connect with me</p>
            <div className="flex items-center gap-6 mt-4">
              {contacts.map((item, i) => (
                <a
                  key={i}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img src={item.src} alt={item.name} className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>  
      </section>
    </div>
  )
}
