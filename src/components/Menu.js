import React from 'react'
import './menu.css'
import logo from '../assets/img/house.webp'
export default function Menu() {
    const logoStyle = {
            width : '50px' ,
            margin : 0,
            padding : 0
            
}


  return (
   
            <ul className='navbar'>
                <a href='#'>     <li className='nav-list'>Home</li>                        </a>
                <a href='#'>    <li className='nav-list'>Work</li> </a>
                <a href='#'>    <li className='nav-list'>Aboute me</li>               </a>

                <a href='#'><li className='nav-list'>
                                                <img src={logo} style = {logoStyle}/>
                                    </li>
                </a>
                <a href='#'>     <li className='nav-list'>Services</li>              </a>
                <a href='#'>    <li className='nav-list'>Content</li>             </a>
                <a href='#'>    <li className='nav-list'>Blog</li>                   </a>
            </ul>
    
  )
}
