import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Phone, Mail, MapPin, CheckCircle,
  Loader2, AlertCircle, Send, ArrowLeft, ShieldCheck, HelpCircle
} from "lucide-react"

// --- Zod Form Schema Definition ---
const contactSchema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Phone number must be a valid 10-digit Indian number"),
  subject: z.string().min(4, "Subject must be at least 4 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

import { useNavigate } from "react-router"

export const ContactPage: React.FC = () => {
  const navigate = useNavigate()
  const handleBackToHome = () => {
    navigate("/")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [ticketId, setTicketId] = useState("")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  })

  const onSubmit = async (_data: ContactFormData) => {
    setIsSubmitting(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })

    // Simulate submission to server/database
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionSuccess(true)
      const randId = "VRH-TKT-" + Math.floor(100000 + Math.random() * 900000)
      setTicketId(randId)
      reset()
    }, 2200)
  }

  return (
    <div className="w-full min-h-[85vh] flex items-center justify-center py-8 px-2 sm:px-6 relative select-none">

      {/* Soft color backdrop dots */}
      <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-[#ee3124]/5 filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-80 h-80 rounded-full bg-red-500/5 filter blur-3xl pointer-events-none" />

      {/* Main Container Card (Aligned with website design system) */}
      <div className="w-full max-w-5xl bg-white border border-gray-100 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex flex-col relative z-10">

        {/* Navigation Return Header Bar */}
        <div className="px-6 md:px-10 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-black text-gray-950 tracking-tight flex items-center gap-2">
              Contact Us <span className="w-2 h-2 rounded-full bg-[#ee3124] animate-ping" />
            </h3>
            <p className="text-xs text-gray-500 font-semibold mt-1">Get custom solutions from our loan advisors.</p>
          </div>
          <button
            type="button"
            onClick={handleBackToHome}
            className="flex items-center gap-1.5 text-xs font-extrabold text-[#ee3124] hover:text-[#d8271c] px-4 py-2.5 bg-red-50 hover:bg-red-100/50 border border-red-100 rounded-full transition-all cursor-pointer shadow-sm active:scale-95 btn-3d"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </button>
        </div>

        {/* Form Details Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 flex-grow">

          {/* Left panel: Info cards */}
          <div className="lg:col-span-5 border-r border-gray-100 p-8 md:p-10 flex flex-col justify-between space-y-8 text-left bg-gray-50/30">

            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 bg-red-50 text-[#ee3124] border border-red-100 px-3.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" /> Trusted Support
                </span>
                <h4 className="text-xl font-extrabold text-gray-950 tracking-tight mt-4">Corporate Office Address</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-semibold mt-2.5">
                  Have questions about our financial products or interest calculators? Get in touch with our team of specialists.
                </p>
              </div>

              <div className="space-y-4">
                {/* Address Card */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100/70 shadow-sm flex gap-3.5 group hover:border-[#ee3124]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Address</h5>
                    <p className="text-xs text-gray-700 leading-relaxed font-bold mt-1.5">
                      101, Ground Floor, Royal Regency, Tonk Road, Jaipur, Rajasthan - 302018
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100/70 shadow-sm flex gap-3.5 group hover:border-[#ee3124]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Phone</h5>
                    <p className="text-xs text-gray-700 font-bold mt-1.5">1800 123 4567 (Toll-Free)</p>
                    <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Mon - Sat 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white p-4 rounded-2xl border border-gray-100/70 shadow-sm flex gap-3.5 group hover:border-[#ee3124]/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#ee3124] flex items-center justify-center shrink-0 mt-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none">Email</h5>
                    <p className="text-xs text-gray-700 font-bold mt-1.5 hover:text-[#ee3124] transition-colors">
                      <a href="mailto:support@varahi.com">support@varahi.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Google Map Embed */}
            <div className="relative w-full h-[180px] rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:border-[#ee3124]/30 transition-all duration-300">
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1060377045053!2d75.79374021175655!3d26.836173076595563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5efaa8bb17b%3A0x64cf5d3a5a7df4ef!2sTonk%20Rd%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

          </div>

          {/* Right panel: Form input components */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center bg-white">

            {isSubmitting ? (
              /* Loader */
              <div className="flex flex-col items-center justify-center py-16 text-center select-none animate-[fadeIn_0.3s_ease-out]">
                <Loader2 className="w-14 h-14 text-[#ee3124] animate-spin mb-6" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Sending Message</h4>
                <p className="text-xs text-gray-400 font-semibold max-w-xs leading-relaxed">
                  We are forwarding your request details securely to our support coordinators.
                </p>
              </div>
            ) : submissionSuccess ? (
              /* Success pane */
              <div className="flex flex-col items-center justify-center py-10 text-center animate-[scaleIn_0.3s_ease-out]">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle className="w-12 h-12 animate-[scaleIn_0.3s_ease-out_delay-150ms]" />
                </div>
                <h4 className="text-2xl font-black text-gray-950 tracking-tight mb-2">Message Sent Successfully!</h4>
                <p className="text-xs text-emerald-600 font-bold mb-6">Thank you. Your request is now logged.</p>

                <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 w-full max-w-md space-y-4 mb-8 text-left">
                  <div className="flex justify-between items-center border-b border-gray-150 pb-3 text-xs font-semibold">
                    <span className="text-gray-400 uppercase tracking-wider">Ticket ID</span>
                    <span className="text-sm font-extrabold text-[#ee3124] bg-red-50 px-3 py-1 rounded-lg border border-red-100">{ticketId}</span>
                  </div>
                  <div className="space-y-2.5 text-xs text-gray-500 leading-relaxed font-semibold">
                    <p className="font-bold text-gray-800 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Support Routing Active</p>
                    <p>1. A confirmation copy with reference ticket number has been sent to your email.</p>
                    <p>2. A dedicated loan adviser will contact you on your registered mobile number shortly.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setSubmissionSuccess(false)}
                    className="bg-white border border-gray-200 hover:border-gray-400 text-gray-700 text-xs font-bold py-3 px-6 rounded-full transition-all cursor-pointer active:scale-95"
                  >
                    Send Another
                  </button>
                  <button
                    type="button"
                    onClick={handleBackToHome}
                    className="bg-gray-950 hover:bg-black text-white text-xs font-bold py-3 px-6 rounded-full shadow-lg transition-all cursor-pointer active:scale-95"
                  >
                    Return Home
                  </button>
                </div>
              </div>
            ) : (
              /* Active Form fields */
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h4 className="text-lg font-black text-gray-950 border-l-4 border-[#ee3124] pl-2.5 mb-2 leading-none uppercase text-left flex items-center gap-2">
                  Send Us a Message <HelpCircle className="w-4 h-4 text-gray-400" />
                </h4>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold text-gray-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    {...register("fullName")}
                    className="bg-white border border-gray-200 focus:border-[#ee3124] focus:ring-1 focus:ring-[#ee3124] text-gray-900 rounded-xl px-4 py-3.5 text-sm font-bold outline-none transition-all placeholder:text-gray-400 placeholder:font-semibold shadow-sm"
                  />
                  {errors.fullName && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}</span>}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-gray-500">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      {...register("email")}
                      className="bg-white border border-gray-200 focus:border-[#ee3124] focus:ring-1 focus:ring-[#ee3124] text-gray-900 rounded-xl px-4 py-3.5 text-sm font-bold outline-none transition-all placeholder:text-gray-400 placeholder:font-semibold shadow-sm"
                    />
                    {errors.email && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}</span>}
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-gray-500">Phone Number (10 Digits)</label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      {...register("phone")}
                      className="bg-white border border-gray-200 focus:border-[#ee3124] focus:ring-1 focus:ring-[#ee3124] text-gray-900 rounded-xl px-4 py-3.5 text-sm font-bold outline-none transition-all placeholder:text-gray-400 placeholder:font-semibold shadow-sm"
                    />
                    {errors.phone && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}</span>}
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold text-gray-500">Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Query regarding Home Loan details"
                    {...register("subject")}
                    className="bg-white border border-gray-200 focus:border-[#ee3124] focus:ring-1 focus:ring-[#ee3124] text-gray-900 rounded-xl px-4 py-3.5 text-sm font-bold outline-none transition-all placeholder:text-gray-400 placeholder:font-semibold shadow-sm"
                  />
                  {errors.subject && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.subject.message}</span>}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-bold text-gray-500">Message Details</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your query or requirement in detail..."
                    {...register("message")}
                    className="bg-white border border-gray-200 focus:border-[#ee3124] focus:ring-1 focus:ring-[#ee3124] text-gray-900 rounded-xl px-4 py-3.5 text-sm font-bold outline-none transition-all placeholder:text-gray-450 placeholder:font-semibold resize-none shadow-sm"
                  />
                  {errors.message && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.message.message}</span>}
                </div>

                {/* Form Footer Action Submit button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-[#ee3124] hover:bg-[#d8271c] text-white text-xs font-black uppercase tracking-wider py-4 px-8 rounded-full shadow-lg shadow-red-500/10 transition-all cursor-pointer flex items-center gap-2 active:scale-95 btn-3d"
                  >
                    Send Message <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}
export default ContactPage
