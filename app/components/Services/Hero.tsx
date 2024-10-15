import Image from 'next/image'
import React from 'react'
import QuoteForm from '../QuoteForm'

interface HeroProps {
    title: string,
    text: string,
    img: string
}

export default function Hero({title, text, img}: HeroProps) {
  return (
    <div className="rounded-b-[4rem] lg:rounded-b-[15rem] pt-6 lg:pt-16 bg-accent relative overflow-hidden mb-16 lg:mb-24">
        <div className="wrapper relative pb-48 lg:pb-56">
            <div className='text-left relative z-10 mx-auto'>
                <h1 className="text-white text-[2rem] lg:text-8xl font-extrabold lg:leading-tight text-center">{title}</h1>
                <p className='font-barlow font-medium text-white mt-6 mb-12 lg:mb-16 lg:text-lg text-center lg:max-w-[46rem] mx-auto'>{text}</p>
                <div className="flex justify-center">
                    <QuoteForm />
                </div>
            </div>
            <Image
                width={1918}
                height={625}
                src={`/images/services/${img}-hero.webp`}
                alt="hero section background image"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[170%] lg:w-full max-w-none z-0"
            />
        </div>
    </div>
  )
}
