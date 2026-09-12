import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-t border-border bg-[#071521]">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-8 lg:px-12 lg:py-32">

        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">

          <div>
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
              About Me
            </p>

            <p className="max-w-sm font-serif text-3xl leading-[1.15] text-foreground md:text-4xl">
              Technology
              <span className="text-accent"> → </span>
              Execution
              <span className="text-accent"> → </span>
              Transformation
              <span className="text-accent"> → </span>
              Manufacturing
            </p>
          </div>

          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-foreground md:text-5xl lg:text-6xl">
              I connect technology, execution and transformation with the realities of manufacturing.
            </h2>

            <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-muted md:text-lg">
              <p>
                I bring 17+ years of professional experience across technology
                operations, enterprise infrastructure, project and program
                delivery, and transformation execution.
              </p>

              <p>
                Today, I apply that experience to manufacturing—helping leaders
                understand performance gaps, establish priorities, strengthen
                reliability and operations, and determine where technology can
                create measurable value.
              </p>

              <p>
                I don't begin with a product or a technology. I begin with the
                operating problem, its business impact, and what needs to change.
              </p>

              <p>
                When deeper engineering or specialist expertise is required, I
                bring the right people into the engagement and keep the work
                aligned with the operational objective.
              </p>
            </div>

            <p className="mt-10 max-w-3xl border-l-2 border-accent pl-6 font-serif text-2xl leading-snug text-foreground md:text-3xl">
              My focus is simple: identify what is limiting performance,
              determine what should change first, and help move the improvement
              from strategy into execution.
            </p>

            <Link
              href="/about"
              className="mt-10 inline-flex border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              More About My Background
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
