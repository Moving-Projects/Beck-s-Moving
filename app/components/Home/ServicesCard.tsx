import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import FindMoreButton from '../FindMoreButton'

interface ServicesCardProps {
    title: string,
    text1: string,
    text2: string,
    image: string,
    link: string
}

export default function ServicesCard({title, text1, text2, image, link}: ServicesCardProps) {

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
    <motion.div variants={variants} transition={{duration: .5, ease: 'easeInOut'}} className='flex lg:flex-row flex-col'>
        <div className='flex flex-col lg:flex-row p-6 lg:p-8 gap-4 lg:gap-8 bg-extraWhite rounded-3xl hover:bg-accent transition duration-300 group/card shadow-base'>
            <h3 className='text-dark text-2xl font-extrabold lg:hidden group-hover/card:text-white transition duration-300'>{title}</h3>
            <Image
                width={350}
                height={400}
                src={`/images/homepage/services/${image}.webp`}
                alt="services image"
                className="w-full lg:w-[45%] object-contain object-bottom"
                unoptimized
                
            />
            <div className='flex flex-col justify-between items-start lg:gap-6'>
                <div>
                    <p className='text-dark text-[2rem] font-extrabold hidden lg:block group-hover/card:text-white transition duration-300 mb-6'>{title}</p>
                    <p className=' group-hover/card:text-white transition duration-300 lg:text-lg'>{text1} <br/><br/> {text2}</p>
                </div>
                <FindMoreButton link={link} light className='lg:mt-0'/>
            </div>
        </div>
    </motion.div>
  )
}
