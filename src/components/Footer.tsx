import { Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-[1.4fr_1fr_1fr] gap-10">
        <div>
          <div className="font-semibold mb-3 font-display text-ink">{PROFILE.name}</div>
          <p className="text-sm max-w-sm leading-relaxed font-body text-ink-soft">
           || Learning📖||
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wide mb-3 text-ink-soft font-mono"><strong>Sections</strong></div>
          <ul className="space-y-2 text-sm font-body">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
                  className="text-ink-soft transition-colors hover:opacity-60"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-wide mb-3 text-ink-soft font-mono"><strong>Elsewhere</strong></div>
          <ul className="space-y-2.5 text-sm font-body">
            <li>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-ink-soft transition-colors hover:opacity-60"
              >
                <Github size={14} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-ink-soft transition-colors hover:opacity-60"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 text-ink-soft transition-colors hover:opacity-60"
              >
                <Mail size={14} /> Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-6xl mx-auto text-[12px] text-mute font-mono">
        <span>© 2026 {PROFILE.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
