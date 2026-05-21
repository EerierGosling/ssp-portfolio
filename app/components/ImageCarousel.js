"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

function SingleImage({ img }) {
  return (
    <div className="h-60 sm:h-80 md:h-[28rem] flex items-center justify-center">
      <img src={img.src} alt={img.alt ?? ""} className="h-full w-auto object-contain" />
    </div>
  );
}

export default function ImageCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") emblaApi?.scrollPrev();
      if (e.key === "ArrowRight") emblaApi?.scrollNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [emblaApi]);

  if (!images.length) return null;
  if (images.length === 1) return <SingleImage img={images[0]} />;

  return (
    <div className="relative h-70 sm:h-80 md:h-[28rem]">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="h-full shrink-0"
              style={{ flex: "0 0 750px" }}
            >
              <img
                src={img.src}
                alt={img.alt ?? ""}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 sm:left-10 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl shadow-md"
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 sm:right-10 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl shadow-md"
        style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
