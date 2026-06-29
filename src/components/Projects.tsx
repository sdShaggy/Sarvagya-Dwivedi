import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { PROJECTS } from "../data/content";
import type { Project } from "../types";
import { ExternalLink } from "lucide-react";

function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_34px_rgba(0,0,0,0.07)]">
      {/* Title */}
      <h3 className="text-base font-semibold leading-snug font-display text-ink">
        {p.title}
      </h3>

      {/* Description */}
      <p className="mt-2.5 text-sm leading-relaxed font-body text-ink-soft">
        {p.desc}
      </p>

      {/* Highlights */}
      <ul className="mt-4 space-y-2 text-[13px] list-disc pl-4 font-body text-ink-soft">
        {p.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="flex-1" />

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-border-soft">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <div className="font-mono">
            <div className="text-[10px] uppercase tracking-wider text-mute">
              {p.stat.label}
            </div>
            <div className="mt-1 text-sm font-semibold text-ink">
              {p.stat.value}
            </div>
          </div>

          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#B88B2E] transition-all hover:gap-2"
          >
            View
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack.slice().map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-surface-alt px-2.5 py-1 text-[10px] font-medium text-mute transition-colors hover:border-[#D4B36A]/40 hover:text-ink"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <Reveal>
        <SectionHeading title="Projects" />
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}