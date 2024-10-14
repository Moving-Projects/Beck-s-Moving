import FAQAccordion from "./FAQAccordion";

  export default function FAQ() {
  return (
    <div className='my-16 lg:my-24 lg:max-w-[61rem] px-3 lg:px-0 mx-auto'>
        <p className='font-barlow font-medium mb-4 text-center text-accent lg:text-2xl'>FAQ</p>
        <h2 className='text-center text-2xl lg:text-5xl font-extrabold mb-6 text-dark'>Frequently Asked <br/> Question</h2>
        <p className='font-barlow font-medium text-center mb-12 lg:mb-16 lg:text-lg max-w-[64rem] mx-auto leading-tight'>We know that moving can bring up a lot of questions, and we’re here to provide the answers you need. Below, you’ll find some of the most common questions our clients ask during the moving process. If you don’t see your question here, feel free to reach out directly, and we’ll be happy to assist you.</p>
        <FAQAccordion />
    </div>
  )
}
