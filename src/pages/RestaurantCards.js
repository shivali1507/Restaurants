import React from "react";
import Card from "../components/Card";
import { data } from "../mock-data/data";

// API call
// useEffect(() => {
//   fetch(
//     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       const restaurantData = response.data;
//       console.log(restaurantData);
//     })
//     .catch((error) => {
//       console.error("Error fetching data", error);
//     });
// }, []);

const RestaurantCards = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((restaurant, index) => {
          const { name, cloudinaryImageId, areaName, avgRating } =
            restaurant.info;

          return (
            <Card
              key={index}
              name={name}
              imageId={cloudinaryImageId}
              areaName={areaName}
              rating={avgRating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantCards;
