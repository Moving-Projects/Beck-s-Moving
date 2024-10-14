'use client'

import React, { use, useEffect, useState } from 'react'
import QuoteRequestStepTitle from '../QuoteRequestStepTitle'
import QuoteRequestCheckInput from '../Inputs/QuoteRequestCheckInput'
import QuoteRequestTextInput from '../Inputs/QuoteRequestTextInput';
import QuoteRequestButtons from '../QuoteRequestButtons';

interface QuoteRequestPropertyProps {
    setStep: (arg: number) => void,
    step: number,
    setProperty: (arg: string) => void,
}

export default function QuoteRequestProperty({step, setStep, setProperty}: QuoteRequestPropertyProps) {
    const [option, setOption] = useState('');
    const [other, setOther] = useState('');
    const [mobile, setMobile] = useState(true);

    const nextStep = () => {
        setStep(step + 1);
        other !== '' ? setProperty(other) : setProperty(option);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    useEffect(() => {
        window.innerWidth < 1024 ? setMobile(true) : setMobile(false);
    }, [])

    useEffect(() => {
        if (other !== '') setOption('');
    }, [other])

    useEffect(() => {
        if (option !== '') setOther('');
    }, [option])

    return (
        <div className={`pr-11 lg:pr-16 flex flex-col justify-between lg:gap-8 min-w-[calc(100vw-2.75rem)] lg:min-w-[31rem]`}>
            <div>
                <QuoteRequestStepTitle title='Step 1: Moving Property' subtitle='Select the type of property you are moving.'/>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-6 lg:mt-10 gap-y-2 lg:gap-4">
                    <QuoteRequestCheckInput className='h-14' name='Private House' setProperty={setOption} property={option}/>
                    <QuoteRequestCheckInput className='h-14' name='Office/Comercial' setProperty={setOption} property={option}/>
                    <QuoteRequestCheckInput className='h-14' name='Apartment' setProperty={setOption} property={option}/>
                    <QuoteRequestTextInput className='h-14' name='Other' setProperty={setOther} property={other}/>
                </div>
            </div>
            <QuoteRequestButtons disabled={option === '' && other === ''} nextStep={nextStep} prevStep={prevStep}/>
        </div>
    )
}
