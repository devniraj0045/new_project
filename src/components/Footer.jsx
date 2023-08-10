import React from 'react'
import'./footer.css'
import{AiOutlineFacebook} from 'react-icons/ai'
import{FiInstagram }  from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#' className= 'footer__logo'>Swikar</a>

     
      
      <div className="footer__socials">
        <a href="https://www.facebook.com/"target="_blank"><AiOutlineFacebook/></a>
        <a href="https://instagram.com"target="_blank"><FiInstagram/></a> 
        <a href="https://linked.com"target="_blank"><BsTwitter/></a> 
      </div>
      
    </footer>
    

  
  )

};
export default Footer;

