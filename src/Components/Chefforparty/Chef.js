import React from 'react'
import FoodBanner1 from './Banner'
import FAQ3 from './Faq2'
import Carousel2 from './Slider2'
import BannerDow1 from './BannerDow'
import Work1 from './Work'
import Lower4 from './Lower3'
import Lower1 from './Low1'
import GalleryWithState from './Galle'

import GalleryAutoSlideZoom from './Gal'
import FloatingBanner from './FloatingBannerd'

const Chef = () => {
  return (
    <div>
        <Carousel2/>
        <BannerDow1/>
      
        <Work1/>
        <GalleryWithState/>
        <GalleryAutoSlideZoom/>
        <Lower4/>
        
        <Lower1/>
        <FAQ3/>
        
        <FoodBanner1/>
        <FloatingBanner/>
    </div>
  )
}

export default Chef