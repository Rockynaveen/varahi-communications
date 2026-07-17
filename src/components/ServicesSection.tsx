import React, { useState } from "react"

interface LoanData {
  subtitle: string
  description: string
  listTitle: string
  listItems: string[]
  eligibilityTitle: string
  eligibilityDesc: string
  guideTitle: string
  guideDesc: string
}

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(3)

  const categories = [
    {
      name: "Personal Loan",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v12M9 9h6M9 13h6" />
        </svg>
      ),
    },
    {
      name: "Business Loan",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0-2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      name: "Education Loan",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2.5 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      name: "House Loan",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      name: "Payday Loan",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="3" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      name: "Agricultural Loan",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2z" />
          <path d="M12 6a3 3 0 0 0-3 3c0 3 3 5 3 5s3-2 3-5a3 3 0 0 0-3-3z" />
          <path d="M7 14c2.5-1.5 7.5-1.5 10 0" />
        </svg>
      ),
    },
  ]

  const loansData: LoanData[] = [
    {
      subtitle: "Personal loan",
      description:
        "Get quick and easy access to personal finance solutions tailored for your individual needs. Whether you're planning a wedding, renovating your home, or consolidating debt, our personal loans offer competitive rates and flexible repayment options.",
      listTitle: "Types of personal loan",
      listItems: [
        "Secured Personal Loans",
        "Unsecured Personal Loans",
        "Debt Consolidation Loans",
        "Same-day Emergency Loans",
      ],
      eligibilityTitle: "Eligibility and criteria for Personal loan",
      eligibilityDesc:
        "Applicants must be at least 18 years old, possess a stable source of income, and have a good credit score history. Required documentation includes proof of identity, address, and recent salary slips.",
      guideTitle: "Personal loan guide",
      guideDesc:
        "Calculate your affordable monthly payments using our calculator. Compare rates, compile your financial documents, and submit your application online in just 5 minutes.",
    },
    {
      subtitle: "Business loan",
      description:
        "Empower your business to reach new heights with our flexible business financing options. From purchasing equipment and expanding operations to managing daily cash flow, we support enterprises of all sizes with customized capital solutions.",
      listTitle: "Types of business loan",
      listItems: [
        "Secured Business Loans",
        "Unsecured Business Loans",
        "Revolving Credit Facilities",
        "Equipment Financing & Leases",
      ],
      eligibilityTitle: "Eligibility and criteria for Business loan",
      eligibilityDesc:
        "Businesses must have been operational for at least 12 months with a healthy cash flow. Key documents include corporate bank statements, tax returns, and business registration certificates.",
      guideTitle: "Business loan guide",
      guideDesc:
        "Define your business goals and capital requirements. Prepare a detailed business plan showing financial projections, speak to our corporate advisers, and apply online.",
    },
    {
      subtitle: "Education loan",
      description:
        "Invest in your future without financial worries. Our comprehensive education loans cover tuition fees, accommodation, books, and other learning expenses for top domestic and international institutions, featuring flexible post-study repayment schemes.",
      listTitle: "Types of education loan",
      listItems: [
        "Undergraduate Student Loans",
        "Postgraduate Studies Financing",
        "Study Abroad Educational Loans",
        "Skill Development & Vocational Loans",
      ],
      eligibilityTitle: "Eligibility and criteria for Education loan",
      eligibilityDesc:
        "Students must have secured admission in a recognized college or university. A co-borrower (parent/guardian) with a stable income and credit profile is required as a guarantor.",
      guideTitle: "Education loan guide",
      guideDesc:
        "Select your desired academic program and get your admission offer letter. Calculate the total course expenses, apply for the loan, and enjoy hassle-free disbursement direct to the institution.",
    },
    {
      subtitle: "House loan",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
      listTitle: "Types of business loan",
      listItems: [
        "Secured loans",
        "Unsecured loans",
        "Revolving credit facilities",
        "Business cash advances",
      ],
      eligibilityTitle: "Eligibility and criteria for House loan",
      eligibilityDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      guideTitle: "House loan guide",
      guideDesc:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis lacus vel facilisis.",
    },
    {
      subtitle: "Payday loan",
      description:
        "Bridging the gap between paychecks when unexpected expenses arise. Our short-term payday cash solutions provide quick, direct-to-bank advances to cover utility bills, car repairs, or urgent medical costs, with minimal paperwork.",
      listTitle: "Types of payday loan",
      listItems: [
        "Short-term Cash Advances",
        "Emergency Medical Loans",
        "Instant Online Cash Loans",
        "Utility Bill Assistance Loans",
      ],
      eligibilityTitle: "Eligibility and criteria for Payday loan",
      eligibilityDesc:
        "Must be a citizen, have active checking accounts, and demonstrate proof of steady monthly income (employment or government benefits) exceeding $1,200 per month.",
      guideTitle: "Payday loan guide",
      guideDesc:
        "Use short-term loans only for urgent personal needs. Verify repayment schedules matching your next salary receipt date and apply online for rapid approval.",
    },
    {
      subtitle: "Agricultural loan",
      description:
        "Supporting farmers and agricultural businesses with financial assistance to purchase seeds, fertilizers, high-tech tractors, land, and livestock. We offer seasonal repayment terms structured around harvest cycles.",
      listTitle: "Types of agricultural loan",
      listItems: [
        "Crop Production Loans",
        "Farm Equipment Financing",
        "Livestock Purchase Loans",
        "Agricultural Land Expansion Loans",
      ],
      eligibilityTitle: "Eligibility and criteria for Agricultural loan",
      eligibilityDesc:
        "Farmers, agricultural cooperatives, and agri-business owners with proof of land ownership or valid tenancy agreements, along with cropping history record logs.",
      guideTitle: "Agricultural loan guide",
      guideDesc:
        "Outline your seasonal farming budget and crop production plan. Apply for pre-sowing capital, manage disbursements for inputs, and pay after marketing your harvest.",
    },
  ]

  const activeLoan = loansData[activeIndex]

  return (
    <section className="bg-white py-10 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
        <div className="opacity-0 animate-fade-in-up">
          <span className="text-red-500 text-xs md:text-sm font-bold tracking-wider uppercase mb-2 block">
            Knowledge of the market
          </span>
          <h2 className="text-pearo-navy text-2xl sm:text-4xl font-bold mb-4 tracking-tight uppercase">
            Only the best professional services
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto mb-16 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="relative w-full max-w-[1000px] mx-auto mb-16 border-b border-gray-200 opacity-0 animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div
            className="flex flex-row overflow-x-auto gap-8 justify-start md:justify-around items-center px-4 py-2 scroll-smooth select-none scrollbar-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {categories.map((cat, idx) => {
              const isActive = activeIndex === idx
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center gap-3 cursor-pointer group pb-4 relative min-w-[120px] focus:outline-none"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-red-50 text-red-500 border-2 border-red-500 scale-105 shadow-md shadow-red-500/10"
                        : "bg-white text-gray-400 border border-gray-200 group-hover:border-red-400 group-hover:text-red-400"
                    }`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {cat.icon}
                    </div>
                  </div>

                  <span
                    className={`text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
                      isActive
                        ? "text-red-500"
                        : "text-pearo-navy group-hover:text-red-500"
                    }`}
                  >
                    {cat.name}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 w-full h-[3px] bg-red-500 rounded-full transition-transform duration-300 origin-center ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        <div
          key={activeIndex}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left w-full max-w-[1200px] mx-auto animate-[fadeInUp_0.6s_ease-out_forwards]"
        >
          <div className="lg:col-span-6 flex items-center justify-center relative py-6 select-none">
            <svg
              className="absolute w-[115%] h-[115%] text-red-500/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-[float-slow_12s_infinite]"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeDasharray="4,4"
            >
              <circle cx="100" cy="100" r="75" />
              <circle cx="100" cy="100" r="90" />
            </svg>

            <div
              className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] overflow-hidden border-8 border-white/90 bg-slate-200 shadow-xl animate-[morph-slow_10s_ease-in-out_infinite]"
              style={{
                borderRadius: "50% 50% 30% 70% / 50% 60% 40% 50%",
              }}
            >
              <img
                src="/services_consultation.png"
                alt="Loan Consultation"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay" />
            </div>

            <div className="absolute top-[10%] right-[10%] text-red-500 text-3xl font-extrabold animate-bounce duration-[4000ms] pointer-events-none select-none">
              +
            </div>
            <div className="absolute bottom-[8%] left-[10%] text-red-500 text-2xl font-extrabold animate-bounce duration-[5000ms] pointer-events-none select-none">
              +
            </div>
            <div className="absolute top-[40%] left-[8%] w-4.5 h-4.5 rounded-full bg-red-500/70 border border-white animate-pulse pointer-events-none" />
            <div className="absolute bottom-[22%] right-[14%] w-3.5 h-3.5 rounded-full bg-red-500/80 border border-white animate-pulse pointer-events-none" />
          </div>

          <div className="lg:col-span-6 flex flex-col justify-start">
            <h3 className="text-pearo-navy text-2xl md:text-3xl font-bold mb-4 uppercase tracking-tight">
              {activeLoan.subtitle}
            </h3>

            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 font-light">
              {activeLoan.description}
            </p>

            <h4 className="text-pearo-navy text-lg font-bold mb-4 uppercase tracking-wide">
              {activeLoan.listTitle}
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 mb-8">
              {activeLoan.listItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 text-[15px] font-normal">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0 inline-block mr-2.5"></span>
                  {item}
                </li>
              ))}
            </ul>

            <h4 className="text-pearo-navy text-lg font-bold mb-2 uppercase tracking-wide">
              {activeLoan.eligibilityTitle}
            </h4>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 font-light">
              {activeLoan.eligibilityDesc}
            </p>

            <h4 className="text-pearo-navy text-lg font-bold mb-2 uppercase tracking-wide">
              {activeLoan.guideTitle}
            </h4>
            <p className="text-gray-500 text-[15px] leading-relaxed font-light">
              {activeLoan.guideDesc}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes morph-slow {
          0%, 100% {
            border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%;
          }
          33% {
            border-radius: 65% 35% 55% 45% / 40% 55% 45% 60%;
          }
          66% {
            border-radius: 40% 60% 35% 65% / 55% 40% 60% 45%;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
export default ServicesSection
