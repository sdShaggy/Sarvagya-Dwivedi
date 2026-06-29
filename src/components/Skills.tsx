import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Chip from "./ui/Chip";
import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <Reveal>
        <SectionHeading title="Skills" />
      </Reveal>

      <div className="space-y-5">
        {SKILLS.map((g, i) => (
          <Reveal key={g.group} delay={i * 70}>
            <div
              className="
                rounded-2xl
                border border-border
                bg-surface
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]
              "
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-56 shrink-0">
                  <h3 className="text-[11px] uppercase tracking-[0.18em] text-mute font-mono">
                    {g.group}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}