import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Discuss a manufacturing challenge with Gangesh Vivekanandan.',
};

const fieldClass = 'mt-2 w-full border border-[var(--line)] bg-[var(--surface-raised)] px-4 py-3.5 text-[var(--ink)] outline-none transition placeholder:text-[#718794] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]';

export default function ContactPage() {
  return <>
    <section className="section">
      <div className="shell grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-20 items-start">
        <div>
          <div className="eyebrow">Contact</div>
          <h1 className="display text-[clamp(3.5rem,6.2vw,6.2rem)] mt-5">Discuss a manufacturing challenge.</h1>
          <p className="lead mt-7">Whether the challenge involves reliability, operational performance, cost, workforce capability, or industrial technology, a productive conversation begins with understanding the problem and its business impact.</p>
          <p className="lead mt-5">Share the challenge you&apos;re working through and the outcome you&apos;re trying to achieve.</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <a href="mailto:connect@gangesh.net" className="contact-card"><span className="smallcaps">Email</span><strong>connect@gangesh.net</strong><span>General inquiries</span></a>
            <a href="mailto:consulting@gangesh.net" className="contact-card"><span className="smallcaps">Consulting</span><strong>consulting@gangesh.net</strong><span>Consulting opportunities</span></a>
            <div className="contact-card"><span className="smallcaps">Focus</span><strong><span aria-hidden="true">🇲🇽 🇺🇸</span> Mexico &amp; United States</strong><span>Client &amp; market focus</span></div>
            <a href="https://www.linkedin.com/in/gangeshr23" target="_blank" rel="noreferrer" className="contact-card"><span className="smallcaps">LinkedIn</span><strong>Gangesh Vivekanandan</strong><span>Connect on LinkedIn</span></a>
          </div>
        </div>

        <form action="mailto:connect@gangesh.net" method="post" encType="text/plain" className="border border-[var(--line)] bg-[var(--paper-2)] p-6 md:p-9 lg:p-10 shadow-[0_24px_70px_rgba(0,0,0,.16)]">
          <div className="grid sm:grid-cols-2 gap-x-5 gap-y-6">
            <label className="form-label">Name *<input required name="name" type="text" placeholder="Your name" className={fieldClass}/></label>
            <label className="form-label">Company<input name="company" type="text" placeholder="Company name" className={fieldClass}/></label>
            <label className="form-label">Job Title<input name="title" type="text" placeholder="Your job title" className={fieldClass}/></label>
            <label className="form-label">Business Email *<input required name="email" type="email" placeholder="yourname@company.com" className={fieldClass}/></label>
            <label className="form-label">Country<input name="country" type="text" placeholder="Country" className={fieldClass}/></label>
            <label className="form-label">Primary Manufacturing Challenge<input name="challenge" type="text" placeholder="Downtime, cost, workforce..." className={fieldClass}/></label>
          </div>
          <label className="form-label block mt-6">Message *<textarea required name="message" rows={7} placeholder="Tell me about the challenge, current situation, and the outcome you're looking to achieve..." className={fieldClass}/></label>
          <button type="submit" className="btn-primary mt-7 w-full">Start a Conversation →</button>
          <p className="text-xs leading-5 text-[var(--muted)] mt-4">Your information will only be used to respond to your inquiry. Submitting this form opens your email application.</p>
        </form>
      </div>
    </section>

    <section className="section-tight border-t rule bg-[var(--paper-2)]">
      <div className="shell flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div><div className="eyebrow">From challenges to outcomes</div><h2 className="font-serif text-3xl md:text-4xl mt-3">Start with the operating problem.</h2></div>
        <p className="max-w-xl text-[var(--muted)] leading-7">The objective is to understand what is limiting performance, determine what should change first, and define a practical path from assessment into execution.</p>
      </div>
    </section>
  </>;
}
