import { useEffect, useRef, useState } from "react";
import type { TouchEvent as ReactTouchEvent } from "react";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { GALLERY } from "../data/content";
import type { GalleryItem } from "../types";

const SIZE_CLASSES: Record<NonNullable<GalleryItem["size"]>, string> = {
    wide: "w-[320px] sm:w-[420px] aspect-[4/3]",
    tall: "w-[220px] sm:w-[260px] aspect-[3/4]",
    square: "w-[260px] sm:w-[300px] aspect-square",
};

function GalleryTile({
    item,
    onOpen,
}: {
    item: GalleryItem;
    onOpen: () => void;
}) {
    const [imageFailed, setImageFailed] = useState(false);
    const showPhoto = !imageFailed;
    const sizeClass = SIZE_CLASSES[item.size ?? "square"];

    return (
        <button
            onClick={onOpen}
            className={`snap-start shrink-0 ${sizeClass} relative rounded-xl overflow-hidden border border-border text-left transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(18,18,18,0.15)] focus-visible:-translate-y-1`}
        >
            {showPhoto ? (
                <img
                    src={item.image}
                    alt={item.caption}
                    loading="lazy"
                    decoding="async"
                    onError={() => setImageFailed(true)}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.03]"
                />
            ) : (
                <div className="absolute inset-0 bg-surface-alt flex flex-col items-center justify-center gap-2 text-mute">
                    <ImageOff size={22} />
                    <span className="text-[11px] font-mono px-4 text-center">add a photo here</span>
                </div>
            )}

            {showPhoto && <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />}

            <div className={`absolute bottom-0 left-0 p-4 ${showPhoto ? "text-white" : "text-ink"}`}>
                {/* <span
                    className={`text-[10px] tracking-widest font-mono px-2 py-0.5 rounded-full ${showPhoto ? "bg-white/15 backdrop-blur-sm" : "bg-surface border border-border"
                        }`}
                >
                    {item.tag}
                </span> */}
                <p className="text-sm mt-2 leading-snug font-body max-w-[220px]">{item.caption}</p>
            </div>
        </button>
    );
}

function Lightbox({
    items,
    index,
    onClose,
    onNav,
}: {
    items: GalleryItem[];
    index: number;
    onClose: () => void;
    onNav: (dir: number) => void;
}) {
    const item = items[index];
    const touchStartX = useRef<number | null>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onNav(-1);
            if (e.key === "ArrowRight") onNav(1);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, onNav]);

    const handleTouchStart = (e: ReactTouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: ReactTouchEvent) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) onNav(delta > 0 ? -1 : 1);
        touchStartX.current = null;
    };

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8"
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
        >
            <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-3 text-white/80 hover:text-white transition-colors"
            >
                <X size={24} />
            </button>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNav(-1);
                }}
                aria-label="Previous"
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-white/70 hover:text-white transition-colors"
            >
                <ChevronLeft size={28} />
            </button>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onNav(1);
                }}
                aria-label="Next"
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-3 sm:p-4 text-white/70 hover:text-white transition-colors"
            >
                <ChevronRight size={28} />
            </button>

            <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] flex items-center justify-center">
                    <img src={item.image} alt={item.caption} className="w-full h-full object-cover" />
                </div>
                {/* <div className="mt-4 flex items-center gap-3 text-white/80 font-body">
                    <span className="text-[10px] tracking-widest font-mono px-2 py-0.5 rounded-full bg-white/10">
                        {item.tag}
                    </span> */}
                <p className="text-sm">{item.caption}</p>
            </div>
        </div>
    );
}

export default function Gallery() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const navigate = (dir: number) => {
        if (openIndex === null) return;
        const next = (openIndex + dir + GALLERY.length) % GALLERY.length;
        setOpenIndex(next);
    };

    const railRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const rail = railRef.current;
        if (!rail) return;

        let x = 0;
        let raf: number;
        let paused = false;
        let last = performance.now();

        const speed = 100; // pixels per second

        const animate = (time: number) => {
            const dt = (time - last) / 1000;
            last = time;

            if (!paused) {
                x -= speed * dt;

                const half = rail.scrollWidth / 2;

                if (-x >= half) {
                    x += half;
                }

                rail.style.transform = `translate3d(${x}px,0,0)`;
            }

            raf = requestAnimationFrame(animate);
        };

        raf = requestAnimationFrame(animate);

        const enter = () => (paused = true);
        const leave = () => (paused = false);

        rail.addEventListener("mouseenter", enter);
        rail.addEventListener("mouseleave", leave);

        return () => {
            cancelAnimationFrame(raf);
            rail.removeEventListener("mouseenter", enter);
            rail.removeEventListener("mouseleave", leave);
        };
    }, []);

    return (
        <section id="gallery" className="scroll-mt-16 py-20 px-5 sm:px-8 max-w-6xl mx-auto">
            <Reveal>
                <SectionHeading title="Gallery" />
            </Reveal>
            <Reveal delay={80}>
                <p className="text-sm mb-6 text-ink font-body"><strong>Beyond Academics</strong></p>
                <p className="text-sm mb-6 text-ink font-body">Hover on the Image to stop....</p>
            </Reveal>
            <Reveal delay={120}>
                <div className="relative overflow-hidden">
                    {/* left fade */}
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-bg to-transparent" />

                    {/* right fade */}
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-bg to-transparent" />

                    <div
                        ref={railRef}
                        className="
        flex
        gap-6
        w-max
        will-change-transform
        transform-gpu
        select-none
    "
                        style={{
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden",
                            transform: "translate3d(0,0,0)",
                        }}
                    >
                        {[...GALLERY, ...GALLERY].map((item, i) => (
                            <GalleryTile
                                key={`${item.image}-${i}`}
                                item={item}
                                onOpen={() => setOpenIndex(i % GALLERY.length)}
                            />
                        ))}
                    </div>
                </div>
            </Reveal>

            {openIndex !== null && (
                <Lightbox items={GALLERY} index={openIndex} onClose={() => setOpenIndex(null)} onNav={navigate} />
            )}

            <p className="mt-2 text-[11px] text-ink-soft font-body text-center">
                All photographs are personal and owned by me. No commercial use intended.
            </p>
        </section>
    );
}
