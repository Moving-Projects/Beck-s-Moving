'use client'

import React, { useState } from 'react'
import QuoteRequestStepTitle from '../QuoteRequestStepTitle'
import QuoteRequestTextInput from '../Inputs/QuoteRequestTextInput';
import QuoteRequestButtons from '../QuoteRequestButtons';
import QuoteRequestZipInput from '../Inputs/QuoteRequestZipInput';
import QuoteRequestDateInput from '../Inputs/QuoteRequestDateInput';
import QuoteRequestEmailInput from '../Inputs/QuoteRequestEmailInput';

interface QuoteRequestDetailsProps {
    setStep: (arg: number) => void,
    step: number,
    movingFrom: string,
    setMovingFrom: (arg: string) => void,
    movingTo: string,
    setMovingTo: (arg: string) => void,
    setDate: (day: Date | undefined) => void,
    date: Date | undefined,
    email: string,
    setEmail: (arg: string) => void,
    name: string,
    setName: (arg: string) => void,
    phone: string,
    setPhone: (arg: string) => void,
    submitData: () => void,
}

export default function QuoteRequestDetails({submitData, step, setStep, movingFrom, setMovingFrom, movingTo, setMovingTo, date, setDate, email, setEmail, name, setName, phone, setPhone}: QuoteRequestDetailsProps) {

    const nextStep = () => {
        submitData();
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    return (
        <div className={`px-11 lg:px-16 flex flex-col justify-between lg:gap-8 min-w-[100vw] lg:min-w-[35rem]`}>
            <div>
                <QuoteRequestStepTitle title='Step 3: Additional Details' subtitle='Let our team know more details.'/>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-6 gap-y-2 lg:gap-4">
                    <QuoteRequestZipInput className='h-10 lg:h-14' name='Moving From Zip *' setProperty={setMovingFrom} property={movingFrom}/>
                    <QuoteRequestZipInput className='h-10 lg:h-14' name='Moving To Zip *' setProperty={setMovingTo} property={movingTo}/>
                    <QuoteRequestDateInput className='h-10 lg:h-14' setDate={setDate} date={date}/>
                    <QuoteRequestEmailInput className='h-10 lg:h-14' setProperty={setEmail} property={email}/>
                    <QuoteRequestTextInput className='h-10 lg:h-14' name='Name *' setProperty={setName} property={name}/>
                    <QuoteRequestTextInput className='h-10 lg:h-14' name='Phone Number *' setProperty={setPhone} property={phone}/>
                </div>
            </div>
            <QuoteRequestButtons back disabled={movingFrom === '' || movingTo === '' || !date || email === '' || name === '' || phone === ''} nextStep={nextStep} prevStep={prevStep}/>
        </div>
    )
}
