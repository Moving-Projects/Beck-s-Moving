import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

interface AdvantagesCardProps {
  image: string,
  title1: string,
  title2: string,
  text: string,
  last: boolean
}

export default function AdvantagesCard({image, title1, title2, text, last}: AdvantagesCardProps) {
  return (
    <div className={`w-full rounded-3xl overflow-hidden flex flex-col lg:w-[26vw] max-w-[491px] ${last ? 'gap-4' : 'bg-lightblue shadow-base group'}`}>
        <Image
            width={491}
            height={329}
            src={`/images/homepage/advantages/${image}.webp`}
            alt="advantages graphic"
            className="w-full rounded-3xl"
            
        />
        <div className={`p-6 lg:p-8 bg-extraWhite rounded-3xl ${last ? 'shadow-base' : 'group-hover:translate-y-3 transition duration-300'}`}>
          <h3 className='text-dark text-2xl lg:text-[2rem] font-bold mb-4 lg:mb-6'>{title1} <br/> {title2}</h3>
          <p className='font-barlow font-medium lg:text-lg'>{text}</p>
          {last && 
            <Link href="/contact-us" className={`lg:flex w-fit justify-center items-center bg-dark rounded-2xl gap-2 py-4 px-6 hidden group hover:bg-opacity-75 duration-300 mt-6`}>
              <p className="text-white font-base font-extrabold">Get a Free Quote</p>
              <Image
                  width={16}
                  height={16}
                  src="/images/arrow.svg"
                  alt="arrow icon"
                  className="size-4 group-hover:translate-x-1 transition duration-200"
              />
            </Link>
        }
        </div>
    </div>
  )
}
