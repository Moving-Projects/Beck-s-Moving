import { motion } from "framer-motion"
import ServicesNav from "./ServicesNav"
import Icon from "./Icon"

export default function MobileMenu ({open}: {open: boolean}) {
    const variants = {
        visible: {
            height: '100vh',
        },
        hidden: {
            height: 0,
        }
    }

    const list = {
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
        hidden: {
          opacity: 0,
        },
      }

      const item = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -32 },
      }

    return (
        <motion.div className="h-[calc(100vh-4rem)] w-screen top-16 left-0 fixed z-50 overflow-hidden bg-accent" variants={variants} animate={open ? "visible" : "hidden"} transition={{ ease: "easeOut", duration: .5 }} initial="hidden">
            <ServicesNav />
            <motion.ul className="flex flex-col gap-6 justify-between items-start h-[calc(100vh-8.25rem)] w-screen relative py-8 px-3" variants={list} animate={open ? "visible" : "hidden"} initial="hidden">
                <div className="flex flex-col gap-6">
                    <motion.li variants={item}>
                        <a href="/" className="text-[2rem] font-extrabold text-white">Home</a>
                    </motion.li>
                    <motion.li variants={item}>
                        <a href="/" className="text-[2rem] font-extrabold text-white">About Us</a>
                    </motion.li>

                    <motion.li variants={item}>
                        <a href="/" className="text-[2rem] font-extrabold text-white">Client Reviews</a>
                    </motion.li>

                    <motion.li variants={item}>
                        <a href="/" className="text-[2rem] font-extrabold text-white">Contact Us</a>
                    </motion.li>
                </div>
                
                <div className="flex flex-col items-start">
                    <motion.li variants={item} className="flex items-center gap-2 mb-4">
                        <Icon src='/images/clock.svg' alt='clock icon'/>
                        <p className='font-medium text-white leading-none lg:text-lg'>Mon - Sun: 8AM - 7PM</p>
                    </motion.li>
                    <motion.li variants={item} className="flex items-center gap-2 mb-4">
                        <Icon src='/images/phone.svg' alt='phone icon'/>
                        <a href="tel:+" className='font-medium text-white leading-none lg:text-lg'>(800) - 000 - 0000</a>
                    </motion.li>
                    <motion.li variants={item} className="flex items-center gap-2 mb-6">
                        <Icon src='/images/mail.svg' alt='mail icon'/>
                        <a href='mailto:' className='font-medium text-white leading-none lg:text-lg'>info@becksmoving.com</a>
                    </motion.li>
                    <motion.li variants={item} className="flex gap-4">
                        <a href="">
                            <Icon src='/images/socials/instagram.svg' alt='instagram icon'/>
                        </a>
                        <a href="">
                            <Icon src='/images/socials/facebook.svg' alt='facebook icon'/>
                        </a>
                        <a href="">
                            <Icon src='/images/socials/x.svg' alt='x icon'/>
                        </a>
                        <a href="">
                            <Icon src='/images/socials/tripadvisor.svg' alt='tripadvisor icon'/>
                        </a>
                        <a href="">
                            <Icon src='/images/socials/linkedin.svg' alt='linkedin icon'/>
                        </a>
                   </motion.li>
                </div>
            </motion.ul>
        </motion.div>
    )
}