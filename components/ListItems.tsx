'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

// Define a TypeScript interface for the props
interface ListItemsProps {
  geners: string;
}

const slides = Array.from({ length: 20 }).map(
  (el, index) => `Slide ${index + 1}`
);

function ListItems({ geners }: ListItemsProps) { // Use the interface here
  return (
    <>
      <div className="ItemGeners mt-2">
        <div className="Geners flex items-center mb-2 space-x-2">
          <span className="w-1.5 rounded-full h-6 bg-white"></span>
          <p>{geners}</p>
        </div>
        <Swiper navigation={true} modules={[Navigation]} grabCursor={true} slidesPerView={3} spaceBetween={4}>
          {slides.map((slideContent, index) => (
            <SwiperSlide key={slideContent} virtualIndex={index}>
              <div className="Listcontainer rounded-2xl">
                <img src="https://cdna.artstation.com/p/assets/images/images/003/814/626/large/mark-valeri-your-lie-in-april-mange-front-cover.jpg?1477615815" alt="" />
              </div>
              <p className="Title text-gray-300 line-clamp-2"> The Do-Over Damsel </p>
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