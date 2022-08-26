import React from 'react'
import illustrationButtom from '../assets/img/Ilustrationbottom.png'
import phone from '../assets/img/phone.png'
import hands_on_hips from '../assets/img/women.png'
import Background from '../assets/img/Background.png'
import './aboutMe.css'
export default function AboutMe() {
  return (
    <>
    
        
        <div className='imgSection'>
            <img src={phone} alt = "phone"/>
        </div>
        <div className='CONTAINER'>
        <div className='AboutMe'>

                <p className='Description'>
                    Creative UI Designer
                   Ganikas
                    Based in Tunisia
                </p>
                <div className='BottomSection'>

                <div className='Buttons'>
                    
                    <button className='button workwithme'>Work With Me</button>
                    <button className='button hireMe'>Hire Me</button>
                </div>

                </div>

                <img src={illustrationButtom} className ="BottomIMG"  alt='illustrationButtom'/>

                </div> 


        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <img src={Background}  alt ="Background" className='Background'/>
        <div className='desc_aboutme'>
        
                    <p className='Heading'>About Me</p>
                    <p className='desc'>
                    My name is Sourasith Phomhome. 
                    I’m a UI Designer and a instrutor based in Montreal.
                     I’m curently working with Design+Code.
                    I’m passionate about creating digital experiences and teaching design. 
                    My goal is to help beginners to grow their skills... <strong>read more</strong> 
                    </p>
                    <img src={hands_on_hips}  alt ="hands-on-hips" className='women'/>
                    


        </div>
        </>
  )
}
