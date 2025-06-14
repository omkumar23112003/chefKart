import React from 'react'
import AnnouncementBanner from './Bottom'
import SignupSection from './SignupSection'
import PressReleases from './PresRelease'
import MissionSection from './Mission'
import Carousel2 from './Slider2'


import Investors from './Recent copy/components/Feature'

const Invest = () => {
  return (
    <div>
        <Carousel2/>
        <MissionSection/>
       
        <PressReleases/>
        < Investors/>
        <SignupSection/>
        <AnnouncementBanner/>
    </div>
  )
}

export default Invest