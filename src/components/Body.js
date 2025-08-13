import RestaurantData from "./RestaurantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
  try {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7041&lng=77.1025"
    );

    const json = await data.json();

    const restaurantsCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setAllRestaurants(restaurants);
    setRestaurantList(restaurants);
    setLoading(false);  // set loading to false after data is fetched
  } catch (error) {
    console.error("Error fetching data:", error);
    setLoading(false);
  }
};

  const filterTopRated = () => {
    const topRated = allRestaurants.filter(
      (restaurant) => parseFloat(restaurant.info.avgRating) >= 4.5
    );
    setRestaurantList(topRated);
  };

  if (allRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search-div"> 
        <input type="text" className="search" value={searchText} onChange={(e)=>{
          setSearchText(e.target.value);
          const filteredRestaurants = allRestaurants.filter((restaurant) =>
            restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())
          );
          setRestaurantList(filteredRestaurants);
        }}></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="filter-div">
      <button className="filter" onClick={filterTopRated}>
        Top rated restaurants
      </button>
      </div>

     

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
