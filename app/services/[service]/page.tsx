import Header from '@/app/components/Header'
import Hero from '@/app/components/Services/Hero'
import React from 'react'
import { servicesContent, helpContent } from '@/lib/utils'
import { notFound } from 'next/navigation';
import AboutUs from '@/app/components/Home/AboutUs';
import Reviews from '@/app/components/Home/Reviews';
import RequestQuote from '@/app/components/Home/RequestQuote';
import Footer from '@/app/components/Footer';
import Help from '@/app/components/Services/Help';

export default function Services({params}: {params: { service: string }}) {
    const content = servicesContent.get(params.service);
    const helpContentText = helpContent.get(params.service);
    if (content === undefined || helpContentText === undefined) {
        return notFound()
    }
  return (
    <>
        <Header />
        <Hero title={content[0]} text={content[1]} img={params.service}/>
        <Help subtitle={helpContentText[0]} title={helpContentText[1]} text1={helpContentText[2]} text2={helpContentText[3]} img={params.service} />
        <AboutUs />
        <Reviews />
        <RequestQuote />
        <Footer homepage/>
    </>
  )
}
