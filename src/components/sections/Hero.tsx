import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto max-w-[1480px] px-6 py-16 md:px-8 md:py-20 lg:px-12 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 xl:gap-20">
          <div className="max-w-4xl">
            <p className="mb-7 text-[11px] font-semibold uppercase tracking-[0.24em] text-accent md:text-xs">Manufacturing Transformation Consultant</p>
            <h1 className="font-serif text-[3.35rem] font-medium leading-[0.96] tracking-[-0.035em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[5.7rem]">Building more reliable, efficient and future-ready manufacturing operations.</h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-muted md:text-lg">Helping manufacturing leaders improve asset reliability, operational performance, cost efficiency, workforce capability, and technology adoption through practical, structured transformation.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[#071521] transition-opacity hover:opacity-85">Discuss a Manufacturing Challenge <span className="ml-2" aria-hidden="true">→</span></Link>
              <Link href="/approach" className="inline-flex min-h-12 items-center justify-center border border-[var(--line)] px-6 py-3 text-sm font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--paper-2)]">Explore My Approach</Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:ml-auto xl:max-w-[420px]">
            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--line)] bg-[var(--paper-2)]">
              <Image src="/gangesh-vivekanandan.png" alt="Gangesh Vivekanandan, Manufacturing Transformation Consultant" fill priority sizes="(max-width: 1024px) 82vw, 30vw" className="object-cover object-center" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-6 border-t border-[var(--line)] pt-4">
              <div><p className="text-sm font-semibold text-foreground">Gangesh Vivekanandan</p><p className="mt-1 text-xs leading-5 text-muted">Manufacturing Transformation Consultant</p></div>
              <p className="text-right text-xs leading-5 text-muted"><span aria-hidden="true">🇲🇽 🇺🇸</span><br/>Mexico &amp; United States</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
