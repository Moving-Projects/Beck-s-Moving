import React from 'react'

interface QuoteRequestEmailInputProps {
    setProperty: (arg: string) => void,
    property: string,
    className: string
}

export default function QuoteRequestEmailInput({setProperty, property, className}: QuoteRequestEmailInputProps) {
    return (
        <input type='email' placeholder="Email *" onChange={(e) => {setProperty(e.currentTarget.value)}} className={`px-6 my-auto border border-accent rounded-lg lg:rounded-2xl text-left w-52 font-barlow font-bold placeholder:text-[#737798] ${className}`} value={property} />
    )
}
