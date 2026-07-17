import React from "react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-[#f9fafb] py-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1 (Cards Grid) - Renders on Left on Desktop, Bottom on Mobile */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              
              <div className="flex flex-col gap-6 sm:pt-12">
                {/* Guarantee Card */}
                <ScrollReveal animation="fade-up" delay={50} duration={600}>
                  <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100/50 why-choose-card group cursor-pointer overflow-hidden z-10">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-[#ee3124]/5 rounded-b-[100px] z-0 pointer-events-none transition-all duration-500 group-hover:bg-[#ee3124]/10 group-hover:scale-110"></div>
                    
                    <div className="relative w-20 h-20 mx-auto rounded-full bg-white border border-red-100 shadow-sm flex items-center justify-center text-[#ee3124] mb-6 z-10 icon-circle">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-gray-900 text-xl font-bold mb-3 text-center z-10 relative card-title">
                      Guarantee
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed text-center font-light z-10 relative group-hover:text-gray-650 transition-colors duration-300">
                      We promise absolute transparency and clarity in all operations. No hidden fees or surprises.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Reliability Card */}
                <ScrollReveal animation="fade-up" delay={200} duration={600}>
                  <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100/50 why-choose-card group cursor-pointer overflow-hidden z-10">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-[#ee3124]/5 rounded-b-[100px] z-0 pointer-events-none transition-all duration-500 group-hover:bg-[#ee3124]/10 group-hover:scale-110"></div>
                    
                    <div className="relative w-20 h-20 mx-auto rounded-full bg-white border border-red-100 shadow-sm flex items-center justify-center text-[#ee3124] mb-6 z-10 icon-circle">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-gray-955 text-xl font-bold mb-3 text-center z-10 relative card-title">
                      Reliability
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed text-center font-light z-10 relative group-hover:text-gray-655 transition-colors duration-300">
                      Thousands of satisfied customers trust us for secure, safe, and regulated credit solutions.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

              <div className="flex flex-col gap-6">
                {/* Speed Card */}
                <ScrollReveal animation="fade-up" delay={120} duration={600}>
                  <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100/50 why-choose-card group cursor-pointer overflow-hidden z-10">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-[#ee3124]/5 rounded-b-[100px] z-0 pointer-events-none transition-all duration-500 group-hover:bg-[#ee3124]/10 group-hover:scale-110"></div>
                    
                    <div className="relative w-20 h-20 mx-auto rounded-full bg-white border border-red-100 shadow-sm flex items-center justify-center text-[#ee3124] mb-6 z-10 icon-circle">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-gray-955 text-xl font-bold mb-3 text-center z-10 relative card-title">
                      Speed
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed text-center font-light z-10 relative group-hover:text-gray-655 transition-colors duration-300">
                      Get rapid approval and swift processing of your application within 24 to 48 hours.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Experience Card */}
                <ScrollReveal animation="fade-up" delay={280} duration={600}>
                  <div className="relative bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100/50 why-choose-card group cursor-pointer overflow-hidden z-10">
                    <div className="absolute top-0 left-0 right-0 h-16 bg-[#ee3124]/5 rounded-b-[100px] z-0 pointer-events-none transition-all duration-500 group-hover:bg-[#ee3124]/10 group-hover:scale-110"></div>
                    
                    <div className="relative w-20 h-20 mx-auto rounded-full bg-white border border-red-100 shadow-sm flex items-center justify-center text-[#ee3124] mb-6 z-10 icon-circle">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-gray-955 text-xl font-bold mb-3 text-center z-10 relative card-title">
                      Experience
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed text-center font-light z-10 relative group-hover:text-gray-655 transition-colors duration-300">
                      Over 25 years of expert loan advisory and structured finance delivery in the market.
                    </p>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>

          {/* Column 2 (Text & Video) - Renders on Right on Desktop, Top on Mobile */}
          <div className="lg:col-span-6 flex flex-col justify-start text-left order-1 lg:order-2">
            <ScrollReveal animation="fade-left" duration={700}>
              <span className="text-red-500 text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block">
                Transparent process
              </span>
              
              <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6 uppercase">
                Why people choose us
              </h2>
              
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light mb-8">
                Varahi Communications stands out by combining customer-first loan support with modern, quick online application flows. Our mission is to make finance accessible, quick, and fair for everyone.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" delay={200} duration={800}>
              <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-3xl border-8 border-white bg-slate-200 shadow-xl overflow-hidden group select-none hover-3d cursor-pointer">
                <img
                  src="/why_choose_us.png"
                  alt="Why Choose Varahi Communications"
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center text-red-500 shadow-2xl cursor-pointer group active:scale-95 duration-200 transition-all hover:bg-red-500 hover:text-white z-20 btn-3d"
                    aria-label="Play video presentation"
                  >
                    <span className="absolute inset-0 rounded-full bg-red-500/30 animate-ripple z-0"></span>
                    <span className="absolute inset-0 rounded-full bg-red-500/20 animate-ripple [animation-delay:0.5s] z-0"></span>
                    
                    <svg className="w-8 h-8 fill-current relative z-10 translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  )
}
export default WhyChooseSection
