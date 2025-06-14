import React from 'react'
import FoodBanner from './Banner'
import FaqMonth from './FaqMonth'
import Lower from './Low1'

import Lower2 from './Lowertwo'
import BannerDow from './BannerDow'

import Carousel1 from './Slider2'
import Work from './Work'
import FloatingBanner from './FloatingBannerd'

const Month = () => {
  return (
    <div>
      <Carousel1 />
      <BannerDow/>
      <Work/>
      <Lower2/>
      <Lower/>
      <FaqMonth/>
      <FoodBanner/>
      <FloatingBanner/>
    </div>
  )
}

export default Month
