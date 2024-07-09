import React from 'react'
import HomeAbout from '../Homeabout'
import Slider from './Slider'
import Service from './Service'
import Contactus from './Contactus'

export default function Home() {
  return (
    <>
       
        <Slider/>
        {/* <Aboutus/> */}
        <HomeAbout/>
        <Service/>
        <Contactus/>
    </>
  )
}
