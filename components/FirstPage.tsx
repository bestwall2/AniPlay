import React from "react";

import Slider from "./Slider";
import ListItems from "./ListItems";
import Navbar from "./NavBar";
import Footer from "./Footer";
const FirstPage = () => {
  return (
    <>
      {/* Outer wrapper to control scrolling */}
      <div className=" min-h-screen flex flex-col">
        {/* Navbar (Static at the top) */}
        <Navbar />
        {/* Main content area */}
        <div className="flex-1 overflow-auto">
          <Slider />
          <div className="Items container mx-auto p-4 pt-2 pb-0 flex flex-col">
            <ListItems geners="Last Episodes"/>
            <ListItems geners="Popular Animes"/>
            <ListItems geners="All Time Trending"/>
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default FirstPage;