import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OurStory() {
  return (
    <div className="relative py-16 lg:py-24 flex justify-center">
         <Image
            width={1920}
            height={1125}
            src="/images/about-us/story-bg.webp"
            alt="group of moving workers"
            className="absolute left-0 top-0 w-full h-full object-cover"
        />

        <Image
            width={1920}
            height={943}
            src="/images/about-us/story-line.svg"
            alt="decorative line"
            className="absolute left-0 top-0 w-full h-full object-cover hidden lg:block"
        />

        <Image
            width={390}
            height={792}
            src="/images/about-us/story-line-mob.svg"
            alt="decorative line"
            className="absolute left-0 top-0 w-full h-full object-cover lg:hidden"
        />

        <div className='z-10 px-3 lg:px-0 max-w-[67rem]'>
            <div className='bg-accent rounded-3xl lg:rounded-[3rem] py-8 lg:py-24 px-3 lg:px-48'>
                <p className='font-barlow font-medium mb-4 text-white lg:text-2xl text-center'>Our Story</p>
                <h2 className='text-2xl lg:text-5xl font-extrabold mb-6 text-white text-center'>How We Became <br/> Your Trusted Moving Experts</h2>
                <p className='text-white font-barlow font-medium mb-6 lg:mb-12 text-center lg:text-lg'>Beck’s Moving Company started with a simple mission: to make moving a hassle-free and positive experience for every customer. From humble beginnings, we’ve grown into a team of dedicated professionals, each with a passion for providing top-notch moving services. We’ve built our reputation on trust, hard work, and a commitment to delivering outstanding service, whether it’s a local move, long-distance relocation, or a complex office transfer. <br/><br/> Our success is rooted in our customer-first philosophy. Every move is personal to us, and we treat each client like family. With attention to detail, a strong work ethic, and the desire to go above and beyond, we’ve helped countless families and businesses transition to new homes and offices with ease. At Beck’s, it’s not just about getting the job done—it’s about doing it right and making the process enjoyable for our customers.</p>
                <Link href="/contact-us" className="flex justify-center w-fit items-center bg-dark rounded-2xl gap-1 lg:gap-2 py-4 px-6 group hover:bg-opacity-70 duration-200 mx-auto">
                    <p className="text-white font-base font-extrabold">Get a Free Quote</p>
                    <Image
                        width={24}
                        height={24}
                        src="/images/arrow.svg"
                        alt="arrow icon"
                        className="size-6 group-hover:translate-x-1 transition duration-200"
                    />
                </Link>
            </div>
        </div>
    </div>
  )
}
