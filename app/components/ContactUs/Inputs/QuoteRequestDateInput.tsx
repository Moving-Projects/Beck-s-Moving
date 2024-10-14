"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface QuoteRequestDateInputProps {
    setDate: (day: Date | undefined) => void,
    date: Date | undefined,
    className: string
}

export default function QuoteRequestDateInput({setDate, date, className}: QuoteRequestDateInputProps) {

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            `w-52 px-6 text-left border border-accent shadow-none font-barlow font-bold flex justify-between rounded-lg lg:rounded-2xl text-base lg:text-[14px] 2xl:text-[16px] ${className}`,
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "MM-dd-yyyy") : <span className="text-base lg:text-[14px] 2xl:text-[16px]">Date *</span>}
          <CalendarIcon className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
        fromDate={new Date()}
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
