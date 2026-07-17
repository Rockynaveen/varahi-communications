import React from "react"

export const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 flex items-center justify-center relative py-6 opacity-0 animate-fade-in-left">
            <div className="absolute top-[2%] left-[2%] w-24 h-24 sm:w-32 sm:h-32 opacity-80 z-10 animate-float-slow pointer-events-none">
              <svg className="w-full h-full text-red-500" viewBox="0 0 100 100" fill="currentColor">
                <defs>
                  <pattern id="stripes" width="10" height="10" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="currentColor" strokeWidth="2.5" />
                  </pattern>
                </defs>
                <circle cx="50" cy="50" r="45" fill="url(#stripes)" />
              </svg>
            </div>

            <svg className="absolute w-[300px] h-[300px] sm:w-[410px] sm:h-[410px] text-red-500 pointer-events-none z-10 animate-[spin_40s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1.2" strokeDasharray="30 40 20 60" fill="none" />
            </svg>

            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-red-500 overflow-hidden bg-slate-100 shadow-lg z-20">
              <img
                src="/about_officer.png"
                alt="About Varahi Communications"
                className="w-full h-full object-cover scale-105"
              />
            </div>

            <div className="absolute bottom-[5%] right-[5%] w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white border-2 border-red-500 shadow-xl flex flex-col items-center justify-center text-center p-4 z-30 animate-float-reverse">
              <span className="text-red-500 text-4xl sm:text-5xl font-bold tracking-tight">
                25
              </span>
              <span className="text-xs sm:text-sm font-bold text-gray-700 leading-tight mt-1.5 uppercase tracking-wide">
                Years Of Experience
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-start text-left opacity-0 animate-fade-in-right">
            <span className="text-red-500 text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block">
              About company
            </span>
            
            <h2 className="text-gray-900 text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6">
              We have been working very efficiently with loan and funding for 25 years.
            </h2>
            
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-light mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            </p>
            
            <h3 className="text-gray-800 text-lg font-bold mb-4">
              In business, we focus on 3 things.
            </h3>
            
            <ul className="flex flex-col gap-3 mb-8">
              <li className="flex items-start gap-3 text-gray-700 text-[15px] font-semibold">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Useful info
              </li>
              <li className="flex items-start gap-3 text-gray-700 text-[15px] font-semibold">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Reliability
              </li>
              <li className="flex items-start gap-3 text-gray-700 text-[15px] font-semibold">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Innovation
              </li>
            </ul>
            
            <div>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold transition-all duration-300 shadow-md hover:shadow-lg rounded-md px-8 py-3 text-[15px] uppercase tracking-wider cursor-pointer active:scale-95 duration-200">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
