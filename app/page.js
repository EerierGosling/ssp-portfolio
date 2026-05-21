import ImageCarousel from "@/app/components/ImageCarousel";
import { getImages } from "@/app/lib/getImages";

const folders = ["sailing", "breads-and-spreads", "atcs", "book-club", "echo-chambers", "bcyf", "home"];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Home() {
  const images = shuffle(folders.flatMap((f) => getImages(f)));

  return (
    <div className="flex-1 w-full">
      <main className="mx-auto w-full max-w-3xl px-6 py-16">
        <header className="mb-10">
          <h1
            className="text-5xl font-semibold tracking-tight mb-2"
            style={{ color: "var(--dark-brown)" }}
          >
            Senior Spring Project Portfolio
          </h1>
          <p className="text-lg" style={{ color: "var(--light-brown)" }}>
            Sofia Egan · BB&amp;N Class of 2026
          </p>
        </header>

        <section className="prose max-w-none text-base leading-relaxed" style={{ color: "#3a2410" }}>
          <p className="text-xl font-medium">
            Hey! I'm Sofia.
          </p>
          <br />
          <p>
            This is my portfolio for my Senior Spring Project! At Buckingham Browne &amp; Nichols School, all seniors spend the spring trimester doing activities of their choosing for 40+ hours a week to fulfill a set of pillars: Intellectual Engagement, Service Learning, New Experience, and Wellness.
          </p>
          <br />
          <p className="text-lg font-medium">
            The activities I chose are:
          </p>
          <br />
          <p>
            <b className="font-semibold">Intellectual Engagement:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/atcs">Advanced Topics in Computer Science</a>
          </p>
          <br />
          <p>
            <b className="font-semibold">Service Learning:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/bcyf">BCYF Coding Club</a>
          </p>
          <br />
          <p>
            <b className="font-semibold">New Experience:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/breads-and-spreads">Breads &amp; Spreads</a>
          </p>
          <br />
          <p>
            <b className="font-semibold">Wellness:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/sailing">Sailing</a>
          </p>
          <br />
          <p>
            <b className="font-semibold">Remaining Hours:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/echo-chambers">Beyond our Echo Chambers: Understanding the Other</a> and <a className="hover:underline" style={{ color: "var(--link)" }} href="/book-club">Book Club</a>
          </p>
          <br />
          <p>
            We also have to read a book! I chose to read <a className="hover:underline" style={{ color: "var(--link)" }} href="/1984">1984 by George Orwell</a>. You can also find my <a className="hover:underline" style={{ color: "var(--link)" }} href="/mid-ssp">mid-SSP reflection</a> and <a className="hover:underline" style={{ color: "var(--link)" }} href="/final-ssp">final SSP reflection</a> on this website.
          </p>
          <br />
          <p className="text-[0.9rem] italic" style={{ color: "var(--light-brown)" }}>
            (I spent my spring doing a lot of other things too! I work for <a className="hover:underline" style={{ color: "var(--link)" }} href="https://hackclub.com">Hack Club</a> and I've been running series of hackathons called <a className="hover:underline" style={{ color: "var(--link)" }} href="https://horizons.hackclub.com">Horizons</a>.)
          </p>
        </section>
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
