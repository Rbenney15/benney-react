import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'UpLift',
      category: 'commercial',
      description:
        `This is a Fitness Tracker application that allows users to join a like minded community to track and share workouts.
        GitHub: https://github.com/Rbenney15/UpLift , 
        Deployed: https://uplift-srb.herokuapp.com/login`,
    },
    {
      name: 'Note Taker App',
      category: 'commercial',
      description:
        `This application is a Note Taker application. Allows the user to make notes for future reference. The user has the ability to save the notes for later and also delete the notes once they have completed them.',
        GitHub: https://github.com/Rbenney15/note-taker,
        Deployed: https://note-taker-rbgwu.herokuapp.com,`
    },
    {
      name: 'Password Generator',
      category: 'commercial',
      description:
      `This is a random password generator to create more complex and secure passwords.,
      GitHub: https://github.com/Rbenney15/password-generator,
      Deployed: https://rbenney15.github.io/password-generator/,`
    },
    {
      name: 'Workday Scheduler',
      category: 'commercial',
      description:
      `An editable weekday scheduler to track daily tasks.,
      GitHub: https://github.com/Rbenney15/workday-scheduler,
      Deployed: https://rbenney15.github.io/workday-scheduler/,`
    },
    {
      name: 'Weahter Dashbaord',
      category: 'commercial',
      description:
      `Weather Dashboard application where a user can search for a city they would like to know the current and upcoming 5 day forecast.,
      GitHub: https://github.com/Rbenney15/weather-dashboard,
      Deployed: https://rbenney15.github.io/weather-dashboard/,`
    },
    {
      name: 'Random Fact Generator',
      category: 'commercial',
      description:
      `This application is a Random Fact Generator that allows users to select a fact category presented to them on page load. Once the user selects a fact category, they are presented with a random fact from that category. The user has the ability to save the facts they find most interesting. The user also has the ability to see all of their saved facts compiled in one list.
      Github: https://github.com/samdakota/Random-Fact-Generator
      Deployed: https://samdakota.github.io/Random-Fact-Generator/`
    },
    {
      name: 'Resume Parwt 1',
      category: 'food',
      description:
        'Resume Part 1'
    },
    {
      name: 'Resume Part 2',
      category: 'food',
      description:
        'Resume Part 2'
    },
    {
      name: 'Resume Part 3',
      category: 'food',
      description:
        'Resume Part 3'
    },
    // {
    //   name: 'Pancakes',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Burrito',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Scallop pasta',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Burger',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Fruit bowl',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Green river',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Docks',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Panoramic village by sea',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Domestic landscape',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Park bench',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
