import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import linkIcon from '../../public/images/link-icon.svg';

interface FindMoreButtonProps {
    className?: string,
    light?: boolean,
    link: string
}

export default function FindMoreButton({className, light = false, link}: FindMoreButtonProps) {
  return (
    <Link href={link} className={`flex justify-center items-center ${light ? "bg-gray hover:bg-dark" : "bg-dark hover:bg-opacity-70"} rounded-2xl gap-2 py-4 px-6 mt-6 group transition duration-200 w-fit ${className}`}>
        <p className={`font-base font-extrabold ${light ? "text-dark group-hover:text-white" : "text-white"} transition duration-200`}>Find More</p>
        <Image
            src={linkIcon}
            alt="link icon"
            className={`size-6 transition duration-200 ${light ? "dark-filter group-hover:filter-none" : ""}`}
            
        />
    </Link>
  )
}
