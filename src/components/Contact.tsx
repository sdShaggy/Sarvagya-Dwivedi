import { Mail } from "lucide-react";
import Reveal from "./ui/Reveal";
import { PROFILE } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <Reveal>
        <div className="rounded-2xl border border-border bg-surface p-10 sm:p-14 text-center relative overflow-hidden">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-3 font-display text-ink">Let's build something Together.</h2>
          <p className="max-w-md mx-auto text-sm sm:text-base mb-7 font-body text-ink-soft">
            Open to AI/ML engineering roles, research collaborations, interesting problems in applied
            machine learning and GenAI roles.
          </p>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium font-body bg-ink text-bg transition-transform hover:-translate-y-0.5"
          >
            <Mail size={15} /> {PROFILE.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
