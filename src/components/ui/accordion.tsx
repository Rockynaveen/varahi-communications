import React, { createContext, useContext, useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextProps {
  activeValue: string | null
  toggleValue: (value: string) => void
}

const AccordionContext = createContext<AccordionContextProps | null>(null)

export const Accordion: React.FC<{
  type?: "single" | "multiple"
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  const [activeValue, setActiveValue] = useState<string | null>(null)

  const toggleValue = (value: string) => {
    setActiveValue((prev) => (prev === value ? null : value))
  }

  return (
    <AccordionContext.Provider value={{ activeValue, toggleValue }}>
      <div className={cn("space-y-1", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemContextProps {
  value: string
}

const AccordionItemContext = createContext<AccordionItemContextProps | null>(null)

export const AccordionItem: React.FC<{
  value: string
  className?: string
  children: React.ReactNode
}> = ({ value, className, children }) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div className={cn("border-b border-slate-200", className)}>{children}</div>
    </AccordionItemContext.Provider>
  )
}

export const AccordionTrigger: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  const accordionContext = useContext(AccordionContext)
  const itemContext = useContext(AccordionItemContext)

  if (!accordionContext || !itemContext) {
    throw new Error("AccordionTrigger must be used inside Accordion and AccordionItem")
  }

  const { activeValue, toggleValue } = accordionContext
  const { value } = itemContext
  const isOpen = activeValue === value

  return (
    <h3 className="flex">
      <button
        type="button"
        onClick={() => toggleValue(value)}
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200" />
      </button>
    </h3>
  )
}

export const AccordionContent: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  const accordionContext = useContext(AccordionContext)
  const itemContext = useContext(AccordionItemContext)

  if (!accordionContext || !itemContext) {
    throw new Error("AccordionContent must be used inside Accordion and AccordionItem")
  }

  const { activeValue } = accordionContext
  const { value } = itemContext
  const isOpen = activeValue === value

  return (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all duration-300 ease-in-out",
        isOpen ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0 py-0"
      )}
      data-state={isOpen ? "open" : "closed"}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </div>
  )
}
