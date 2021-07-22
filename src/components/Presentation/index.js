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
              strings: ['Je suis développeur Web', 'Je suis développeur Front-end', 'Je suis développeur React'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="presentation-availability">
          Basé sur Nantes, disponible partout en France ou en remote
        </p>
        <div className="presentation-redirect">
          <a href="#CV">
            <div className="presentation-button">
              <p>Mon CV</p>
              <img src={cv} alt="cv" className="presentation-icon" />
            </div>
          </a>
          <a href="#Portfolio">
            <div className="presentation-button">
              <p>Mon Portfolio</p>
              <img src={portfolio} alt="portfolio" className="presentation-icon" />
            </div>
          </a>
          <a href="#Contact">
            <div className="presentation-button">
              <p>Me contacter</p>
              <img src={crayon} alt="crayon" className="presentation-icon" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Presentation;
