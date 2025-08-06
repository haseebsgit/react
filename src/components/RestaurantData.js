import React from "react";

const RestaurantData = ({ resData }) => {
  const { resName, cuisines, eta, rating, imageUrl } = resData;
  // You can add your JSX here for displaying restaurant data
  return (
    <div className="restaurant-card">
      <img src={imageUrl} alt={resName} />
      <h2>{resName}</h2>
      <p>{Array.isArray(cuisines) ? cuisines.join(", ") : cuisines}</p>
      <p>ETA: {eta}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

export default RestaurantData;
