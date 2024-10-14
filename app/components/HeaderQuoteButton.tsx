'use client'
import Image from "next/image";
import Icon from "./Icon";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeaderQuoteButton() {
    const [next, setNext] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight && !next) setNext(true);
            if (window.scrollY <= window.innerHeight && next) setNext(false);
        })
    })

  return (
    <div className="flex">
        <Link href="tel:8000000000" className="flex gap-2 text-lg font-extrabold text-white hover:opacity-75 transition duration-200">
            <Icon src="/images/phone.svg" alt="phone icon" />
            <span className="hidden lg:block">(800) 000 - 0000</span>
        </Link>

        <Link href="/contact-us" className={`lg:flex justify-center items-center bg-dark rounded-2xl gap-2 py-4 px-6 hidden group hover:bg-semidark duration-300 absolute right-36 ${next ? 'top-1/2' : 'top-[150%]'} -translate-y-1/2`}>
            <p className="text-white font-base font-extrabold">Get a Free Quote</p>
            <Image
                width={16}
                height={16}
                src="/images/arrow.svg"
                alt="arrow icon"
                className="size-4 group-hover:translate-x-1 transition duration-200"
            />
        </Link>
        
    </div>
  )
}
