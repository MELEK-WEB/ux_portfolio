import React from 'react'
import {BsFillEnvelopeFill} from 'react-icons/bs'
import './contact.css'
import working from '../assets/img/working.png'
export default function Contact() {
  return (
    <>
   
    <div className='container_form'>

        <div className='contact_descrip'>
                    <h4 className='form_title'>Get in touch </h4>
                    <p className='form_description'>
                        I’m very approachable and would love to speak to you. 
                        Feel free to call, send me an email . 
                        Follow me in social media or simply complete the enquiry form.
                    </p>
                        
                     
                    <div className='form_footer'>
                    <BsFillEnvelopeFill size='1.5em'/>
                    <div className='email'>saadimelek50@gmail.com</div>

                    </div>

        </div>
        <div className='form_description contact_form'>
                    <h4 className='form_title_send'>Send Message </h4>
                    <input className='input ' placeholder='NAME' />
                    <input className='input ' placeholder='Email Adress' />
                    <input className='input ' placeholder='Subject' />
                    <textarea className='message ' placeholder='Your Message' />
                    <button className='btn' >Send Message</button>
        </div>

    </div>
    <img src={working}alt = 'working' className='working' />
    </>
  )
}
