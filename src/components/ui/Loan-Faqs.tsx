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
        <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6">

                {/* Heading */}

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

                {/* Content */}

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Card */}

                    <div className="rounded-3xl bg-gradient-to-br from-red-600 to-red-500 text-white p-10 shadow-2xl sticky top-24">

                        <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                            <PhoneCall size={40} />
                        </div>

                        <h3 className="mt-8 text-3xl font-bold">
                            Need More Help?
                        </h3>

                        <p className="mt-5 text-red-100 leading-8">
                            Our loan experts are ready to guide you through the
                            application process and answer all your questions.
                        </p>

                        <div className="space-y-5 mt-10">

                            <div className="flex items-center gap-4">
                                <ShieldCheck />
                                <span>100% Secure Process</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <Clock3 />
                                <span>Approval within 24 Hours*</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <PhoneCall />
                                <span>+91 98765 43210</span>
                            </div>

                        </div>

                        <button className="mt-10 w-full rounded-xl bg-white text-red-600 py-4 font-semibold hover:bg-red-50 transition">
                            Contact Our Team
                        </button>

                    </div>

                    {/* FAQ */}

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

                </div>

            </div>
        </section>
    );
}