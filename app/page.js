import ImageCarousel from "@/app/components/ImageCarousel";
import { getImages } from "@/app/lib/getImages";
import shuffle from "@/app/lib/shuffle";

const folders = ["sailing", "breads-and-spreads", "atcs", "book-club", "echo-chambers", "bcyf", "home"];

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
          <p className="text-[0.8rem] italic" style={{ color: "var(--light-brown)" }}>
            You are asked to engage in an academic experience that can be organized individually or in a group setting with a significant element of reading and either academic or artistic presentations. Examples include choosing your own intellectual project, creating your own curriculum, or continuing what you are already doing: a class, the study of art or music leading to a show/recital, or a new intellectual endeavor.
          </p>
          <br />
          <p>
            <b className="font-semibold">Service Learning:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/bcyf">BCYF Coding Club</a>
          </p>
          <p className="text-[0.8rem] italic" style={{ color: "var(--light-brown)" }}>
            In completing this pillar, you will take part in an experience working with local and global communities that is intentional, reflective, and enriches your own SSP and engagement with others. You are encouraged to develop and/or deepen your leadership skills through engaging with communities outside of BB&N’s Upper School campus. In partnering with your local and global communities, you won’t only impact positive change within your community; you will better understand the root causes of critical social issues and your role within systems beyond your school and home communities.
          </p>
          <br />
          <p>
            <b className="font-semibold">New Experience:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/breads-and-spreads">Breads &amp; Spreads</a>
          </p>
          <p className="text-[0.8rem] italic" style={{ color: "var(--light-brown)" }}>
            A new experience challenges you in some meaningful way. A brand-new experience demands that you navigate through the unknown in order to foster individual growth and develop resilience. Therefore, this pillar asks you to try something that you have not learned before. Examples include a non-swimmer learning to swim or a student who has never performed as a part of a BB&N group participating in the Spring Play.
          </p>
          <br />
          <p>
            <b className="font-semibold">Wellness:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/sailing">Sailing</a>
          </p>
          <p className="text-[0.8rem] italic" style={{ color: "var(--light-brown)" }}>
            This pillar requires you to incorporate either a physical activity and/or a mindfulness practice into your project.  Examples of physical activities may include a team sport (participating, not managing), yoga, health and fitness, senior seminars, strength and conditioning, and others. Examples of activities with mindfulness as their primary purpose include meditation and the Mindful Living senior seminar.
          </p>
          <br />
          <p>
            <b className="font-semibold">Remaining Hours:</b> <a className="hover:underline" style={{ color: "var(--link)" }} href="/echo-chambers">Beyond our Echo Chambers: Understanding the Other</a> and <a className="hover:underline" style={{ color: "var(--link)" }} href="/book-club">Book Club</a>
          </p>
          <br />
          <p>
            We also have to read a book! I chose to read <a className="hover:underline" style={{ color: "var(--link)" }} href="/1984">1984 by George Orwell</a>. You can also find my <a className="hover:underline" style={{ color: "var(--link)" }} href="/midpoint-reflection">mid-SSP reflection</a> and <a className="hover:underline" style={{ color: "var(--link)" }} href="/final-reflection">final SSP reflection</a> on this website.
          </p>
          <br />
          <p className="text-[0.9rem] italic" style={{ color: "var(--light-brown)" }}>
            (I spent my spring doing a lot of other things too! I work for <a className="hover:underline" style={{ color: "var(--link)" }} href="https://hackclub.com">Hack Club</a> and I've been 
            running series of hackathons called <a className="hover:underline" style={{ color: "var(--link)" }} href="https://horizons.hackclub.com">Horizons</a>.{" "}
            The carousel of pictures below is a mix of pictures from both my SSP activities and things I did outside of SSP!)
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
