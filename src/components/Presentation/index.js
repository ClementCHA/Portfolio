import React from 'react';
import Typewriter from 'typewriter-effect';

import computerLogo from 'src/assets/laptop.svg';

import './style.scss';

const Presentation = () => {
  const a = 2;
  return (
    <>

      <div className="presentation">
        <div className="presentation-name">
          <p className="presentation-nameP">
            Je suis Clément CHARLES
          </p>
          <img src={computerLogo} alt="Computer Logo" className="presentation-computerLogo" />
        </div>
        <div className="presentation-typical">
          <Typewriter
            options={{
              strings: ['Je suis developpeur Web', 'Je suis developpeur Front-end', 'Je suis developpeur React'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="presentation-availability">
          Basé sur Nantes, disponible partout en France ou en remote
        </p>
      </div>
    </>
  );
};
export default Presentation;
