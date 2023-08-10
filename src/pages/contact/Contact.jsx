import React from 'react'
import'./contact.css'
import SectionHead from '../../components/SectionHead'
import {MdOutlineMailOutline} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
import Footer from '../../components/Footer'
import{FaCrown} from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tfoad7q', 'template_u8e79ak', form.current, '8rc3xVp4h1GLnO81G')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
        <div className="container Contact__container">
           <SectionHead icon={<FaCrown/>} title="CONTACT"/>
        </div>
        
      <div className='container contact_container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineMailOutline className='contact__icons'/>
            <div className='mail__container'>
            <h4>Email</h4>
            <h5>swikarsingh123@gmail</h5>
            </div>
            <a href="mailto:swikarsingh123@gmail.com"target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
            <RiMessengerLine className='contact__icons'/>
            <h4>Messanger</h4>
            <h5>Swikar Singh</h5>
            <a href="https://www.messenger.com/t/4949617658474657/"target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
            <ImWhatsapp className='contact__icons'/>
            <h4>Whats App</h4>
            <h5>Contact Us</h5>
            <a href="https://web.whatsapp.com/send?phone+9779815266383"target="_blank">Send a message</a>
            </article>
            </div>
        {/*End of Contact*/}

        <form ref={form} on Submit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name'required/>
        <input type="email" name='email'placeholder='Your Email'required />
        <textarea name="Message" rows="7"placeholder='Your Message'required></textarea>
        <button type='Submit'className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    <Footer/>
      
    </section>
  )
}

export default Contact