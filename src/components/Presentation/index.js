import React from 'react';
import Typewriter from 'typewriter-effect';

import cv from 'src/assets/cv.svg';
import computerLogo from 'src/assets/laptop.svg';
import crayon from 'src/assets/pencil.svg';
import portfolio from 'src/assets/portfolio.svg';

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
        <div className="presentation-redirect">
          <div className="presentation-button">
            <a href="#CV"> Mon CV </a>
            <img src={cv} alt="cv" className="presentation-icon" />
          </div>
          <div className="presentation-button">
            <a href="#Portfolio"> Mon Portoflio </a>
            <img src={portfolio} alt="portfolio" className="presentation-icon" />
          </div>
          <div className="presentation-button">
            <a href="#Contact"> Me contacter </a>
            <img src={crayon} alt="crayon" className="presentation-icon" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Presentation;
