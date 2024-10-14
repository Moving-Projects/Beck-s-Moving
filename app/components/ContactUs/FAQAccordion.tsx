import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full AccordionRoot">
        <Item id="item-1" title="How far in advance should I book my move?" text="We recommend booking your move as early as possible, especially for long-distance or commercial moves. Typically, booking 4-6 weeks in advance ensures that you get your preferred moving date." />
        <Item id="item-2" title="Do you provide packing services?" text="Yes! We offer full packing services, where our team will carefully pack all of your belongings, including fragile items. We also offer partial packing if you prefer to handle some of the packing yourself." />
        <Item id="item-3" title="Can you help with disassembling furniture?" text="Absolutely. Our movers are trained to disassemble and reassemble furniture, including larger items like beds, desks, and office equipment, ensuring everything is set up in your new space just as you like it." />
        <Item id="item-4" title="What happens if my new location isn’t ready?" text="Yes, we offer secure, climate-controlled storage solutions. If your new home or office isn’t ready, we can safely store your belongings for as long as you need, and deliver them when you’re ready." />
        <Item id="item-5" title="What should I do with my fragile or valuable items?" text="We take great care with all your items, but if you have particularly valuable or fragile belongings, you can choose our custom crating service to ensure maximum protection during transit." />
        <Item id="item-6" title="What’s included in your moving quote?" text="Our quotes are transparent and include everything from labor and transportation to packing materials (if selected), ensuring there are no hidden fees. You’ll receive a detailed breakdown based on your specific moving needs." />
    </Accordion>
  )
}

const Item = ({title, text, id}: {title: string, text: string, id: string}) => {
    return (
        <AccordionItem value={id} className="AccordionItem bg-extraWhite border-none px-6 lg:px-8 py-4 lg:py-6 rounded-2xl transition-all duration-300">
            <AccordionTrigger className="text-lg lg:text-2xl text-left font-extrabold leading-tight text-dark">{title}</AccordionTrigger>
            <AccordionContent className="mt-4 lg:mt-6 lg:px-4">
                {text}
            </AccordionContent>
        </AccordionItem>
    )
}