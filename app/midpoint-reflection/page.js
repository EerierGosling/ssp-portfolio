import { content } from "@/app/lib/content";

export const metadata = { title: "Midpoint SSP Reflection" };

const order = ["atcs", "book-club", "echo-chambers", "breads-and-spreads", "bcyf", "sailing"];

export default function MidpointReflectionPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight mb-2" style={{ color: "var(--dark-brown)" }}>
          Midpoint SSP Reflection
        </h1>
      </header>

      {order.map((key) => {
        const { title, subtitle } = content[key];
        const body = content[key]["body-midpoint"];
        return (
          <section key={key} className="mb-12">
            <h2 className="text-2xl font-semibold mb-1" style={{ color: "var(--dark-brown)" }}>{title}</h2>
            <div className="prose max-w-none text-base leading-relaxed" style={{ color: "#3a2410" }}>
              {body}
            </div>
          </section>
        );
      })}
    </main>
  );
}
