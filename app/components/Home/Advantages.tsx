import AdvantagesCard from './AdvantagesCard'

export default function Advantages() {
  return (
    <div className='wrapper mb-16'>
        <div className="flex flex-col lg:flex-row lg:items-end gap-4">
          <div>
            <div className='lg:w-[50vw] max-w-[910px]'>
              <p className='font-barlow font-medium mb-4 text-accent lg:text-2xl'>Experience the Difference with Us</p>
              <h2 className='text-2xl lg:text-5xl font-extrabold mb-6 text-dark'>Why Choose Beck&apos;s Moving Company?</h2>
              <p className='font-barlow font-medium mb-12 lg:mb-16 lg:text-lg max-w-[64rem] leading-tight'>Choosing the right moving company is crucial for a smooth and hassle-free experience, and Beck&apos;s Moving Company stands out as the trusted partner you can rely on. Discover why countless families and businesses have made Beck&apos;s their top choice for all their moving needs.</p>  
            </div>
            <div className="flex flex-col lg:flex-row items-end gap-4">
              <AdvantagesCard image='advantages-card-1' title1='Comprehensive and' title2='Customized Solutions' text="Our team offers a full range of moving services tailored to meet your specific needs—whether it's a local move across town, a long-distance relocation, or an office move that requires careful planning and execution." last={false}/>
              <AdvantagesCard image='advantages-card-2' title1='Reliable, Punctual and' title2='Fully Licensed' text="Punctuality and reliability are at the core of our business. We value your time, and our commitment to  complete the job efficiently sets us apart. Our track record of on-time delivery and careful handling speaks to our dedication to excellence." last={false}/>
            </div>
          </div>
          <AdvantagesCard image='advantages-card-3' title1='Customer-Focused Service with Clear Pricing' title2='' text="Our team offers a full range of moving services tailored to meet your specific needs—whether it's a local move across town, a long-distance relocation, or an office move that requires careful planning and execution." last={true}/>
        </div>
    </div>
  )
}
