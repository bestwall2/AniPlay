'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import DiscoverCard from "./CardsComp/DiscoverCard";

// Define TypeScript interface for props
interface ListItemsProps {
  geners: string;
  apiPath: string;
}

// Define TypeScript interface for fetched anime data
interface Anime {
  id: number;
  title: { english: string | null; romaji: string | null };
  format: string;
  year: number;
  episodes: number;
  coverImage: { large: string };
  averageScore: number | null;
  startDate: { year: number } | null;  //
}

const ListItems = ({ geners , apiPath}: ListItemsProps) => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch anime data when the component mounts
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const data = await fetch(apiPath).then((res) => res.json());
        setAnimeList(data.Page?.media.slice(0,25)  || []); // Ensure the response has a `data` field
      } catch (error) {
        console.error('Error fetching anime:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <>
      <div className="ItemGeners mt-2 mb-2">
        <div className="Geners flex text-gray-200 items-center mb-2 space-x-2">
          <span className="w-1.5 rounded-full h-6 bg-white"></span>
          <p>{geners}</p>
        </div>
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <Swiper modules={[Navigation, FreeMode]} slidesPerView={2.6} spaceBetween={4} navigation={true} freeMode={true}>
            {animeList.map((anime) => (
              <SwiperSlide key={`${anime.id}-${anime.title.romaji}`}>
                <DiscoverCard
                  
                  cardbadge={anime.averageScore ? anime.averageScore.toFixed(1) : "N/A"}
                  title={anime.title.english || anime.title.romaji || "Unknown Title"}
                  info={`${anime.format} • ${anime.startDate?.year || "Unknown Year"} • ${anime.episodes}`}
                  img={anime.coverImage.large}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  );
};

// Prop types for fallback validation
ListItems.propTypes = {
  geners: PropTypes.string.isRequired, 
  apiPath: PropTypes.string.isRequired, 
  // Marking geners as required
};

export default ListItems;