import React from 'react'

function HeroSection() {
  return (
  <>
    <section id='heroSec' className='hero--section'>
        <div className='hero--section--content--box'>
            <div className='hero--section-content'>
                <p className='section--titile'>Hey, i'm Desta</p>
                <h1 className='hero--section--titile'>
                     Full&nbsp;
                     <span className='hero--section--titile--color'> 
                     Stack
                     </span>
                     <br/>
                     Developer
                </h1>
                <p className='hero--section--description'>
                If you're seeking a developer who can make a <strong>  Rreal impact </strong>, I'm here to help. Let's collaborate to turn great ideas into the best possible reality.<br/> <br/> Reach out and let's start building together.
                </p> 
                       
            </div> <button className='btn btn-primary'>Get In Touch</button>
           
        </div>
        <div className='hero--section-img '>
            <img src="./img/hero.png" alt="hero image" />
        </div>
  </section>
  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#fce9a6" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,213.3C384,192,480,128,576,122.7C672,117,768,171,864,165.3C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
            </path>
  </svg>

  </>
  )
}

export default HeroSection