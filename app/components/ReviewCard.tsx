import Image from 'next/image'

interface ReviewCardProps {
    index: number,
    currentSlide: number,
    date: string,
    text: string,
    name: string,
    position: string,
    img: string
}

export default function ReviewCard({index, currentSlide, date, text, name, position, img}: ReviewCardProps) {
  return (
    <div className={`p-6 lg:px-8 w-full flex flex-col justify-between lg:max-w-[27rem] bg-white rounded-3xl h-full shadow-base transition duration-300 ${index === currentSlide ? 'lg:translate-y-16' : 'translate-y-0'}`}>
        <div>
            <p className='font-barlow leading-5 mb-8 font-medium'>{date}</p>
            <div className="flex gap-2 mb-8">
                <Image
                    width={30}
                    height={30}
                    src="/images/star.svg"
                    alt="arrow icon"
                    className="size-[1.875rem]"
                />
                <Image
                    width={30}
                    height={30}
                    src="/images/star.svg"
                    alt="arrow icon"
                    className="size-[1.875rem]"
                />
                <Image
                    width={30}
                    height={30}
                    src="/images/star.svg"
                    alt="arrow icon"
                    className="size-[1.875rem]"
                />
                <Image
                    width={30}
                    height={30}
                    src="/images/star.svg"
                    alt="arrow icon"
                    className="size-[1.875rem]"
                />
                <Image
                    width={30}
                    height={30}
                    src="/images/star.svg"
                    alt="arrow icon"
                    className="size-[1.875rem]"
                />
            </div>
            <p className='font-medium mb-12 lg:mb-4 font-barlow'>{text}</p>
            <div className="flex mb-2 justify-end">
                <Image
                    width={64}
                    height={40}
                    src="/images/homepage/reviews/visual-element-1.svg"
                    alt="decoration"
                    className="w-16"
                />
            </div>
        </div>
        <div className="flex gap-3 items-end">
            <Image
                width={48}
                height={48}
                src={`/images/homepage/reviews/${img}.webp`}
                alt="user icon"
                className="size-12 rounded-full"
                unoptimized
            />
            <div>
                <p className='text-dark text-2xl font-extrabold'>{name}</p>
                <p className='font-extrabold leading-5'>{position}</p>
            </div>
        </div>
    </div>
  )
}