import { Briefcase } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Chip from "./ui/Chip";
import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <Reveal>
        <SectionHeading  title="Experience" />
      </Reveal>
      <Reveal delay={80}>
        <div className="relative pl-10">
          <span className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
          <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-ink bg-bg" />
          <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 border border-border bg-white overflow-hidden flex items-center justify-center shrink-0">
                  <img
                    src={EXPERIENCE.logo}
                    alt={EXPERIENCE.company}
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      (
                        e.currentTarget.nextElementSibling as HTMLElement
                      ).style.display = "flex";
                    }}
                  />

                  <div
                    className="w-full h-full hidden items-center justify-center bg-ink text-bg"
                  >
                    <Briefcase size={20} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-display text-ink">{EXPERIENCE.company}</h3>
                  <p className="text-sm mt-1 font-body text-ink-soft">{EXPERIENCE.role}</p>
                </div>
              </div>
              <div className="text-sm px-3 py-1.5 rounded-md border border-border text-ink font-mono shrink-0">
                {EXPERIENCE.date}
              </div>
            </div>
            <ul className="mt-5 space-y-2.5 text-sm leading-relaxed list-disc pl-5 font-body text-ink-soft">
              {EXPERIENCE.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {EXPERIENCE.stack.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
