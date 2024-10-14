import Image from 'next/image'

interface HeroReviewCardProps {
    absolute?: boolean,
    text: string,
    name: string,
    position: string,
    img: string
}

export default function HeroReviewCardStatic({absolute = false, text, name, position, img}: HeroReviewCardProps) {
  return (
    <div className={`p-6 lg:px-8 w-full lg:max-w-[27rem] bg-white rounded-3xl h-fit hidden lg:block ${absolute ? 'absolute left-0 top-0' : ''}`}>
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
        <div className="flex gap-3 items-end">
            <Image
                width={564}
                height={564}
                src={`/images/homepage/reviews/${img}.webp`}
                alt="user icon"
                className="size-14 rounded-full"
            />
            <div>
                <p className='text-dark text-2xl font-extrabold'>{name}</p>
                <p className='font-extrabold leading-5'>{position}</p>
            </div>
        </div>
    </div>
  )
}