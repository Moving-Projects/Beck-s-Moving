import React from 'react'
import ServicesGrid from './ServicesGrid'

export default function Services() {
  return (
    <div className='wrapper pt-16 lg:pt-24 pb-16 lg:pb-24' id="services">
        <p className='font-barlow font-medium mb-4 text-center text-accent lg:text-2xl'>Moving Solutions for Every Need</p>
        <h2 className='text-center text-2xl lg:text-5xl font-extrabold mb-6 text-dark'>Beck&apos;s Moving <br/> Company Services</h2>
        <p className='font-barlow font-medium text-center mb-12 lg:mb-16 lg:text-lg max-w-[64rem] mx-auto leading-tight'>At Bec&apos;s Moving Company, we take pride in offering a complete range of moving services designed to make your relocation as smooth and stress-free as possible. Whether you&apos;re moving locally, across the state, or need professional commercial moving assistance, we&apos;ve got you covered. Explore our services below and discover how we can make your next move seamless.</p>
        <ServicesGrid />
    </div>
  )
}
