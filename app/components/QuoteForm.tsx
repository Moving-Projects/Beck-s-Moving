'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import TextInput from './Inputs/TextInput'
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation'

export default function QuoteForm() {
  const [zip, setZip] = useState('');
  const router = useRouter();
    
    const validateData = () => {
        if (zip.length != 5) {
            toast ({
            duration: 5000,
            variant: "destructive",
            title: "Invalid Zip Code",
            description: "Zip code must contain 5 numbers",
            });
            return false;
        }

        return true;
    }

    const submitData = () => {
        if (!validateData()) return;

        router.push('/contact-us/' + zip);
    }

  return (
    <form className="w-full p-6 lg:px-8 bg-white rounded-3xl h-fit max-w-[27rem] shadow-base" onSubmit={(e) => {e.preventDefault(); submitData()}}>
        <p className="text-center lg:text-left text-2xl lg:text-4xl font-extrabold mb-2 lg:mb-4 text-dark">Easily Estimate Your <br /> Move for Free!</p>
        <div className="flex gap-2 justify-center lg:justify-start items-center mb-6 lg:mb-11">
            <Image
                width={16}
                height={16}
                src="/images/info.svg"
                alt="info icon"
                className="size-3 lg:size-4"
            />
            <p className="text-accent text-xs lg:text-base font-medium">We do no share your information.</p>
        </div>
        <TextInput zip={zip} setZip={setZip} />
        <button className="flex items-center justify-center bg-accent rounded-2xl w-full gap-2 py-4 group transition duration-200 hover:bg-dark">
            <p className="text-white text-sm lg:text-base font-extrabold">Get a Free Quote</p>
            <Image
                width={24}
                height={24}
                src="/images/arrow.svg"
                alt="arrow icon"
                className="size-4 lg:size-6 group-hover:translate-x-1 transition duration-200"
            />
        </button>
    </form>
  )
}
