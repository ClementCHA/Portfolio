/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import burgerMenue from 'src/assets/menu.svg';
import cross from 'src/assets/cross.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.scss';

export default function HeaderApp() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="header">
        <img src={burgerMenue} alt="Menu burger" className="header-burger" onClick={showSidebar} />
      </div>
      <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
        <img src={cross} alt="cross" className="sidebar-cross" onClick={showSidebar} />
        <div className="listNav">
          <ul onClick={showSidebar}>
            <li> <a href="/">Accueil</a> </li>
            <li> <a href="/#CV"> Mon CV</a></li>
            <li> <a href="/#Portfolio"> Mon portoflio</a></li>
            <li> <a href="/#Contact"> Me contacter</a></li>
          </ul>
        </div>
        <hr className="hr"></hr>
        <div className="brandIcon">
          <a href="https://www.linkedin.com/in/cl%C3%A9ment-charles-2b562a205/" target="_blank">
            <FontAwesomeIcon
              className="linkedin"
              icon={faLinkedin}
            />
          </a>
          <a href="https://github.com/ClementCHA" target="_blank">
            <FontAwesomeIcon
              className="github"
              icon={faGithub}
            />
          </a>
        </div>
      </nav>
    </>
  );
}
