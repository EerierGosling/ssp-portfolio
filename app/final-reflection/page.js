import { content } from "@/app/lib/content";
import ImageCarousel from "@/app/components/ImageCarousel";
import { getImages } from "@/app/lib/getImages";
import shuffle from "@/app/lib/shuffle";

export const metadata = { title: "Final SSP Reflection" };

const order = ["atcs", "book-club", "echo-chambers", "breads-and-spreads", "bcyf", "sailing", "1984", "reflection"];

const folders = ["sailing", "breads-and-spreads", "atcs", "book-club", "echo-chambers", "bcyf"];

export default function FinalReflectionPage() {
  const images = shuffle(folders.flatMap((f) => getImages(f)));

  return (
    <div className="flex-1 w-full">
      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <header className="mb-10">
          <h1 className="text-4xl font-semibold tracking-tight mb-2" style={{ color: "var(--dark-brown)" }}>
            Final SSP Reflection
          </h1>
        </header>

        {order.map((key) => {
          const { title, body } = content[key];
          return (
            <section key={key} className="mb-12">
              {title && <h2 className="text-2xl font-semibold mb-1" style={{ color: "var(--dark-brown)" }}>{title}</h2>}
              <div className="prose max-w-none text-base leading-relaxed" style={{ color: "#3a2410" }}>
                {body}
              </div>
            </section>
          );
        })}
      </main>

      <section
        className="w-full py-12"
        style={{
          backgroundColor: "var(--light-blue)",
          backgroundImage: "url('/paper.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <ImageCarousel images={images} />
      </section>
    </div>
  );
}
