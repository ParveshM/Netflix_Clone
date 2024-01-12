import { BASEIMG_URL } from "../../constants/constant";
const MovieCard = ({ id, backdrop_path, original_title }) => {
  console.log(id, "aasd");
  return (
    <div className="max-w-sm rounded  shadow-lg w-56 h-36 flex-none" key={id}>
      <img
        className="w-full h-full"
        src={BASEIMG_URL + backdrop_path}
        alt={original_title}
      />
    </div>
  );
};

export default MovieCard;
