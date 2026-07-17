import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { 
  X, Upload, Check, AlertCircle, Landmark, 
  ShieldCheck, FileText, CheckCircle, Loader2, ArrowRight, ArrowLeft 
} from "lucide-react"

// --- Form Validation Schemas ---

const step1Schema = z.object({
  fullName: z.string().min(3, "Full Name must be at least 3 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Phone number must be a valid 10-digit Indian number"),
  dob: z.string().refine((val) => {
    const birthDate = new Date(val);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  }, { message: "You must be at least 18 years old" }),
  loanAmount: z.number().min(10000, "Minimum loan amount is ₹10,000").max(50000000, "Maximum loan amount is ₹5 Crore"),
  loanTenure: z.number().min(12, "Minimum tenure is 12 months").max(360, "Maximum tenure is 360 months"),
  loanPurpose: z.string().min(1, "Please select loan purpose"),
})

const step2Schema = z.object({
  address: z.string().min(8, "Address must be at least 8 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  zipCode: z.string().regex(/^\d{6}$/, "ZIP/Pincode must be exactly 6 digits"),
  employmentStatus: z.string().min(1, "Please select employment status"),
  monthlyIncome: z.number().min(10000, "Minimum monthly income should be ₹10,000"),
  companyName: z.string().min(2, "Company Name must be at least 2 characters"),
  experience: z.number().min(0, "Work experience cannot be negative"),
})

const step3Schema = z.object({
  bankName: z.string().min(2, "Bank Name must be at least 2 characters"),
  accountNumber: z.string().regex(/^\d{9,18}$/, "Account number must be between 9 and 18 digits"),
  ifscCode: z.string().regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, "IFSC Code must be valid (e.g. SBIN0001234)"),
  accountHolder: z.string().min(3, "Account Holder Name must be at least 3 characters"),
  accountType: z.string().min(1, "Please select account type"),
})

const step5Schema = z.object({
  consent: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and consent to credit verification"
  }),
  signature: z.string().min(2, "Please sign with your full legal name"),
})

const fullFormSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema)
  .merge(step5Schema)

type FormData = z.infer<typeof fullFormSchema>

interface LoanApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

