import { useEffect, useRef, useState } from "react";
import { MOVIE_URL, BASEIMG_URL } from "../../constants/constant";
import axios from "axios";
import "./style.css";
import Shimmer from "./Shimmer";
import MovieCard from "./MovieCard";

const MovieList = ({ id, name }) => {
  const [movies, setMovies] = useState([]);

  const itemRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  useEffect(() => {
    getMovies();
  }, []);

  //   Dynamically get the movies(genre) according to the apiString
  function getMovies() {
    axios
      .get(MOVIE_URL + id)
      .then((res) => {
        setMovies(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error in fetching Movie API", err));
  }

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -itemRef.current.offsetLeft);
    setScrollLeft(itemRef.current.scrollLeft);
  };

  const handleMouseLeave = (e) => {
    setIsMouseDown(false);
  };

  const handleMouseUp = (e) => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const X = e.pageX - itemRef.current.offsetLeft;
    const walk = (X - startX) * 1;
    itemRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      <h1 className="text-white text-xl pl-5">{name}</h1>
      <div
        className="flex overflow-x-auto gap-3 m-5 posters cursor-pointer"
        ref={itemRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {movies.map((movie) => {
          // handling null image paths , backdrop is key name
          return movie.backdrop_path ? (
            <MovieCard key={movie.id} {...movie} />
          ) : null;
        })}
      </div>
    </>
  );
};

export default MovieList;
