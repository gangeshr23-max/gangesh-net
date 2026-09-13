import type { Metadata } from 'next';
import CallToAction from '@/components/sections/CallToAction';

export const metadata: Metadata = {
  title: 'About',
  description: 'Professional background of Gangesh Vivekanandan, Manufacturing Transformation Consultant.',
};

const timeline = [
  ['2008–2013', 'Technology Operations', 'Technical support, network operations, incident response and business-critical systems.'],
  ['2013–2017', 'Enterprise Infrastructure', 'Data center, Linux, virtualization, availability, monitoring and infrastructure operations.'],
  ['2017–2019', 'Infrastructure Project Leadership', 'Project delivery, stakeholder coordination, infrastructure modernization and execution.'],
  ['2019–2023', 'Project & Transformation Leadership', 'Project management, Scrum, cross-functional delivery, risk, change and transformation execution.'],
  ['2024–Present', 'Industrial Technology & Manufacturing Transformation', 'Independent manufacturing consulting alongside industrial technology and implementation leadership.'],
];

export default function AboutPage() {
  return <>
    <section className="section">
      <div className="shell grid lg:grid-cols-[.8fr_1.2fr] gap-14 lg:gap-20">
        <div>
          <div className="eyebrow">About Gangesh</div>
          <h1 className="h2 mt-4">Technology.<br/>Execution.<br/>Transformation.<br/>Manufacturing.</h1>
        </div>
        <div className="max-w-3xl">
          <p className="lead">I work at the intersection of technology, execution, and manufacturing transformation.</p>
          <p className="lead mt-5">My professional journey spans 17+ years across technology operations, enterprise infrastructure, project and program delivery, cross-functional execution, and digital transformation. That foundation has shaped how I approach complex transformation: understand the problem, establish priorities, align the right capabilities, and move from strategy into execution.</p>
          <p className="lead mt-5">Today, I apply that experience to manufacturing—working with leaders to understand performance gaps, strengthen maintenance and reliability, improve operational performance, build workforce capability, and determine where industrial technology can create measurable business value.</p>
          <p className="lead mt-5">I don&apos;t begin with a product or technology. I begin with the operating problem, its business impact, and what needs to change.</p>
          <p className="lead mt-5">Where deeper engineering or specialist expertise is required, I bring the appropriate manufacturing, reliability, engineering, and technology specialists into the engagement while maintaining alignment between the business objective and execution.</p>
          <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-[var(--ink)]"><span className="text-xl" aria-hidden="true">🇲🇽 🇺🇸</span><span>Mexico &amp; United States</span></div>
        </div>
      </div>
    </section>

    <section className="section bg-[var(--paper-2)] border-y rule">
      <div className="shell">
        <div className="eyebrow">Professional journey</div>
        <h2 className="font-serif text-3xl md:text-4xl mt-4">Technology Operations → Enterprise Infrastructure → Project &amp; Program Leadership → Industrial Technology → Manufacturing Transformation</h2>
        <div className="mt-10 border-t rule">{timeline.map(([y,t,d]) => <div key={y} className="grid md:grid-cols-[180px_320px_1fr] gap-5 py-7 border-b rule"><div className="smallcaps">{y}</div><div className="font-serif text-2xl">{t}</div><div className="text-[var(--muted)] leading-relaxed">{d}</div></div>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="shell grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <div className="eyebrow">Career foundation</div>
          <h2 className="font-serif text-4xl mt-4">Built through technology, delivery and transformation.</h2>
          <p className="lead mt-5">My earlier roles progressed through network operations, data center engineering, Linux administration, virtualization and infrastructure project management before moving into project management, Scrum leadership, industrial technology and manufacturing transformation.</p>
        </div>
        <div>
          <div className="eyebrow">Education &amp; credentials</div>
          <div className="mt-5 border-t rule"><div className="py-5 border-b rule"><div className="font-semibold">Bachelor of Engineering — Electrical &amp; Electronics Engineering</div><div className="text-sm text-[var(--muted)] mt-1">KLN College of Engineering, Madurai, India</div></div>{['Professional Scrum Master','Microsoft Certified Azure Fundamentals','VMware Certified Associate – Data Center Virtualization','Red Hat Certified System Administrator'].map(x => <div className="py-4 border-b rule text-sm" key={x}>{x}</div>)}</div>
        </div>
      </div>
    </section>
    <CallToAction/>
  </>;
}
