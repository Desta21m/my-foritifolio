import React from 'react'

function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about2.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section-content">
          <p className="section-title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section--description">
          Hello, my name is Desta Equar, and I am a 4th-year Software Engineering student at Arbaminch University. While I haven't yet had the opportunity to work with a real client, I've consistently treated my instructors' assignments and projects as if they were real-world challenges. I've led teams and assumed the role of software architect on these projects, ensuring they were completed on time and to the highest standards.
          </p>
          <p className="hero--section--description">
          Throughout my academic journey, I've become the&nbsp;
                         <strong>go-to </strong> 
                      student in my batch, always eager to tackle the most challenging assignments. I thrive on finding creative solutions to problems that others might deem impossible to implement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe