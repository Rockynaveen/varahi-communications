import React, { useEffect, useRef, useState } from "react"

interface ProcessStep {
  title: string
  desc: string
}

export const ProcessSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current)
          }
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const steps: ProcessStep[] = [
    {
      title: "Apply Online",
      desc: "Fill out our quick & secure online application form with your details.",
    },
    {
      title: "Upload Documents",
      desc: "Upload required identity, address, and income proofs securely.",
    },
    {
      title: "Verification",
      desc: "Our team reviews your documents to verify your eligibility.",
    },
    {
      title: "Loan Approval",
      desc: "Receive your approved loan offer with final terms and options.",
    },
    {
      title: "Agreement & Disbursement",
      desc: "E-sign the agreement and get funds credited to your bank account.",
    },
  ]

  return (
    <section
      ref={sectionRef}
      className="py-20 w-full relative overflow-hidden bg-slate-50 border-b border-gray-100 select-none"
      style={{
        backgroundImage: "radial-gradient(#ee312408 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Decorative background shapes */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-pearo-blue/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-pearo-blue/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px] relative z-10">
        <div className="text-center mb-16">
          <span className="text-pearo-blue text-xs md:text-sm font-extrabold tracking-widest uppercase mb-3 block">
            Our Process
          </span>
          <h2 className="text-gray-900 text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase">
            Get Loans in 5 Simple Steps
          </h2>
          <div className="w-16 h-1 bg-pearo-blue mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 md:gap-y-16 lg:gap-y-0 gap-x-4 justify-items-center">
          {steps.map((step, index) => {
            const stepNum = String(index + 1).padStart(2, "0")
            const isHovered = hoveredIndex === index

            return (
              <div
                key={index}
                className="flex flex-col items-center w-full relative"
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`relative group transition-all duration-700 transform ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  {/* Step Card Circle */}
                  <div
                    className="w-52 h-52 sm:w-56 sm:h-56 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full flex flex-col justify-center items-center text-center p-5 pt-8 cursor-pointer relative overflow-hidden transition-all duration-500 border z-10"
                    style={{
                      backgroundColor: "#ffffff",
                      borderColor: isHovered ? "#ee3124" : "#f1f5f9",
                      transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                      boxShadow: isHovered
                        ? "0 20px 25px -5px rgba(238, 49, 36, 0.15), 0 10px 10px -5px rgba(238, 49, 36, 0.1)"
                        : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                    }}
                  >
                    {/* Radial expanding background spreading from center */}
                    <div
                      className="absolute rounded-full pointer-events-none transition-transform duration-500 ease-out z-0"
                      style={{
                        backgroundColor: "#ee3124",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        transform: isHovered ? "scale(1.5)" : "scale(0)",
                        transformOrigin: "center center",
                      }}
                    />

                    {/* Content (Z-indexed above radial expanding background) */}
                    <h3
                      className="font-extrabold text-sm sm:text-base lg:text-[14px] xl:text-[15px] mb-2 leading-snug px-3 transition-colors duration-500 relative z-10 max-w-[130px] sm:max-w-[150px] lg:max-w-[120px] xl:max-w-[140px] mx-auto"
                      style={{
                        color: isHovered ? "#ffffff" : "#111827",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="font-light text-xs lg:text-[11px] xl:text-xs leading-relaxed px-2 transition-colors duration-500 relative z-10 max-w-[150px] sm:max-w-[170px] lg:max-w-[130px] xl:max-w-[150px] mx-auto"
                      style={{
                        color: isHovered ? "rgba(255, 255, 255, 0.9)" : "#6b7280",
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Top-Right overlapping Step Number Badge */}
                  <div
                    className="absolute top-1 right-1 lg:top-0 lg:right-0 xl:top-1 xl:right-1 z-20 transition-all duration-500"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                    }}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Dotted outline border */}
                      <div
                        className="absolute -inset-1.5 border border-dashed rounded-full transition-colors duration-500"
                        style={{
                          borderColor: isHovered ? "#ffffff" : "#ee3124",
                        }}
                      />
                      {/* Solid circle */}
                      <div
                        className="w-12 h-12 rounded-full flex flex-col justify-center items-center font-bold transition-all duration-500"
                        style={{
                          backgroundColor: isHovered ? "#ffffff" : "#ee3124",
                          color: isHovered ? "#ee3124" : "#ffffff",
                          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <span className="text-[12px] leading-none mb-0.5 font-extrabold">
                          {stepNum}
                        </span>
                        <span className="text-[8px] uppercase tracking-widest leading-none font-semibold">
                          Step
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Horizontal Arrow (Desktop/Tablet) */}
                  {index < 4 && (
                    <div
                      className={`absolute top-[35%] z-0 pointer-events-none hidden ${
                        index === 2
                          ? "lg:block lg:-right-8 lg:w-8 xl:-right-10 xl:w-10"
                          : "md:block md:-right-8 md:w-8 lg:-right-8 lg:w-8 xl:-right-10 xl:w-10"
                      }`}
                    >
                      <svg
                        className="w-full h-6 text-pearo-blue transition-all duration-500"
                        style={{
                          opacity: isHovered ? 1 : 0.4,
                          transform: isHovered ? "scaleX(1.05)" : "scaleX(1)",
                        }}
                        viewBox="0 0 60 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path
                          d="M4 10 C 15 20, 45 20, 56 10"
                          strokeDasharray="4 4"
                        />
                        <path
                          d="M 50 14 L 56 10 L 51 6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Vertical Arrow (Mobile) */}
                {index < 4 && (
                  <div className="h-12 flex items-center justify-center md:hidden z-0 pointer-events-none mt-4">
                    <svg
                      className="w-6 h-12 text-pearo-blue opacity-40"
                      viewBox="0 0 24 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path
                        d="M12 4 C 4 16, 4 32, 12 44"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M 6 38 L 12 44 L 18 38"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
