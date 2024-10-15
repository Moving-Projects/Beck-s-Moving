'use client'

import { useRef } from 'react'
import ServicesCard from './ServicesCard'
import { motion, useInView } from "framer-motion"

export default function ServicesGrid() {
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
    <motion.div className="grid auto-rows-fr grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 lg:gap-8" ref={ref} variants={list} animate={isInView ? "show": "hide"} transition={{duration: .5}}>
        <ServicesCard link="/services/local-moves" title='Local Moves' text1='Moving within the city? Our local moving services are designed to handle your move efficiently and safely.' text2='How We Help: Our team of expert movers is dedicated to providing you with fast and reliable local moving services. From packing to transport, we ensure your belongings arrive at your new home in perfect condition.' image='service-1'/>
        <ServicesCard link="/services/long-distance" title='Long-Distance Moves' text1='Moving across the state or to a new city? Trust us to handle your long-distance move with care and precision.' text2='How We Help: We specialize in cross-country moves with a focus on safety and timely delivery. Our long-distance services include full packing and secure transportation, so you can move with peace of mind.' image='service-2'/>
        <ServicesCard link="/services/office-moves" title='Office Moves' text1='Minimize downtime and get back to business quickly with our professional office moving services.' text2='How We Help: We work closely with your team to create a moving plan that suits your schedule. Our movers handle everything from packing office equipment to reassembling furniture, ensuring a seamless transition.' image='service-3'/>
        <ServicesCard link="/services/apartment-moves" title='Apartment Moving' text1="We specialize in apartment moves, taking care of all the details so you don’t have to. Whether you're moving from a studio or a multi-bedroom unit, our expert team is equipped to handle every aspect of your move efficiently. " text2='Let us handle the logistics, so you can settle into your new apartment with ease.' image='service-4'/>
    </motion.div>
  )
}
