import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
interface ListItemsProps {
  title: string;
  info: string;
  img: string;
  cardbadge: string;
  status: string;
  // Ensure "boolean" is lowercase in TypeScript
}

const DiscoverCard: React.FC<ListItemsProps> = ({
  title,
  info,
  img,
  cardbadge,
  status,
  
}) => {
  return (
    <div className="Listcontainer  relative transition-transform ease-in delay-2 hover:scale-90  rounded-2xl" >
      {/* Optimized Next.js Image */}

      <Image src={img} alt={title} layout="fill" objectFit="cover" priority />
      

      <div className="CardShadow absolute">
      
        
        <p className="Title  absolute  content-center  text-center line-clamp-2">
          {title}
        </p>
              
        <p className="MoreInfo text-gray-300 absolute line-clamp-1 bottom-0">
          {" "}
          {info}{" "}
        </p>
        <div className="CardBadge flex items-center justify-start">
          <p className="CardBadgeText self-center">{cardbadge}</p>
          <FaStar
            
            size={12}
            style={{ color: "yellow", padding: 1 }}
          />
        </div>
        <div className="CardActive  flex items-center justify-start">
            <GoDotFill
                size={17}
                style={{
                    color: status === "RELEASING" ? "#84d77b" : "#ef4444", // green or red
                    padding: 1,
                    textShadow: '0px 0px 10px black', // white shadow/glow
                }}
            />
        </div>
      </div>
      <FaPlay className="PlayBtn " size={38}  style={{ color: "#a08dff", padding: 1 }} /> 
    </div>
  );
};

export default DiscoverCard;