export const LoanApplicationModal: React.FC<LoanApplicationModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)
  const [applicationId, setApplicationId] = useState("")

  // --- Document Upload Simulation States ---
  const [uploadedFiles, setUploadedFiles] = useState<{
    idProof: { name: string; progress: number; done: boolean } | null
    addressProof: { name: string; progress: number; done: boolean } | null
    incomeProof: { name: string; progress: number; done: boolean } | null
  }>({
    idProof: null,
    addressProof: null,
    incomeProof: null,
  })
  
  const [uploadErrors, setUploadErrors] = useState<{
    idProof?: string
    addressProof?: string
    incomeProof?: string
  }>({})

  const stepsList = [
    { id: 1, name: "Loan & Personal" },
    { id: 2, name: "Work & Address" },
    { id: 3, name: "Bank Account" },
    { id: 4, name: "Upload Docs" },
    { id: 5, name: "Declaration" }
  ]

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    getValues,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(fullFormSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      loanAmount: 100000,
      loanTenure: 36,
      loanPurpose: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      employmentStatus: "",
      monthlyIncome: 30000,
      companyName: "",
      experience: 2,
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      accountHolder: "",
      accountType: "",
      consent: false,
      signature: "",
    }
  })

  const watchedAmount = watch("loanAmount")

  // Helper to trigger simulated file upload animation
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "idProof" | "addressProof" | "incomeProof") => {
    const file = e.target.files?.[0]
    if (!file) return

    // Clear previous errors
    setUploadErrors(prev => ({ ...prev, [type]: undefined }))

    setUploadedFiles(prev => ({
      ...prev,
      [type]: { name: file.name, progress: 0, done: false }
    }))

    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 20
      setUploadedFiles(prev => {
        const target = prev[type]
        if (!target) return prev
        return {
          ...prev,
          [type]: { ...target, progress: Math.min(currentProgress, 100) }
        }
      })

      if (currentProgress >= 100) {
        clearInterval(interval)
        setUploadedFiles(prev => {
          const target = prev[type]
          if (!target) return prev
          return {
            ...prev,
            [type]: { ...target, done: true }
          }
        })
      }
    }, 150)
  }

  const validateStep = async () => {
    let fields: string[] = []

    if (currentStep === 1) {
      fields = ["fullName", "email", "phone", "dob", "loanAmount", "loanTenure", "loanPurpose"]
    } else if (currentStep === 2) {
      fields = ["address", "city", "state", "zipCode", "employmentStatus", "monthlyIncome", "companyName", "experience"]
    } else if (currentStep === 3) {
      fields = ["bankName", "accountNumber", "ifscCode", "accountHolder", "accountType"]
    } else if (currentStep === 4) {
      // Manual validation for simulated file uploads
      const errorsList: { idProof?: string; addressProof?: string; incomeProof?: string } = {}
      if (!uploadedFiles.idProof || !uploadedFiles.idProof.done) {
        errorsList.idProof = "Please upload a valid identity proof document"
      }
      if (!uploadedFiles.addressProof || !uploadedFiles.addressProof.done) {
        errorsList.addressProof = "Please upload a valid address proof document"
      }
      if (!uploadedFiles.incomeProof || !uploadedFiles.incomeProof.done) {
        errorsList.incomeProof = "Please upload your recent income details proof"
      }

      if (Object.keys(errorsList).length > 0) {
        setUploadErrors(errorsList)
        return false
      }
      return true
    }

    const isStepValid = await trigger(fields as any)
    return isStepValid
  }

  const handleNext = async () => {
    const isStepValid = await validateStep()
    if (isStepValid) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  const onSubmit = async (_data: FormData) => {
    const isStepValid = await validateStep()
    if (!isStepValid) return

    setIsSubmitting(true)
    
    // Simulate API request processing loan approval and credit check
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmissionSuccess(true)
      const randId = "VARAHI-" + Math.floor(100000 + Math.random() * 900000) + "-" + String.fromCharCode(65 + Math.floor(Math.random() * 26))
      setApplicationId(randId)
    }, 2800)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 select-none overflow-y-auto py-8">
      {/* Modal Card wrapper */}
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-[fadeInUp_0.3s_ease-out] border border-gray-100">
        
        {/* Header bar */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-gray-950">Loan Application Form</h3>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">Secure Portal | Powered by Varahi Communications</p>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer border border-transparent hover:border-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper progress indicator */}
        {!submissionSuccess && !isSubmitting && (
          <div className="px-6 py-4 bg-slate-50/50 border-b border-gray-150 overflow-x-auto flex scrollbar-none">
            <div className="flex items-center justify-between w-full min-w-[550px] mx-auto px-2">
              {stepsList.map((s, index) => (
                <React.Fragment key={s.id}>
                  {/* Step Item */}
                  <div className="flex items-center gap-2">
                    <div 
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                        currentStep === s.id 
                          ? "bg-[#ee3124] text-white shadow-md shadow-red-500/20 ring-2 ring-red-100" 
                          : currentStep > s.id 
                            ? "bg-emerald-500 text-white" 
                            : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > s.id ? <Check className="w-4 h-4" /> : s.id}
                    </div>
                    <span 
                      className={`text-xs font-bold whitespace-nowrap ${
                        currentStep === s.id ? "text-gray-900" : "text-gray-400"
                      }`}
                    >
                      {s.name}
                    </span>
                  </div>
                  {/* Connector Line */}
                  {index < stepsList.length - 1 && (
                    <div 
                      className={`flex-grow h-0.5 mx-2 min-w-[30px] rounded-full transition-colors duration-300 ${
                        currentStep > s.id ? "bg-emerald-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Form scroll container */}
        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          {isSubmitting ? (
            /* Loader State */
            <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
              <Loader2 className="w-14 h-14 text-[#ee3124] animate-spin mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Processing Your Request</h4>
              <p className="text-sm text-gray-500 max-w-sm font-semibold leading-relaxed">
                We are validating your details, verifying credentials, and checking initial credit availability status.
              </p>
              
              {/* Fake progress items list */}
              <div className="mt-8 text-left w-full max-w-xs space-y-3 bg-slate-50 p-5 rounded-2xl border border-gray-100 font-bold text-xs">
                <div className="flex items-center gap-2.5 text-emerald-600">
                  <Check className="w-4 h-4 stroke-[3]" /> Validating details schemas
                </div>
                <div className="flex items-center gap-2.5 text-emerald-600">
                  <Check className="w-4 h-4 stroke-[3]" /> Checking document attachments
                </div>
                <div className="flex items-center gap-2.5 text-gray-700 animate-pulse">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-[#ee3124]" /> Performing initial credit scoring
                </div>
              </div>
            </div>
          ) : submissionSuccess ? (
            /* Success State */
            <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner animate-[scaleIn_0.3s_ease-out]">
                <CheckCircle className="w-12 h-12" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-1">Application Submitted Successfully!</h4>
              <p className="text-sm text-emerald-600 font-bold mb-6">Congratulations, your request is undergoing verification.</p>
              
              <div className="bg-slate-50 p-6 rounded-3xl border border-gray-100 w-full max-w-md space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-xs text-gray-450 font-bold uppercase tracking-wider">Application ID</span>
                  <span className="text-sm font-extrabold text-gray-900 bg-red-50 text-[#ee3124] px-3 py-1 rounded-lg border border-red-100">{applicationId}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-xs text-gray-450 font-bold uppercase tracking-wider">Loan Purpose</span>
                  <span className="text-sm font-bold text-gray-900">{getValues("loanPurpose")}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-xs text-gray-450 font-bold uppercase tracking-wider">Requested Amount</span>
                  <span className="text-sm font-extrabold text-gray-900">₹{Number(getValues("loanAmount")).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-450 font-bold uppercase tracking-wider">Selected Tenure</span>
                  <span className="text-sm font-bold text-gray-900">{getValues("loanTenure")} Months</span>
                </div>
              </div>

              <div className="text-left w-full max-w-md space-y-3.5 text-sm text-gray-600 leading-relaxed font-medium">
                <h5 className="font-bold text-gray-900 border-l-4 border-[#ee3124] pl-2.5">What Happens Next?</h5>
                <p>1. Our verification desk will review the uploaded proofs against the details provided.</p>
                <p>2. A loan relationship manager will call you at <strong className="text-gray-900">{getValues("phone")}</strong> within 2 hours to confirm eligibility and request additional information if needed.</p>
                <p>3. Upon final approval, you will receive an SMS and email notification with details on document e-signing.</p>
              </div>

              <button 
                type="button"
                onClick={onClose}
                className="mt-8 bg-gray-900 hover:bg-black text-white text-sm font-bold py-3.5 px-8 rounded-full shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
              >
                Close Portal
              </button>
            </div>
          ) : (
            /* Active Form Steps */
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              
              {/* STEP 1: Loan & Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-[fadeIn_0.3s_ease-out]">
                  <h4 className="text-lg font-bold text-gray-950 border-l-4 border-[#ee3124] pl-2.5 mb-2 leading-none uppercase">Loan & Personal Information</h4>
                  
                  {/* Loan Amount Slider */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100/70 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-bold text-gray-800">Requested Loan Amount</label>
                      <span className="text-lg font-extrabold text-[#ee3124] bg-white border border-red-100 px-3 py-1 rounded-xl shadow-sm">
                        ₹{Number(watchedAmount).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <input 
                      type="range"
                      min={10000}
                      max={2000000}
                      step={10000}
                      {...register("loanAmount", { valueAsNumber: true })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ee3124] outline-none"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 font-extrabold">
                      <span>₹10,000</span>
                      <span>₹10 Lakhs</span>
                      <span>₹20 Lakhs+</span>
                    </div>
                  </div>

                  {/* Inputs row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Loan Tenure */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Loan Tenure</label>
                      <select 
                        {...register("loanTenure", { valueAsNumber: true })}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all"
                      >
                        <option value="12">12 Months (1 Year)</option>
                        <option value="24">24 Months (2 Years)</option>
                        <option value="36">36 Months (3 Years)</option>
                        <option value="60">60 Months (5 Years)</option>
                        <option value="120">120 Months (10 Years)</option>
                      </select>
                      {errors.loanTenure && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.loanTenure.message}</span>}
                    </div>

                    {/* Loan Purpose */}
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Purpose of Loan</label>
                      <select 
                        {...register("loanPurpose")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all"
                      >
                        <option value="">Select Purpose</option>
                        <option value="Personal Needs">Personal / General Needs</option>
                        <option value="Home Construction">Home Purchase / Construction</option>
                        <option value="Vehicle Purchase">Car / Bike Purchase</option>
                        <option value="Education Funding">Higher Education</option>
                        <option value="Business Extension">Business Capital Extension</option>
                      </select>
                      {errors.loanPurpose && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.loanPurpose.message}</span>}
                    </div>
                  </div>

                  {/* Personal details row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Full Name (As in ID proof)</label>
                      <input 
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        {...register("fullName")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.fullName && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.fullName.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Email Address</label>
                      <input 
                        type="email"
                        placeholder="e.g. name@example.com"
                        {...register("email")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.email && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.email.message}</span>}
                    </div>
                  </div>

                  {/* Phone and DOB row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Phone Number (10 digits)</label>
                      <input 
                        type="tel"
                        placeholder="e.g. 9876543210"
                        {...register("phone")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.phone && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.phone.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Date of Birth (DD-MM-YYYY)</label>
                      <input 
                        type="date"
                        {...register("dob")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all"
                      />
                      {errors.dob && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.dob.message}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Address & Employment Details */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-[fadeIn_0.3s_ease-out]">
                  <h4 className="text-lg font-bold text-gray-950 border-l-4 border-[#ee3124] pl-2.5 mb-2 leading-none uppercase">Address & Employment Details</h4>

                  {/* Address Text Area */}
                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-xs font-bold text-gray-700">Residential Address</label>
                    <input 
                      type="text"
                      placeholder="Street name, building, apartment number"
                      {...register("address")}
                      className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                    />
                    {errors.address && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.address.message}</span>}
                  </div>

                  {/* Address grid details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">City</label>
                      <input 
                        type="text"
                        placeholder="e.g. Jaipur"
                        {...register("city")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.city && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.city.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">State</label>
                      <input 
                        type="text"
                        placeholder="e.g. Rajasthan"
                        {...register("state")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.state && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.state.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">ZIP / Pincode</label>
                      <input 
                        type="text"
                        placeholder="e.g. 302001"
                        {...register("zipCode")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.zipCode && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.zipCode.message}</span>}
                    </div>
                  </div>

                  {/* Divider line */}
                  <hr className="border-gray-100 my-4" />

                  {/* Employment Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Employment Status</label>
                      <select 
                        {...register("employmentStatus")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all"
                      >
                        <option value="">Select Status</option>
                        <option value="Salaried">Salaried (Full-time)</option>
                        <option value="Self-Employed">Self-Employed (Professional)</option>
                        <option value="Business Owner">Business Owner / Merchant</option>
                        <option value="Retired">Retired Pensioner</option>
                      </select>
                      {errors.employmentStatus && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.employmentStatus.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Monthly Net Take-Home Income (₹)</label>
                      <input 
                        type="number"
                        placeholder="e.g. 45000"
                        {...register("monthlyIncome", { valueAsNumber: true })}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.monthlyIncome && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.monthlyIncome.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Company Name / Business Name</label>
                      <input 
                        type="text"
                        placeholder="e.g. ABC Pvt Ltd"
                        {...register("companyName")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.companyName && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.companyName.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Total Work Experience (Years)</label>
                      <input 
                        type="number"
                        placeholder="e.g. 3"
                        {...register("experience", { valueAsNumber: true })}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.experience && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.experience.message}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Bank Details */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-[fadeIn_0.3s_ease-out]">
                  <h4 className="text-lg font-bold text-gray-950 border-l-4 border-[#ee3124] pl-2.5 mb-2 leading-none uppercase">Bank Details</h4>
                  
                  <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex gap-3 text-amber-700 text-xs font-semibold leading-relaxed mb-4 text-left">
                    <Landmark className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <div>
                      Please provide the active bank account details where you wish to receive the loan disbursement. This account will also be registered for EMI auto-debit payments.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Account Holder's Name (As in bank record)</label>
                      <input 
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        {...register("accountHolder")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.accountHolder && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.accountHolder.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Bank Name</label>
                      <input 
                        type="text"
                        placeholder="e.g. HDFC Bank"
                        {...register("bankName")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.bankName && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.bankName.message}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Bank Account Number</label>
                      <input 
                        type="text"
                        placeholder="e.g. 501002345678"
                        {...register("accountNumber")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.accountNumber && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.accountNumber.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5 text-left">
                      <label className="text-xs font-bold text-gray-700">Bank IFSC Code</label>
                      <input 
                        type="text"
                        placeholder="e.g. HDFC0000001"
                        {...register("ifscCode")}
                        className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium"
                      />
                      {errors.ifscCode && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.ifscCode.message}</span>}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 text-left w-full md:w-1/2">
                    <label className="text-xs font-bold text-gray-700">Bank Account Type</label>
                    <select 
                      {...register("accountType")}
                      className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all"
                    >
                      <option value="">Select Type</option>
                      <option value="Savings">Savings Account</option>
                      <option value="Current">Current Account</option>
                    </select>
                    {errors.accountType && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.accountType.message}</span>}
                  </div>
                </div>
              )}

              {/* STEP 4: Document Upload */}
              {currentStep === 4 && (
                <div className="space-y-5 animate-[fadeIn_0.3s_ease-out]">
                  <h4 className="text-lg font-bold text-gray-950 border-l-4 border-[#ee3124] pl-2.5 mb-2 leading-none uppercase">Document Upload</h4>
                  
                  <p className="text-xs text-gray-450 font-bold mb-4 text-left leading-relaxed">
                    Please upload standard verification documents. Only PDF, JPG, and PNG files up to 5MB are allowed.
                  </p>

                  <div className="space-y-4">
                    {/* Document Upload slots */}
                    {[
                      { key: "idProof", label: "Identity Proof Document (PAN/Passport/Adhaar Card)" },
                      { key: "addressProof", label: "Residential Address Proof (Utility bill / Rent Agreement)" },
                      { key: "incomeProof", label: "Income Details Verification Proof (Salary Slips / ITR)" }
                    ].map((doc) => {
                      const file = uploadedFiles[doc.key as "idProof" | "addressProof" | "incomeProof"]
                      const error = uploadErrors[doc.key as "idProof" | "addressProof" | "incomeProof"]

                      return (
                        <div key={doc.key} className="flex flex-col gap-1 text-left bg-slate-50 p-4 border border-gray-150 rounded-2xl">
                          <label className="text-xs font-bold text-gray-700 mb-1.5">{doc.label}</label>
                          
                          {file ? (
                            /* File uploading progress state */
                            <div className="bg-white rounded-xl border border-gray-100 p-3.5 flex items-center justify-between shadow-sm">
                              <div className="flex items-center gap-3 overflow-hidden">
                                <div className="w-9 h-9 bg-red-50 text-[#ee3124] flex items-center justify-center rounded-xl flex-shrink-0">
                                  <FileText className="w-5 h-5" />
                                </div>
                                <div className="overflow-hidden text-left">
                                  <p className="text-xs font-bold text-gray-800 truncate max-w-[280px]">{file.name}</p>
                                  {file.done ? (
                                    <span className="text-[10px] text-emerald-600 font-extrabold flex items-center gap-0.5 mt-0.5">
                                      <Check className="w-3.5 h-3.5 stroke-[3]" /> Upload Completed
                                    </span>
                                  ) : (
                                    <span className="text-[10px] text-gray-400 font-extrabold flex items-center gap-1 mt-0.5">
                                      <Loader2 className="w-3 h-3 animate-spin text-[#ee3124]" /> Uploading ({file.progress}%)
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Progress bar and Checkicon */}
                              <div className="flex items-center gap-3">
                                {!file.done && (
                                  <div className="w-24 bg-gray-100 h-1.5 rounded-full overflow-hidden">
                                    <div 
                                      className="bg-[#ee3124] h-full transition-all duration-150" 
                                      style={{ width: `${file.progress}%` }}
                                    />
                                  </div>
                                )}
                                <button 
                                  type="button"
                                  onClick={() => {
                                    setUploadedFiles(prev => ({ ...prev, [doc.key]: null }))
                                  }}
                                  className="text-xs font-bold text-red-500 hover:text-red-700 hover:underline cursor-pointer"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          ) : (
                            /* Upload Dropzone slot */
                            <label className="border-2 border-dashed border-gray-200 hover:border-red-400/60 bg-white hover:bg-slate-50/50 p-6 rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-all">
                              <Upload className="w-7 h-7 text-gray-400 mb-2" />
                              <span className="text-xs text-[#ee3124] font-bold">Click to upload file</span>
                              <span className="text-[9px] text-gray-400 mt-1 font-bold">PDF, PNG, JPG up to 5MB</span>
                              <input 
                                type="file"
                                className="hidden"
                                accept=".pdf,.png,.jpg,.jpeg"
                                onChange={(e) => handleFileUpload(e, doc.key as any)}
                              />
                            </label>
                          )}
                          {error && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-1.5"><AlertCircle className="w-3.5 h-3.5" /> {error}</span>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Declaration & Consent */}
              {currentStep === 5 && (
                <div className="space-y-5 animate-[fadeIn_0.3s_ease-out]">
                  <h4 className="text-lg font-bold text-gray-950 border-l-4 border-[#ee3124] pl-2.5 mb-2 leading-none uppercase">Declaration & Consent</h4>
                  
                  <div className="bg-slate-50 p-5 rounded-2xl border border-gray-100 leading-relaxed text-xs text-gray-600 text-left font-medium space-y-3">
                    <p className="font-bold text-gray-900 flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Statutory Authorization Terms</p>
                    <p>I hereby certify that all the statements and details filled in this application form are correct, valid, and true to the best of my knowledge.</p>
                    <p>I authorize Varahi Communications and its verified banking/lending partners to request my credit history report from databases (CIBIL/Equifax) and perform electronic check validations to assess credit eligibility.</p>
                    <p>I acknowledge that false details or invalid attachments can result in instantaneous application rejection or cancellation.</p>
                  </div>

                  {/* Consent checkbox */}
                  <div className="flex flex-col gap-1 text-left">
                    <label className="flex items-start gap-2.5 cursor-pointer mt-3 select-none">
                      <input 
                        type="checkbox"
                        {...register("consent")}
                        className="w-4.5 h-4.5 rounded border-gray-300 text-[#ee3124] focus:ring-[#ee3124] cursor-pointer mt-0.5 accent-[#ee3124]"
                      />
                      <span className="text-xs font-bold text-gray-700 leading-tight">
                        I read, understand, and authorize the statutory conditions, credit checks, and declaration terms.
                      </span>
                    </label>
                    {errors.consent && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-2"><AlertCircle className="w-3.5 h-3.5" /> {errors.consent.message}</span>}
                  </div>

                  {/* Simulated Signature input */}
                  <div className="flex flex-col gap-1.5 text-left w-full md:w-1/2 mt-4">
                    <label className="text-xs font-bold text-gray-700">Digital Signature (Type your Full Name)</label>
                    <input 
                      type="text"
                      placeholder="Type name to sign legally"
                      {...register("signature")}
                      className="bg-white border border-gray-200 rounded-xl px-3.5 py-3 text-sm font-bold text-gray-800 outline-none focus-visible:ring-2 focus-visible:ring-[#ee3124] focus-visible:ring-offset-1 transition-all placeholder:text-gray-400 placeholder:font-medium font-serif italic"
                    />
                    {errors.signature && <span className="text-xs text-red-500 flex items-center gap-1 font-bold mt-0.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.signature.message}</span>}
                  </div>
                </div>
              )}

              {/* Form Action Footer Buttons */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between bg-slate-50/50 -mx-6 md:-mx-8 px-6 md:px-8 mt-8">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center gap-1.5 border border-gray-200 hover:border-gray-400 bg-white hover:bg-slate-50 text-gray-700 text-sm font-bold py-3 px-6 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : (
                  <div /> /* Empty placeholder */
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="flex items-center gap-1.5 bg-gray-900 hover:bg-black text-white text-sm font-bold py-3 px-7 rounded-full shadow-lg transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                  >
                    Next <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 bg-[#ee3124] hover:bg-[#d8271c] text-white text-sm font-bold py-3 px-8 rounded-full shadow-lg shadow-red-500/10 transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 animate-pulse"
                  >
                    Submit Request <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  )
}
export default LoanApplicationModal
