"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const Accordion = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("space-y-1", className)}>{children}</div>
}

const AccordionItem = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={cn("border-b", className)}>{children}</div>
}

const AccordionTrigger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const [isOpen, setIsOpen] = React.useState(false)

    // This is a simplified trigger that toggles the next sibling content
    // In a real radix-ui accordion, this is handled via context. 
    // For this simple version, we'll use a click handler on the parent or just local state if we wrap Content.
    // To make it simple and self-contained without context:

    return (
        <button
            onClick={(e) => {
                const content = e.currentTarget.nextElementSibling as HTMLElement;
                if (content) {
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                    const icon = e.currentTarget.querySelector('.accordion-icon');
                    if (icon) icon.classList.toggle('rotate-180');
                }
            }}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 accordion-icon" />
        </button>
    )
}

const AccordionContent = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("overflow-hidden text-sm transition-all pb-4 pt-0", className)} style={{ display: 'none' }}>
            {children}
        </div>
    )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
