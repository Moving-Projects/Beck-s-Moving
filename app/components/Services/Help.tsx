import Image from 'next/image'
import React from 'react'

interface HelpProps {
    subtitle: string,
    title: string,
    text1: string,
    text2: string,
    img: string
}

export default function Help({subtitle, title, text1, text2, img}: HelpProps) {
  return (
    <div className='flex flex-col lg:flex-row items-start px-3 max-w-[73rem] mx-auto lg:gap-8 mb-16 lg:mb-24'>
        <div className='flex-1 relative -mt-10 hidden lg:block'>
            <Image
                width={631}
                height={357}
                src={`/images/services/circles-help.webp`}
                alt="help section background image"
                className="absolute right-0 top-0 w-[112%] max-w-none pointer-events-none"
            />
            <Image
                width={564}
                height={594}
                src={`/images/services/${img}-help.webp`}
                alt="help section background image"
                className="w-full"
            />
        </div>
        <div className='lg:w-[33rem] text-center lg:text-left'>
            <p className='font-barlow font-medium mb-3 text-accent lg:text-2xl'>{subtitle}</p>
            <h2 className='text-2xl lg:text-5xl font-extrabold lg:mb-6 text-dark leading-tight lg:leading-normal'>{title}</h2>
            <Image
                width={564}
                height={594}
                src={`/images/services/${img}-help.webp`}
                alt="help section background image"
                className="w-full mb-6 pr-7 lg:hidden"
            />
            <p className='font-barlow font-medium mb-12 lg:mb-16 lg:text-lg max-w-[64rem] mx-auto leading-tight'>{text1} <br/> <br/> {text2}</p>
        </div>
    </div>
  )
}
