"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/about"], ["Framework", "/framework"], ["Expertise", "/expertise"],
  ["Approach", "/approach"], ["Consulting", "/consulting"], ["Insights", "/insights"]
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b rule bg-[rgba(7,21,33,.94)] backdrop-blur">
      <div className="shell min-h-20 py-3 flex items-center justify-between gap-6">
        <Link href="/" className="leading-tight shrink-0" onClick={() => setOpen(false)}>
          <div className="font-bold tracking-[.07em] text-base md:text-lg">GANGESH VIVEKANANDAN</div>
          <div className="text-sm text-[var(--accent)] mt-1">Manufacturing Transformation Consultant</div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:text-[var(--accent)]">{label}</Link>)}
          <Link className="btn-primary" href="/contact">Start a Conversation</Link>
        </nav>
        <button aria-label="Toggle navigation" aria-expanded={open} className="lg:hidden border rule px-3 py-2 text-sm font-bold" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t rule bg-[var(--paper)]">
          <div className="shell py-5 flex flex-col gap-4 text-sm font-semibold">
            {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
            <Link className="btn-primary mt-2" href="/contact" onClick={() => setOpen(false)}>Start a Conversation</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
