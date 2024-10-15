'use client'

import React, { useEffect, useState } from 'react'
import QuoteRequestStepTitle from '../QuoteRequestStepTitle'
import QuoteRequestCheckInput from '../Inputs/QuoteRequestCheckInput'
import QuoteRequestTextInput from '../Inputs/QuoteRequestTextInput';
import QuoteRequestButtons from '../QuoteRequestButtons';

interface QuoteRequestPropertyProps {
    setStep: (arg: number) => void,
    step: number,
    setRoom: (arg: string) => void,
}

export default function QuoteRequestRooms({step, setStep, setRoom}: QuoteRequestPropertyProps) {
    const [option, setOption] = useState('');
    const [other, setOther] = useState('');

    const nextStep = () => {
        setStep(step + 1);
        if (other !== '') setRoom(other); else setRoom(option);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    useEffect(() => {
        if (other !== '') {
            setOption('');
        }
    }, [other]);

    return (
        <div className={`px-11 lg:px-16 flex flex-col justify-between lg:gap-8 min-w-[100vw] lg:min-w-[35rem]`}>
            <div>
                <QuoteRequestStepTitle title='Step 2: Number of Rooms' subtitle='How many rooms are being moved?'/>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-6 lg:mt-8 gap-y-2 lg:gap-4">
                    <QuoteRequestCheckInput className='h-10 lg:h-14' name='Studio' setProperty={setOption} property={option}/>
                    <QuoteRequestCheckInput className='h-10 lg:h-14' name='1 Bedroom' setProperty={setOption} property={option}/>
                    <QuoteRequestCheckInput className='h-10 lg:h-14' name='2 Bedroom' setProperty={setOption} property={option}/>
                    <QuoteRequestCheckInput className='h-10 lg:h-14' name='3 Bedroom' setProperty={setOption} property={option}/>
                    <QuoteRequestCheckInput className='h-10 lg:h-14' name='4+ Bedroom' setProperty={setOption} property={option}/>
                    <QuoteRequestTextInput className='h-10 lg:h-14' name='Other' setProperty={setOther} property={other}/>
                </div>
            </div>
            <QuoteRequestButtons back disabled={option === '' && other === ''} nextStep={nextStep} prevStep={prevStep}/>
        </div>
    )
}
