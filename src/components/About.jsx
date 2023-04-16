import React from 'react';
import aboutImage from '../images/about.png';

function About() {
  return (
    <div id='about'>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
      <div className="about-text">
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam non error tenetur quaerat dicta facere qui at tempore sequi nam deserunt, libero enim quas blanditiis illum molestias nobis ipsum impedit?</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
