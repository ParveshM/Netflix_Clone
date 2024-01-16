import { useState, useEffect } from "react";
import { BASEIMG_URL } from "../../constants/constant";
import Shimmer from "./Shimmer";

const MovieCard = ({ id, backdrop_path, original_title }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleOnLoad = () => {
    console.log("Image loaded successfully");
    setIsLoading(false);
  };

  // creates a image object and set src ,also listen to onload event
  useEffect(() => {
    const image = new Image();
    image.src = BASEIMG_URL + backdrop_path;
    image.onload = handleOnLoad;
  }, [backdrop_path]);

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="max-w-sm rounded  shadow-lg w-56 h-36 flex-none" key={id}>
      <img
        className="w-full h-full"
        src={BASEIMG_URL + backdrop_path}
        alt={original_title}
        onLoad={handleOnLoad}
      />
    </div>
  );
};

export default MovieCard;
