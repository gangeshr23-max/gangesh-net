const items = [
  {
    value: "17+ Years",
    label: "Technology, Delivery & Transformation",
  },
  {
    value: "Manufacturing Focus",
    label: "Reliability • Performance • Cost",
  },
  {
    value: "Mexico + U.S.",
    label: "Client & Market Focus",
  },
  {
    value: "Technology → Transformation → Manufacturing",
    label: "Professional Evolution",
  },
];

export default function Credibility() {
  return (
    <section className="border-y border-border bg-[#0B1D2A]">
      <div className="mx-auto grid max-w-[1480px] md:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.value}
            className="border-b border-border px-8 py-10 md:border-r lg:border-b-0"
          >
            <p className="font-serif text-2xl leading-tight text-foreground">
              {item.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
