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
import Secondsite from '../Component/Secondsite'





export const Home = () => {
  return (
    <>
    <div className='pt-20 mt-9 bg-gradient-to-r from-gray-900 via-red-900 to-gray-900'>
    <HeroCarousel />
    
     <MarqueeSection/>
     <Secondsite/>
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
