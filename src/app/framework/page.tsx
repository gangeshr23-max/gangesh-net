import type { Metadata } from 'next';
import TransformationFramework from '@/components/sections/TransformationFramework';
import OperatingPrinciple from '@/components/sections/OperatingPrinciple';
import ExecutiveQuestions from '@/components/sections/ExecutiveQuestions';
import CallToAction from '@/components/sections/CallToAction';
export const metadata: Metadata={title:'Framework',description:'Manufacturing Performance Transformation Framework connecting assets, operations, people, data and technology to business value.'};
export default function FrameworkPage(){return <><section className="section bg-white"><div className="shell max-w-5xl"><div className="eyebrow">Framework</div><h1 className="display text-[clamp(3.5rem,7vw,7rem)] mt-5">Manufacturing performance is a system.</h1><p className="lead mt-7 max-w-3xl">Improvement becomes sustainable when the operating problem is examined across assets, operations, people, data, and technology—then connected to measurable business value.</p></div></section><TransformationFramework/><OperatingPrinciple/><ExecutiveQuestions/><CallToAction/></>}
