import React from 'react'
import './Myservices.css'
 import serv1 from   '../assets/img/3d 2.png'
 import serv2 from   '../assets/img/1.png'
 import serv3 from   '../assets/img/2.png'
import serv4 from   '../assets/img/3.png'
import serv5 from   '../assets/img/5.png'
export default function MyServices({Title}) {
  return (
    <>
    <h3 className='heading'>
                My Services
            </h3>

    <div className='container'>

            
            <div className='services'>

                   
                            <div className='service'>
                                <img src={serv1} alt="img_sevice"></img>
                                <h3 className='Headingserv'> website Writing </h3>
                            </div>
                    <div  className='service second'>
                    <img src={serv2} alt="img_sevice" className='IMG'></img>
                    <img src={serv3} alt="img_sevice" className='IMG'></img>
                    <img src={serv4} alt="img_sevice" className='IMG'></img>
                    <h3 className='Headingservsecond '> UX Writing </h3>
                    </div>
                    <div  className='service'>
                    <img src={serv5} alt="img_sevice"></img>
                            <h3 className='Headingserv'> Content Writing </h3>
                    </div>


            </div>



    </div>
   
    <h3 className='heading' style={{ position : 'absolute',left:"45%",top:"350%"}}>
                My Recent work
            </h3>

    <div className='RecentWork'>

            
            <div className='services'>

                   
                            <div className='service'>
                                <img src={serv1} alt="img_sevice"></img>
                                <h3 className='Headingserv'> website Writing </h3>
                            </div>
                    <div  className='service second'>
                    <img src={serv2} alt="img_sevice" className='IMG'></img>
                    <img src={serv3} alt="img_sevice" className='IMG'></img>
                    <img src={serv4} alt="img_sevice" className='IMG'></img>
                    <h3 className='Headingservsecond '> UX Writing </h3>
                    </div>
                    <div  className='service'>
                    <img src={serv5} alt="img_sevice"></img>
                            <h3 className='Headingserv'> Content Writing </h3>
                    </div>


            </div>



    </div>
    
    
    </>
  )
}
