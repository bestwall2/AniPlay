'use client';
//shadcn styles

import { Button } from "./ui/button"
// Import Swiper styles

import "swiper/css";
import "swiper/css/effect-coverflow";
import { FaPlayCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow , Autoplay} from "swiper/modules"
const slides = Array.from({ length: 20 }).map(
  (el, index) => `Slide ${index + 1}`
);

const Slider = () => {
  return (
    <>
      <Swiper autoplay={{delay:5000, disableOnInteraction:false}} loop={true} modules={[EffectCoverflow,Autoplay]} slidesPerView={'auto'} effect="coverflow" spaceBetween={0}>
        {slides.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <div className="container">
              <img src="https://cdna.artstation.com/p/assets/images/images/003/814/626/large/mark-valeri-your-lie-in-april-mange-front-cover.jpg?1477615815" alt="" landing="lazy"/>
              <div className="ContainerLayout">
              </div>
              <div className="InfoContainer m-4 text-left">
                <h2 className="Trending text-pink-600 ">#1 Trending</h2>
                <h1 className="Title">Seirei Gensouki: Sprit Chronicles Season 2</h1>
                <div className="Addtion mb-2 space-x-3 h-auto">
                  <h1>
                    <FaPlayCircle className="m-1 self-center" size={13} />
                    TV
                  </h1>
                  <h1 className="State text-green-500 ">
                    RELEASING</h1>
                  <h1>
                    <MdDateRange className="m-1 self-center" size={13} />
                    Nov 13 , 2024</h1>
                </div>
                  <Button className="rounded-full" variant="styled">
                    <FaPlayCircle /> Play Now
                  </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;