import React, { useState } from 'react'

interface QuoteRequestZipInputProps {
    name: string,
    setProperty: (arg: string) => void,
    property: string,
    className: string
}

export default function QuoteRequestZipInput({name, setProperty, property, className}: QuoteRequestZipInputProps) {
  return (
    <input type='number' placeholder={name} onInput={(e) => {const input = e.target as HTMLInputElement; input.value = input.value.slice(0, 5);}} min={0} max={99999} maxLength={5} inputMode="numeric" onChange={(e) => {setProperty(e.currentTarget.value)}} className={`px-6 my-auto border border-accent rounded-lg lg:rounded-2xl text-left w-52 font-barlow font-bold placeholder:text-[#737798] ${className}`} value={property} />
  )
}
