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
        test
      </nav>
    </>
  );
}
