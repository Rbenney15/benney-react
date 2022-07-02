import React from 'react';
import coverImage from '../../assets/images/coverImage/coverImage.jpg';

function About() {
  return (
    <section>
      <h1 id="about">Get To Know Me</h1>
      <img src={coverImage} className='my-2' style={{ width: '30%' }} alt='cover' />
    </section>
  );
}

export default About;