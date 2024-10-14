import Image from 'next/image'
import React from 'react'
import QuoteRequestForm from './QuoteRequestForm'

interface HeroProps {
    slug?: string[]
}

export default function Hero({slug}: HeroProps) {
  return (
    <div className="rounded-b-[4rem] lg:rounded-b-[15rem] pt-6 lg:pt-24 pb-24 lg:pb-0 bg-accent relative overflow-hidden">
        <div className="wrapper flex flex-col lg:flex-row gap-12 relative lg:justify-between">
            <div className='text-left relative z-10'>
                <h1 className="text-white text-[2rem] lg:text-8xl font-extrabold lg:leading-tight">Let’s Talk About <br /> Your Moving</h1>
                <p className='font-barlow font-medium text-white mt-6 lg:text-lg lg:max-w-[38rem]'>To help us get started on providing you with a custom moving plan, please fill out the form below with your details. <br/> <br/> Once you’ve submitted your information, a member of our team will contact you to discuss your move and provide a free, no-obligation quote.</p>
                <Image
                    width={672}
                    height={360}
                    src="/images/homepage/contact-us/hero-car.webp"
                    alt="car"
                    className="w-[42rem] hidden lg:block mt-16"
                />
            </div>
            <QuoteRequestForm slug={slug}/>
            <Image
                width={1055}
                height={357}
                src="/images/homepage/contact-us/hero-bg.svg"
                alt="hero section background shape"
                className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[95%] lg:w-full max-w-none z-0"
            />
        </div>
    </div>
  )
}
