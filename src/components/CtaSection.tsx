import React from "react"
import { useNavigate } from "react-router"
import { ShieldCheck, Mail } from "lucide-react"

export const CtaSection: React.FC = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 bg-slate-50 relative z-10">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 bg-white p-8 md:p-10 rounded-[32px] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06)] hover-3d transition-all duration-300 relative z-10">
        <div className="text-left space-y-2.5 max-w-xl">
          <span className="text-[#ee3124] text-xs font-black uppercase tracking-widest flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure Financial Partner
          </span>
          <h3 className="text-slate-900 text-2xl md:text-3xl font-extrabold tracking-tight">
            Ready to Take the Next Step?
          </h3>
          <p className="text-sm text-slate-500 font-light leading-relaxed">
            Apply online in just 5 minutes or consult our financial advisers. We are here to guide you toward flexible, custom credit solutions.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
          <button
            onClick={() => handleNavigate("/apply")}
            className="bg-[#ee3124] hover:bg-[#d8271c] text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-red-500/10 transition-all cursor-pointer text-center text-sm uppercase tracking-wider btn-3d flex items-center justify-center"
          >
            Apply For Loan
          </button>
          <button
            onClick={() => handleNavigate("/contact")}
            className="border border-slate-200 hover:border-slate-350 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold px-8 py-4 rounded-2xl transition-all cursor-pointer text-center text-sm uppercase tracking-wider flex items-center justify-center gap-2 btn-3d"
          >
            <Mail className="w-4 h-4 text-slate-500" /> Contact Us
          </button>
        </div>
      </div>
    </div>
  )
}
