import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

interface GuideGridItemProps {
    title: string,
    text: string,
    className: string,
    img: string
}

export default function GuideGridItem({title, text, className, img}: GuideGridItemProps) {

    const variants = {
        show: {
            y: 0,
            opacity: 1,
        },
        hide: {
            opacity: 0,
            y: 50
        }
    }

  return (
    <div className={`${className}`} >
        <motion.div className='aspect-[366/280] lg:aspect-[512/352] overflow-hidden rounded-3xl p-6 lg:p-8 relative w-full h-full' variants={variants} transition={{duration: .5, ease: 'easeInOut'}}>
            <h3 className='text-2xl lg:text-[2rem] text-white font-extrabold mb-5 lg:mb-6 z-10 relative'>{title}</h3>
            <p className='font-barlow font-medium leading-5 lg:text-lg text-white z-10 relative pr-10 lg:pr-24'>{text}</p>
            <Image
                width={216}
                height={215}
                src={img}
                alt="step from guide"
                className="absolute right-0 bottom-0"
            />
        </motion.div>
    </div>
  )
}
