import React from "react"
import { ShieldCheck, Zap, Percent, Headphones, Home, Car, GraduationCap, Briefcase, Users, IndianRupee, Clock, ArrowRight, Check } from "lucide-react"

interface HeroSectionProps {
  onApplyClick?: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick }) => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.04); opacity: 0.3; }
        }
        .animate-ring {
          animation: pulse-ring 8s ease-in-out infinite;
        }
      `}</style>

      {/* Main Hero Container */}
      <section className="relative bg-white pt-8 pb-20 md:pt-12 md:pb-24 w-full overflow-hidden z-20">

        {/* Background Dot Grid (Right side) */}
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.06] pointer-events-none z-0"
          style={{
            backgroundImage: "radial-gradient(#ee3124 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px"
          }}
        />

        {/* Decorative Concentric Rings and Dots around Family */}
        <div className="absolute right-[4%] top-[8%] w-[580px] h-[580px] rounded-full border border-red-100 pointer-events-none z-0 opacity-60" />
        <div className="absolute right-[2%] top-[6%] w-[620px] h-[620px] rounded-full border border-red-100/50 pointer-events-none z-0 opacity-40 animate-ring" />

        {/* Floating Red Solid Circles */}
        <div className="absolute top-[18%] right-[39%] w-3 h-3 rounded-full bg-[#ee3124] opacity-85 pointer-events-none" />
        <div className="absolute bottom-[38%] right-[45%] w-2 h-2 rounded-full bg-[#ee3124] opacity-60 pointer-events-none" />
        <div className="absolute top-[62%] right-[5%] w-4 h-4 rounded-full bg-[#ee3124] opacity-75 pointer-events-none" />

        {/* Wave Background Layers at Bottom Left */}
        <div className="absolute bottom-0 left-0 w-full h-[520px] pointer-events-none z-0 overflow-hidden">
          {/* Light Pink/Red Accent Wave */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="none">
            <path d="M0,350 C400,280 700,500 1440,360 L1440,520 L0,520 Z" fill="#fee2e2" opacity="0.6" />
          </svg>
          {/* Main Red Accent Wave */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="none">
            <path d="M0,320 C360,220 600,520 1440,400 L1440,520 L0,520 Z" fill="#ee3124" />
          </svg>
          {/* White Accent line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 520" fill="none" preserveAspectRatio="none">
            <path d="M0,320 C360,220 600,520 1440,400" stroke="#ffffff" strokeWidth="8" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 max-w-[1440px]">

          {/* Top content section with Left Text and Right Family Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center pb-12 lg:pb-24">

              {/* Trusted Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full py-1.5 px-4 w-fit mb-8 shadow-sm">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#ee3124] text-white">
                  <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                </span>
                <span className="text-sm font-bold text-gray-700 tracking-wide">
                  Trusted by 50,000+ Customers
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-gray-950 text-5xl sm:text-6xl md:text-[68px] font-black tracking-tight leading-[1.05] mb-6 whitespace-pre-line">
                Your Dreams.<br />
                <span className="text-[#ee3124]">Our Loans.</span>
              </h1>

              {/* Description */}
              <p className="text-gray-500 text-base md:text-[17px] mb-8 leading-relaxed font-semibold max-w-xl">
                Fast, simple and hassle-free loans to help you achieve your goals. Because your dream deserves support.
              </p>

              {/* Bullet Features */}
              <div className="flex flex-wrap gap-x-8 gap-y-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ee3124] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-red-500/20">
                    <Zap className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-gray-900 leading-none">Quick</h4>
                    <p className="text-[11px] text-gray-400 font-bold mt-0.5">Approval</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ee3124] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-red-500/20">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-gray-900 leading-none">Secure &</h4>
                    <p className="text-[11px] text-gray-400 font-bold mt-0.5">Safe</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#ee3124] flex items-center justify-center text-white flex-shrink-0 shadow-sm shadow-red-500/20">
                    <Percent className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-gray-900 leading-none">Low Interest</h4>
                    <p className="text-[11px] text-gray-400 font-bold mt-0.5">Rates</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 items-center w-full max-w-md sm:max-w-none">
                <button 
                  onClick={onApplyClick}
                  className="bg-[#ee3124] hover:bg-[#d8271c] active:scale-95 text-white font-bold text-xs sm:text-base px-3 py-3.5 sm:px-7 sm:py-4 rounded-2xl shadow-lg shadow-red-500/10 flex items-center justify-center gap-1.5 sm:gap-2 transition-all hover:translate-x-1 duration-200 cursor-pointer text-center"
                >
                  Check Eligibility
                  <ArrowRight className="w-4 h-4 sm:w-5 h-5 flex-shrink-0" />
                </button>
                <button className="border-2 border-red-100 hover:border-[#ee3124] bg-white text-[#ee3124] font-bold text-xs sm:text-base px-3 py-3.5 sm:px-7 sm:py-4 rounded-2xl flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md text-center">
                  <Headphones className="w-4 h-4 sm:w-5 h-5 flex-shrink-0" />
                  Talk to Expert
                </button>
              </div>

            </div>

            {/* Right Column: Family Image in Red Circular Frame */}
            <div className="lg:col-span-7 relative flex justify-center lg:justify-end pb-12 lg:pb-24">

              {/* Circular Frame */}
              <div className="relative w-[400px] h-[400px] sm:w-[460px] sm:h-[460px] rounded-full overflow-hidden border-[10px] border-white shadow-2xl bg-white z-10">
                <img
                  src="/family_hero.png"
                  alt="Happy Indian Family"
                  className="w-full h-full object-cover scale-[1.08] translate-y-3"
                />
              </div>

              {/* Floating Card: "We're Here For You" */}
              <div className="absolute right-0 sm:-right-4 top-10 z-20 bg-white rounded-3xl shadow-xl p-5 border border-gray-50 flex flex-col items-center text-center w-[160px] animate-float">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#ee3124] flex items-center justify-center mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="text-[13px] font-black text-gray-950 leading-tight">
                  We're Here For You
                </h4>
                <p className="text-[10px] text-gray-400 font-bold mt-1 leading-normal">
                  Every Step of the Way
                </p>
                <div className="w-8 h-[3px] bg-[#ee3124] rounded-full mt-3" />
              </div>

            </div>

          </div>

          {/* Bottom Layout Row: Offset Loan Cards (overlapping the hero photo above) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-30 -mt-[140px] lg:-mt-[220px]">

            {/* Left 5 columns: empty offset to keep the left side open for the red wave and buttons above */}
            <div className="hidden lg:block lg:col-span-5" />

            {/* Right 7 columns: the 4 loan cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">

               {/* Card 1: Home Loan */}
              <div className="group bg-white rounded-[24px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-3.5 border border-gray-100 flex flex-col justify-between h-[160px]">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center mb-2">
                    <Home className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-gray-950 mb-0.5">Home Loan</h3>
                  <p className="text-[10px] text-gray-455 font-bold leading-tight">
                    Low Interest Rates
                  </p>
                  <p className="text-[10px] text-gray-500 font-extrabold mt-0.5">
                    Up to ₹5 Crore
                  </p>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); if (onApplyClick) onApplyClick(); }}
                  className="text-[11px] font-black text-[#ee3124] flex items-center gap-1 hover:gap-1.5 transition-all duration-200 w-fit"
                >
                  Apply Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Card 2: Car Loan */}
              <div className="group bg-white rounded-[24px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-3.5 border border-gray-100 flex flex-col justify-between h-[160px]">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center mb-2">
                    <Car className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-gray-950 mb-0.5">Car Loan</h3>
                  <p className="text-[10px] text-gray-455 font-bold leading-tight">
                    Quick Approval
                  </p>
                  <p className="text-[10px] text-gray-500 font-extrabold mt-0.5">
                    Up to 100% Funding
                  </p>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); if (onApplyClick) onApplyClick(); }}
                  className="text-[11px] font-black text-[#ee3124] flex items-center gap-1 hover:gap-1.5 transition-all duration-200 w-fit"
                >
                  Apply Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Card 3: Personal Loan */}
              <div className="group bg-white rounded-[24px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-3.5 border border-gray-100 flex flex-col justify-between h-[160px]">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center mb-2">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-gray-950 mb-0.5">Personal Loan</h3>
                  <p className="text-[10px] text-gray-455 font-bold leading-tight">
                    Unsecured Loan
                  </p>
                  <p className="text-[10px] text-gray-500 font-extrabold mt-0.5">
                    Up to ₹25 Lakhs
                  </p>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); if (onApplyClick) onApplyClick(); }}
                  className="text-[11px] font-black text-[#ee3124] flex items-center gap-1 hover:gap-1.5 transition-all duration-200 w-fit"
                >
                  Apply Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>

              {/* Card 4: Business Loan */}
              <div className="group bg-white rounded-[24px] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-3.5 border border-gray-100 flex flex-col justify-between h-[160px]">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center mb-2">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-black text-gray-950 mb-0.5">Business Loan</h3>
                  <p className="text-[10px] text-gray-455 font-bold leading-tight">
                    Grow Your Business
                  </p>
                  <p className="text-[10px] text-gray-500 font-extrabold mt-0.5">
                    Up to ₹50 Lakhs
                  </p>
                </div>
                <a 
                  href="#" 
                  onClick={(e) => { e.preventDefault(); if (onApplyClick) onApplyClick(); }}
                  className="text-[11px] font-black text-[#ee3124] flex items-center gap-1 hover:gap-1.5 transition-all duration-200 w-fit"
                >
                  Apply Now <ArrowRight className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

          {/* Statistics Bar Section (Full width, placed at the very bottom) */}
          <div className="relative z-30 mt-6 lg:mt-10 w-full">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 py-4 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">

              {/* Stat 1 */}
              <div className="flex items-center gap-3 py-1 justify-center lg:justify-start lg:px-4">
                <div className="w-11 h-11 rounded-full bg-[#ee3124] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-red-500/10">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-950 leading-none">50,000+</h3>
                  <p className="text-[11px] text-gray-400 font-bold mt-0.5">Happy Customers</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-3 py-1 pt-4 sm:pt-1 justify-center lg:justify-start lg:px-6">
                <div className="w-11 h-11 rounded-full bg-[#ee3124] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-red-500/10">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-950 leading-none">₹2,500 Cr+</h3>
                  <p className="text-[11px] text-gray-400 font-bold mt-0.5">Loans Disbursed</p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-3 py-1 pt-4 lg:pt-1 justify-center lg:justify-start lg:px-6">
                <div className="w-11 h-11 rounded-full bg-[#ee3124] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-red-500/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-950 leading-none">24 Hours</h3>
                  <p className="text-[11px] text-gray-400 font-bold mt-0.5">Quick Approval</p>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-3 py-1 pt-4 lg:pt-1 justify-center lg:justify-start lg:px-6">
                <div className="w-11 h-11 rounded-full bg-[#ee3124] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-red-500/10">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-950 leading-none">99%</h3>
                  <p className="text-[11px] text-gray-400 font-bold mt-0.5">Customer Satisfaction</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}