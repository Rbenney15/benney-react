import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">A little about me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello, I am Rob Benney. I'm a recent graduate of George Washington University's Full Stack Development Certificate program. During my time in the program I learned the introcacies of both the Frontend and Backend of Web Development.
        Frontend: 
        HTML, CSS, JavaScript, Command line fundamentals, APIs: Server-side and Third Party, and Git fundamentals, React. 
        Backend:
        Node.js, OOP, Express.js, SQL (MySQL and Sequelize), ORM, MVCs, NoSQL(MongoDB and Mongoose) 
        I am excited to take the knowledge and skills I learned in this program and help an organization continue to grow and achieve their goals.  
        </p>
      </div>
    </section>
  );
}

export default About;
