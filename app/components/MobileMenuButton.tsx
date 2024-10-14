'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function MobileMenuButton() {
    const [isOpen, setOpen] = useState(false);

    const firstLine = {
        open: {
            rotate: '45deg',
            y: '-50%',
            top: '50%'
        },

        closed: {
            y: 0,
            rotate: 0,
            top: 0
        }
    }

    const lastLine = {
        open: {
            rotate: '-45deg',
            y: '50%',
            bottom: '50%'
        },

        closed: {
            y: 0,
            rotate: 0,
            bottom: 0
        }
    }

    const middleLine = {
        open: {
            x: '-100%',
            opacity: 0,
            y: '-50%',
        },

        closed: {
            x: 0,
            y: '-50%',
            opacity: 1
        }
    }
    
  return (
    <>
        <MobileMenu open={isOpen} />
        <motion.button className="relative xl:hidden w-6 h-4" onClick={() => {setOpen(!isOpen); document.body.style.overflow = isOpen ? "visible" : "hidden"}} initial="closed" animate={isOpen ? "open" : "closed"}> 
            <motion.div className="bg-white w-full h-[3px] top-0 absolute origin-center rounded-lg" variants={firstLine} transition={{ ease: "easeOut", duration: .3 }}></motion.div>
            <motion.div className="bg-white w-full h-[3px] top-1/2 -translate-y-1/2 absolute rounded-lg" variants={middleLine} transition={{ ease: "easeOut", duration: .3 }}></motion.div>
            <motion.div className="bg-white w-full h-[3px] bottom-0 absolute origin-center rounded-lg" variants={lastLine} transition={{ ease: "easeOut", duration: .3 }}></motion.div>
        </motion.button>
    </>
)
}
