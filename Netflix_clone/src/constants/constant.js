// Banner url and baseimage urls
export const BANNER_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${
  import.meta.env.VITE_API_KEY
}`;

export const BASEIMG_URL = "https://image.tmdb.org/t/p/original";

//   Movie genre URL
export const GENRE_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${
  import.meta.env.VITE_API_KEY
}`;
