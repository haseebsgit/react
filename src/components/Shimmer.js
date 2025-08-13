const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(13).fill("").map((_, index) => (
        <div key={index} className="shimmer-cards"></div>
      ))}
    </div>
  );
};

export default Shimmer;
