import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface HRailProps {
  children: React.ReactNode;
  id?: string;
}

export default function HRail({ children, id }: HRailProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        id={id}
        className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {children}
      </div>
      <div className="hidden sm:flex items-center gap-2 mt-2 justify-end">
        <button
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
          className="w-9 h-9 rounded-full border border-border text-ink flex items-center justify-center transition-colors hover:bg-black/[0.04]"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
          className="w-9 h-9 rounded-full border border-border text-ink flex items-center justify-center transition-colors hover:bg-black/[0.04]"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
