import React from 'react'
import Heroheader from '../Home/Heroheader'
// import Satisfied from '../Home/Satisfied'
import Slider from '../Home/Silder'
import MakeUs from '../Home/MakeUs'
import Team from '../Home/Team'
import Anyq from '../Home/Anyq'
import Testimonial from '../testimonial/Testimonial'
import  Contact  from '../contactus/Contactus'
import EmpowerSection from '../aboutus/About'
import ServicesSection from '../services/Services'
const Home = () => {
  return (
    <div>
      <Heroheader/>
      {/* <Satisfied/> */}
      <Slider/>
      <EmpowerSection/>
      <ServicesSection/>
      <MakeUs/>
      <Team/>
      <Testimonial/>
      <Anyq/>
      <Contact/>
    </div>
  )
}

export default Home;
