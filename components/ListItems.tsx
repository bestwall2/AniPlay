"use client";


import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
//import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import DiscoverCard from "./CardsComp/DiscoverCard";
import { Skeleton } from "./ui/skeleton";

import Link from 'next/link';

// Define TypeScript interface for props
interface ListItemsProps {
  geners: string;
  apiPath: string;
  param: string;
}

// Define TypeScript interface for fetched anime data
interface Anime {
  id: number;
  title: { english: string | null; romaji: string | null };
  format: string;
  year: number;
  episodes: number;
  coverImage: { large: string | null; extraLarge: string };
  averageScore: number | null;
  startDate: { year: number } | null;
  status: string;
}

const ListItems = ({ geners, apiPath , param }: ListItemsProps) => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const data = await fetch(apiPath).then((res) => res.json());
        setAnimeList(data.Page?.media.slice(0, 25) || []);
      } catch (error) {
        console.error("Error fetching anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [apiPath]);

  return (
        <div className="ItemGeners mt-2 mb-2">   
            <div className="Geners flex text-gray-200 items-center mb-2 space-x-2">
                <span className="w-1.5 rounded-full h-6 bg-indigo-500"></span>
                <p className={param}>{geners}</p>
            </div>
            
            <Swiper
                modules={[Navigation, FreeMode]}
                slidesPerView={3}
                spaceBetween={5}
                navigation={true}
                freeMode={true}
                className="swiper-animation"
            >
            
            {loading ? (
                Array.from({ length: 10 }).map((_, index) => (
                <SwiperSlide key={`skeleton-${index}`}>
                    <Skeleton className="SkeletonCard h-[22vh] w-[110px] rounded-lg" />
                </SwiperSlide>
                ))
            ) : (
                
                animeList.filter((anime): anime is Anime => anime !== null && typeof anime === "object" && anime.id !== undefined).map((anime) => {
                    const animeUrl = `/anime/info/${anime.id}`;
            
                    return (
                        <SwiperSlide
                        key={`${anime.id}-${anime.title.romaji}`}
                        className="cursor-pointer"
                        >
                        <Link href={animeUrl} passHref>
                            <DiscoverCard
                            cardbadge={anime.averageScore ? `${anime.averageScore / 10}` : "N/A"}
                            title={anime.title.english || anime.title.romaji || "Unknown Title"}
                            info={`${anime.format} • ${anime.startDate?.year || "Unknown Year"} • ${anime.episodes || "N/A"} Episodes`}
                            img={anime.coverImage.extraLarge}
                            status={anime.status}
                            />
                        </Link>
                        </SwiperSlide>
                    );
                })
            )}
            </Swiper>
        </div>
  );
};

ListItems.propTypes = {
  geners: PropTypes.string.isRequired,
  apiPath: PropTypes.string.isRequired,
};

export default ListItems;