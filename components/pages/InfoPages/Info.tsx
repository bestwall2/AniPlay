"use client";

import React, { useState, useEffect } from "react";

function Info({ id }) {
  const [coverImage, setCoverImage] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    // Fetch data from AniList API
    const fetchData = async () => {
      try {
        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query ($id: Int) {
                Media(id: $id) {
                  title {
                    romaji
                  }
                  coverImage {
                    extraLarge
                  }
                  bannerImage
                  averageScore
                }
              }
            `,
            variables: { id: parseInt(id) },
          }),
        });
        const data = await response.json();
        const media = data?.data?.Media;

        if (media) {
          setCoverImage(media.coverImage.extraLarge);
          setBannerImage(media.bannerImage);
          setTitle(media.title.romaji);
          setRating(media.averageScore);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // Show a loading message until the images are fetched
  if (!bannerImage && !coverImage) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <div className="containerImageInfo relative w-full h-screen overflow-hidden">
        {/* Background image (bannerImage or fallback to coverImage) */}
        <div className="BackgroundImageOfInfo position w-full h-full">
          <img
            src={bannerImage || coverImage} // Use bannerImage if available, fallback to coverImage
            alt="Background"
            className="absolute w-full h-full object-cover opacity-50"
          />
          {/* Black shadow gradient */}
          <div className="frogroundShadow absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* Centered content */}
        <div className="flex justify-center items-center h-full flex-col">
          {/* Foreground card (coverImage) */}
          <div className="CardImage relative rounded-lg w-[170px] m-5 shadow-xl overflow-hidden">
            <img
              src={coverImage}
              alt="Foreground"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title under the image */}
          <h1 className="Title absolute content-center bottom-0 text-2xl font-bold text-white">{title}</h1>
        </div>
      </div>

      {/* Rating and action buttons */}
      <div className="InfoContainer flex flex-col items-center justify-center mt-5">
        {rating && (
          <p className="text-green-400 font-medium mt-2">
            ⭐ {rating / 10} | Releasing
          </p>
        )}
        <div className="flex mt-4 gap-4">
          <button className="bg-white text-black py-2 px-6 rounded-full font-semibold hover:bg-gray-300">
            Play Now
          </button>
          <button className="bg-gray-800 text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-700">
            Add to List
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;