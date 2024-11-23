'use client';

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [hidden, setHidden] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollY && window.scrollY > 50) {
        
        setHidden(false); // Hide navbar on scroll down
      } else {
        
        setHidden(false); // Show navbar on scroll up
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  return (
    <>
      <nav
        className={`NavBarLayout rounded-bl-lg rounded-br-lg border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50 transition-transform ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container   max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://aniplaynow.live/logo.svg"
              className="h-9"
              alt="AniPlay"
            />
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="flex text-sm rounded-full md:me-0 focus:ring-2"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-10 h-10 rounded-full border-fuchsia-600 border-2"
                src="https://cdn.imgchest.com/files/l7lxcgnrl57.png"
                alt="user photo"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;