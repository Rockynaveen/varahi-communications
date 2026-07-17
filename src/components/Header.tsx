import React, { useState } from "react"
import { Phone, Menu, X, ChevronDown } from "lucide-react"

interface HeaderProps {
  onApplyClick?: () => void
}

export const Header: React.FC<HeaderProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Loan Products", href: "#", hasDropdown: true },
    { name: "How It Works", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact Us", href: "#" }
  ]

  return (
    <header className="sticky top-0 bg-white z-50 w-full border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-20">

        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group select-none">
          <div className="flex items-baseline text-2xl font-black tracking-tight text-gray-950 leading-none">
            Varahi<span className="text-[#ee3124]"></span>
          </div>
        </a>

        {/* Desktop Menu Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group py-6 cursor-pointer">
              <a
                href={item.href}
                className="flex items-center gap-1 text-[15px] font-bold text-gray-800 hover:text-[#ee3124] transition-colors duration-200"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 mt-0.5 text-gray-400 group-hover:text-[#ee3124] transition-colors" />}
              </a>
              {/* Highlight bar */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#ee3124] transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </nav>

        {/* Right Info and Actions */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Phone call widget */}
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#ee3124]">
              <Phone className="w-4.5 h-4.5 fill-current" />
            </div>
            <div>
              <a
                href="tel:18001234567"
                className="text-sm font-extrabold text-gray-950 hover:text-[#ee3124] transition-colors leading-none"
              >
                1800 123 4567
              </a>
              <p className="text-[10px] text-gray-400 font-bold leading-none mt-1">
                Mon - Sat 9AM - 7PM
              </p>
            </div>
          </div>

          {/* Apply button */}
          <button 
            onClick={onApplyClick}
            className="bg-[#ee3124] hover:bg-[#d8271c] active:scale-95 text-white text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-red-500/10 transition-all duration-200 cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile menu triggers */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-gray-50 text-gray-700 hover:text-red-500 rounded-full transition-colors cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile drawer overlays */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 absolute left-0 w-full shadow-2xl z-50 animate-[fadeInUp_0.2s_ease-out]">
          {navItems.map((item, idx) => (
            <div key={idx} className="flex flex-col border-b border-gray-50 pb-2">
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-gray-700 hover:text-red-500 py-2 flex items-center justify-between"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
              </a>
            </div>
          ))}

          {/* Phone call widget for mobile */}
          <div className="flex items-center gap-3 py-2 text-left">
            <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#ee3124]">
              <Phone className="w-4.5 h-4.5 fill-current" />
            </div>
            <div>
              <a
                href="tel:18001234567"
                className="text-sm font-extrabold text-gray-950 leading-none"
              >
                1800 123 4567
              </a>
              <p className="text-[10px] text-gray-400 font-bold leading-none mt-1">
                Mon - Sat 9AM - 7PM
              </p>
            </div>
          </div>

          {/* Apply button for mobile */}
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              if (onApplyClick) onApplyClick();
            }}
            className="bg-[#ee3124] hover:bg-[#d8271c] text-white text-sm font-bold py-3.5 rounded-full shadow-md w-full cursor-pointer mt-2"
          >
            Apply Now
          </button>
        </div>
      )}
    </header>
  )
}
export default Header
