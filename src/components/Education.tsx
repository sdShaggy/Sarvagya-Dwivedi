import { GraduationCap, ImageOff } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import Chip from "./ui/Chip";
import { COURSEWORK, EDUCATION } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <Reveal>
        <SectionHeading title="Education" />
      </Reveal>

      <div className="space-y-6">
        {EDUCATION.map((edu, i) => {
          const showCoursework =
            edu.degree.includes("B.Tech") ||
            edu.degree.includes("Computer Science");
          return (
            <Reveal key={edu.school} delay={i * 80}>
              <div className="rounded-xl border border-border bg-surface p-6 sm:p-8 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <div className="grid sm:grid-cols-[180px_1fr] gap-6">
                  {/* Image / placeholder */}
                  <div className="aspect-[4/3] sm:aspect-square w-full rounded-lg border border-border bg-surface-alt overflow-hidden flex items-center justify-center">
                    {edu.image ? (
                      <img
                        src={edu.image}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Falls back gracefully if the placeholder path has no image yet
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                          (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty("display", "flex");
                        }}
                      />
                    ) : null}
                    <div
                      className="w-full h-full flex flex-col items-center justify-center gap-1.5 text-mute"
                      style={{ display: edu.image ? "none" : "flex" }}
                    >
                      <ImageOff size={20} />
                      <span className="text-[11px] text-center px-3 font-mono">add a photo here</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 bg-ink text-bg">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold font-display text-ink">{edu.school}</h3>
                          <p className="text-sm mt-1 font-body text-ink-soft">{edu.degree}</p>
                        </div>
                      </div>
                      <div className="text-sm px-3 py-1.5 rounded-md border border-border text-ink font-mono shrink-0">
                        {edu.date}
                      </div>
                    </div>

                    {edu.gpa && (
                      <div className="mt-6 text-sm font-body">
                        <span className="text-mute">GPA&nbsp;</span>
                        <span className="text-ink font-semibold">{edu.gpa}</span>
                      </div>
                    )}
                    {edu.activities && edu.activities.length > 0 && (
                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-wide mb-2.5 text-mute font-mono">
                          Activities & Societies
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((activity) => (
                            <Chip key={activity} mono={false}>
                              {activity}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    )}

                    {showCoursework && ((
                      <div className="mt-6">
                        <div className="text-xs uppercase tracking-wide mb-2.5 text-mute font-mono">
                          Relevant coursework
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {COURSEWORK.map((c) => (
                            <Chip key={c} mono={false}>
                              {c}
                            </Chip>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
