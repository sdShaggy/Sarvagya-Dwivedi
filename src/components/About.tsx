import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto">
      <Reveal>
        <SectionHeading  title="About" />
      </Reveal>
      <div className="max-w-4xl">
        <Reveal delay={80}>
          <div className="space-y-4 text-base leading-relaxed font-body text-ink-soft">
            <p>
              I'm a fourth-year Computer Science undergraduate at Birla Institute of Technology, Mesra,
              graduating in 2027. My ML journey started with building things alongside friends in
              second year rather than through a formal course and that hands-on, hackathon-first path is
              still how I learn fastest.
            </p>
            <p>
              Most of my work sits at the intersection of applied machine learning and real deployment:
              forecasting pipelines, multimodal models that fuse text and image embeddings, and evaluation
              frameworks for AI systems. I care about models that could actually work, not just models that score well in a
              notebook.
            </p>
            <p>
              Longer term, I'm drawn to AI in Forensics, affective computing and human-computer interaction. Outside of code, I help run my college's
              ACM chapter and play competitive college-level tennis.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
