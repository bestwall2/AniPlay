"use client";

import React, { useState, useEffect } from "react";
import { BiSolidCategory } from "react-icons/bi";
import { FiSettings, FiUser, FiSearch, FiInfo } from "react-icons/fi"; // Import icons
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div
            className="bg-gray-900 w-[50px] shadow-md transition-transform ease-in delay-2 hover:scale-90 flex items-center justify-center h-[50px] fixed rounded-full bottom-0 mb-5 left-10 z-50"
          >
            <BiSolidCategory size={22} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuPortal>
          <DropdownMenuContent align="start" sideOffset={5} className="z-50 backdrop-blur-xl">
            <DropdownMenuLabel>Main</DropdownMenuLabel>
            <DropdownMenuItem>
              <FiSettings className="mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FiInfo className="mr-2" /> About Us
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FiUser className="mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FiSearch className="mr-2" /> Search
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </>
  );
};

export default Navbar;