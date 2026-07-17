import React, { useState } from "react"
import { Search, Grid, Moon, Sun, Menu, X } from "lucide-react"

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const navItems = ["Home", "About", "Insurance", "Pages", "Blog", "Contact"]

  return (
    <nav className="w-full bg-white text-gray-800 border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <div key={idx} className="relative group py-5 cursor-pointer">
              <a
                href="#"
                className="flex items-center gap-1.5 text-[15px] font-bold tracking-wide hover:text-pearo-blue text-gray-700 transition-colors duration-200"
              >
                {item.toUpperCase()}
              </a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pearo-blue transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

        <div className="lg:hidden font-bold text-lg tracking-wider text-pearo-blue select-none">
          VARAHI COMMUNICATIONS
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2 hover:bg-gray-100 text-gray-600 hover:text-pearo-blue rounded-full transition-colors duration-200 cursor-pointer" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>

          <button className="hidden sm:block p-2 hover:bg-gray-100 text-gray-600 hover:text-pearo-blue rounded-full transition-colors duration-200 cursor-pointer" aria-label="Menu Grid">
            <Grid className="w-5 h-5" />
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 hover:bg-gray-100 text-gray-600 hover:text-pearo-blue rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 text-gray-700 hover:text-pearo-blue rounded-full transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-6 py-4 flex flex-col gap-4 transition-all duration-300 absolute left-0 w-full shadow-lg z-50">
          {navItems.map((item, idx) => (
            <div key={idx} className="flex flex-col border-b border-gray-100 pb-2">
              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="text-base font-bold tracking-wide text-gray-700 hover:text-pearo-blue transition-colors py-2 flex items-center justify-between"
              >
                {item.toUpperCase()}
              </a>
            </div>
          ))}
          <div className="flex justify-around items-center pt-2 text-gray-500">
            <div className="flex items-center gap-1 text-sm font-medium hover:text-pearo-blue cursor-pointer">
              <Search className="w-4 h-4" /> Search
            </div>
            <div className="flex items-center gap-1 text-sm font-medium hover:text-pearo-blue cursor-pointer">
              <Grid className="w-4 h-4" /> Dashboard
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
