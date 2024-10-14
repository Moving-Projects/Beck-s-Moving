'use client'

import Image from 'next/image'
import React from 'react'

export default function ScrollTopButton() {
  return (
    <button className='bg-gray px-4 py-5 lg:hover:bg-dark transition duration-200 group rounded-2xl mx-auto flex mb-6 lg:absolute lg:left-1/2 lg:-translate-x-1/2 border border-gray' onClick={() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth' });
    }}>
        <Image
            width={24}
            height={24}
            src="/images/arrow.svg"
            alt="arrow icon"
            className="size-6 dark-filter lg:group-hover:filter-none transition duration-200 -rotate-90"
            
        />
    </button>
)
}
