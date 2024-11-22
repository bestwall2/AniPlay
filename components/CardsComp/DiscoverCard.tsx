import Image from 'next/image';
import React from "react";

interface ListItemsProps {
  title: string;
  info: string;
  img: string;
  cardbadge: string;
   // Ensure "boolean" is lowercase in TypeScript
}

const DiscoverCard: React.FC<ListItemsProps> = ({ title, info, img , cardbadge }) => {
  

  return (
    <div className="Listcontainer relative transition-transform ease-in delay-2 hover:scale-90 rounded-2xl">
      {/* Optimized Next.js Image */}
      <Image
        src={img}
        alt={title}
        layout="responsive"
        width={500}
        height={300}
      />
      <div className="CardShadow absolute">
        <p className="Title  absolute  content-center  text-center line-clamp-2"> {title} </p>
        <p className="MoreInfo text-gray-300 absolute  bottom-0"> {info} </p>
        <p className="CardBadge">{cardbadge}</p>
      </div>
    </div>
  );
};

export default DiscoverCard;