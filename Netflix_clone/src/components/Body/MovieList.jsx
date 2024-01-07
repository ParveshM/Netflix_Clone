import { useEffect, useState } from "react";
import { MOVIE_URL, BASEIMG_URL } from "../../constants/constant";
import axios from "axios";

const MovieList = ({ id, name }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  //   Dynamically get the movies(genre) according to the apiString
  function getMovies() {
    axios
      .get(MOVIE_URL + id)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log("Error in fetching Movie API", err));
  }

  return (
    <>
      <h1 className="text-white text-lg pl-5">{name}</h1>
      <div className="flex flex-wrap gap-2 m-5">
        {movies.map((movie) => {
          // handling null image paths
          return movie.backdrop_path ? (
            <div
              class="max-w-sm rounded overflow-hidden shadow-lg w-56 h-36"
              key={movie.id}
            >
              <img
                className="w-full h-full"
                src={BASEIMG_URL + movie?.backdrop_path}
                alt={movie?.original_title}
              />
            </div>
          ) : null;
        })}
      </div>
    </>
  );
};

export default MovieList;
