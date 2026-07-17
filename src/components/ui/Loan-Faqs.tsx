"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    HelpCircle,
    PhoneCall,
    ShieldCheck,
    Clock3,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
    {
        question: "Who is eligible to apply for a loan?",
        answer:
            "Applicants who meet the required age, income, employment, and credit eligibility criteria can apply. Eligibility may vary depending on the loan type.",
    },
    {
        question: "What documents are required?",
        answer:
            "You will typically need Aadhaar Card, PAN Card, Address Proof, Income Proof, Salary Slips, Bank Statements, and Passport Size Photograph.",
    },
    {
        question: "How long does loan approval take?",
        answer:
            "Most loan applications are processed within 24–48 hours after successful document verification.",
    },
    {
        question: "Can I repay my loan before the tenure ends?",
        answer:
            "Yes. You can prepay or foreclose your loan based on the terms and conditions of your loan agreement.",
    },
    {
        question: "Is my personal information secure?",
        answer:
            "Absolutely. We use industry-standard encryption and security measures to protect your personal and financial information.",
    },
    {
        question: "How can I apply for a loan?",
        answer:
            "Simply fill out the online application form, upload the required documents, and our loan experts will contact you shortly.",
    },
];

export default function LoanFAQ() {
    return (
        <section id="faq-section" className="bg-gray-50 py-10 scroll-mt-20">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <ScrollReveal animation="fade-up">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                            <HelpCircle size={16} />
                            Frequently Asked Questions
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
                            Everything You Need To Know
                        </h2>

                        <p className="mt-5 text-gray-600 text-lg">
                            Find answers to the most common questions regarding loan
                            eligibility, documentation, approval process, repayment,
                            and more.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Card */}
                    <ScrollReveal animation="fade-left" delay={150} duration={800} className="h-full">
                        <div 
                            className="rounded-3xl relative text-white p-8 md:p-10 shadow-2xl sticky top-24 overflow-hidden min-h-[560px] flex flex-col justify-between hover-3d cursor-pointer"
                            style={{
                                backgroundImage: "linear-gradient(to bottom, rgba(17, 24, 39, 0.45), rgba(17, 24, 39, 0.9)), url('https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop&q=80')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div>
                                <div className="w-16 h-16 rounded-full bg-[#ee3124] flex items-center justify-center shadow-lg shadow-[#ee3124]/30 animate-pulse">
                                    <PhoneCall size={28} />
                                </div>

                                <h3 className="mt-6 text-3xl font-extrabold tracking-tight">
                                    Need More Help?
                                </h3>

                                <p className="mt-4 text-gray-200 text-sm font-light leading-relaxed">
                                    Our loan experts are ready to guide you through the
                                    application process and answer all your questions.
                                </p>

                                <div className="space-y-3.5 mt-8">
                                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                                        <ShieldCheck className="text-[#ee3124] w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm font-semibold">100% Secure Process</span>
                                    </div>

                                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                                        <Clock3 className="text-[#ee3124] w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm font-semibold">Approval within 24 Hours*</span>
                                    </div>

                                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                                        <PhoneCall className="text-[#ee3124] w-5 h-5 flex-shrink-0" />
                                        <span className="text-sm font-semibold">+91 98765 43210</span>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-8 w-full rounded-xl bg-[#ee3124] text-white py-4 font-bold hover:bg-[#d8271c] active:scale-95 transition-all shadow-lg shadow-[#ee3124]/20 btn-3d">
                                Contact Our Team
                            </button>

                        </div>
                    </ScrollReveal>

                    {/* FAQ */}
                    <ScrollReveal animation="fade-right" delay={200} duration={800}>
                        <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-8">

                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                            >
                                {faqs.map((faq, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="border-b border-gray-200"
                                    >
                                        <AccordionTrigger className="text-left text-lg font-semibold hover:text-red-600 py-6">
                                            {faq.question}
                                        </AccordionTrigger>

                                        <AccordionContent className="pb-6 text-gray-600 leading-8">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>

                        </div>
                    </ScrollReveal>

                </div>

            </div>
        </section>
    );
}