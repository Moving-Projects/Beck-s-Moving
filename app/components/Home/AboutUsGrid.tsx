'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from "framer-motion"

export default function AboutUsGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref);

  return (
    <div className='grid grid-cols-2 grid-rows-2 auto-rows-min gap-3 lg:gap-8 -translate-x-10 lg:translate-x-0 translate-y-24 lg:translate-y-8 -rotate-[15deg] w-[103%] lg:absolute lg:left-0 lg:top-0 lg:w-fit group lg:max-w-[40vw]' ref={ref}>
            <motion.div className='row-span-2' variants={{show: {opacity: 1, y: 0}, hide: {opacity: 0, y:-50}}} animate={isInView ? "show": "hide"} transition={{duration: .5, delay: .3, ease: 'easeInOut'}}>
                <div className='relative lg:group-hover:-translate-x-2 transition duration-300'>
                    <Image
                        width={140}
                        height={390}
                        src="/images/homepage/about-us/card-decoration.webp"
                        alt="about us card image"
                        className="absolute w-[36%] -top-[8%] -left-[11%]"
                        quality={100}
                    />
                    <Image
                        width={382}
                        height={650}
                        src="/images/homepage/about-us/about-us-card-1.webp"
                        alt="about us card image"
                        className="shadow-base"
                        quality={100}
                    />
                </div>
            </motion.div>
            <motion.div variants={{show: {opacity: 1, y: 0}, hide: {opacity: 0, y:50}}} animate={isInView ? "show": "hide"} transition={{duration: .5, delay: .3, ease: 'easeInOut'}}>
                <Image
                    width={382}
                    height={325}
                    src="/images/homepage/about-us/about-us-card-2.webp"
                    alt="about us card image"
                    className="shadow-base lg:group-hover:translate-x-2 lg:group-hover:-translate-y-2 transition duration-300"
                    quality={100}
                />
            </motion.div>
            <motion.div variants={{show: {opacity: 1, y: 0}, hide: {opacity: 0, y:50}}} animate={isInView ? "show": "hide"} transition={{duration: .5, delay: .3, ease: 'easeInOut'}}>
                <Image
                    width={382}
                    height={210}
                    src="/images/homepage/about-us/about-us-card-3.webp"
                    alt="about us card image"
                    className="shadow-base lg:group-hover:translate-x-2 lg:group-hover:translate-y-2 transition duration-300"
                    quality={100}
                />
            </motion.div>
    </div>
  )
}
