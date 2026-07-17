import React, { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about-section" },
    { name: "How It Works", href: "#process-section" },
    { name: "FAQs", href: "#faq-section" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    itemName: string
  ) => {
    e.preventDefault();

    if (itemName === "Home") {
      navigate("/");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
      return;
    }

    if (itemName === "Contact Us") {
      navigate("/contact");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setMobileMenuOpen(false);
      return;
    }

    const sectionId =
      itemName === "About Us"
        ? "about-section"
        : itemName === "How It Works"
          ? "process-section"
          : "faq-section";

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }

    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled
          ? "shadow-lg border-b border-gray-100"
          : "shadow-sm"
          }`}
      >
        <div className="max-w-[1440px] mx-auto h-20 px-6 md:px-12 lg:px-24 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            onClick={(e) => handleNavClick(e, "Home")}
            className="flex items-center gap-2"
          >
            <h2 className="text-3xl font-black tracking-tight text-gray-900">
              Varahi
              <span className="text-[#ee3124]">.</span>
            </h2>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.name)}
                className="relative group text-[15px] font-semibold text-gray-800 hover:text-[#ee3124] transition-colors"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#ee3124] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-6">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-full bg-[#ee3124] flex items-center justify-center text-white">
                <Phone size={18} />
              </div>

              <div>
                <a
                  href="tel:18001234567"
                  className="font-bold text-gray-900"
                >
                  1800 123 4567
                </a>

                <p className="text-xs text-gray-500">
                  Mon - Sat • 9AM - 7PM
                </p>
              </div>

            </div>

            <Link
              to="/apply"
              className="bg-[#ee3124] hover:bg-red-700 text-white rounded-full px-7 py-3 font-semibold shadow-lg transition-all duration-300 hover:scale-105"
            >
              Apply Now
            </Link>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-900"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>
        {/* Mobile Menu */}

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-2xl animate-[fadeDown_0.3s_ease]">
            <div className="flex flex-col px-6 py-5">

              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.name)}
                  className="py-4 border-b border-gray-100 text-gray-800 font-semibold hover:text-[#ee3124] transition-colors"
                >
                  {item.name}
                </a>
              ))}

              {/* Phone */}

              <div className="mt-6 flex items-center gap-4 rounded-2xl bg-red-50 p-4">

                <div className="w-11 h-11 rounded-full bg-[#ee3124] flex items-center justify-center text-white">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Need Assistance?
                  </p>

                  <a
                    href="tel:18001234567"
                    className="font-bold text-gray-900"
                  >
                    1800 123 4567
                  </a>

                  <p className="text-xs text-gray-500">
                    Mon - Sat • 9AM - 7PM
                  </p>
                </div>

              </div>

              {/* Apply Button */}

              <Link
                to="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-5 bg-[#ee3124] hover:bg-red-700 text-white text-center py-3 rounded-full font-semibold transition-all duration-300"
              >
                Apply Now
              </Link>

            </div>
          </div>
        )}

      </header>

      {/* Header Spacer */}

      <div className="h-20"></div>

      <style>{`
        @keyframes fadeDown{
          from{
            opacity:0;
            transform:translateY(-15px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }
      `}</style>

    </>
  );
};

export default Header;