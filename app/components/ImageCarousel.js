"use client";

import useEmblaCarousel from "embla-carousel-react";

function SingleImage({ img }) {
  return (
    <div style={{ height: "28rem" }} className="flex items-center justify-center">
      <img src={img.src} alt={img.alt ?? ""} className="h-full w-auto object-contain" />
    </div>
  );
}

export default function ImageCarousel({ images }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });

  if (!images.length) return null;
  if (images.length === 1) return <SingleImage img={images[0]} />;

  return (
    <div className="relative" style={{ height: "28rem" }}>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {images.map((img, i) => (
            <div key={i} className="flex-[0_0_100%] h-full flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt ?? ""}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl shadow-md"
        style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-white text-xl shadow-md"
        style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(4px)" }}
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
