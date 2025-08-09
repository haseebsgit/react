const RestaurantData = ({ resData }) => {
  const info = resData.info || {};
  
  return (
    <div className="restaurant-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${info.cloudinaryImageId}`}
        alt={info.name}
      />
      <h2>{info.name}</h2>
      <p>{info.cuisines?.join(", ")}</p>
      <p>ETA: {info.sla?.deliveryTime} mins</p>
      <p>Rating: {info.avgRating} ⭐</p>
      <p>Cost for Two: {info.costForTwo}</p>
      <p>Location: {info.areaName}</p>
      <p>{info.totalRatingsString}</p>
      {info.promoted && <span className="promo-badge">Promoted</span>}
      {info.veg && <span className="veg-badge">🌱 Veg Only</span>}
    </div>
  );
};

export default RestaurantData;
