import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([ 
    { name: 'My Work', description: 'Here you can find a list of projects that I have created using a varierty of technologies.'},
    { name: 'Resume', description: 'I have provided a PDF version of my resume below.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Project currentCategory={currentCategory}></Project>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
      </main>
    </div>
  );
}

export default App;