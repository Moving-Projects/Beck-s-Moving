import React from 'react'
import Hero from '../components/AboutUs/Hero'
import Header from '../components/Header'
import Guide from '../components/AboutUs/Guide'
import OurStory from '../components/AboutUs/OurStory'
import RequestQuote from '../components/Home/RequestQuote'
import Footer from '../components/Footer'

export default function AboutUs() {
  return (
    <>
        <Header />
        <Hero />
        <Guide />
        <OurStory />
        <RequestQuote />
        <Footer homepage/>
    </>
  )
}
