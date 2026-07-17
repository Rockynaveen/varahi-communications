import React, { useEffect, useRef, useState } from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  animation?: "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in"
  delay?: number
  duration?: number
  className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.05, // trigger early for better response
        rootMargin: "0px 0px -80px 0px", // Trigger before element fully enters view
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getAnimStyles = () => {
    switch (animation) {
      case "fade-up":
        return isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      case "fade-in":
        return isVisible 
          ? "opacity-100" 
          : "opacity-0"
      case "fade-left":
        return isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 -translate-x-12"
      case "fade-right":
        return isVisible 
          ? "opacity-100 translate-x-0" 
          : "opacity-0 translate-x-12"
      case "zoom-in":
        return isVisible 
          ? "opacity-100 scale-100" 
          : "opacity-0 scale-95"
      default:
        return isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${getAnimStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
