import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--deep)] text-[var(--ink)] pt-16 pb-8">
      <div className="shell">
        <div className="grid md:grid-cols-[1.3fr_.7fr_.7fr] gap-10 pb-12 border-b border-white/15">
          <div>
            <div className="text-sm tracking-[.12em] font-bold">GANGESH VIVEKANANDAN</div>
            <p className="mt-3 text-[var(--muted)] max-w-md">Manufacturing Transformation Consultant focused on reliability, operational performance, cost efficiency, workforce capability, and practical technology adoption.</p>
          </div>
          <div>
            <div className="smallcaps !text-[var(--muted)] mb-4">Navigate</div>
            <div className="grid gap-2 text-sm"><Link href="/about">About</Link><Link href="/framework">Framework</Link><Link href="/consulting">Consulting</Link><Link href="/contact">Contact</Link></div>
          </div>
          <div>
            <div className="smallcaps !text-[var(--muted)] mb-4">Connect</div>
            <div className="grid gap-2 text-sm"><a href="mailto:connect@gangesh.net">Email</a><a href="https://www.linkedin.com/in/gangeshr23" target="_blank" rel="noreferrer">LinkedIn</a><span className="text-[var(--muted)]">Mexico + United States</span></div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row gap-3 justify-between text-xs text-[var(--muted)]">
          <span>© {new Date().getFullYear()} Gangesh Vivekanandan.</span><span>gangesh.net</span>
        </div>
      </div>
    </footer>
  );
}
