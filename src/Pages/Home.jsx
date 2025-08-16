import React from 'react'
import HeroCarousel from '../Component/Hero'
import CounterSection from '../Component/Counter'
import MarqueeSection from '../Component/Marquee'
import DesignThinkingSteps from '../Component/Process'
import CardsGrid from '../Component/Games'

import { Payment } from '../Component/Payment'
import FaqSection from '../Component/Faqs'
import WhyChooseUs from '../Component/Security'
import { Contact } from '../Component/Contact'
import TestimonialSection from '../Component/Testimonials'




export const Home = () => {
  return (
    <>
    <div className='pt-20 mt-9 bg-gray-950'>
    <HeroCarousel />
     <MarqueeSection/>
    <CounterSection/>
   <DesignThinkingSteps/>
  <CardsGrid/>
  <WhyChooseUs/>
  <Contact/>
  <TestimonialSection/>
  <FaqSection/>
  <Payment/>
  </div>
    </>
  )
}
