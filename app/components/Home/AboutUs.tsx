import Image from 'next/image'
import React from 'react'
import AboutUsGrid from './AboutUsGrid'
import FindMoreButton from '../FindMoreButton'

export default function AboutUs() {
  return (
    <div className="lg:flex mb-48">
        <div className="flex-1"></div>
        <div className='pl-12 lg:pl-24 w-screen max-w-full lg:max-w-[1920px]'>
            <div className="rounded-l-[3rem] bg-accent pr-3 pl-8 lg:pl-24 lg:pr-36 pt-16 lg:py-24 lg:flex gap-28 lg:w-full relative">
                <div className='max-w-full'>
                    <p className='font-barlow font-medium mb-4 text-white lg:text-2xl'>Your Trusted Moving Partner</p>
                    <h2 className='text-2xl lg:text-5xl font-extrabold mb-6 text-white'>About Beck&apos;s <br/> Moving Company</h2>
                    <p className='font-barlow font-medium text-white lg:mb-12 lg:text-lg w-[42rem] max-w-full'>Beck&apos;s Moving Company started with a simple vision: to offer reliable and stress-free moving services that customers can depend on. What began as a small, family-owned business with a single truck has grown into a leading moving company known for exceptional service, attention to detail, and a personal touch that sets us apart. <br/><br/> At Beck&apos;s Moving Company, we believe that our success comes from our unwavering commitment to our customers. We don&apos;t just move boxes; we move lives, and we take that responsibility seriously. Our goal is not just to be another moving company but to be the one you can trust with your most precious belongings. We look forward to continuing our legacy of excellence, one move at a time.</p>
                    <FindMoreButton link="/about-us" className='-mb-14 lg:mb-0 lg:mt-0'/>
                </div>

                <div className="relative lg:flex-1">
                    <AboutUsGrid />
                </div>

                <Image
                    width={886}
                    height={1116}
                    src="/images/homepage/about-us/about-us-circles.webp"
                    alt="circles bg"
                    className="w-1/2 left-[40%] absolute z-0 top-[5%] hidden lg:block pointer-events-none"
                />
            </div>
        </div>
        <div className="flex-1 bg-accent"></div>
    </div>
  )
}
