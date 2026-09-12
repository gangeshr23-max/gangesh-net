const specialists = [
  "Manufacturing SMEs",
  "Reliability Professionals",
  "Engineering Specialists",
  "Technology Providers",
  "System Integrators",
  "Implementation Partners",
];

export default function SpecialistEcosystem() {
  return (
    <section className="border-t border-border bg-[#0B1D2A]">
      <div className="mx-auto max-w-[1480px] px-6 py-24 md:px-8 lg:px-12 lg:py-32">

        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            Specialist Ecosystem
          </p>

          <h2 className="font-serif text-4xl leading-[1.02] tracking-[-0.025em] text-foreground md:text-6xl">
            The right expertise for the right problem.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">
            Manufacturing transformation often requires multidisciplinary
            expertise. Where specialized capabilities are required, I bring
            together the appropriate specialists and partners for the challenge.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((specialist) => (
            <div
              key={specialist}
              className="border border-border px-6 py-8 text-center font-serif text-xl text-foreground"
            >
              {specialist}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-muted">
          My role is to structure the problem, establish priorities, bring
          together the appropriate expertise, and maintain alignment between
          business objectives and execution.
        </p>

      </div>
    </section>
  );
}
