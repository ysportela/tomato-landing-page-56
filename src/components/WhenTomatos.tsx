import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    label: "ORIGIN",
    text: 'Tomatoes originated in the Andes Mountains of South America and were first domesticated in pre-Columbian Mexico by Indigenous peoples. The word "tomato" comes from the Nahuatl (Aztec) word tomatl.',
  },
  {
    label: "1500s",
    text: "Spanish explorers brought tomatoes to Europe in the early 1500s. At first, Europeans were suspicious of them — many thought they were poisonous because they're part of the nightshade family (which includes deadly plants like belladonna).",
  },
  {
    label: "1600s",
    text: "For a long time in Europe, tomatoes were grown mainly as ornamental plants — beautiful and intriguing, but still rarely eaten",
  },
  {
    label: "1692",
    text: "Tomatoes only became beloved as food in Italy in the 17th–18th century, especially in sauces and Mediterranean cooking. Early cookbooks from Naples with tomato sauce recipes date back to 1692.",
  },
  {
    label: "1820s",
    text: "Even in North America, tomatoes weren't widely eaten until the early 1800s — some people still feared they were poisonous as late as the 1820s.",
  },
];

const WhenTomatos = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  // Timeline dot positions (percentage across the full width)
  const dotPositions = [15, 30, 45, 60, 75];

  // Calculate the offset so the active dot is roughly at ~35% from left
  const targetPercent = 35;
  const offset = targetPercent - dotPositions[current];

  return (
    <section className="relative h-screen w-full bg-timeline-bg overflow-hidden flex flex-col">
      {/* Title */}
      <div className="flex justify-end pt-16 pr-24">
        <h2 className="text-2xl font-bold text-timeline-text">When Tomatos?</h2>
      </div>

      {/* Timeline */}
      <div className="relative mt-16 w-full h-[2px]">
        {/* The moving timeline container */}
        <div
          className="absolute h-full transition-transform duration-700 ease-in-out"
          style={{
            width: "200%",
            left: "-50%",
            transform: `translateX(${offset}%)`,
          }}
        >
          {/* Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-timeline-line -translate-y-1/2" />

          {/* Dots */}
          {slides.map((_, i) => {
            const isActive = i === current;
            const pos = dotPositions[i];
            return (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2"
                style={{ left: `${(pos + 50) / 2}%` }}
              >
                <div
                  className={`rounded-full transition-all duration-500 ${
                    isActive
                      ? "w-[14px] h-[14px] bg-timeline-dot-active"
                      : "w-[10px] h-[10px] bg-timeline-line"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Content area */}
      <div className="flex flex-1 items-center px-8 md:px-24 mt-8">
        <div className="flex w-full items-start justify-between gap-16">
          {/* Big label */}
          <div className="flex-shrink-0">
            <span
              className="text-[120px] md:text-[180px] font-bold leading-none tracking-tight text-timeline-big-text select-none"
              style={{ opacity: 0.5 }}
            >
              {slides[current].label}
            </span>
          </div>

          {/* Description */}
          <div className="max-w-sm pt-8">
            <p className="text-sm leading-relaxed text-timeline-text text-justify">
              {slides[current].text}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center gap-12 px-8 md:px-24 pb-12">
        <button
          onClick={prev}
          disabled={current === 0}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-opacity ${
            current === 0 ? "bg-timeline-line opacity-50" : "bg-timeline-text"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-timeline-bg" />
        </button>
        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-opacity ${
            current === slides.length - 1 ? "bg-timeline-line opacity-50" : "bg-timeline-text"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-timeline-bg" />
        </button>
      </div>
    </section>
  );
};

export default WhenTomatos;
