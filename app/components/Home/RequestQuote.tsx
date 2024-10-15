'use client'

import Image from 'next/image'
import React from 'react'
import { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import Link from 'next/link'

export default function RequestQuote() {
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <div className="lg:flex mt-16 max-w-full overflow-hidden">
        <div className="flex-1 bg-extraWhite"></div>
        <motion.div ref={ref} className='pr-12 lg:pr-24 w-screen max-w-full lg:max-w-[1920px]' variants={{show: {x:0}, hide: {x:-100}}} animate={isInView ? 'show' : 'hide'} transition={{duration: .5, ease: 'easeInOut'}}>
            <div className="rounded-r-[3rem] bg-extraWhite pl-3 pr-8 lg:pr-24 lg:pl-6 pt-16 lg:pt-20 flex lg:flex-row flex-col-reverse gap-6 lg:gap-28 lg:w-full relative overflow-hidden">
                <div className="relative lg:flex-1">
                    <Image
                        width={1799}
                        height={626}
                        src="/images/request-quote/bg-img.webp"
                        alt="illustration of man moving boxes"
                        className="w-[190%] lg:w-[95vw] max-w-none lg:max-w-[1799px] lg:absolute left-0 bottom-0"
                        
                    />
                </div>

                <div className='max-w-full lg:pt-24 z-10 lg:pb-40'>
                    <p className='font-barlow font-medium mb-4 text-dark lg:text-2xl'>Request a Quote</p>
                    <h2 className='text-2xl lg:text-5xl font-extrabold mb-6 text-dark'>Get Your Free, <br className='lg:hidden'/> No-Obligation <br/> Moving Estimate</h2>
                    <p className='font-barlow font-medium text-dark lg:mb-12 lg:text-lg w-[42rem] max-w-full'>Planning a move? Let us help you get started! Use our easy-to-use Moving Cost Calculator to get an instant quote and start your journey today! Fill out our quick and easy form to receive a personalized quote for your move.</p>
                    <Link href="/contact-us" className="flex justify-center w-fit items-center bg-accent hover:bg-dark rounded-2xl gap-2 py-4 px-6 mt-6 lg:mt-0 group/button transition duration-200">
                        <p className="font-base font-extrabold text-white">Get a Free Quote</p>
                        <Image
                            width={16}
                            height={16}
                            src="/images/arrow.svg"
                            alt="arrow icon"
                            className="size-4 group-hover/button:translate-x-1 transition duration-200"
                            
                        />
                    </Link>
                </div>
            </div>
        </motion.div>
        <div className="flex-1"></div>
    </div>
  )
}
