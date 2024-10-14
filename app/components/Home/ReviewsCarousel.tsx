'use client'

import { useState, useEffect } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel"


import ReviewCard from "../ReviewCard"
import ReviewsCarouselNav from "./ReviewsCarouselNav"
import { reviews } from "@/lib/utils"

export default function ReviewsCarousel () {

  const [api, setApi] = useState<CarouselApi>()
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    api.on("select", () => {
      setActiveSlide(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <Carousel 
      className="w-full select-none"
      setApi={setApi}
      opts={{
        loop: true,
        align: "center"
      }}
    >
      <CarouselContent className="lg:pb-16 -ml-8 mb-6 lg:mb-8 cursor-pointer items-stretch">
        {
          reviews.map((review, index) => {
            return (
              <CarouselItem key={index} className="lg:basis-[27rem] pl-8">
                <ReviewCard index={index} currentSlide={activeSlide} {...review}/>
              </CarouselItem>
            )
          })
        }
      </CarouselContent>
      <ReviewsCarouselNav api={api} length={7} activeSlide={activeSlide} />
    </Carousel>
  )
}