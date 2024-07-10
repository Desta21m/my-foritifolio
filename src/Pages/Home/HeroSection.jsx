import React from 'react'

function HeroSection() {
  return (
  <section id='heroSec' className='hero--section'>
        <div className='hero--section--content--box'>
            <div className='hero--section-content'>
                <p className='section--titile'>Hey, i'm Desta</p>
                <h1 className='hero--section--titile'>
                     <span className='hero--section--titile--color'> 
                        Full Stack
                     </span>
                     <br/>
                     Developer
                </h1>
                <p className='hero--section--description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Ad pariatur deserunt tempora voluptate dolor 
                </p> 
                       
            </div>
            <button className='btn btn-primary'>Get In Touch</button>
        </div>
        <div className='hero--section-img'>
            <img src="./img/hero imge.png" alt="hero image" />
        </div>
  </section>
    
  )
}

export default HeroSection