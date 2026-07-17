import React from "react"

const partners = [
  { 
    name: "State Bank of India", 
    shortName: "SBI", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cc/State_Bank_of_India.svg" 
  },
  { 
    name: "HDFC Bank", 
    shortName: "HDFC", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ec/HDFC_Bank_Logo.svg" 
  },
  { 
    name: "ICICI Bank", 
    shortName: "ICICI", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg" 
  },
  { 
    name: "Axis Bank", 
    shortName: "Axis", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg" 
  },
  { 
    name: "Kotak Mahindra Bank", 
    shortName: "Kotak", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Kotak_Mahindra_Group_logo.svg" 
  },
  { 
    name: "Punjab National Bank", 
    shortName: "PNB", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Punjab_National_Bank_Logo.svg" 
  },
  { 
    name: "Bajaj Finserv", 
    shortName: "Bajaj Finserv", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Bajaj_Finserv_Logo.svg" 
  },
  { 
    name: "Tata Capital", 
    shortName: "Tata Capital", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Tata_logo.svg" 
  },
  { 
    name: "Aditya Birla Finance", 
    shortName: "Aditya Birla", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Aditya_Birla_Group_Logo.svg" 
  },
  { 
    name: "IDFC FIRST Bank", 
    shortName: "IDFC FIRST", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Logo_of_IDFC_First_Bank.svg" 
  },
  { 
    name: "AU Small Finance Bank", 
    shortName: "AU Bank", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/d/df/Aubank.svg" 
  },
  { 
    name: "IndusInd Bank", 
    shortName: "IndusInd", 
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/70/IndusInd_Bank_SVG_Logo.svg" 
  }
]

export const PartnersSection: React.FC = () => {
  // Duplicate the list once to ensure a seamless infinite scrolling marquee loop
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-slate-50 w-full overflow-hidden border-b border-slate-100 select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center mb-10">
        <h2 className="text-slate-900 text-3xl md:text-4xl font-extrabold tracking-tight mb-3 font-sans">
          Trusted Lending Partners
        </h2>
        <p className="text-slate-500 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed font-sans">
          We collaborate with India's leading banks and NBFCs to provide the best loan solutions.
        </p>
      </div>

      {/* Infinite Looping Horizontal Scrolling Ticker */}
      <div className="relative w-full overflow-hidden py-4 flex flex-col justify-center items-center">
        {/* Soft fading gradient shadows on the sides to enhance depth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Ticker Row */}
        <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] cursor-pointer py-2">
          {duplicatedPartners.map((bank, index) => (
            <div
              key={index}
              className="flex items-center gap-5 bg-white border border-slate-100 px-6 py-4 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:border-slate-200/60 hover:-translate-y-0.5 transition-all duration-300 group shrink-0"
            >
              {/* Bank Initial Avatar Badge */}
              <div className="w-11 h-11 rounded-full bg-red-50 border border-red-100 flex items-center justify-center text-[#ee3124] font-black text-lg shrink-0 group-hover:bg-[#ee3124] group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                {bank.shortName[0]}
              </div>
              {/* Bank Name (Short Name Only) */}
              <div className="text-left font-sans pr-2">
                <h4 className="text-slate-800 text-sm font-extrabold tracking-tight group-hover:text-[#ee3124] transition-colors leading-tight">
                  {bank.shortName}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
