import RestaurantData from "./RestaurantData";
import { useState, useEffect } from "react";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  try {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025"
    );

    const json = await data.json();
    console.log("Full API response:", json);

    const restaurantsCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setAllRestaurants(restaurants);
    setRestaurantList(restaurants);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


  const filterTopRated = () => {
    const topRated = allRestaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) >= 4.5
    );
    setRestaurantList(topRated);
  };

  return (
    <div className="body">
      <button className="filter" onClick={filterTopRated}>
        Top rated restaurants
      </button>

      <div className="container">
        {restaurantList.length > 0 ? (
          restaurantList.map((restaurant, index) => (
            <RestaurantData
              key={restaurant.info.id || index}
              resData={restaurant}
            />
          ))
        ) : (
          <p>Loading restaurants...</p>
        )}
      </div>
    </div>
  );
};

export default Body;
