import React from "react";
import StarRating from "./StarRating";

const Card = ({ name, areaName, imageId, rating }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-95 bg-white">
      <img
        className="w-full h-40 object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
        alt="Restaurant"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{areaName}</p>
        <p className="text-yellow-400">{rating}</p>
        <StarRating rating={rating} />
      </div>
    </div>
  );
};

export default Card;
