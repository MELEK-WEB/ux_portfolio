import React from 'react'
import './footer.css'
import group from '../assets/img/group.png'
import group1 from '../assets/img/group1.png'
import {BsFillTelephoneFill,BsFacebook,BsYoutube} from 'react-icons/bs'
import {FaUserAlt,FaHome,FaBriefcase,FaInstagram} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
  return (
    <div>
            
            <div className='footer'>

                  <ul className='FooterList'>
                    <li className='footerItem'> <FaHome className='iconfooter' size='1.5em'/>Home </li>
                    <li className='footerItem'><FaUserAlt className='iconfooter' siesize='1.5em'/> About me </li>
                    <li className='footerItem'> <FaBriefcase className='iconfooter' siesize='1.5em'/>Service </li>
                    <li className='footerItem'> <BsFillTelephoneFill className='iconfooter' siesize='1.5em'/>CONTACT </li>
                  </ul>
                  
                  <ul className='FooterList'>
                    <li className='footerRs'> <BsFacebook className='iconfooter' size='2em' style={{color :" #4267B2"}}/></li>
                    <li className='footerRs'><FaInstagram className='iconfooter' size='2em' style={{color :" #833AB4"}}/></li>
                    <li className='footerRs'> <AiFillTwitterCircle className='iconfooter' size='2em' color='lightBlue'/></li>
                    <li className='footerRs'> <BsYoutube className='iconfooter' size='2em' color='red'/></li>
                  </ul>

            </div>
            <img src={group} alt= 'group' className='group'/>
            <img src={group1} alt= 'group1' className='group1'/>
    </div>
  )
}
