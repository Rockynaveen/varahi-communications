import React, { useState } from "react"
import { Play } from "lucide-react"
import { Link } from "react-router"

export const CalculatorSection: React.FC = () => {
  const [amount, setAmount] = useState<number>(25000)
  const [months, setMonths] = useState<number>(6)
  
  const interestRate = 15 // 15% flat interest rate as per reference
  const totalPayback = Math.round(amount * (1 + interestRate / 100))
  const monthlyPay = Math.floor(totalPayback / months)

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val)
  }

  return (
    <section className="bg-slate-50 py-10 w-full relative border-b border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100/60">
          
          {/* Left Side: Video Preview & Overlay */}
          <div className="lg:col-span-6 relative min-h-[250px] sm:min-h-[350px] lg:min-h-full overflow-hidden group select-none">
            <img
              src="/calculator_left.png"
              alt="Consultation meeting"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-10000 group-hover:scale-105"
            />
            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10 z-10" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button
                className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center text-red-500 shadow-2xl cursor-pointer group active:scale-95 duration-300 transition-all hover:bg-red-500 hover:text-white border border-transparent hover:border-white/20"
                aria-label="Play presentation video"
              >
                <span className="absolute inset-0 rounded-full bg-red-500/30 animate-ping z-0"></span>
                <Play className="w-6 h-6 fill-current relative z-10 translate-x-0.5" />
              </button>
            </div>

            {/* Subtle floating branding tag */}
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <p className="text-xs uppercase tracking-widest font-bold text-red-400 mb-1">
                Varahi communications
              </p>
              <h4 className="text-lg font-bold">Fast & secure loan approvals</h4>
            </div>
          </div>

          {/* Right Side: Calculator Form */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-center relative bg-white">
            {/* Money Pattern Background Effect */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none z-0 bg-[radial-gradient(#ee3124_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10">
              <h3 className="text-gray-900 text-xl sm:text-2xl font-bold mb-5 text-center uppercase tracking-tight">
                How Much Do You Need?
              </h3>

              <div className="space-y-5">
                {/* Amount Slider Block */}
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-2">
                    <span>₹1,000</span>
                    <span className="text-red-500 text-base font-bold bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {formatCurrency(amount)}
                    </span>
                    <span>₹50,000</span>
                  </div>

                  <div className="relative flex items-center select-none">
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={500}
                      value={amount}
                      onChange={(e) => setAmount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-red-500 focus:outline-none"
                      style={{
                        background: `linear-gradient(to right, #ee3124 0%, #ee3124 ${((amount - 1000) / 49000) * 100}%, #f1f5f9 ${((amount - 1000) / 49000) * 100}%, #f1f5f9 100%)`
                      }}
                    />
                  </div>
                </div>

                {/* Term Slider Block */}
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-2">
                    <span>1 Month</span>
                    <span className="text-red-500 text-base font-bold bg-red-50 px-2.5 py-0.5 rounded-full border border-red-100">
                      {months} {months === 1 ? "Month" : "Months"}
                    </span>
                    <span>12 Months</span>
                  </div>

                  <div className="relative flex items-center select-none">
                    <input
                      type="range"
                      min={1}
                      max={12}
                      step={1}
                      value={months}
                      onChange={(e) => setMonths(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-red-500 focus:outline-none"
                      style={{
                        background: `linear-gradient(to right, #ee3124 0%, #ee3124 ${((months - 1) / 11) * 100}%, #f1f5f9 ${((months - 1) / 11) * 100}%, #f1f5f9 100%)`
                      }}
                    />
                  </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-100 my-4" />

                {/* Outputs List */}
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Pay Monthly</span>
                    <span className="text-gray-900 font-bold text-base sm:text-lg">
                      {formatCurrency(monthlyPay)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5 border-b border-gray-50">
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Term of Use</span>
                    <span className="text-gray-900 font-bold text-sm sm:text-base">
                      {months} {months === 1 ? "Month" : "Months"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Total Pay Back amount</span>
                    <span className="text-gray-900 font-bold text-base sm:text-lg">
                      {formatCurrency(totalPayback)}
                    </span>
                  </div>
                </div>

                {/* Submit Action */}
                <Link
                  to="/apply"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-full bg-red-500 hover:bg-red-600 active:scale-[0.98] text-white font-bold py-3 rounded-xl shadow-lg shadow-red-500/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider text-xs cursor-pointer mt-3 block text-center"
                >
                  Apply For Loan
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
export default CalculatorSection
