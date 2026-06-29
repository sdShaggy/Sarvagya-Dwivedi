import { FileText, MapPin } from "lucide-react";
import Reveal from "./ui/Reveal";
import { PROFILE } from "../data/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-16 pt-14 sm:pt-22 pb-16 sm:pb-24 px-5 sm:px-8 max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
        {/* Left */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs px-3 py-1.5  border-border text-ink font-mono mb-7">
              <span className="w-1.5 h-1.5 full bg-ink" />
              Open to AI/ML & Software Engineering Roles
            </div>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[2.6rem] sm:text-6xl md:text-7xl font-semibold leading-[1.02] tracking-tight font-display text-ink">
              {PROFILE.name}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed font-body text-ink-soft">
              {PROFILE.tagline} Long-term, interested in{" "}
              <span className="text-ink font-semibold">
                AI in Forensics, Affective Computing
              </span>{" "}
              and{" "}
              <span className="text-ink font-semibold">
                Human-Computer Interaction
              </span>
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div
              className="
                mt-8
                max-w-2xl
                rounded-2xl
                border border-border
                bg-white/40
                backdrop-blur-sm
                p-5
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(18,18,18,0.08)]
                ">

              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#D4B36A] to-transparent" />
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-[0.22em] text-ink-soft font-medium">
                  Featured Project
                </div>

                <span className="rounded-full border border-[#D4B36A]/40 bg-[#D4B36A]/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#B88B2E]">
                  Ongoing
                </span>
              </div>

              <h3 className="mt-3 text-xl font-display font-semibold text-ink">
                GAFIS - AI-Assisted Forensic Enhancement and Minutiae Localization in Partial Latent Fingerprints Using Pix2Pix Networks
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Developing an end-to-end AI-powered Automated Fingerprint Identification
                System (AFIS) that performs fingerprint enhancement, minutiae extraction,
                feature embedding and biometric matching using deep learning and computer
                vision. The system is designed for robust identification on degraded and
                real-world fingerprint datasets with applications in forensic and biometric
                authentication.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft"><strong>Guide:</strong> Dr. Ajit Kumar Keshri, Asst. Professor, Dept. of Computer Science and Engineering, BIT Mesra</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "PyTorch",
                  "OpenCV",
                  "Computer Vision",
                  "Deep Learning",
                  "Biometrics",
                  "GAN",
                  "Fingerprint Matching",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-xs text-ink-soft transition-colors hover:border-[#D4B36A]/40 hover:text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/sdShaggy/GAFIS",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#B88B2E] hover:gap-3 transition-all"
              >
                View on GitHub →
              </button>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-5 py-2.5 rounded-md text-sm font-medium bg-ink text-bg"
              >
                View Projects
              </button>

              <a
                href={PROFILE.resumeHref}
                className="px-5 py-2.5 rounded-md text-sm font-medium border border-border flex items-center gap-2"
              >
                <FileText size={15} />
                Resume
              </a>

              <div className="flex items-center gap-1.5 text-sm text-mute">
                <MapPin size={14} />
                {PROFILE.location}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right */}
        <Reveal delay={250}>
          <div className="flex justify-center lg:justify-center lg:-translate-y-20">
            <div className="group relative -mt-16 overflow-hidden rounded-3xl">
              <img
                src="images/personal/prof_linkedin.jpeg"
                alt={PROFILE.name}
                loading="eager"
                draggable={false}
                className="
          w-72 h-72
          lg:w-80 lg:h-80
          object-cover

          rounded-3xl
          border border-border

          grayscale-[35%]
          saturate-[80%]
          brightness-[0.98]
          contrast-[1.02]
         

          shadow-lg

          transform-gpu
          will-change-transform

          transition-[transform,filter,box-shadow]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:grayscale-0
          hover:saturate-100
          group-hover:brightness-100
          group-hover:scale-[1.03]
          group-hover:-translate-y-1
          group-hover:shadow-[0_24px_60px_rgba(18,18,18,0.18)]

          select-none
          cursor-pointer
        "
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
