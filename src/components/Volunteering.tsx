import { Medal, Users } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import {
  VOLUNTEERING,
  ACTIVITIES,
  Organizations,
} from "../data/content";

function ActivityCard({
  role,
  date,
  description,
  logo,
  icon: Icon,
}: {
  role: string;
  date?: string;
  description?: string;
  logo?: string;
  icon?: React.ElementType;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-5 py-5 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="w-11 h-11 rounded-lg border border-border bg-surface-alt flex items-center justify-center shrink-0 overflow-hidden">
        {logo ? (
          <img
            src={logo}
            alt={role}
            className="w-11 h-11 object-contain"
          />
        ) : Icon ? (
          <Icon size={18} className="text-ink" />
        ) : (
          <Medal size={18} className="text-ink" />
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-[15px] font-semibold leading-5 text-ink">
          {role}
        </p>

        {date && (
          <p className="mt-1 text-[12px] font-mono text-ink-soft">
            {date}
          </p>
        )}

        {description && (
          <p className="mt-3 text-[15px] leading-7 text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Volunteering */}
      <Reveal>
        <SectionHeading title="Volunteering" />
      </Reveal>

      <div className="grid grid-cols-1 gap-6 mt-8">
        {VOLUNTEERING.map((item, i) => (
          <Reveal key={item.role} delay={i * 60}>
            <ActivityCard
              role={item.role}
              date={item.date}
              description={item.description}
              logo={item.logo}
            />
          </Reveal>
        ))}
      </div>

      {/* Other Activities */}
      <Reveal delay={120}>
        <div className="mt-20">
          <SectionHeading title="Other Activities" />
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {ACTIVITIES.map((item, i) => (
          <Reveal key={item.role} delay={i * 60}>
            <ActivityCard
              role={item.role}
              date={item.date}
              icon={i === 0 ? Medal : Users}
            />
          </Reveal>
        ))}
      </div>

      {/* Organizations */}
      <Reveal delay={120}>
        <div className="mt-20">
          <SectionHeading title="Organizations" />
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-4 mt-8">
        {Organizations.map((item, i) => (
          <Reveal key={item.role} delay={i * 60}>
            <ActivityCard
              role={item.role}
              date={item.date}
              logo={item.logo}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}