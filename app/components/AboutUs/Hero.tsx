import Image from "next/image";
import QuoteForm from "../QuoteForm";
import HeroReviewCardGroup from "../HeroReviewCardGroup";

export default function Hero() {
    return (
        <div className="rounded-b-[4rem] lg:rounded-b-[15rem] pt-8 lg:pt-12 pb-16 lg:pb-0 bg-accent relative overflow-hidden">
            <div className="wrapper">
                <h1 className="text-white text-center text-[2rem] lg:text-8xl font-extrabold">About Beck’s <br /> Moving Company</h1>
                <div className="flex lg:flex-row flex-col-reverse z-10 lg:justify-between relative lg:mt-20">
                    <QuoteForm />
                    <Image
                        width={2843}
                        height={3655}
                        src="/images/about-us/hero-guy.webp"
                        alt="young boy holding a box for moving"
                        className="px-16 w-full lg:w-auto lg:flex-1 -mt-6 lg:-mt-[8%] object-contain object-bottom min-w-0"
                    />
                    <HeroReviewCardGroup />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 rounded-full bg-dark w-[145%] lg:w-[60%] aspect-square translate-y-[10%] lg:translate-y-[60%]"></div>
            </div>
        </div>
    )
}