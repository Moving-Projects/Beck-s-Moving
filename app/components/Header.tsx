import Image from "next/image";
import MobileMenu from "./MobileMenuButton";
import ServicesNav from "./ServicesNav";
import HeaderQuoteButton from "./HeaderQuoteButton";

export default function Header () {
    return (
        <>
            <header className="bg-accent sticky top-0 left-0 z-50">
                <div className="wrapper flex items-center justify-between py-4 lg:pt-6 pr-6 relative overflow-hidden">
                    <a href="/" className="w-40 lg:w-56 h-8 lg:h-10 relative">
                        <Image 
                            src="/images/logo.webp"
                            alt='logo'
                            height={41}
                            width={226}
                        />
                    </a>
                    <nav className="hidden gap-12 lg:flex">
                        <a href="/" className="text-white text-base lg:text-lg 2xl:text-base font-extrabold min-w-4 hover:opacity-75 transition duration-200">Home</a>
                        <a href="/#services" className="text-white text-base lg:text-lg 2xl:text-base font-extrabold min-w-4 hover:opacity-75 transition duration-200">Services</a>
                        <a href="/about-us" className="text-white text-base lg:text-lg 2xl:text-base font-extrabold min-w-4 hover:opacity-75 transition duration-200">About Us</a>
                        <a href="/#reviews" className="text-white text-base lg:text-lg 2xl:text-base font-extrabold min-w-4 hover:opacity-75 transition duration-200">Client Reviews</a>
                        <a href="/contact-us" className="text-white text-base lg:text-lg 2xl:text-base font-extrabold min-w-4 hover:opacity-75 transition duration-200">Contact Us</a>
                    </nav>
                    <div className="flex gap-3 items-center">
                        <HeaderQuoteButton />
                        <MobileMenu />
                    </div>
                </div>
            </header>
            <ServicesNav />
        </>
    )
}