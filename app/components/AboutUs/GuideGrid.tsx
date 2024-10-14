'use client'

import GuideGridItem from './GuideGridItem'
import { useRef } from 'react'
import { motion, useInView } from "framer-motion"

export default function GuideGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const list = {
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
          },
        },
        hide: {
          opacity: 0,
        },
      }
    
  return (
    <motion.div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 max-w-[66rem] mx-auto' ref={ref} variants={list} animate={isInView ? "show": "hide"} transition={{duration: .5}}>
        <GuideGridItem className='[&>div]:bg-accent [&>div>img]:w-1/3 [&>div>img]:lg:w-[42%]' img="/images/about-us/guide/step-1.webp" title='1. Initial Consultation' text="Your moving journey with Beck’s begins with an initial consultation, either over the phone or online. We’ll discuss the details of your move, including your location, destination, and any special requirements you may have. This allows us to tailor a moving plan specifically for you."/>
        <GuideGridItem className='[&>div]:bg-semidark [&>div>img]:w-[42%] [&>div>img]:lg:w-[47%] lg:translate-y-48' img="/images/about-us/guide/step-2.webp" title='2. Personalized Quote' text="After gathering all the necessary information, we’ll provide you with a clear and detailed moving estimate. Our pricing is transparent, with no hidden fees, so you know exactly what to expect from start to finish."/>
        <GuideGridItem className='[&>div]:bg-dark [&>div>img]:w-1/3 [&>div>img]:lg:w-[40%]' img="/images/about-us/guide/step-3.webp" title='3. Packing & Preparation' text="If you opt for our packing services, our team of professionals will carefully pack your belongings, using high-quality materials to ensure everything is secure. If you choose to pack yourself, we can provide tips and packing materials to make the process easier."/>
        <GuideGridItem className='[&>div]:bg-accent [&>div>img]:w-1/3 [&>div>img]:lg:w-[38%] lg:translate-y-48' img="/images/about-us/guide/step-4.webp" title='4. Moving Day' text="On the big day, our experienced movers will arrive on time, ready to handle your items with care. Whether it's furniture disassembly, packing last-minute items, or loading everything into the truck, our team works efficiently to ensure a smooth transition."/>
        <GuideGridItem className='[&>div]:bg-semidark [&>div>img]:w-[42%] [&>div>img]:lg:w-[41%]' img="/images/about-us/guide/step-5.webp" title='5. Unloading & Reassembly' text="Upon arrival, our team will unload everything carefully, placing items where you want them in your new space. We’ll also reassemble any furniture and ensure that your new home or office is set up to your satisfaction."/>
        <GuideGridItem className='[&>div]:bg-dark [&>div>img]:w-1/3 [&>div>img]:lg:w-[39%] lg:translate-y-48' img="/images/about-us/guide/step-6.webp" title='6. Satisfaction Check' text="Before we leave, we’ll walk through your new location with you to ensure everything has been done to your expectations. We pride ourselves on leaving you settled, satisfied, and ready to enjoy your new space."/>
    </motion.div>
  )
}
