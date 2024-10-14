import React from 'react'
import Icon from '../Icon'

interface QuoteRequestButtonsProps {
    back?: boolean,
    disabled: boolean,
    nextStep: () => void,
    prevStep: () => void,
}

export default function QuoteRequestButtons({back = false, disabled, nextStep, prevStep}: QuoteRequestButtonsProps) {
  return (
    <div className={`flex mt-4 w-full ${back ? 'justify-between lg:px-16' : 'justify-center'}`}>
        {back && 
            <button className='font-extrabold text-accent' onClick={prevStep}>Back</button>
        }
        <button className={`flex bg-accent gap-1 px-14 py-4 rounded-lg lg:rounded-2xl text-white font-extrabold disabled:opacity-75 ${back ? "" : "w-full justify-center"}`} disabled={disabled} onClick={nextStep}>
            Continue
            <Icon src='/images/arrow.svg' alt='arrow icon'/>
        </button>
    </div>
  )
}
