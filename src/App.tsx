import React from "react"
import { Routes, Route } from "react-router"
import Header from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { WhyChooseSection } from "@/components/WhyChooseSection"
import { ServicesSection } from "@/components/ServicesSection"
import { ProcessSection } from "@/components/ProcessSection"
import { CalculatorSection } from "@/components/CalculatorSection"
import { LoanApplicationPage } from "@/components/LoanApplicationPage"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { Footer } from "@/components/Footer"
import { ContactPage } from "@/components/ContactPage"
import LoanFAQ from "./components/ui/Loan-Faqs"
import { CtaSection } from "@/components/CtaSection"
import { PartnersSection } from "@/components/PartnersSection"

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <PartnersSection />

      <AboutSection />

      <ServicesSection />
      <WhyChooseSection />

      <ProcessSection />

      <CalculatorSection />
      <TestimonialsSection />

      <LoanFAQ />

      <CtaSection />
    </>
  )
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col w-full overflow-hidden">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/apply"
          element={
            <div className="flex-grow py-8 bg-slate-50 flex items-center justify-center px-4">
              <LoanApplicationPage />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="flex-grow py-8 bg-slate-50 flex items-center justify-center px-4">
              <ContactPage />
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App

