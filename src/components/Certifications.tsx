import { Award, ExternalLink } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { CERTIFICATIONS } from "../data/content";
import type { Certification } from "../types";

function CertCard({ c }: { c: Certification }) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] h-full">
      {/* Top Row */}
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-ink text-bg">
          <Award size={18} />
        </div>

        {c.logos && (
          <div className="flex items-center gap-1">
            {c.logos.map((logo, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg border border-border bg-surface-alt flex items-center justify-center overflow-hidden"
              >
                <img
                  src={logo}
                  alt=""
                  className="w-9 h-9 object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <h3 className="text-sm font-semibold leading-snug font-display text-ink">
        {c.title}
      </h3>

      <p className="mt-1.5 text-[13px] font-body text-ink-soft">
        {c.issuer}
      </p>

      {/* Credential ID */}
      <div className="mt-4 pt-3 border-t border-border-soft flex items-center justify-between text-sm">
        <span className="text-mute">Credential ID</span>
        <span className="font-mono text-ink text-[12px] tracking-wide">
          {c.credentialId}
        </span>
      </div>

      <div className="flex-1" />

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-border-soft flex items-center justify-between">
        <span className="text-[11px] text-ink-soft font-mono">
          {c.date}
        </span>

        <a
          href={c.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] flex items-center gap-1 px-2.5 py-1 rounded-md border border-dashed border-border text-ink-soft font-body transition-colors hover:bg-black/[0.03]"
        >
          View <ExternalLink size={11} />
        </a>
      </div>
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <Reveal>
        <SectionHeading title="Licenses & Certifications" />
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c) => (
            <CertCard key={c.title} c={c} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}