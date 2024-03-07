import React, { useState, useEffect } from 'react';
import Menu from './Menu';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if ((prevScrollPos > currentScrollPos && currentScrollPos > 0) || currentScrollPos === 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar-body bg-gray-800 fixed w-full transition-transform transform z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="navbar flex items-center justify-between p-4">
        <h2 id="title" className="text-white text-lg font-bold">
          Ship Adventure
        </h2>
        {showMenu && <Menu function={toggleMenu} onItemClick={handleMenuClick} />}
      </div>
    </header>
  );
};

export default Navbar;