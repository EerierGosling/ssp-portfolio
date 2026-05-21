const REPO = "https://github.com/EerierGosling/ssp-portfolio";

export default function Footer() {
  const sha = process.env.VERCEL_GIT_COMMIT_SHA;
  const short = sha ? sha.slice(0, 7) : null;

  return (
    <footer
      className="w-full py-8 px-6 mt-auto"
      style={{ backgroundColor: "#0f2035", color: "rgba(255,255,255,0.75)" }}
    >
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold text-sm">Sofia Egan</p>
          <p className="text-xs mt-0.5">Buckingham Browne &amp; Nichols School · Class of 2026</p>
        </div>

        <p className="text-xs text-center sm:text-right" style={{ color: "rgba(255,255,255,0.5)" }}>
          {short && (
            <>
              Commit{" "}
              <a
                href={`${REPO}/commit/${sha}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {short}
              </a>
              {", "}
            </>
          )}
          open source at{" "}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            EerierGosling/ssp-portfolio
          </a>
        </p>
      </div>
    </footer>
  );
}
