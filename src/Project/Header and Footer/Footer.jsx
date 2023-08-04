import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="Footer-Modules footer-container">
      <div className="row" >
        <div className="col" id='Coloum'>
          <img src='images/Logo2.png' id='footer-Logo' />
          <label id='FooterLogoText'>The IT School is India’s best online learning platform. Download our apps to start learning</label><br/>
        </div>
        <div className="col" id='Coloum'>
          <label id='FooterHeading'>Company</label><br/>
          <NavLink to="/about" id="FooterText">About Us</NavLink><br/>
          <NavLink to="/careers" id="FooterText">Careers</NavLink><br/>
          <NavLink to="/blogs" id="FooterText">Blogs</NavLink><br/>
        </div>
        <div className="col" id='Coloum'>
          <label id='FooterHeading'>Help and Support</label><br/>
          <NavLink to="/contact" id="FooterText">Contact Us</NavLink><br/>
          <NavLink to="/privacypolicy" id="FooterText">Privacy Policy</NavLink><br/>
          <NavLink to="/terms" id="FooterText">Terms and Conditions</NavLink><br/>
        </div>
        <div className="col" id='Coloum'>
          <label id='FooterHeading'>Social Media</label><br/>
          <NavLink to="https://www.facebook.com/raj.majumdar.7330/" id="FooterText">Facebook</NavLink><br/>
          <NavLink to="https://www.instagram.com/rajmajumdar49/" id="FooterText">Instagram</NavLink><br/>
          <NavLink to="https://github.com/rajmajumdar49" id="FooterText">Github</NavLink><br/>
        </div>
      </div> 
    </div>
  )
}

export default Footer;
