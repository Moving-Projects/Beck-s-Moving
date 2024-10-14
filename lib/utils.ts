import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const reviews = [
  {
    date: "June 30",
    text: "Moving can be stressful, but Beck’s made it feel easy. The team was professional, courteous, and highly efficient. It was clear from the start that Beck’s Moving Company values their customers and goes the extra mile to ensure a positive experience. I’m so glad we chose them for our move!",
    name: "Dan W.",
    position: "Family Household",
    img: "user-1"
  },
  {
    date: "June 30",
    text: "Beck’s Moving Company handled our office relocation with such professionalism and efficiency that we had zero downtime. The move was completed on time and within budget, and our team was back to work the next day without missing a beat.",
    name: "John R.",
    position: "Homeowner, CEO, Creative Hub",
    img: "user-2"
  },
  {
    date: "August 5",
    text: "Fantastic experience! The team was punctual, careful, and very friendly. From the moment they arrived until the last box was unloaded, they worked efficiently and with great care. I couldn’t be happier with the service I received and would recommend them to anyone needing a reliable moving company.",
    name: "Emma P.",
    position: "Apartment Tenant",
    img: "user-3"
  },
  {
    date: "July 28",
    text: "We used Beck’s for our commercial move, and they were nothing short of amazing. The team was efficient, well-organized, and incredibly respectful of our time. We were up and running in our new location much faster than expected, thanks to Beck’s Moving Company!",
    name: "Sarah M.",
    position: "Store Owner, Family Groceries",
    img: "user-4"
  },
  {
    date: "August 15",
    text: "Beck’s Moving Company made our office move seamless! From the initial consultation to the final unpacking, they were professional, punctual, and handled all our equipment with care. I highly recommend Beck’s for any business looking to relocate without the typical headaches.",
    name: "Jane D.",
    position: "Office Manager, Tech Solutions",
    img: "user-5"
  },
  {
    date: "September 1",
    text: "Great service from start to finish. The movers were courteous, professional, and took great care of our belongings. I would definitely use Beck’s again for any future moves, and I’ve already recommended them to my friends and family.",
    name: "Tom L.",
    position: "Household",
    img: "user-6"
  },
  {
    date: "July 10",
    text: "I was dreading my move, but Beck’s team made it stress-free. The team was friendly, professional, and always available to answer my questions. They even arrived ahead of schedule, which was a pleasant surprise. Beck’s turned what I thought would be a nightmare into a smooth, organized process.",
    name: "Michael T.",
    position: "Homeowner",
    img: "user-7"
  }
]

export const servicesContent = new Map([
  ["local-moves", ["Local Moving", "Whether you're moving down the street or across town, Beck’s Moving Company makes local moving simple and stress-free. We handle everything—from packing and transportation to unloading and setup—so you can focus on settling into your new home without the hassle."]],
  ["long-distance", ["Long Distance Moving", "Moving to a new city or state? Beck’s Moving Company specializes in long-distance relocations, offering personalized solutions to make your transition seamless. We handle all aspects of your move, so you can enjoy a worry-free long-distance move."]],
  ["office-moves", ["Office Moving", "Relocating your office can be a daunting task, but with Beck’s Moving Company, it doesn’t have to be. We specialize in seamless office moves, minimizing downtime and ensuring that your business operations are up and running in no time."]],
  ["apartment-moves", ["Apartment Moving", "Relocating your office can be a daunting task, but with Beck’s Moving Company, it doesn’t have to be. We specialize in seamless office moves, minimizing downtime and ensuring that your business operations are up and running in no time."]],
])

export const helpContent = new Map([
  ["local-moves", ["Effortless Local Moving Services", "What is Local Moving & How Can We Help?", "Local moving typically refers to relocations within the same city or nearby areas. While these moves may seem easier than long-distance ones, they still require careful planning, packing, and handling.", "Beck’s Moving Company specializes in local moves, providing comprehensive services from start to finish. Our local moving team ensures your belongings are packed securely, loaded efficiently, and transported safely to your new location. Whether you need help with a single-family home or a multi-story residence, we’re here to make your local move as easy as possible. Plus, our familiarity with local roads, traffic patterns, and regulations ensures that your move is completed quickly and smoothly."]],
  ["long-distance", ["Reliable Long-Distance Moving Solutions", "What is Long Distance Moving & How Can We Help?", "Long-distance moving involves transporting your belongings across significant distances, often to a new city or state. These moves require detailed planning, logistics coordination, and expert care to ensure everything arrives safely. ", "At Beck’s Moving Company, we take the complexity out of long-distance moves. Our team offers professional packing, secure transportation, and constant communication throughout the process, so you’re always informed of your move’s progress. We also provide flexible scheduling, and our long-distance moving services are tailored to meet your timeline and budget, making sure you feel confident every step of the way."]],
  ["office-moves",  ["Efficient Office Moving Services", "What is Office Moving & How Can We Help?", "Office moving involves relocating businesses, whether it’s a small office or an entire corporate headquarters. These moves often require careful coordination to prevent downtime and ensure all equipment and furniture arrive safely. ", "Beck’s Moving Company has years of experience handling office relocations. We offer comprehensive services, including packing, disassembling and reassembling office furniture, and transporting IT equipment with precision. We work around your schedule to minimize disruption, helping you get back to business as quickly as possible. Our team also ensures that all business documents, electronics, and other assets are securely handled during the transition, making your office move worry-free."]],
  ["apartment-moves",  ["Hassle-Free Apartment Moving Services", "What is Apartment Moving & How Can We Help?", "Apartment moving refers to relocations in buildings with various constraints such as limited space, stairs, or building regulations.", "Beck’s Moving Company understands the specific challenges that apartment moves can pose and is well-equipped to manage them. From working within your building’s schedule to securing elevators and common areas, we take every step to ensure a smooth transition. Our team handles everything—from safely moving large furniture down narrow staircases to setting up your new space. We’ll help you manage the logistics, ensuring a stress-free apartment move, whether you’re moving from a high-rise or a walk-up."]],
])