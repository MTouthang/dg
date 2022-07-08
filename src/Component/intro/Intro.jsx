import React from 'react'
import './intro.css'
import portrait from '../../img/portrait.png'

const Intro = () => {
  return (
    //   left intro
    <div className='i bg-light'>
        <div className='i-left'>
            <div className='i-left-wrapper'> 
                <h2 className='i-intro'> Hello, My name is </h2> 
                <h1 className='i-name'> Chin David Guite</h1> 
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'> Self-taught</div>
                        <div className='i-title-item'> Realism artist</div>
                        <div className='i-title-item'> Specialising in </div>
                        <div className='i-title-item'> Graphite</div>
                        <div className='i-title-item'> Charcoal drawings </div>
                       
                    </div>
                </div> 
                <div className='i-desc'>
                I started art tutoring online a year ago and collaborated with e-learning platforms such as BitClass, MadCaps &
                VividTrails for art courses and have achieved many awards too.
                
                </div>
            </div>
        </div> 

        {/* right */}
        <div className='i-right'>
            <div className='i-bg'> </div>
            <img src={portrait} alt='my profile' className='i-img animate__animated animate__zoomIn'/>
        </div>

    </div>
  )
}

export default Intro