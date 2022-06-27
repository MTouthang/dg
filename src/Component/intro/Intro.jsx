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
                        <div className='i-title-item'> Artist</div>
                        <div className='i-title-item'> Pencil Drawing</div>
                        <div className='i-title-item'> Realicism</div>
                        <div className='i-title-item'> Mentor </div>
                        <div className='i-title-item'> Self startup </div>
                    </div>
                </div> 
                <p className='i-desc'>
                I design and develop services for customers of all sizes, specializing
                in creating stylish, modern websites, web services and online 
                stores
                </p>
            </div>
        </div> 

        {/* right */}
        <div className='i-right'>
            <div className='i-bg'> </div>
            <img src={portrait} alt='my profile' className='i-img'/>
        </div>

    </div>
  )
}

export default Intro