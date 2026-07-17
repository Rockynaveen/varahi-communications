import React, { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { WhyChooseSection } from "@/components/WhyChooseSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProcessSection } from "@/components/ProcessSection"
import { CalculatorSection } from "@/components/CalculatorSection"
import { LoanApplicationModal } from "@/components/LoanApplicationModal"
import LoanFAQ from "./components/ui/Loan-Faqs"

const App: React.FC = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-hidden">
      <Header onApplyClick={() => setIsApplyModalOpen(true)} />
      <HeroSection onApplyClick={() => setIsApplyModalOpen(true)} />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProcessSection />
      <CalculatorSection />

      <LoanApplicationModal isOpen={isApplyModalOpen} onClose={() => setIsApplyModalOpen(false)} />
      <LoanFAQ />

      <footer className="bg-pearo-dark text-gray-400 py-12 px-6 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} Varahi Communications. Designed with Shadcn UI & Tailwind CSS.
            </p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

