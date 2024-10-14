import { CarouselApi } from '@/components/ui/carousel';
import Image from 'next/image'
import React from 'react'

interface ReviewsCarouselNavProps {
    length : number,
    activeSlide : number,
    api: CarouselApi | undefined,
}

export default function ReviewsCarouselNav({length, activeSlide, api}: ReviewsCarouselNavProps) {
  return (
    <div className='flex justify-center items-center gap-6'>
        <button className='bg-gray rounded-2xl px-5 py-4' onClick={() => {
            if (api) api.scrollPrev();
        }}>
            <Image
                width={24}
                height={24}
                src="/images/arrow.svg"
                alt="arrow icon"
                className="size-6 dark-filter rotate-180"
            />
        </button>
        <div className="flex items-center gap-1">
            <p className='text-white text-2xl font-extrabold'>{activeSlide + 1}</p>
            <div className="relative w-[6.25rem] h-2 rounded-2xl border border-white overflow-hidden">
                <div className='absolute left-0 top-0 bg-white h-full transition-all duration-200' style={{width: `${(activeSlide + 1) / length * 100}%`}}></div>
            </div>
            <p className='text-white text-2xl font-extrabold'>{length}</p>
        </div>
        <button className='bg-dark rounded-2xl px-5 py-4' onClick={() => {
            if (api) api.scrollNext();
        }}>
            <Image
                width={24}
                height={24}
                src="/images/arrow.svg"
                alt="arrow icon"
                className="size-6"
            />
        </button>
    </div>
  )
}
