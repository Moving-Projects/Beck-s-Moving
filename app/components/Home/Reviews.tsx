import React from 'react'
import ReviewsCarousel from './ReviewsCarousel'

export default function Reviews() {
  return (
    <div className='bg-accent py-16 lg:py-24 relative px-3 lg:px-0' id="reviews">
        <div className='absolute bg-[#6C76C5] top-20 lg:top-16 -left-16 w-60 lg:w-[30rem] aspect-square rounded-full z-0'></div>
        <div className='absolute bg-[#6C76C5] bottom-16 right-16 w-[30rem] aspect-square rounded-full z-0 hidden lg:block'></div>

        <p className='font-barlow font-medium mb-4 text-center text-white lg:text-2xl z-10 relative'>Customer Reviews</p>
        <h2 className='text-center text-2xl lg:text-5xl font-extrabold mb-6 lg:mb-16 text-white z-10 relative'>What Our <br/> Reviews Say</h2>
        <ReviewsCarousel />
    </div>
  )
}
