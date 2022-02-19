import React from 'react';
import aboutimg from '../../images/about.png';
import '../About/About.css'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="container wrapper">
        <div className="about_text">
          <h2>UPCOMING EVENT</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores similique ipsa quo nisi minus, rerum quidem dolorem dignissimos earum! Repudiandae illum sit sapiente inventore veniam! Voluptatibus error earum delectus architecto?</p>
          <button className='btn'>Read More</button>
        </div>
        <div className="about_image">
          <img src={aboutimg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About;