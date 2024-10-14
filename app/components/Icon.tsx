import Image from 'next/image'
import React from 'react'

interface IconProps {
    src: string,
    alt: string,
    className?: string
}

export default function Icon({src, alt, className}: IconProps) {
    return (
        <Image
            width={24}
            height={24}
            src={src}
            alt={alt}
            className={`size-6 ${className}`}
            
        />
    )
}
