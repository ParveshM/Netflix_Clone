const API_KEY = import.meta.env.VITE_API_KEY;
// Banner url and baseimage urls
export const BANNER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=3`;

export const BASEIMG_URL = "https://image.tmdb.org/t/p/original";

export const MOVIE_URL = ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`;

//   Movie genre URL
export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;

export const GENRE_TITLES = [
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 16,
    name: "Animation",
  },
];
