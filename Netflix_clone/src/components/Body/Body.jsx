import { MovieList } from "../index";
import { GENRE_TITLES } from "../../constants/constant";
const Body = () => {
  return (
    <div className="flex flex-col m-2">
      {GENRE_TITLES.map((genre, index) => {
        return <MovieList key={index} {...genre} />;
      })}
    </div>
  );
};

export default Body;
