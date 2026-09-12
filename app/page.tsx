import React from 'react'

import HeroSection from './features/Home/components/HeroSection'
import CourseIntro from './features/OurCourses/components/CourseIntro'
import OurCourses from './features/OurCourses/components/CoursesDisplay'
import Statistics from './features/Statistics/components/Statistics'
import Staff from './features/Staff/components/Staff'

const page = () => {
  return (
    <div>
     
      <HeroSection/>
      <CourseIntro/>
      <OurCourses/>
      <Statistics/>
      <Staff/>
    
    </div>
  )
}

export default page

