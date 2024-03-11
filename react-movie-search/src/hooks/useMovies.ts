import React from "react";
import withResults from "../withResults.json";
import withoutResults from "../withoutResults.json";


export const useMovies = ({ search }) => {
  console.log(search)
  const [responseMovies, setResponseMovies] = React.useState([])

  const movies = responseMovies.Search;
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    image: movie.Poster,
  }));
  const getMovies = () => {
    if (search) {
      setResponseMovies(withResults)
    } else {
      setResponseMovies(withoutResults)
    }
  }
  return { movies: mappedMovies, getMovies };
};


