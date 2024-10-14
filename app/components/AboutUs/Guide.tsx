import React from 'react'
import GuideGrid from './GuideGrid'

export default function Guide() {
  return (
    <div className='wrapper my-16 lg:mt-24 lg:mb-72'>
         <p className='font-barlow font-medium mb-4 text-center text-accent lg:text-2xl'>Our Moving Process</p>
         <h2 className='text-center text-2xl lg:text-5xl font-extrabold mb-12 lg:mb-16 text-dark'>Step-by-Step Guidance <br/> for a Seamless Move</h2>
         <GuideGrid />
    </div>
  )
}
