import React from 'react'
import FaqOne from './FaqOnetime'
import Lower2 from './Lower2'
import Lower3 from './Lower3'
import Testimonials from './Testimon'
import Heart from './Heart1'
import Work from './Work'
import StatsSections from './Statsection'
import BannerDow2 from './BannerDow'
import Carousel2 from './Slider2'
import Lower5 from './Lower'
import FloatingBanner from './FloatingBannerd'

const OneTime = () => {
  return (
    <div> 
      <Carousel2/>
      <BannerDow2/>
      <StatsSections/>
      <Work/>
      <Heart/>
      <Testimonials/>
      <Lower3/>
      <Lower5/>
     
        <FaqOne/>

    <FloatingBanner/>      
    </div>
  )
}

export default OneTime
