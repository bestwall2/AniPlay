'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation  } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
// Define a TypeScript interface for the props
interface ListItemsProps {
  geners: string;
}

const slides = Array.from({ length: 20 }).map(
  (el, index) => `Slide ${index + 1}`
);
const swiperParams = {
  slidesPerView: 3,
  spaceBetween: 4,
  navigation: true,
  
  id: "discover-card"
};
function ListItems({ geners }: ListItemsProps) { // Use the interface here
  return (
    <>
      <div className="ItemGeners mt-2">
        <div className="Geners flex text-gray-200 items-center mb-2 space-x-2">
          <span className="w-1.5 rounded-full h-6 bg-white"></span>
          <p>{geners}</p>
        </div>
        <Swiper modules={[Navigation]}  {...swiperParams}>
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
                <div className="Listcontainer relative transition-transform ease-in delay-5 hover:scale-90 rounded-2xl">
                  <img src="https://cdna.artstation.com/p/assets/images/images/003/814/626/large/mark-valeri-your-lie-in-april-mange-front-cover.jpg?1477615815" alt="" />
                  <div className="CardShadow absolute">
                    <p className="Title  absolute  content-center  text-center line-clamp-2"> Your Lie In April {index} </p>
                    <p className="MoreInfo text-gray-300 absolute bottom-0"> Tv • 2024 • EN</p>
                  </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

ListItems.propTypes = {
  geners: PropTypes.string.isRequired, // Marking geners as required in prop types
}

export default ListItems;