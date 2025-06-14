import FoodBanner1 from "./Banner";
import BlogSection from "./BlogSection";
import GalleryAutoSlideZoom from "./Gal";
import GalleryWithState from "./Galle";
import SkillIndiaSection from "./Section";
import Carousel2 from "./Slider2";

import StatsSection from "./StatsSection";
import Testimonial1 from "./NameTest";
import Testimonials from "./Testimon";
import Work from "./Work";
import Lower from "./Lower";
import Pricing from "./Pricing";
import WhyChooseUs from "./WhyChoose";
import TakeItForward from "./TakeItFormward";
import TabSwitchComponent from "./TabSwitch";

const Hom = () => {
  return (
    <div>

     <Carousel2/>
     <Pricing/>
     <WhyChooseUs/>
    
      
      <Lower/>
      <Work/>
      <TabSwitchComponent/>
      <StatsSection/>
      <Testimonial1/>
      <Testimonials/>
      <SkillIndiaSection/>
      <GalleryWithState/>
      <GalleryAutoSlideZoom/>
    
       <TakeItForward/>
     <FoodBanner1/>
    </div>
  )
}

export default Hom
