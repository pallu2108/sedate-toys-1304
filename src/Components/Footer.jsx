import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <div className="maindiv">
      <div className='maindiv2'>
        <div className='footer1'>
          <h1 className='header1'>About Tripadvisor</h1>
          <h1 className='header2'>About us</h1>
          <h1 className='header2'>Press</h1>
          <h1 className='header2'>Resource and Policies</h1>
          <h1 className='header2'>Careers</h1>
          <h1 className='header2'>Trust & Safety</h1>
          <h1 className='header2'>Contact us</h1>
          <h1 className='header2'>Accessibility Statement </h1>
        </div>
        <div className='footer1'>
        <h1 className='header1'>Explore</h1>
          <h1 className='header2'>Write a review</h1>
          <h1 className='header2'>Add a Place</h1>
          <h1 className='header2'>Join</h1>
          <h1 className='header2'>Travllers' Choice</h1>
          <h1 className='header2'>GreenLeaders</h1>
          <h1 className='header2'>Help Centre</h1>
          <h1 className='header2'>Travel Articles </h1>
        </div>
        <div className='footer1'>
        <h1 className='header1'>Do Business With Us</h1>
          <h1 className='header2'>Owner & DMO/CVB</h1>
          <h1 className='header2'>Business Advantage</h1>
          <h1 className='header2'>Sponsored Placements</h1>
          <h1 className='header2'>Access our Content API</h1>
          <h1 className='header1'>Get The App</h1>
          <h1 className='header2'>iPhone App </h1>
          <h1 className='header2'>Android App </h1>
        </div>
        <div className='footer2'>
           <h1 className='header4'>Tripadvisor Sites</h1>
           <h1 className='header3'>Book tours and attraction tickets on Viator</h1>
        </div>
      </div>
      <div className='maindiv3'>
        <div>
          <img className='maindiv3-img' src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg" alt=''/>
        </div>
        <div className='footer3'>
          <p className='para1'>© 2022 Tripadvisor LLC All rights reserved.</p>
          <p className='para2'>Term of Use &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy and Cookies Statement 
          &nbsp;&nbsp;&nbsp;&nbsp; Cookie Consent &nbsp;&nbsp;&nbsp;&nbsp; Site Map
           </p>
           <p className='para2'>How the site Works &nbsp;&nbsp;&nbsp;&nbsp; Contact us
           </p>
        </div>
        <div className='footer4'>
          <button className='button1'>₹ INR</button>
        </div>
        <div className='footer5'>
        <button className='button2'>India</button>
        </div>
      </div>
      <div className='maindiv4'>
        <p className='para3'>This is the version of our website addressed to speakers of English in India. If you are a resident of another country or region, please </p>
        <p className='para3'>select the appropriate version of Tripadvisor for your country or region in the drop-down menu. more</p>
      </div>
    </div>
  )
}

export default Footer
