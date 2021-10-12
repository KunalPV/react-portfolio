import { useState } from 'react';
import Web from './web/Web';
import Mobile from './mobile/Mobile';

import './header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo">Portfolio</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className="fi fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
