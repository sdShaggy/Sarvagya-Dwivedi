import { useEffect, useState } from "react";
import { Github, Linkedin, FileText, Mail } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      // Hero should stay active until the user actually scrolls down
      if (window.scrollY < 150) {
        setActive("top");
        return;
      }

      for (const { id } of NAV_LINKS) {
        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setActive(id); // immediately highlight clicked item

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <header className="sticky top-4 z-50 px-4">
      <div
        className={`max-w-6xl mx-auto h-[72px] px-6 flex items-center justify-between rounded-2xl transition-all duration-300
        ${scrolled
            ? "bg-bg/80 backdrop-blur-xl border border-border shadow-lg"
            : "bg-transparent"
          }`}
      >
        {/* Logo */}
        <button
          onClick={() => go("top")}
          className="font-display font-bold text-lg tracking-tight text-ink transition-colors hover:text-[#B88B2E]"
        >
          {PROFILE.name}
        </button>

        {/* Navigation */}
        <nav className="flex items-center gap-6 overflow-x-auto no-scrollbar font-body">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`group relative whitespace-nowrap py-2 text-[13px] transition-[all] duration-300 ease-out hover:-translate-y-0.5 ${active === l.id
                ? "text-[#B88B2E]"
                : "text-ink hover:text-[#B88B2E]"
                }`}
            >
              {l.label}

              <span
                className={`absolute left-0 -bottom-[2px] h-[2px] rounded-full bg-[#D4B36A] transition-all duration-300 ${active === l.id
                  ? "w-full"
                  : "w-0 group-hover:w-full"
                  }`}
              />
            </button>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink transition-all duration-300 hover:text-[#B88B2E] hover:-translate-y-0.5"
          >
            <Github size={18} />
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink transition-all duration-300 hover:text-[#B88B2E] hover:-translate-y-0.5"
          >
            <Linkedin size={18} />
          </a>
          {/* Email */}
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="text-ink transition-all duration-300 hover:text-[#B88B2E] hover:-translate-y-0.5"
          >
            <Mail size={18} />
          </a>
          <a
            href={PROFILE.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg border border-border px-2.5 py-1.5 text-sm font-medium text-ink transition-all duration-300 hover:border-[#D4B36A] hover:text-[#B88B2E] hover:-translate-y-0.5"
          >
            <FileText size={15} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}