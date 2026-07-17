import React from "react"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/ui/ScrollReveal"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

interface Testimonial {
  quote: string
  name: string
  role: string
  avatar: string
}

export const TestimonialsSection: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) return

    const intervalId = setInterval(() => {
      api.scrollNext()
    }, 4000) // Auto-slide every 4 seconds

    return () => clearInterval(intervalId)
  }, [api])

  const testimonials: Testimonial[] = [
    {
      quote: "Applying for our home loan through Varahi was smooth. Their digital document upload made verification simple, and we got our sanction letter in just 24 hours!",
      name: "David Luis",
      role: "First-time Homeowner",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    },
    {
      quote: "Varahi Communications helped us secure working capital to expand our warehouse. The interest rates were very competitive, and their customer support was top-notch.",
      name: "Steven Smith",
      role: "Retail Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    },
    {
      quote: "I needed urgent funds for a medical emergency. The personal loan application process was entirely paperless and the amount was credited to my account the next day.",
      name: "Sarah Lucy",
      role: "Marketing Consultant",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    },
    {
      quote: "We got our dream SUV financed within a day! The EMI structure fits our monthly budget perfectly, and the processing fee was minimal. Highly satisfied!",
      name: "Amit Patel",
      role: "Software Engineer",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop",
    },
    {
      quote: "Thanks to their education loan, my daughter was able to secure her admission in a top university abroad. The moratorium terms are very flexible and customer-friendly.",
      name: "Nisha Sharma",
      role: "Proud Parent",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    },
    {
      quote: "I pledged my gold ornaments for immediate business capital. The valuation process was secure, transparent, and I got the maximum loan value quickly.",
      name: "Vikram Reddy",
      role: "Agriculturalist",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    },
  ]

  return (
    <section className="bg-white py-10 w-full overflow-hidden select-none border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1300px]">
        
        {/* Header Section */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#ee3124] text-xs md:text-sm font-extrabold tracking-widest uppercase mb-3 block">
              Our Feedback
            </span>
            <h2 className="text-[#111827] text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight uppercase">
              What Client Says About Us
            </h2>
            <div className="w-16 h-1 bg-[#ee3124] mx-auto mt-4 rounded-full" />
            <p className="mt-5 text-gray-500 text-sm sm:text-base leading-relaxed font-light">
              Discover how we help our clients secure their dreams, expand their businesses, 
              and navigate financial emergencies with ease.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Wrapper */}
        <ScrollReveal animation="zoom-in" delay={150}>
          <div className="w-full relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-6">
                {testimonials.map((t, idx) => (
                  <CarouselItem key={idx} className="pl-6 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="flex flex-col items-center py-6 h-full hover-3d cursor-pointer">
                      
                      {/* Dark Navy Quote Card Box */}
                      <div className="relative bg-[#111827] p-8 pt-10 pb-8 rounded-[24px] text-white shadow-xl flex-grow flex flex-col justify-center min-h-[180px] w-full text-left">
                        {/* Brand Red Double Quote Circle Icon overlay */}
                        <div className="w-11 h-11 bg-[#ee3124] text-white rounded-full flex items-center justify-center absolute -top-5.5 left-6 shadow-md z-20">
                          <Quote className="w-5 h-5 fill-current transform rotate-180" />
                        </div>
                        
                        <p className="text-sm font-medium italic leading-relaxed text-gray-100 relative z-10">
                          "{t.quote}"
                        </p>
                      </div>

                      {/* Speech Bubble Arrow pointing down */}
                      <div className="w-0 h-0 border-t-[12px] border-t-[#111827] border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent mx-auto relative -top-[1px] z-10" />

                      {/* User Avatar & Bio Details */}
                      <div className="flex items-center gap-4 mt-6 w-full px-6">
                        <img 
                          src={t.avatar} 
                          className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md flex-shrink-0" 
                          alt={t.name} 
                          onError={(e) => {
                            // Fallback in case of network load issues
                            (e.target as HTMLImageElement).src = `https://api.dicebear.com/7.x/initials/svg?seed=${t.name}`
                          }}
                        />
                        <div className="text-left">
                          <h4 className="text-sm font-black text-gray-950 uppercase tracking-wide">{t.name}</h4>
                          <p className="text-xs text-[#ee3124] font-bold mt-0.5">{t.role}</p>
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}
export default TestimonialsSection
