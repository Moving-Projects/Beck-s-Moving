import React from 'react'

interface QuoteRequestStepTitleProps {
    title: string,
    subtitle: string
}

export default function QuoteRequestStepTitle({title, subtitle}: QuoteRequestStepTitleProps) {
  return (
    <>
        <p className='text-dark text-lg lg:text-[2rem] font-extrabold mb-4 text-center leading-none'>{title}</p>
        <p className='text-center font-barlow lg:text-lg font-bold leading-none'>{subtitle}</p>
    </>
  )
}
