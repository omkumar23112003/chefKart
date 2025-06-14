import Contacts from "./Contacts"
import GallerySection from "./FounderCard"
import Hero from "./Hero"
import Lower3 from "./Lowerthree"
import Lower4 from "./Lowertwo"
import SocialSection from "./SoicalButton"
import StatsSection from "./StatsSection"
import VideoGallery from "./Videogallery"

const About = () => {
  return (
    <div>
      <Hero/>
      <Lower4/>
      <Lower3/>
      <StatsSection/>
      <GallerySection/>
      <VideoGallery/>
      <Contacts/>
     <SocialSection/>
    </div>
  )
}

export default About
