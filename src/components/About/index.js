import React from 'react';
import coverImage from '../../assets/images/coverImage/coverImage.jpg';

function About() {

  return (
    <section className="my-5" >
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
          Hello, I am Rob Benney. I am a Front End Developer that has completed a Certificate program at Geroge Washington University in Full Stack Development.
      </p>
      </div>
    </section>
  )
}

export default About;