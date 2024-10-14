import Image from 'next/image'
import React from 'react'

export default function ServicesNav() {
  return (
    <div className='flex items-center gap-4 lg:gap-12 justify-center py-2 bg-white'>
        <ServiceButton name='Local Moves' img='local-moves-icon' link="/services/local-moves"/>
        <ServiceButton name='Long Distance' img='long-distance-icon' link="/services/long-distance"/>
        <ServiceButton name='Office Moves' img='office-moves-icon' link="/services/office-moves"/>
        <ServiceButton name='Apartment Moves' img='apartment-icon' link="/services/apartment-moves"/>
    </div>
  )
}

const ServiceButton = ({name, img, link}: {name: string, img: string, link: string}) => { 
    return (
        <a href={link} className='group'>
            <Image
                src={`/images/${img}.webp`}
                alt="local moves icon"
                width={48}
                height={48}
                className='size-8 lg:size-12 mb-1 mx-auto'
            />
            <p className="text-[#242953] text-xs lg:text-base font-extrabold group-hover:text-accent transition duration-200">{name}</p>
        </a>
    )
 }