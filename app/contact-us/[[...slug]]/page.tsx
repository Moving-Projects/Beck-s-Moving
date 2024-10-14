import React from 'react'
import Header from '../../components/Header'
import Hero from '@/app/components/ContactUs/Hero'
import FAQ from '@/app/components/ContactUs/FAQ'
import Footer from '@/app/components/Footer'

export default function ContactUs({params}: {params: { slug?: string[] }}) {
  return (
    <>
        <Header />
        <Hero slug={params.slug}/>
        <FAQ />
        <Footer/>
    </>
  )
}
