import React, { useState } from 'react';
import burgerMenue from 'src/assets/menu.svg';
import cross from 'src/assets/cross.svg';
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
      </nav>
    </>
  );
}
