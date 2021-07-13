import React from 'react';
import Typical from 'react-typical';
import computerLogo from 'src/assets/laptop.svg';
import './style.scss';

const Presentation = () => {
  const a = 2;
  return (
    <div className="presentation">
      <div className="presentation-name">
        <p className="presentation-nameP">
          Je suis Clément CHARLES
        </p>
        <img src={computerLogo} alt="Computer Logo" className="presentation-computerLogo" />
      </div>
      <Typical
        steps={['Je suis developpeur Web', 1500, 'Je suis developpeur Front-End', 1500, 'Je suis developpeur React', 1500]}
        loop={Infinity}
        wrapper="p"
        className="presentation-typical"
      />
      <p className="presentation-availability">
        Basé sur Nantes, disponible partout en France ou en remote
      </p>
    </div>
  );
};

export default Presentation;
