import ImageCarousel from "@/app/components/ImageCarousel";

export default function ActivityPage({ title, subtitle, body, images = [] }) {
  return (
    <div className="flex-1 w-full">
      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <header className="mb-10">
          <h1
            className="text-4xl font-semibold tracking-tight mb-2"
            style={{ color: "var(--dark-brown)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg" style={{ color: "var(--light-brown)" }}>
              {subtitle}
            </p>
          )}
        </header>

        {body && (
          <section className="prose max-w-none text-base leading-relaxed" style={{ color: "#3a2410" }}>
            {body}
          </section>
        )}
      </main>

      {images.length > 0 && (
        <section className="w-full py-12" style={{ backgroundColor: "var(--light-blue)" }}>
          <div className="mx-auto w-full max-w-3xl px-6">
            <ImageCarousel images={images} />
          </div>
        </section>
      )}
    </div>
  );
}
