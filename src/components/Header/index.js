import React, { useState } from 'react';
import burgerMenue from 'src/assets/menu.svg';
import cross from 'src/assets/cancel.svg';
import './style.scss';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="header">
        <img src={burgerMenue} alt="Menu burger" className="header-burger" onClick={showSidebar} />
      </div>
      <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
        <img src={cross} alt="cross" className="sidebar-cross" onClick={showSidebar} />
      </nav>
    </>
  );
};

export default Header;
