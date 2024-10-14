'use client'

import React from 'react'
import HeroReviewCard from './HeroReviewCard'
import { reviews } from "@/lib/utils"
import { motion } from "framer-motion"
import HeroReviewCardStatic from './HeroReviewCardStatic'

export default function HeroReviewCardGroup() {
    const list = {
        show: {
          transition: {
            staggerChildren: 8,
          },
        },
        hide: {
        },
      }

  return (
    <motion.div className='relative shadow-base h-fit bg-white rounded-3xl' variants={list} initial="hide" animate="show">
          <HeroReviewCardStatic absolute { ...reviews[4]}/>
        {
          reviews.map((review, index) => {
              if (index < 4) return (
                  <HeroReviewCard key={index} absolute={index > 0} { ...review}/>
              )
          })
        }
    </motion.div>
  )
}
