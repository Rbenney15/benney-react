import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'UpLift',
      category: 'project',
      description:
        'This is a Fitness Tracker application that allows users to join a like minded community to track and share workouts.',
      github: 'https://github.com/Rbenney15/UpLift',
      deployed: 'https://uplift-srb.herokuapp.com/login'
    },
    {
      name: 'Note Taker App',
      category: 'project',
      description:
        'This application is a Note Taker application. Allows the user to make notes for future reference. The user has the ability to save the notes for later and also delete the notes once they have completed them.',
      github: 'https://github.com/Rbenney15/note-taker',
      deployed: 'https://note-taker-rbgwu.herokuapp.com',
    },
    {
      name: 'Password Generator App',
      category: 'project',
      description:
        'This is a random password generator to create more complex and secure passwords.',
      github: 'https://github.com/Rbenney15/password-generator',
      deployed: 'https://rbenney15.github.io/password-generator/',
    },
    {
      name: 'Weekday Scheduler',
      category: 'project',
      description:
        'An editable weekday scheduler to track daily tasks.',
      github: 'https://github.com/Rbenney15/workday-scheduler',
      deployed: 'https://rbenney15.github.io/workday-scheduler/',
    },
    {
      name: 'Weather Dashboard',
      category: 'project',
      description:
        'Weather Dashboard application where a user can search for a city they would like to know the current and upcoming 5 day forecast.',
      github: 'https://github.com/Rbenney15/weather-dashboard',
      deployed: 'https://rbenney15.github.io/weather-dashboard/',
    },
    {
      name: 'Team Profile Generator',
      category: 'project',
      description:
        'This application is a node command line interface that allows a manager to build a team roster by inputing some general information about each team member. A HTML webpage that will display a summary of each team member to easily access their teams contact information.',
      github: 'https://github.com/Rbenney15/team-profile-generator',
      deployed: 'CLI App, clone repo to run application',
    }
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
            // src={require(`../../assets/images/projects${category}/${i}.jpg`)}
            src={require(`../../assets/images/projects${category}/${i}.png`)}
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

export default ProjectList;