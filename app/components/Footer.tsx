import React from 'react'
import ScrollTopButton from './ScrollTopButton'
import Icon from './Icon'
import Link from 'next/link'

interface FooterProps {
    homepage?: boolean
}

export default function Footer({homepage = false}: FooterProps) {
  return (
    <footer className={`bg-dark ${homepage ? "pt-80 lg:pt-[22rem] -mt-80 lg:-mt-[22rem]" : ""} pb-6 lg:pb-8`}>
        <div className="wrapper pt-16 lg:pt-24 flex flex-col lg:flex-row lg:justify-between relative">
            <ScrollTopButton />
            <div className='lg:w-[23rem]'>
                <h2 className='text-2xl lg:text-[2rem] font-extrabold mb-4 lg:mb-6 text-white'>Beck&apos;s Moving</h2>
                <p className='font-medium text-white mb-8 lg:mb-0 lg:text-lg'>Beck&apos;s Moving Company is a trusted, full-service moving provider specializing in local, long-distance, office, and commercial moves, as well as secure storage solutions.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div>
                    <p className='font-extrabold text-white mb-4 lg:text-lg'>Our Contacts</p>
                    <p className='font-medium mb-2 text-white lg:text-lg'>Mon - Sun: 8AM - 7PM</p>
                    <Link href="tel:+" className="flex items-center gap-2 mb-2 transition duration-200 hover:opacity-75">
                        <Icon src='/images/phone.svg' alt='phone icon'/>
                        <p  className='font-medium text-white leading-none lg:text-lg'>(800) - 000 - 0000</p>
                    </Link>
                    <Link href='mailto:' className="flex items-center gap-2 mb-2 transition duration-200 hover:opacity-75">
                        <Icon src='/images/mail.svg' alt='mail icon'/>
                        <p className='font-medium text-white leading-none lg:text-lg'>info@becksmoving.com</p>
                    </Link>
                </div>
                
                <div>
                    <p className='font-extrabold text-white mb-4 lg:text-lg'>Explore More</p>
                    <Link href="/" className='hover:opacity-75 transition duration-200 font-medium text-white mb-2 block lg:text-lg'>Home</Link>
                    <Link href="/#services" className='hover:opacity-75 transition duration-200 font-medium text-white mb-2 block lg:text-lg'>Services</Link>
                    <Link href="/about-us" className='hover:opacity-75 transition duration-200 font-medium text-white mb-2 block lg:text-lg'>About Us</Link>
                    <Link href="/#reviews" className='hover:opacity-75 transition duration-200 font-medium text-white mb-2 block lg:text-lg'>Client Reviews</Link>
                    <Link href="/contact-us" className='hover:opacity-75 transition duration-200 font-medium text-white mb-2 lg:mb-0 block lg:text-lg'>Contact Us</Link>
                </div>

                <div>
                    <p className='font-extrabold text-white mb-4 lg:text-lg'>Our Socials</p>
                   <div className="flex gap-2">
                        <Link href="/" className='transition duration-200 hover:opacity-75'>
                            <Icon src='/images/socials/instagram.svg' alt='instagram icon'/>
                        </Link>
                        <Link href="/" className='transition duration-200 hover:opacity-75'>
                            <Icon src='/images/socials/facebook.svg' alt='facebook icon'/>
                        </Link>
                        <Link href="/" className='transition duration-200 hover:opacity-75'>
                            <Icon src='/images/socials/x.svg' alt='x icon'/>
                        </Link>
                        <Link href="/" className='transition duration-200 hover:opacity-75'>
                            <Icon src='/images/socials/tripadvisor.svg' alt='tripadvisor icon'/>
                        </Link>
                        <Link href="/" className='transition duration-200 hover:opacity-75'>
                            <Icon src='/images/socials/linkedin.svg' alt='linkedin icon'/>
                        </Link>
                   </div>
                </div>
            </div>
        </div>
        <p className='text-white text-xs text-center mt-8 lg:mt-20 lg:text-base'>Copyright © 2024 Beck&apos;s Moving. All rights reserved </p>
    </footer>
  )
}