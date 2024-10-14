import React from 'react'

interface QuoteRequestCheckInputProps {
    name: string,
    setProperty: (arg: string) => void,
    property: string,
    className: string
}

export default function QuoteRequestCheckInput({name, setProperty, property, className}: QuoteRequestCheckInputProps) {
  return (
    <button onClick={() => {setProperty(name)}} className={`px-6 my-auto border border-accent rounded-lg lg:rounded-2xl text-left w-52 font-barlow font-bold transition duration-200 lg:text-[14px] 2xl:text-[16px] ${className} ${property === name ? 'bg-accent text-white' : ''}`}>{name}</button>
  )
}
