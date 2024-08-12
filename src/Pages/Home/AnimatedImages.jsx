import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AnimatedImages.css'; // Assuming you have custom styles here
import SkillBar from './SkillBar';

const AnimatedImages = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Global duration for all animations
    });
  }, []);

  return (
    <>
    <div className="skills--section--title titel-skill"
     data-aos="fade-right"
     data-aos-duration="5000"
     data-aos-delay="200">
        <p>Software Design</p>
    </div>
    <div className='arch'>
      <div className="image-titel ">
        <div className="bar-title">
          <p>My Knowldage Piramed</p>
        </div>
        <div className="animated-images">
        
          <div
            className="image-container top"
            data-aos="zoom-out-down"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <img src="./img/top1.png" alt="Image 1" />
          </div>
          <div
            className="image-container middle"
            data-aos="zoom-out-left"
            data-aos-duration="500"
            data-aos-delay="300"
          >
            <img src="./img/middeltri.png" alt="Image 2" />
          </div>
          <div
            className="image-container buttom"
            data-aos="slide-up"
            data-aos-duration="500"
            data-aos-delay="400"
          >
            <img src="./img/bottomtri.png" alt="Image 3" />
          </div>
        </div>
      </div>
      <div className='con'>
        <div className="bar-title">
          <p>My Expertise</p>
        </div>
        <SkillBar/>
      </div>
    </div>
    <hr className='section-divider'></hr>
    </>
  );
};

export default AnimatedImages;
